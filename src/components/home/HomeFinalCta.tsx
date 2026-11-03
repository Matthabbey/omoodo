import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_FINAL_CTA_COPY } from "../../constants/home-copy";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";

export function HomeFinalCta() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden border-t border-border bg-brand-soft py-20 sm:py-28">
      <CulturalWatermarks designs={HOME_WATERMARK_ART} visibility="prominent" />
      <ScrollReveal className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8" effect="scale">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">{HOME_FINAL_CTA_COPY.eyebrow}</p>
        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">{HOME_FINAL_CTA_COPY.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">{HOME_FINAL_CTA_COPY.description}</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-bold")} href="/contact">Request support <ArrowRight className="h-4 w-4" /></Link>
          <Link className={cn(buttonVariants({ variant: "outline", size: "lg" }), "font-bold")} href="/how-it-works">How Ọmọ Ọdọ works</Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
