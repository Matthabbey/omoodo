import { HOME_AUDIENCES, HOME_PURPOSE } from "../../constants/home";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { Badge } from "../ui/Badge";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";

export function HomeIntroduction() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden border-t border-border bg-surface py-20 sm:py-28">
      <CulturalWatermarks designs={HOME_WATERMARK_ART} />
      <div aria-hidden="true" className="absolute -left-24 top-1/3 h-64 w-64 rotate-12 rounded-[4rem] border border-brand-accent/30 bg-brand-soft/60" />
      <ScrollReveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" effect="skew-left">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Badge variant="soft">Why Omoodo exists</Badge>
            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              A trusted partner for the things you cannot always handle yourself.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              Omoodo provides reliable, convenient and personalised support for people, families and businesses who need important tasks handled on their behalf.
            </p>
            <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-brand-deep">
              Across the city, across the country or across the world—you stay connected while we keep things moving.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {HOME_AUDIENCES.map((audience, index) => (
              <article className={`rounded-2xl border border-border p-5 ${index === 2 ? "bg-deep text-on-brand sm:col-span-2" : "bg-background"}`} key={audience.title}>
                <h3 className="font-bold">{audience.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${index === 2 ? "text-white/80" : "text-muted"}`}>{audience.description}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-4 border-t border-border pt-8 md:grid-cols-2">
          {HOME_PURPOSE.map((purpose) => (
            <article className="rounded-3xl border border-border bg-background p-6 sm:p-8" key={purpose.title}>
              <h3 className="text-xl font-bold text-brand-deep">{purpose.title}</h3>
              <p className="mt-3 leading-7 text-muted">{purpose.description}</p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
