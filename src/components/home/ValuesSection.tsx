import { CulturalWatermarks } from "./CulturalWatermarks";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { ScrollReveal } from "./ScrollReveal";

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-title"
      className="relative isolate overflow-hidden border-t border-border bg-background py-20 sm:py-28"
      id="values"
    >
      <CulturalWatermarks designs={HOME_WATERMARK_ART} />

      <ScrollReveal className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              The Omoodo difference
            </span>
            <h2
              className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
              id="values-title"
            >
              Good service is personal.{" "}
              <span className="text-brand">Trust is how we deliver it.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            From the first conversation to the final detail, we bring
            accountability, care, and local knowledge to every commitment.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="group rounded-3xl border border-border bg-surface/90 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path d="M12 3 4.5 6v5.1c0 4.7 3.2 8.9 7.5 9.9 4.3-1 7.5-5.2 7.5-9.9V6L12 3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-widest text-brand/60">01</span>
            </div>
            <h3 className="mt-7 text-lg font-bold text-foreground">Trust, always</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Honest communication and discretion in every assignment we
              accept.
            </p>
          </article>

          <article className="group rounded-3xl border border-border bg-surface/90 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-widest text-accent/70">02</span>
            </div>
            <h3 className="mt-7 text-lg font-bold text-foreground">We own the outcome</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              We stay accountable and see each responsibility through to
              completion.
            </p>
          </article>

          <article className="group rounded-3xl border border-border bg-surface/90 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path d="M13.2 2.8 5.5 13h5.7l-.4 8.2L18.5 11h-5.7l.4-8.2Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-widest text-brand/60">03</span>
            </div>
            <h3 className="mt-7 text-lg font-bold text-foreground">Present at every step</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Timely updates and clear communication keep you confidently in
              the loop.
            </p>
          </article>

          <article className="group rounded-3xl border border-border bg-surface/90 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-md">
            <div className="flex items-start justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-deep">
                <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20m6.5-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-6.5a3.5 3.5 0 0 1 0 6.8m2 3.2a4 4 0 0 1 3 3.9V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
                </svg>
              </span>
              <span className="text-xs font-bold tracking-widest text-accent/70">04</span>
            </div>
            <h3 className="mt-7 text-lg font-bold text-foreground">Made for your world</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Thoughtful support shaped around your family, business, and life
              across borders.
            </p>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-l-2 border-accent pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-foreground">
            Rooted in local knowledge. Ready wherever life takes you.
          </p>
          <p className="text-sm text-muted">Omoodo Concierge & Lifestyle Services</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
