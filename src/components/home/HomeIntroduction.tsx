import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import {
  HOME_INTRO_HEADLINE_EMPHASIS,
  HOME_INTRO_HEADLINE_LEAD,
  HOME_INTRO_HEADLINE_TAIL,
  HOME_INTRO_PRIMARY_CTA,
  HOME_INTRO_SECONDARY_CTA,
} from "../../constants/home";
import { HOME_INTRO_BADGE } from "../../constants/home-copy";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { ABOUT_SECTION_ID } from "../../constants/navigation";
import { cn } from "../../lib/utils";
import { Badge, buttonVariants } from "../ui";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { HomeAudienceCarousel } from "./HomeAudienceCarousel";
import { HomePurposeCards } from "./HomePurposeCards";
import { ScrollReveal } from "./ScrollReveal";

export function HomeIntroduction() {
  return (
    <section className="relative isolate scroll-mt-20 overflow-hidden border-t border-border bg-surface py-20 sm:py-28" id={ABOUT_SECTION_ID}>
      <CulturalWatermarks designs={HOME_WATERMARK_ART} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal className="relative max-w-3xl" effect="skew-left">
            <Badge variant="soft">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand-accent motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-brand" />
              </span>
              {HOME_INTRO_BADGE}
            </Badge>
            <h2 className="relative mt-5 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl">
              {HOME_INTRO_HEADLINE_LEAD}{" "}
              <span className="relative inline-block whitespace-nowrap text-brand">
                <span className="relative z-10">{HOME_INTRO_HEADLINE_EMPHASIS}</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0.5 h-2 rounded-full bg-accent/90 sm:bottom-1 sm:h-2.5" />
              </span>{" "}
              {HOME_INTRO_HEADLINE_TAIL}
            </h2>
            <div className="relative mt-8">
              <Link className={cn(buttonVariants({ variant: "brand", size: "lg" }), "font-bold")} href={HOME_INTRO_PRIMARY_CTA.href}>
                {HOME_INTRO_PRIMARY_CTA.label}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal className="lg:shrink-0 lg:pb-3" effect="rise">
            <Link className="inline-flex items-center gap-1 font-semibold text-brand transition-colors hover:text-brand-deep" href={HOME_INTRO_SECONDARY_CTA.href}>
              {HOME_INTRO_SECONDARY_CTA.label}
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
        <ScrollReveal className="mt-12" effect="rise">
          <HomeAudienceCarousel />
        </ScrollReveal>
        <HomePurposeCards />
      </div>
    </section>
  );
}
