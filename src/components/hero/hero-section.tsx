"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  HERO_AUTOPLAY_DURATION_MS,
  HERO_SLIDES,
  PILLAR_TABS,
  QUICK_REQUEST_LOCATIONS,
} from "../../constants/hero-slides";
import type { HeroPillarId, HeroSlide } from "../../types/hero";
import { HeroControls } from "./hero-controls";
import { HeroPillarTabs } from "./hero-pillar-tabs";
import { HeroQuickRequest } from "./hero-quick-request";
import { HeroSlideContent } from "./hero-slide-content";
import { HeroSlideMedia } from "./hero-slide-media";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previousSlide, setPreviousSlide] = useState<HeroSlide | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const transitionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef<number>(0);

  const currentSlide = HERO_SLIDES[currentIndex];
  const totalSlides = HERO_SLIDES.length;

  const goToIndex = useCallback(
    (nextIndex: number) => {
      if (nextIndex === currentIndex) return;
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
      setPreviousSlide(HERO_SLIDES[currentIndex]);
      setIsTransitioning(true);
      setCurrentIndex(nextIndex);

      transitionTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, 850);
    },
    [currentIndex]
  );

  const handleNext = useCallback(() => {
    goToIndex((currentIndex + 1) % totalSlides);
  }, [currentIndex, goToIndex, totalSlides]);

  const handlePrevious = useCallback(() => {
    goToIndex((currentIndex - 1 + totalSlides) % totalSlides);
  }, [currentIndex, goToIndex, totalSlides]);

  const handleSelectPillar = useCallback(
    (pillarId: HeroPillarId) => {
      const targetIndex = HERO_SLIDES.findIndex((s) => s.id === pillarId);
      if (targetIndex !== -1) {
        goToIndex(targetIndex);
      }
    },
    [goToIndex]
  );

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered) return;
    const interval = setInterval(handleNext, HERO_AUTOPLAY_DURATION_MS);
    return () => clearInterval(interval);
  }, [isPlaying, isHovered, handleNext]);

  // Clean transition timer
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrevious();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrevious();
    }
  };

  return (
    <section
      aria-label="Omoodo Services Showcase"
      aria-roledescription="carousel"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16 lg:pb-24 outline-none"
      id="home"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchEnd={handleTouchEnd}
      onTouchStart={handleTouchStart}
      tabIndex={0}
    >
      {/* Top Pillar Selector Bar */}
      <div className="mb-8 flex justify-center lg:justify-start">
        <HeroPillarTabs
          activeId={currentSlide.id}
          onSelect={handleSelectPillar}
          tabs={PILLAR_TABS}
        />
      </div>

      {/* Main Two-Column Slide Arena */}
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Narrative Content */}
        <div className="flex flex-col">
          <HeroSlideContent key={currentSlide.id} slide={currentSlide} />
          <HeroQuickRequest
            currentPillar={currentSlide.id}
            locations={QUICK_REQUEST_LOCATIONS}
            onSelectPillar={handleSelectPillar}
          />
        </div>

        {/* Right Media Frame with Intro/Exit Zooming */}
        <div>
          <HeroSlideMedia
            currentSlide={currentSlide}
            isTransitioning={isTransitioning}
            previousSlide={previousSlide}
          />
        </div>
      </div>

      {/* Bottom Controls Bar: < 01 / 05 > */}
      <div className="mt-10">
        <HeroControls
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onSelectIndex={goToIndex}
          onTogglePlay={() => setIsPlaying((p) => !p)}
          totalSlides={totalSlides}
        />
      </div>
    </section>
  );
}
