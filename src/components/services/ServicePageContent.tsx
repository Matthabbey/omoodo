import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ServicePageData } from "../../types/service";
import { SERVICE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { CulturalWatermarks } from "../home/CulturalWatermarks";

interface ServicePageContentProps {
  readonly service: ServicePageData;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden">
        <CulturalWatermarks designs={SERVICE_WATERMARK_ART[service.slug]} />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div>
            <Link className="text-sm font-semibold text-brand hover:text-brand-deep" href="/">
              Omoodo <span aria-hidden="true">/</span> Services
            </Link>
            <p className="mt-8 text-xs font-bold uppercase tracking-widest text-brand">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {service.description}
            </p>
            <ul className="mt-7 grid gap-3">
              {service.highlights.map((highlight) => (
                <li className="flex items-center gap-3 text-sm font-medium" key={highlight}>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
                    <Check aria-hidden="true" className="h-4 w-4" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <Link
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-on-brand transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              href={`/contact?service=${service.slug}`}
            >
              Talk to our team <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-brand-soft shadow-sm">
            <Image
              alt={service.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              src={service.imageSrc}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            The Omoodo difference
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {service.detailHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
            {service.detailDescription}
          </p>
          <Link
            className="mt-7 inline-flex font-semibold text-brand hover:text-brand-deep"
            href="/how-it-works"
          >
            How Omoodo works <ArrowRight aria-hidden="true" className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
