import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SIMPLE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { SERVICE_PAGE_EXTRAS } from "../../constants/service-extras";
import { SERVICE_CLOSING_EYEBROW, SERVICE_CLOSING_LINK } from "../../constants/service-page";
import { getSiteUrl } from "../../lib/site-url";
import type { ServicePageData } from "../../types/service";
import { CulturalWatermarks } from "../home/CulturalWatermarks";
import { ServiceBanner } from "./ServiceBanner";
import { ServiceCategoryGrid } from "./ServiceCategoryGrid";
import { ServiceOverview } from "./ServiceOverview";

interface ServicePageContentProps {
  readonly service: ServicePageData;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const shareUrl = new URL(`/${service.slug}`, getSiteUrl()).toString();
  const extras = SERVICE_PAGE_EXTRAS[service.slug];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ServiceBanner service={service} shareUrl={shareUrl} />
      <ServiceOverview paragraphs={extras?.overviewParagraphs} service={service} />
      {extras ? (
        <ServiceCategoryGrid categories={extras.categories} heading={extras.categoriesHeading} headingId={`${service.slug}-covers`} />
      ) : null}

      <section className="relative isolate border-t border-border bg-surface py-12 sm:py-16">
        <CulturalWatermarks designs={SIMPLE_WATERMARK_ART} />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">{SERVICE_CLOSING_EYEBROW}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{extras?.closing.heading ?? service.detailHeading}</h2>
          {extras ? <p className="mt-4 text-xl font-bold text-brand sm:text-2xl">{extras.closing.emphasis}</p> : null}
          <Link
            className="mt-6 inline-flex items-center gap-2 font-semibold leading-none text-brand hover:text-brand-deep [&_svg]:shrink-0"
            href={SERVICE_CLOSING_LINK.href}
          >
            {SERVICE_CLOSING_LINK.label} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
