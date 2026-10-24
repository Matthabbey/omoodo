import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";

export function HomeFinalCta() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden border-t border-border bg-brand-soft py-20 sm:py-28">
      <CulturalWatermarks designs={HOME_WATERMARK_ART} visibility="prominent" />
      <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" effect="scale">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Your trusted partner on the ground</p>
        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">Tell us what needs to be done. We’ll help you get it done.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">Start with one request, arrange ongoing support or simply speak with the team about what is possible.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 font-bold text-on-brand hover:bg-brand-deep" href="/contact">Request support <ArrowRight className="h-4 w-4" /></Link>
          <Link className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-surface px-7 font-bold text-foreground hover:bg-background" href="/how-it-works">How Omoodo works</Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
