import Link from "next/link";
import { ArrowRight, Camera, MessageCircle, Radio, Receipt, ShieldCheck } from "lucide-react";
import { HOME_PRICING_OPTIONS, HOME_SERVICE_PROMISES } from "../../constants/home";
import { HOW_IT_WORKS_STEPS } from "../../constants/how-it-works";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { Badge } from "../ui/Badge";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";
import { SatisfactionShowcase } from "./SatisfactionShowcase";
import type { ServicePromise } from "../../types/home";

function renderPromiseIcon(iconName: ServicePromise["iconName"]) {
  if (iconName === "radio") return <Radio className="h-5 w-5" />;
  if (iconName === "camera") return <Camera className="h-5 w-5" />;
  if (iconName === "receipt") return <Receipt className="h-5 w-5" />;
  return <ShieldCheck className="h-5 w-5" />;
}

export function HomeKnowledgeSections() {
  return (
    <>
      <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden border-t border-border bg-deep py-20 text-on-brand sm:py-28">
        <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} visibility="prominent" />
        <ScrollReveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" effect="skew-right">
          <Badge variant="blur">How it works</Badge>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple, transparent and accountable.</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">One clear process takes your request from conversation to confirmed completion.</p>
              <div className="mt-8 grid gap-3">
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><MessageCircle aria-hidden="true" className="h-5 w-5 text-brand-accent" /> Timely communication at every stage</p>
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><Camera aria-hidden="true" className="h-5 w-5 text-accent" /> Photos, receipts and relevant evidence</p>
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><ShieldCheck aria-hidden="true" className="h-5 w-5 text-brand-accent" /> Clear ownership through completion</p>
              </div>
              <Link className="mt-7 inline-flex items-center gap-2 font-bold text-brand-soft" href="/how-it-works">See the complete process <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <li className="group relative overflow-hidden rounded-3xl border border-white/20 bg-deep/70 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-accent/60 hover:bg-deep/90" key={step.number}>
                  <span aria-hidden="true" className="absolute -right-2 -top-5 text-7xl font-black text-white/5">{step.number}</span>
                  <span className="relative text-xs font-black tracking-widest text-accent">STEP {step.number}</span>
                  <h3 className="relative mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-white/70">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
      </section>

      <section className="flex min-h-[75svh] items-center border-t border-border bg-surface py-20 sm:py-28">
        <ScrollReveal className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" effect="scale">
          <div className="max-w-3xl">
            <Badge variant="soft">Pricing clarity</Badge>
            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">You should understand what you are paying for.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">Pricing reflects the nature, complexity and duration of each assignment. Third-party costs are clearly separated from Omoodo fees.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_PRICING_OPTIONS.map((option, index) => (
              <article className={`rounded-3xl border border-border bg-background p-6 transition duration-300 hover:rotate-0 hover:-translate-y-2 hover:shadow-md ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`} key={option.title}>
                <span className="text-xs font-black tracking-widest text-brand">0{index + 1}</span>
                <h3 className="mt-5 text-lg font-bold">{option.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{option.description}</p>
              </article>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section id="experience" className="relative isolate flex min-h-[75svh] items-center overflow-hidden border-t border-border bg-gradient-to-b from-surface/50 via-background to-surface/80 py-20 sm:py-28">
        <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} visibility="subtle" />
        <ScrollReveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" effect="skew-left">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge variant="accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                The experience
              </Badge>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Confidence comes from{" "}
                <span className="bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">
                  visibility
                </span>
                .
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                These are the standards every Omoodo assignment is designed to provide—not anonymous claims or invented reviews.
              </p>

              <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {HOME_SERVICE_PROMISES.map((promise) => (
                  <article
                    className="group relative rounded-2xl border border-border/80 bg-surface/90 p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:bg-surface hover:shadow-md"
                    key={promise.title}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand-deep group-hover:bg-brand group-hover:text-on-brand transition-colors">
                        {renderPromiseIcon(promise.iconName)}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-wider text-muted group-hover:text-brand transition-colors">
                        {promise.badge}
                      </span>
                    </div>
                    <h3 className="mt-3.5 text-sm font-bold text-foreground">
                      {promise.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted">
                      {promise.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <SatisfactionShowcase />
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
