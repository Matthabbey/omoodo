import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactIntroPanel } from "../../components/contact/ContactIntroPanel";
import { ContactRequestForm } from "../../components/contact/ContactRequestForm";
import { CulturalWatermarks } from "../../components/home/CulturalWatermarks";
import { CONTACT_PAGE_COPY } from "../../constants/contact";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";

export const metadata: Metadata = {
  title: "Contact Ọmọ Ọdọ",
  description: "Tell Ọmọ Ọdọ what support you need and where. Our team will follow up.",
};

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden bg-background px-4 py-10 text-foreground sm:px-6 sm:py-14 lg:px-8">
      <CulturalWatermarks designs={HOME_WATERMARK_ART} />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-10">
        <ContactIntroPanel />
        <section aria-label={CONTACT_PAGE_COPY.formTitle} className="rounded-[2rem] border border-border bg-surface p-6 shadow-sm sm:p-10">
          <Suspense fallback={<div aria-label="Loading contact form" className="h-96 animate-pulse rounded-2xl bg-brand-soft" />}>
            <ContactRequestForm />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
