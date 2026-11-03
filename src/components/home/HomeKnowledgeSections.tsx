import Link from "next/link";
import { ArrowRight, Camera, MessageCircle, ShieldCheck } from "lucide-react";
import { HOME_HOW_IT_WORKS_COPY } from "../../constants/home-copy";
import { HOW_IT_WORKS_STEPS } from "../../constants/how-it-works";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { Badge } from "../ui/Badge";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { HomeExperienceSection } from "./HomeExperienceSection";
import { HomePricingSection } from "./HomePricingSection";
import { ScrollReveal } from "./ScrollReveal";

export function HomeKnowledgeSections() {
  return (
    <>
      <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden border-t border-border bg-deep py-20 text-on-brand sm:py-28">
        <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} visibility="prominent" />
        <ScrollReveal className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" effect="skew-right">
          <Badge variant="blur">{HOME_HOW_IT_WORKS_COPY.eyebrow}</Badge>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{HOME_HOW_IT_WORKS_COPY.title}</h2>
              <p className="mt-5 text-lg leading-8 text-white/75">{HOME_HOW_IT_WORKS_COPY.description}</p>
              <div className="mt-8 grid gap-3">
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><MessageCircle aria-hidden="true" className="h-5 w-5 text-brand-accent" /> Timely communication at every stage</p>
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><Camera aria-hidden="true" className="h-5 w-5 text-accent" /> Photos, receipts and relevant evidence</p>
                <p className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-4 text-sm font-semibold"><ShieldCheck aria-hidden="true" className="h-5 w-5 text-brand-accent" /> Clear ownership through completion</p>
              </div>
              <Link className="mt-7 inline-flex items-center gap-2 font-bold text-accent transition hover:text-accent-soft" href="/how-it-works">See the complete process <ArrowRight className="h-4 w-4" /></Link>
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

      <HomePricingSection />

      <HomeExperienceSection />
    </>
  );
}
