"use client";

import { HERO_SLIDE_INTERVAL_MS } from "../../constants/hero-slides";
import { cn } from "../../lib/utils";
import type { HeroSlide } from "../../types/hero-slides";

interface HeroSlideTabsProps {
  readonly slides: readonly HeroSlide[];
  readonly activeIndex: number;
  readonly paused: boolean;
  readonly onSelect: (index: number) => void;
}

/** Labelled tabs from `sm` up; compact dots on phones, where the tab row would collide with the copy. */
export function HeroSlideTabs({ slides, activeIndex, paused, onSelect }: HeroSlideTabsProps) {
  return (
    <>
      <div aria-label="Choose a highlight" className="flex justify-center gap-2 sm:hidden" role="tablist">
        {slides.map((slide, index) => {
          const active = index === activeIndex;
          return (
            <button
              aria-controls={`hero-slide-${slide.id}`}
              aria-label={slide.tab.title}
              aria-selected={active}
              className={cn(
                "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep",
                active ? "w-7 bg-accent" : "w-2 bg-white/40 hover:bg-white/70",
              )}
              key={slide.id}
              onClick={() => onSelect(index)}
              role="tab"
              tabIndex={active ? 0 : -1}
              type="button"
            />
          );
        })}
      </div>

      <div
        aria-label="Choose a highlight"
        className="-mx-6 hidden gap-6 overflow-x-auto px-6 pb-1 sm:flex lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-8 lg:overflow-visible lg:px-0"
        role="tablist"
      >
        {slides.map((slide, index) => {
          const active = index === activeIndex;
          return (
            <button
              aria-controls={`hero-slide-${slide.id}`}
              aria-selected={active}
              className={cn(
                "group relative flex min-w-[11rem] shrink-0 flex-col justify-end border-b border-white/25 pb-3 text-left transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep lg:min-w-0",
                active ? "text-on-brand" : "text-white/55 hover:text-white/90",
              )}
              id={`hero-tab-${slide.id}`}
              key={slide.id}
              onClick={() => onSelect(index)}
              role="tab"
              tabIndex={active ? 0 : -1}
              type="button"
            >
              <span className="block whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em]">{slide.tab.kicker}</span>
              <span className="mt-1 block text-base font-bold leading-tight sm:text-lg">{slide.tab.title}</span>
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-0.5 overflow-hidden bg-white/15">
                <span
                  className={cn(
                    "block h-full origin-left bg-accent",
                    active ? "animate-hero-tab-progress" : "scale-x-0",
                    paused && "[animation-play-state:paused]",
                  )}
                  style={{ animationDuration: `${HERO_SLIDE_INTERVAL_MS}ms` }}
                />
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
