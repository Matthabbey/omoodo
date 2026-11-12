"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Scroll state for a horizontal card rail: whether it can move either way, and stepping one card at a time. */
export function useScrollRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateBounds = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanScrollPrev(rail.scrollLeft > 1);
    setCanScrollNext(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateBounds();
    const rail = railRef.current;
    if (!rail) return;
    const observer = new ResizeObserver(updateBounds);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [updateBounds]);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const rail = railRef.current;
    const firstCard = rail?.firstElementChild;
    if (!rail || !(firstCard instanceof HTMLElement)) return;
    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 0;
    rail.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: "smooth" });
  }, []);

  return { railRef, canScrollPrev, canScrollNext, updateBounds, scrollByCard };
}
