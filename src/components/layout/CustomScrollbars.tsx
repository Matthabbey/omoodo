"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollTarget {
  readonly element: HTMLElement;
  readonly controlId: string;
  readonly key: number;
}

interface DragState {
  readonly element: HTMLElement;
  readonly startY: number;
  readonly startScrollTop: number;
}

function isScrollable(element: HTMLElement): boolean {
  if (element.clientHeight === 0 || element.scrollHeight <= element.clientHeight + 1) return false;
  const overflow = window.getComputedStyle(element).overflowY;
  return overflow === "auto" || overflow === "scroll" || overflow === "overlay";
}

export function CustomScrollbars() {
  const [targets, setTargets] = useState<readonly ScrollTarget[]>([]);
  const [, setScrollVersion] = useState(0);
  const dragRef = useRef<DragState | null>(null);
  const targetListRef = useRef<readonly ScrollTarget[]>([]);
  const nextKeyRef = useRef(0);

  useEffect(() => {
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    const observedElements = new Set<Element>();

    function refreshTargets() {
      const elements = new Set<HTMLElement>();
      const pageScroller = document.scrollingElement;
      if (pageScroller instanceof HTMLElement &&
        pageScroller.scrollHeight > pageScroller.clientHeight + 1) {
        elements.add(pageScroller);
      }

      for (const element of document.body.querySelectorAll<HTMLElement>("*")) {
        if (element.closest("[data-custom-scrollbars]")) continue;
        if (isScrollable(element)) elements.add(element);
      }

      const previous = targetListRef.current;
      const next = Array.from(elements, (element) => {
        const existing = previous.find((target) => target.element === element);
        if (existing) return existing;
        nextKeyRef.current += 1;
        const key = nextKeyRef.current;
        const controlId = element.id || `omoodo-scroll-target-${key}`;
        if (!element.id) element.id = controlId;
        return { element, controlId, key };
      });

      if (resizeObserver) {
        const desiredElements = new Set<Element>([
          document.documentElement,
          document.body,
          ...next.map((target) => target.element),
        ]);
        for (const element of observedElements) {
          if (!desiredElements.has(element)) {
            resizeObserver.unobserve(element);
            observedElements.delete(element);
          }
        }
        for (const element of desiredElements) {
          if (!observedElements.has(element)) {
            resizeObserver.observe(element);
            observedElements.add(element);
          }
        }
      }

      if (previous.length === next.length &&
        previous.every((target, index) => target.element === next[index]?.element)) return;

      targetListRef.current = next;
      setTargets(next);
    }

    function schedulePositionUpdate() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => setScrollVersion((version) => version + 1));
    }

    function handleMutations() {
      refreshTargets();
      schedulePositionUpdate();
    }

    resizeObserver = new ResizeObserver(() => {
      refreshTargets();
      schedulePositionUpdate();
    });
    refreshTargets();
    const observer = new MutationObserver(handleMutations);
    document.addEventListener("scroll", schedulePositionUpdate, true);
    window.addEventListener("resize", schedulePositionUpdate);
    window.addEventListener("resize", refreshTargets);
    window.addEventListener("load", handleMutations);
    window.addEventListener("orientationchange", handleMutations);
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      resizeObserver?.disconnect();
      document.removeEventListener("scroll", schedulePositionUpdate, true);
      window.removeEventListener("resize", schedulePositionUpdate);
      window.removeEventListener("resize", refreshTargets);
      window.removeEventListener("load", handleMutations);
      window.removeEventListener("orientationchange", handleMutations);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div data-custom-scrollbars="" className="pointer-events-none fixed inset-0 z-[100]">
      {targets.map(({ element, controlId, key }) => {
        const isPage = element === document.scrollingElement;
        const bounds = element.getBoundingClientRect();
        const trackTop = isPage ? 0 : bounds.top;
        const trackHeight = isPage ? window.innerHeight : element.clientHeight;
        const thumbHeight = Math.min(20, trackHeight);
        const scrollRange = element.scrollHeight - element.clientHeight;
        const travelRange = Math.max(0, trackHeight - thumbHeight);
        const thumbTop = trackTop + (scrollRange > 0
          ? (element.scrollTop / scrollRange) * travelRange
          : 0);
        const trackRight = isPage ? window.innerWidth : bounds.right;
        const value = scrollRange > 0
          ? Math.round((element.scrollTop / scrollRange) * 100)
          : 0;

        return (
          <div
            aria-label={isPage ? "Page scrollbar" : "Content scrollbar"}
            aria-controls={controlId}
            aria-orientation="vertical"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={value}
            className="custom-scrollbar-track pointer-events-auto fixed w-2 rounded-full"
            key={key}
            onKeyDown={(event) => {
              const movements: Record<string, number> = {
                ArrowDown: 40,
                ArrowUp: -40,
                PageDown: element.clientHeight,
                PageUp: -element.clientHeight,
              };
              if (event.key === "Home") element.scrollTop = 0;
              else if (event.key === "End") element.scrollTop = scrollRange;
              else if (movements[event.key] !== undefined) {
                element.scrollTop += movements[event.key] ?? 0;
              } else return;
              event.preventDefault();
            }}
            onPointerDown={(event) => {
              if (event.target !== event.currentTarget) return;
              const position = event.clientY - trackTop - thumbHeight / 2;
              element.scrollTop = travelRange > 0
                ? Math.max(0, Math.min(scrollRange, (position / travelRange) * scrollRange))
                : 0;
            }}
            role="scrollbar"
            style={{
              left: Math.max(0, trackRight - 8),
              top: trackTop,
              height: trackHeight,
            }}
            tabIndex={0}
          >
            <div
              className="custom-scrollbar-thumb absolute left-px w-1.5 touch-none rounded-full"
              onPointerDown={(event) => {
                event.stopPropagation();
                dragRef.current = {
                  element,
                  startY: event.clientY,
                  startScrollTop: element.scrollTop,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                const drag = dragRef.current;
                if (!drag || drag.element !== element || travelRange <= 0) return;
                const delta = event.clientY - drag.startY;
                element.scrollTop = drag.startScrollTop + (delta / travelRange) * scrollRange;
              }}
              onPointerUp={() => {
                dragRef.current = null;
              }}
              onPointerCancel={() => {
                dragRef.current = null;
              }}
              style={{ height: thumbHeight, top: thumbTop - trackTop }}
            />
          </div>
        );
      })}
    </div>
  );
}
