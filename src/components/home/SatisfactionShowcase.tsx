"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function SatisfactionShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Main Visual Arena: Happy Person + Exploded Screen Hologram */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border/80 bg-surface shadow-2xl">
        <Image
          alt="Nigerian client delighted by exploded service verification and satisfaction holographic projection from smartphone"
          className="object-cover object-center"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          src="/images/satisfaction-exploded.jpg"
        />

        {/* Subtle Ambient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-deep/20" />

        {/* Top-Left Live Telemetry Beacon */}
        <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-deep/80 px-3.5 py-1 text-xs font-mono text-white shadow-lg backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-bold tracking-wider text-[10px] text-accent">
              HOLOGRAPHIC STREAM
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/85 text-[10px] uppercase">
              Lagos Verified Protocol
            </span>
          </div>
        </div>

        {/* Bottom Engineering Audit Console */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-white/20 bg-deep/90 p-4 text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-on-brand shadow-inner">
                <ShieldCheck className="h-5 w-5 text-accent" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-brand-soft">
                    Lekki & Surulere, Lagos
                  </span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                </div>
                <p className="truncate text-xs font-bold text-white">
                  Time-stamped Photos · Itemized Invoices · Zero Markup
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold self-start sm:self-auto">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <span>5.0 ★★★★★ · Client Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
