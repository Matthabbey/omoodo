"use client";

import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_PRICING_OPTIONS } from "../../constants/home";
import { HOME_PRICING_FLING_MS } from "../../constants/home-copy";
import { HERO_SLIDE_SWIPE_THRESHOLD_PX } from "../../constants/hero-slides";
import { cn } from "../../lib/utils";
import { Button } from "../ui";
import { HomePricingCard } from "./HomePricingCard";

type Direction = 1 | -1;

interface LeavingCard {
  readonly index: number;
  readonly direction: Direction;
  readonly token: number;
}

export function HomePricingCarousel() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<LeavingCard | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = HOME_PRICING_OPTIONS.length;
  const option = HOME_PRICING_OPTIONS[index];
  const leavingOption = leaving ? HOME_PRICING_OPTIONS[leaving.index] : undefined;

  function goTo(next: number, direction: Direction) {
    const target = ((next % total) + total) % total;
    if (target === index) return;
    setLeaving({ index, direction, token: Date.now() });
    setIndex(target);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") goTo(index + 1, 1);
    if (event.key === "ArrowLeft") goTo(index - 1, -1);
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start === null || end === undefined) return;
    const delta = start - end;
    if (delta > HERO_SLIDE_SWIPE_THRESHOLD_PX) goTo(index + 1, 1);
    else if (delta < -HERO_SLIDE_SWIPE_THRESHOLD_PX) goTo(index - 1, -1);
  }

  if (!option) return null;

  return (
    <div
      aria-label="Pricing models"
      aria-roledescription="carousel"
      className="relative mx-auto mt-16 max-w-4xl px-4 sm:px-16 lg:mt-20"
      onKeyDown={onKeyDown}
      onTouchEnd={onTouchEnd}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      role="region"
    >
      <div className="relative">
        {/* Stacked sheets behind the deck. */}
        <span aria-hidden="true" className="absolute inset-x-4 -bottom-3 h-full rounded-2xl bg-surface/70" />
        <span aria-hidden="true" className="absolute inset-x-8 -bottom-6 h-full rounded-2xl bg-surface/40" />

        {/* The next card is already in place underneath; the old one is flung off the top of the deck. */}
        <HomePricingCard ariaLabel={`${index + 1} of ${total}`} description={option.description} number={index + 1} title={option.title} />
        {leaving && leavingOption ? (
          <HomePricingCard
            ariaHidden
            className={cn("absolute inset-0 z-10", leaving.direction === 1 ? "animate-card-fling-right" : "animate-card-fling-left")}
            description={leavingOption.description}
            key={leaving.token}
            number={leaving.index + 1}
            onAnimationEnd={() => setLeaving(null)}
            style={{ animationDuration: `${HOME_PRICING_FLING_MS}ms` }}
            title={leavingOption.title}
          />
        ) : null}
      </div>

      <div className="mt-12 flex items-center justify-center gap-4 sm:mt-0">
        <Button aria-label="Previous pricing model" className="sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2" onClick={() => goTo(index - 1, -1)} size="icon" type="button" variant="secondary">
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </Button>
        <Button aria-label="Next pricing model" className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2" onClick={() => goTo(index + 1, 1)} size="icon" type="button" variant="secondary">
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </Button>
      </div>

      <div aria-label="Choose a pricing model" className="mt-8 flex justify-center gap-2 sm:mt-12" role="tablist">
        {HOME_PRICING_OPTIONS.map((item, dotIndex) => (
          <button
            aria-label={item.title}
            aria-selected={dotIndex === index}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep",
              dotIndex === index ? "bg-accent" : "bg-white/35 hover:bg-white/60",
            )}
            key={item.title}
            onClick={() => goTo(dotIndex, dotIndex > index ? 1 : -1)}
            role="tab"
            type="button"
          />
        ))}
      </div>
      <p aria-live="polite" className="sr-only">{`Pricing model ${index + 1} of ${total}: ${option.title}`}</p>
    </div>
  );
}
