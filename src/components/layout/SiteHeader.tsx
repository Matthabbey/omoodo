"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICE_PAGES } from "../../constants/services";
import { SERVICE_MENU_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { CulturalWatermarks } from "../home/CulturalWatermarks";

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setServicesOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="relative z-50 border-b border-border bg-surface" ref={headerRef}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link aria-label="Omoodo home" className="shrink-0 text-2xl font-black tracking-tight text-brand" href="/">
          Omoodo<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
          <button
            aria-controls="services-mega-menu"
            aria-expanded={servicesOpen}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              servicesOpen ? "bg-brand-soft text-brand" : "text-foreground hover:bg-brand-soft hover:text-brand"
            }`}
            onClick={() => setServicesOpen((open) => !open)}
            type="button"
          >
            Our services
            <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          <Link className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-brand-soft hover:text-brand" href="/how-it-works">
            How it works
          </Link>
        </nav>

        <Link
          className="shrink-0 rounded-full bg-brand px-3 py-2.5 text-xs font-semibold text-on-brand transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-5 sm:text-sm"
          href="/concierge"
        >
          Request support
        </Link>
      </div>

      <nav aria-label="Services" className="flex gap-6 overflow-x-auto px-4 pb-3 text-sm font-semibold text-muted md:hidden">
        {SERVICE_PAGES.map((service) => (
          <Link className="shrink-0 transition hover:text-brand" href={`/${service.slug}`} key={service.slug}>
            {service.name}
          </Link>
        ))}
      </nav>

      {servicesOpen && (
        <div
          className="absolute inset-x-0 top-full z-50 hidden w-full overflow-hidden border-y border-border bg-surface shadow-xl md:block"
          id="services-mega-menu"
        >
          <CulturalWatermarks designs={SERVICE_MENU_WATERMARK_ART} visibility="prominent" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_15rem] lg:gap-8 lg:px-8 lg:py-7 xl:grid-cols-[7rem_minmax(0,1fr)_15rem_7rem]">
            <div aria-hidden="true" className="hidden xl:block" />
            <div>
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">Explore Omoodo services</p>
              </div>
              <div className="grid gap-1 sm:grid-cols-2">
                {SERVICE_PAGES.map((service) => (
                  <Link
                    className="group rounded-xl border border-transparent p-3 transition hover:border-border hover:bg-brand-soft/50"
                    href={`/${service.slug}`}
                    key={service.slug}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="flex items-center justify-between gap-3 text-sm font-bold text-foreground group-hover:text-brand">
                      {service.name}
                      <ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0 text-brand opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 block text-xs font-medium text-brand">{service.eyebrow}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted">{service.description}</span>
                  </Link>
                ))}
              </div>
            </div>

            <aside className="relative flex flex-col items-start justify-center overflow-hidden rounded-2xl bg-deep p-5 text-on-brand sm:p-6">
              <span aria-hidden="true" className="absolute -right-8 -top-8 h-32 w-32 rotate-45 border-2 border-white/10" />
              <span aria-hidden="true" className="absolute -bottom-12 -right-2 h-28 w-28 rotate-45 border-2 border-white/10" />
              <p className="relative text-xs font-semibold uppercase tracking-wider text-white/70">Here when you need us</p>
              <h2 className="relative mt-2 text-xl font-bold">Good support starts with a conversation.</h2>
              <p className="relative mt-2 text-sm leading-6 text-white/80">
                See how we coordinate trusted help around your needs, at home or across the city.
              </p>
              <Link
                className="relative mt-5 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-bold text-brand transition hover:bg-brand-soft"
                href="/how-it-works"
                onClick={() => setServicesOpen(false)}
              >
                How it works
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </aside>
            <div aria-hidden="true" className="hidden xl:block" />
          </div>
        </div>
      )}
    </header>
  );
}
