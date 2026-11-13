import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADLINE_LEAD,
  HERO_HEADLINE_TAIL,
  HERO_HEADLINE_UNDERLINED,
  HERO_IMAGE,
  HERO_IMAGE_ASPECT,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
} from "../../constants/hero-home";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui";

const HERO_HEADING_ID = "home-hero-heading";

/**
 * Fixed hero: the transparent team graphic on a pale maroon surface, with the
 * promise in a row beneath it on the same surface. The hero fills the screen below the header at
 * every size: from `xl` the graphic scales to fit the space above the promise, uncropped; below
 * `xl` it keeps its own aspect ratio, centred in any spare height, and the hero may grow taller.
 */
export function HomeHero() {
  return (
    <section
      aria-labelledby={HERO_HEADING_ID}
      className="relative isolate flex flex-col overflow-hidden bg-brand-soft text-foreground min-h-[calc(100svh-5rem)] xl:h-[calc(100svh-5rem)] xl:min-h-[36rem]"
    >
      <div className={cn("relative w-full shrink-0 grow xl:aspect-auto xl:min-h-0 xl:flex-1", HERO_IMAGE_ASPECT)}>
        <Image alt={HERO_IMAGE.alt} className="object-contain object-center xl:object-bottom" fill priority sizes="100vw" src={HERO_IMAGE.src} />
      </div>

      <div>
        <div className="animate-hero-content mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 pb-24 pt-3 sm:px-6 lg:flex-row lg:pb-10 lg:items-center lg:justify-between lg:px-8 lg:pr-52 xl:pb-12 xl:pt-2">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent-deep sm:text-sm">{HERO_EYEBROW}</p>
            <h1 className="mt-1 text-2xl font-bold leading-[1.1] tracking-tight sm:text-3xl xl:text-4xl" id={HERO_HEADING_ID}>
              {HERO_HEADLINE_LEAD} {HERO_HEADLINE_TAIL}{" "}
              <span className="relative inline-block whitespace-nowrap text-brand">
                <span className="relative z-10">{HERO_HEADLINE_UNDERLINED}</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0.5 h-1.5 rounded-full bg-accent/90" />
              </span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted sm:text-base">{HERO_DESCRIPTION}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-bold")} href={HERO_PRIMARY_CTA.href}>
              {HERO_PRIMARY_CTA.label}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-bold")} href={HERO_SECONDARY_CTA.href}>
              {HERO_SECONDARY_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
