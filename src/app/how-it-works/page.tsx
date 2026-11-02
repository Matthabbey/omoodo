import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../../components/ui";
import { BRAND_NAME } from "../../constants/brand";
import { HOW_IT_WORKS_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOW_IT_WORKS_PRIMARY_CTA } from "../../constants/how-it-works";
import { CulturalWatermarks } from "../../components/home/CulturalWatermarks";
import { HowItWorksFlow } from "../../components/how-it-works/HowItWorksFlow";
import { HowItWorksHero } from "../../components/how-it-works/HowItWorksHero";
import { cn } from "../../lib/utils";

export const metadata: Metadata = {
  title: "How it works",
  description: `From the first conversation to final confirmation, see how ${BRAND_NAME} handles your request and keeps you informed at every step.`,
};

export default function HowItWorksPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background px-4 pb-14 pt-6 text-foreground sm:px-6 sm:pb-20 sm:pt-8 lg:px-8">
      <CulturalWatermarks designs={HOW_IT_WORKS_WATERMARK_ART} />
      <div className="relative z-10 mx-auto max-w-7xl">
        <HowItWorksHero />

        <HowItWorksFlow />

        <div className="mt-12 flex justify-center sm:mt-16">
          <Link
            className={cn(buttonVariants({ variant: "brand", size: "lg" }), "font-bold")}
            href={HOW_IT_WORKS_PRIMARY_CTA.href}
          >
            {HOW_IT_WORKS_PRIMARY_CTA.label} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
