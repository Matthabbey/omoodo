"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NAV_LEADING_LINKS, NAV_TRAILING_LINKS } from "../../constants/navigation";
import { SERVICE_PAGES } from "../../constants/services";
import { SERVICE_MENU_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { cn } from "../../lib/utils";
import { CulturalWatermarks } from "../home/CulturalWatermarks";
import { buttonVariants } from "../ui";
import { BRAND_HOME_LABEL } from "../../constants/brand";
import { BrandMark } from "./BrandMark";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isServicePage = SERVICE_PAGES.some((service) => pathname === `/${service.slug}`);
  const closeServicesMenu = () => setServicesOpen(false);

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
    <header
      className="sticky top-0 z-50 border-b border-border bg-surface/75 backdrop-blur-md"
      onClickCapture={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) closeServicesMenu();
      }}
      ref={headerRef}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          aria-current={pathname === "/" ? "page" : undefined}
          aria-label={BRAND_HOME_LABEL}
          className="shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          href="/"
        >
          <BrandMark priority size="md" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
          {NAV_LEADING_LINKS.map((link) => (
            <Link
              aria-current={pathname === link.href ? "page" : undefined}
              className={navLinkClass(pathname === link.href)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
          <button
            aria-controls="services-mega-menu"
            aria-expanded={servicesOpen}
            className={`${navLinkClass(servicesOpen || isServicePage)} inline-flex items-center justify-center gap-2 leading-none`}
            onClick={() => setServicesOpen((open) => !open)}
            type="button"
          >
            Our services
            <ChevronDown aria-hidden="true" className={`h-4 w-4 shrink-0 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {NAV_TRAILING_LINKS.map((link) => (
            <Link
              aria-current={pathname === link.href ? "page" : undefined}
              className={navLinkClass(pathname === link.href)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          className={cn(buttonVariants({ variant: "primary" }), "hidden shrink-0 md:inline-flex")}
          href="/contact"
        >
          Request support
        </Link>
        <MobileMenu />
      </div>

      {servicesOpen && (
        <div
          className="brand-popup-shadow absolute inset-x-0 top-full z-50 hidden w-full overflow-hidden border-y border-border bg-surface md:block"
          id="services-mega-menu"
        >
          <CulturalWatermarks designs={SERVICE_MENU_WATERMARK_ART} visibility="prominent" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_15rem] lg:gap-8 lg:px-8 lg:py-7 xl:grid-cols-[7rem_minmax(0,1fr)_15rem_7rem]">
            <div aria-hidden="true" className="hidden xl:block" />
            <div>
              <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
                <p className="text-xs font-bold uppercase tracking-wider text-foreground">Explore Ọmọ Ọdọ services</p>
              </div>
              <div className="grid gap-1 sm:grid-cols-2">
                {SERVICE_PAGES.map((service) => (
                  <Link
                    aria-current={pathname === `/${service.slug}` ? "page" : undefined}
                    className={`group rounded-xl border p-3 transition ${
                      pathname === `/${service.slug}`
                        ? "border-border bg-brand-soft/70"
                        : "border-transparent hover:border-border hover:bg-brand-soft/50"
                    }`}
                    href={`/${service.slug}`}
                    key={service.slug}
                  >
                    <span className={`flex items-center justify-between gap-3 text-sm font-bold ${
                      pathname === `/${service.slug}` ? "text-brand" : "text-foreground group-hover:text-brand"
                    }`}>
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
                className={cn(buttonVariants({ variant: "accent" }), "relative mt-5 font-bold")}
                href="/how-it-works"
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

function navLinkClass(isActive: boolean) {
  return `rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
    isActive ? "bg-brand-soft text-brand" : "text-foreground hover:bg-brand-soft hover:text-brand"
  }`;
}
