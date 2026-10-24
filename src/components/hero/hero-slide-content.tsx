import Link from "next/link";
import type { HeroSlide } from "../../types/hero";

interface HeroSlideContentProps {
  readonly slide: HeroSlide;
}

export function HeroSlideContent({ slide }: HeroSlideContentProps) {
  return (
    <div className="animate-hero-content flex flex-col justify-center">
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-brand">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {slide.pillarLabel}
        </span>
        <span className="text-xs font-medium text-muted">
          {slide.tagline}
        </span>
      </div>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.12]">
        <span>{slide.headlinePrefix} </span>
        <span className="relative inline-block text-brand-deep">
          {slide.headlineHighlight}
          <svg
            aria-hidden="true"
            className="absolute -bottom-1.5 left-0 h-3 w-full text-accent"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 200 12"
          >
            <path
              d="M3 9C55 2 145 2 197 8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </span>
        <span className="block mt-1 sm:inline sm:mt-0"> {slide.headlineSuffix}</span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
        {slide.description}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold leading-none text-on-brand shadow-sm transition-all duration-200 hover:bg-brand-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand [&_svg]:shrink-0"
          href={slide.primaryCta.href}
        >
          {slide.primaryCta.label}
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h14M12 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold leading-none text-foreground transition-all duration-200 hover:border-brand-accent hover:bg-brand-soft hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          href={slide.secondaryCta.href}
        >
          {slide.secondaryCta.label}
        </Link>

        <div className="ml-auto hidden xl:flex items-center gap-2 rounded-2xl border border-border bg-brand-soft/60 px-4 py-2">
          <span className="text-base font-bold text-brand-deep">
            {slide.stat.value}
          </span>
          <span className="text-xs font-medium text-muted">
            {slide.stat.label}
          </span>
        </div>
      </div>
    </div>
  );
}
