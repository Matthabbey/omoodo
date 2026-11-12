import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SIMPLE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_SCENARIO_TAG, HOME_SCENARIOS, HOME_SCENARIOS_COPY } from "../../constants/home-scenarios";
import { HeroIcon } from "../hero/HeroIcon";
import { Badge } from "../ui";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";

const SCENARIOS_HEADING_ID = "home-scenarios-heading";

/** Three labelled examples of typical requests; deliberately not presented as customer reviews. */
export function HomeScenariosSection() {
  return (
    <section aria-labelledby={SCENARIOS_HEADING_ID} className="relative isolate border-t border-border bg-surface py-20 sm:py-28">
      <CulturalWatermarks designs={SIMPLE_WATERMARK_ART} />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl" effect="rise">
          <Badge variant="soft">{HOME_SCENARIOS_COPY.eyebrow}</Badge>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl" id={SCENARIOS_HEADING_ID}>
            {HOME_SCENARIOS_COPY.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">{HOME_SCENARIOS_COPY.description}</p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={1} effect="rise">
          <ul className="grid gap-5 lg:grid-cols-3">
            {HOME_SCENARIOS.map((scenario) => (
              <li key={scenario.id}>
                <article className="flex h-full flex-col rounded-3xl border border-border bg-background p-6 shadow-sm sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-on-brand">
                      <HeroIcon className="h-5 w-5" name={scenario.iconName} />
                    </span>
                    <Badge size="sm" variant="accent">
                      {HOME_SCENARIO_TAG}
                    </Badge>
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-brand">{scenario.audience}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{scenario.story}</p>
                  <p className="mt-4 border-l-2 border-accent pl-3 text-base font-bold leading-6 text-foreground">{scenario.outcome}</p>
                  <Link
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand transition-colors hover:text-brand-deep"
                    href={scenario.link.href}
                  >
                    {scenario.link.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
