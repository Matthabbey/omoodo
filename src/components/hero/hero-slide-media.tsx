import Image from "next/image";
import type { HeroSlide } from "../../types/hero";

interface HeroSlideMediaProps {
  readonly currentSlide: HeroSlide;
  readonly previousSlide?: HeroSlide | null;
  readonly isTransitioning: boolean;
}

export function HeroSlideMedia({
  currentSlide,
  previousSlide,
  isTransitioning,
}: HeroSlideMediaProps) {
  return (
    <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto overflow-hidden rounded-3xl border border-border bg-surface shadow-lg lg:aspect-[4/3]">
      {/* Exiting Slide with Zoom Out Effect */}
      {isTransitioning && previousSlide && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 animate-hero-zoom-out overflow-hidden"
          key={`prev-${previousSlide.id}`}
        >
          <Image
            alt={previousSlide.imageAlt}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={previousSlide.imageSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
        </div>
      )}

      {/* Entering Slide with Zoom Intro Effect */}
      <div
        className="absolute inset-0 z-10 animate-hero-zoom-in overflow-hidden"
        key={`curr-${currentSlide.id}`}
      >
        <Image
          alt={currentSlide.imageAlt}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={currentSlide.imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-deep/10 to-transparent" />

        {/* Floating Trust Verification Badge */}
        <div className="absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-3 rounded-2xl border border-surface/30 bg-surface/90 px-4 py-3 shadow-md backdrop-blur-md">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-on-brand">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs font-bold tracking-tight text-foreground">
              {currentSlide.badge}
            </p>
            <p className="text-[11px] font-medium text-muted">
              {currentSlide.badgeSubtext}
            </p>
          </div>
        </div>

        {/* Subtle Pillar Tag in Top Right */}
        <div className="absolute top-4 right-4 hidden sm:inline-flex rounded-full bg-deep/75 px-3 py-1 text-xs font-semibold text-on-brand backdrop-blur-sm">
          {currentSlide.pillarLabel}
        </div>
      </div>
    </div>
  );
}
