import { HOME_PRICING_COPY } from "../../constants/home-copy";
import { Badge } from "../ui";
import { HomePricingCarousel } from "./HomePricingCarousel";
import { ScrollReveal } from "./ScrollReveal";

/** Chapter 05: one pricing model at a time on a deep backdrop, in the style of a testimonial carousel. */
export function HomePricingSection() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border bg-deep py-20 text-on-brand sm:py-28">
      <span aria-hidden="true" className="absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full bg-brand/40 blur-3xl" />
      <span aria-hidden="true" className="absolute -bottom-40 -right-20 h-[26rem] w-[26rem] rounded-full bg-brand/30 blur-3xl" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center" effect="rise">
          <Badge variant="blur">{HOME_PRICING_COPY.eyebrow}</Badge>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">{HOME_PRICING_COPY.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">{HOME_PRICING_COPY.description}</p>
        </ScrollReveal>
        <ScrollReveal delay={1} effect="scale">
          <HomePricingCarousel />
        </ScrollReveal>
      </div>
    </section>
  );
}
