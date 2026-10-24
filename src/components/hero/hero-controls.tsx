"use client";

interface HeroControlsProps {
  readonly currentIndex: number;
  readonly totalSlides: number;
  readonly isPlaying: boolean;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
  readonly onTogglePlay: () => void;
  readonly onSelectIndex: (index: number) => void;
}

export function HeroControls({
  currentIndex,
  totalSlides,
  isPlaying,
  onPrevious,
  onNext,
  onTogglePlay,
  onSelectIndex,
}: HeroControlsProps) {
  const currentFormatted = String(currentIndex + 1).padStart(2, "0");
  const totalFormatted = String(totalSlides).padStart(2, "0");

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/60">
      {/* Slide Navigation Pill: < 01 / 05 > */}
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1.5 shadow-xs">
        <button
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-brand-soft hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-brand"
          onClick={onPrevious}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <span className="px-2 text-xs font-semibold tabular-nums text-foreground">
          {currentFormatted} <span className="text-muted/60">/</span> {totalFormatted}
        </span>

        <button
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-brand-soft hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-brand"
          onClick={onNext}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Slide Dots and Play/Pause */}
      <div className="flex items-center gap-3">
        <div
          aria-label="Slide indicators"
          className="flex items-center gap-1.5"
          role="tablist"
        >
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                aria-label={`Jump to slide ${index + 1}`}
                aria-selected={isSelected}
                className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brand ${
                  isSelected
                    ? "w-7 bg-brand"
                    : "w-2 bg-border hover:bg-brand-accent/60"
                }`}
                key={index}
                onClick={() => onSelectIndex(index)}
                role="tab"
                type="button"
              />
            );
          })}
        </div>

        <button
          aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
          onClick={onTogglePlay}
          title={isPlaying ? "Pause autoplay" : "Start autoplay"}
          type="button"
        >
          {isPlaying ? (
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
