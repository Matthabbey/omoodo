import { Suspense } from "react";
import { CONTACT_PAGE_COPY } from "../../constants/contact";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_EXPERIENCE_COPY, HOME_EXPERIENCE_TITLE_EMPHASIS } from "../../constants/home-copy";
import { ContactRequestForm } from "../contact/ContactRequestForm";
import { Badge } from "../ui";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { SatisfactionShowcase } from "./SatisfactionShowcase";
import { ScrollReveal } from "./ScrollReveal";

/** Chapter 06: the proof image beside the request form, so the ask sits next to the evidence. */
export function HomeExperienceSection() {
  return (
    <section
      className="relative isolate overflow-hidden border-t border-border bg-gradient-to-b from-surface/50 via-background to-surface/80 py-20 sm:py-28"
      id="experience"
    >
      <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} visibility="subtle" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl" effect="rise">
          <Badge variant="accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
            {HOME_EXPERIENCE_COPY.eyebrow}
          </Badge>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {HOME_EXPERIENCE_COPY.title}{" "}
            <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
              {HOME_EXPERIENCE_TITLE_EMPHASIS}
            </span>
            .
          </h2>
          <p className="mt-4 text-base leading-7 text-muted">{HOME_EXPERIENCE_COPY.description}</p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
          <ScrollReveal effect="skew-left">
            <section
              aria-label={CONTACT_PAGE_COPY.formTitle}
              className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-8"
            >
              <Suspense fallback={<div aria-label="Loading request form" className="h-96 animate-pulse rounded-2xl bg-brand-soft" />}>
                <ContactRequestForm titleAs="h3" />
              </Suspense>
            </section>
          </ScrollReveal>
          <ScrollReveal className="lg:sticky lg:top-24" delay={2} effect="skew-right">
            <SatisfactionShowcase />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
