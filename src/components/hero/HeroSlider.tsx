"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import {
  HERO_SLIDE_INTERVAL_MS,
  HERO_SLIDE_SWIPE_THRESHOLD_PX,
  HERO_SLIDER_LABEL,
  HERO_SLIDES,
} from "../../constants/hero-slides";
import { Button } from "../ui";
import { HeroSlide } from "./HeroSlide";
import { HeroSlideTabs } from "./HeroSlideTabs";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const total = HERO_SLIDES.length;
  const paused = !playing;
  const current = HERO_SLIDES[index];

  const goTo = useCallback((next: number) => setIndex(((next % total) + total) % total), [total]);

  // Auto-advance; a manual change restarts the timer because `index` is a dependency.
  useEffect(() => {
    if (paused) return;
    const timer = window.setTimeout(() => goTo(index + 1), HERO_SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [paused, index, goTo]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) return;
    const delta = start - end;
    if (delta > HERO_SLIDE_SWIPE_THRESHOLD_PX) goTo(index + 1);
    else if (delta < -HERO_SLIDE_SWIPE_THRESHOLD_PX) goTo(index - 1);
  }

  return (
    <div
      aria-label={HERO_SLIDER_LABEL}
      aria-roledescription="carousel"
      className="relative isolate h-[calc(100svh-5rem)] min-h-[32rem] overflow-hidden bg-deep text-on-brand sm:min-h-[36rem]"
      onKeyDown={onKeyDown}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
      role="region"
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, slideIndex) => (
          <HeroSlide active={slideIndex === index} index={slideIndex} key={slide.id} slide={slide} total={total} />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pb-6 sm:px-6 lg:flex-row lg:items-end lg:px-8 lg:pb-8">
          <div className="min-w-0 flex-1">
            <HeroSlideTabs activeIndex={index} onSelect={goTo} paused={paused} slides={HERO_SLIDES} />
          </div>
          <div className="hidden shrink-0 items-center gap-2 pb-3 lg:flex">
            <Button aria-label="Previous highlight" onClick={() => goTo(index - 1)} size="icon" type="button" variant="secondary">
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </Button>
            <Button
              aria-label={playing ? "Pause highlights" : "Play highlights"}
              aria-pressed={!playing}
              onClick={() => setPlaying((value) => !value)}
              size="icon"
              type="button"
              variant="secondary"
            >
              {playing ? <Pause aria-hidden="true" className="h-4 w-4" /> : <Play aria-hidden="true" className="h-4 w-4" />}
            </Button>
            <Button aria-label="Next highlight" onClick={() => goTo(index + 1)} size="icon" type="button" variant="secondary">
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {current ? `Highlight ${index + 1} of ${total}: ${current.tab.title}` : null}
      </p>
    </div>
  );
}
