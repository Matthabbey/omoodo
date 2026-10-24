import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { CulturalWatermarks } from "../../components/home/CulturalWatermarks";
import { HowItWorksFlow } from "../../components/how-it-works/HowItWorksFlow";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background px-4 py-14 text-foreground sm:px-6 sm:py-20 lg:px-8">
      <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">How we work</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We make getting things handled simple and transparent.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            From the first conversation to final confirmation, you always know what is happening and what comes next.
          </p>
        </div>

        <HowItWorksFlow />

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-base font-semibold leading-none text-on-brand shadow-sm transition hover:bg-brand-deep hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" href="/contact">
            Tell us what you need <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
