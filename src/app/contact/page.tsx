import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { HOME_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { ContactForm } from "../../components/contact/ContactForm";
import { CulturalWatermarks } from "../../components/home/CulturalWatermarks";

export const metadata: Metadata = {
  title: "Contact Omoodo",
  description: "Tell Omoodo what support you need and where. Our team will follow up.",
};

export default function ContactPage() {
  return (
    <main
      className="relative isolate min-h-0 overflow-hidden bg-background px-4 py-6 text-foreground sm:px-6 sm:py-8 lg:px-8"
      data-contact-page="true"
    >
      <CulturalWatermarks designs={HOME_WATERMARK_ART} />
      <div className="relative z-10 mx-auto grid h-full min-h-0 min-w-0 max-w-7xl grid-cols-[minmax(0,1fr)] grid-rows-[auto_minmax(0,1fr)] gap-6 lg:grid-rows-1 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <section className="min-h-0 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">Contact Omoodo</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-5xl">
            Let’s take care of the details.
          </h1>
          <p className="mt-5 hidden max-w-xl text-lg leading-7 text-muted sm:block">
            Tell us what you need, where you need it, and how to reach you. We’ll review your request and follow up.
          </p>
          <div className="mt-8 hidden gap-4 text-sm text-muted sm:grid">
            <p className="flex items-center gap-3"><MessageCircle aria-hidden="true" className="h-5 w-5 text-brand" /> Personal, thoughtful support</p>
            <p className="flex items-center gap-3"><MapPin aria-hidden="true" className="h-5 w-5 text-brand" /> Local coordination across Nigeria</p>
            <p className="flex items-center gap-3"><Mail aria-hidden="true" className="h-5 w-5 text-brand" /> Clear updates from first contact</p>
          </div>
        </section>

        <section aria-label="Contact request form" className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-sm sm:p-8">
          <Suspense fallback={<div aria-label="Loading contact form" className="h-96 animate-pulse rounded-2xl bg-brand-soft" />}>
            <ContactForm />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
