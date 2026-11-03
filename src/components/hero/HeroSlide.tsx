import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HERO_SLIDE_DEFAULT_FOCAL } from "../../constants/hero-slides";
import { cn } from "../../lib/utils";
import type { HeroSlide as HeroSlideData } from "../../types/hero-slides";
import { buttonVariants } from "../ui";

interface HeroSlideProps {
  readonly slide: HeroSlideData;
  readonly index: number;
  readonly total: number;
  readonly active: boolean;
}

export function HeroSlide({ slide, index, total, active }: HeroSlideProps) {
  return (
    <div
      aria-hidden={!active}
      aria-label={`${index + 1} of ${total}`}
      aria-roledescription="slide"
      className="relative isolate flex h-full w-full shrink-0 items-center"
      id={`hero-slide-${slide.id}`}
      inert={!active}
      role="group"
    >
      <Image
        alt={slide.image.alt}
        className={cn("object-cover", slide.focal ?? HERO_SLIDE_DEFAULT_FOCAL)}
        fill
        loading={index === 0 ? undefined : "eager"}
        priority={index === 0}
        sizes="100vw"
        src={slide.image.src}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/55 to-deep/15" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-deep/95 via-deep/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-44 sm:pt-20 lg:px-8">
        <div className={cn("max-w-2xl text-on-brand", active && "animate-hero-content")}>
          <p className="text-sm font-semibold text-accent sm:text-base">{slide.eyebrow}</p>
          <h2 className="mt-3 text-[2rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {slide.headline}
            {slide.emphasis ? (
              <>
                {" "}
                <span className="relative inline-block whitespace-nowrap text-accent">
                  <span className="relative z-10">{slide.emphasis}</span>
                  <span aria-hidden="true" className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-accent/30 lg:h-3" />
                </span>
              </>
            ) : null}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/85 sm:text-lg">{slide.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link className={cn(buttonVariants({ variant: "accent", size: "lg" }), "font-bold")} href={slide.primaryCta.href}>
              {slide.primaryCta.label}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "font-bold")} href={slide.secondaryCta.href}>
              {slide.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
