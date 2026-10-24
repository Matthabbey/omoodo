import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { OmoodoSlideData } from "../../types/hero-slider";

interface HeroSlideItemProps {
  readonly slide: OmoodoSlideData;
  readonly isActive: boolean;
  readonly isFirst: boolean;
}

export function HeroSlideItem({
  slide,
  isActive,
  isFirst,
}: HeroSlideItemProps) {
  return (
    <div
      aria-hidden={!isActive}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive
          ? "opacity-100 z-10 pointer-events-auto"
          : "opacity-0 z-0 pointer-events-none"
        }`}
    >
      {/* Background Image with Ken Burns Subtle Zooming */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          alt={slide.imageAlt}
          className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${isActive ? "scale-105" : "scale-100"
            }`}
          fill
          priority={isFirst}
          sizes="100vw"
          src={slide.imageSrc}
        />
      </div>

      {/* Multi-layered Contrast Overlays for Visual Clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/75 to-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-transparent to-deep/40" />

      {/* Slide Content Arena with safe padding so chevrons never overlap */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-14 py-6 pb-16 sm:px-20 sm:py-8 lg:px-24 lg:py-10">
        <div className="max-w-2xl text-left">
          {/* Category Pill / Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand/25 px-3 py-0.5 sm:px-3.5 sm:py-1 backdrop-blur-md transition-all duration-700 delay-100 ${isActive ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
          >
            {slide.categoryIcon}
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-brand-soft">
              {slide.category}
            </span>
          </div>

          {/* Accent Indicator Line (expands when active) */}
          <div
            className={`my-2.5 h-1 w-20 rounded-full bg-gradient-to-r from-brand via-brand-accent to-accent transition-all duration-700 delay-200 ${isActive ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
          />

          {/* Main Headline with Gradient Accent */}
          <h2
            className={`text-2xl font-bold leading-[1.16] tracking-[-0.03em] text-white sm:text-3xl lg:text-[36px] transition-all duration-700 delay-200 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            {slide.headline}{" "}
            <span className="bg-gradient-to-r from-brand-accent via-accent-soft to-accent bg-clip-text text-transparent">
              {slide.highlightText}
            </span>
          </h2>

          {/* Description Paragraph */}
          <p
            className={`mt-2.5 max-w-xl text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-200/95 transition-all duration-700 delay-300 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div
            className={`mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center transition-all duration-700 delay-400 ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
          >
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-semibold leading-none text-on-brand shadow-sm transition-all duration-300 hover:bg-brand-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-sm [&_svg]:shrink-0"
              href={slide.primaryBtnHref}
            >
              <span>{slide.primaryBtnText}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-5 py-2 text-xs font-semibold leading-none text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm"
              href={slide.secondaryBtnHref}
            >
              {slide.secondaryBtnText}
            </Link>
          </div>

          {/* Slide Stat / Security Badge */}
          <div
            className={`mt-4 flex items-center gap-2 text-xs font-medium text-slate-300 transition-all duration-700 delay-500 ${isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
            <span>{slide.badge}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
