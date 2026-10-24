"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import {
  OMOODO_SLIDES,
  SLIDER_AUTOPLAY_INTERVAL_MS,
} from "../../constants/omoodo-hero-slides";
import { HeroSlideItem } from "./HeroSlideItem";

export function HeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const touchStartXRef = React.useRef<number | null>(null);

  const totalSlides = OMOODO_SLIDES.length;

  const goToNextSlide = React.useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToPrevSlide = React.useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  // Timer & dynamic progress bar
  React.useEffect(() => {
    if (isPaused) return;

    const tickInterval = 50;
    const step = (tickInterval / SLIDER_AUTOPLAY_INTERVAL_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + step;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isPaused, goToNextSlide]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevSlide();
      } else if (e.key === "ArrowRight") {
        goToNextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      goToNextSlide();
    } else if (diff < -50) {
      goToPrevSlide();
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      aria-label="Omoodo Services Carousel"
      className="relative flex min-h-0 w-full flex-1 overflow-hidden select-none bg-deep"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
    >
      {/* Slides Container */}
      <div className="relative min-h-[440px] w-full flex-1 sm:min-h-[480px] lg:min-h-[560px] [@media(max-height:800px)]:lg:min-h-[460px]">
        {OMOODO_SLIDES.map((slide, index) => (
          <HeroSlideItem
            isActive={index === currentSlideIndex}
            isFirst={index === 0}
            key={slide.id}
            slide={slide}
          />
        ))}
      </div>

      {/* Prominent Navigation Chevrons at Screen Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-3 sm:px-6 lg:px-8">
        <button
          aria-label="Previous slide"
          className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/35 bg-deep/80 text-white backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-110 hover:border-white hover:bg-brand active:scale-95"
          onClick={goToPrevSlide}
          type="button"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          aria-label="Next slide"
          className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/35 bg-deep/80 text-white backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-110 hover:border-white hover:bg-brand active:scale-95"
          onClick={goToNextSlide}
          type="button"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Bottom Pagination Bar & Controls */}
      <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-3 sm:bottom-14">
        {/* Play / Pause Toggle Button */}
        <button
          aria-label={isPaused ? "Resume auto-rotation" : "Pause auto-rotation"}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-deep/70 text-slate-200 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          onClick={() => setIsPaused((prev) => !prev)}
          type="button"
        >
          {isPaused ? (
            <Play className="h-3 w-3 fill-current ml-0.5" />
          ) : (
            <Pause className="h-3 w-3 fill-current" />
          )}
        </button>

        {/* Dynamic Progress Dots */}
        <div className="flex items-center gap-2">
          {OMOODO_SLIDES.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <button
                aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                className="group relative flex items-center py-2 focus:outline-none"
                key={slide.id}
                onClick={() => goToSlide(index)}
                type="button"
              >
                {isActive ? (
                  <div className="relative h-2 w-10 sm:w-14 overflow-hidden rounded-full bg-white/25 ring-2 ring-brand-accent/60 transition-all duration-300">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-accent to-accent transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                ) : (
                  <div className="h-2 w-2 rounded-full bg-white/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-white/80" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
