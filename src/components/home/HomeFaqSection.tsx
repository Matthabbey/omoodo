import { ChevronDown } from "lucide-react";
import { FAQ_SECTION_ID, HOME_FAQ_COPY, HOME_FAQS } from "../../constants/faqs";
import { Badge } from "../ui";
import { ScrollReveal } from "./ScrollReveal";

/** Chapter 07: native disclosure elements, so the answers open without any script. */
export function HomeFaqSection() {
  return (
    <section className="scroll-mt-20 border-t border-border bg-background py-20 sm:py-28" id={FAQ_SECTION_ID}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal className="lg:sticky lg:top-24 lg:self-start" effect="skew-left">
            <Badge variant="soft">{HOME_FAQ_COPY.eyebrow}</Badge>
            <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">{HOME_FAQ_COPY.title}</h2>
            <p className="mt-4 max-w-md text-lg leading-8 text-muted">{HOME_FAQ_COPY.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={1} effect="rise">
            <div className="divide-y divide-border rounded-[2rem] border border-border bg-surface px-6 shadow-sm sm:px-8">
              {HOME_FAQS.map((item) => (
                <details className="group py-5" key={item.question}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-bold text-foreground marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-lg [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-transform duration-300 group-open:rotate-180 group-open:bg-brand group-open:text-on-brand motion-reduce:transition-none"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl leading-7 text-muted">{item.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
