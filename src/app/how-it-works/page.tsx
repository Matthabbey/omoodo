import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../../constants/how-it-works";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { CulturalWatermarks } from "../../components/home/CulturalWatermarks";

export const metadata: Metadata = { title: "How it works" };

export default function HowItWorksPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background px-4 py-14 text-foreground sm:px-6 sm:py-20 lg:px-8">
      <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-widest text-brand">
          Simple, considered support
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Local follow-through, made simple.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-7 text-muted">
          One clear process helps you get dependable support, wherever you are.
        </p>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <li className="rounded-3xl border border-border bg-surface p-6" key={step.number}>
              <span className="text-sm font-bold tracking-widest text-accent-deep">{step.number}</span>
              <h2 className="mt-5 text-xl font-bold">{step.title}</h2>
              <p className="mt-3 leading-7 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>

        <Link
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold leading-none text-on-brand transition hover:bg-brand-deep [&_svg]:shrink-0"
          href="/concierge"
        >
          Explore concierge support <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
