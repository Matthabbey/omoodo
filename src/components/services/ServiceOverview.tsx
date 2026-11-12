import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { BRAND_NAME } from "../../constants/brand";
import { SERVICE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { HOME_SERVICE_CARDS } from "../../constants/home-services";
import { SERVICE_OVERVIEW_CTA } from "../../constants/service-page";
import { cn } from "../../lib/utils";
import type { ServicePageData } from "../../types/service";
import { CulturalWatermarks } from "../home/CulturalWatermarks";
import { buttonVariants } from "../ui";

interface ServiceOverviewProps {
  readonly service: ServicePageData;
  /** When given, these replace the single description and the tick list. */
  readonly paragraphs?: readonly string[];
}

/** Uses the fuller "what is covered" list from the home card when the service has one. */
function getCoveredItems(service: ServicePageData): readonly string[] {
  const card = HOME_SERVICE_CARDS.find((item) => item.slug === service.slug);
  return card && "points" in card ? card.points : service.highlights;
}

export function ServiceOverview({ service, paragraphs }: ServiceOverviewProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <CulturalWatermarks designs={SERVICE_WATERMARK_ART[service.slug]} />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-brand">{service.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {BRAND_NAME} {service.name}
          </h2>
          {paragraphs ? (
            paragraphs.map((paragraph) => (
              <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg" key={paragraph}>
                {paragraph}
              </p>
            ))
          ) : (
            <>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">{service.detailDescription}</p>
              <ul className="mt-7 grid gap-3">
                {getCoveredItems(service).map((item) => (
                  <li className="flex items-center gap-3 text-sm font-medium" key={item}>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                      <Check aria-hidden="true" className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
          <Link
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-8 font-bold")}
            href={`/contact?service=${service.slug}`}
          >
            {SERVICE_OVERVIEW_CTA} <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-brand-soft shadow-sm">
          <Image
            alt={service.detailImageAlt}
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={service.detailImageSrc}
          />
        </div>
      </div>
    </section>
  );
}
