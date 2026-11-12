import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BRAND_NAME } from "../../constants/brand";
import { SERVICE_BREADCRUMB_HOME, SERVICE_BREADCRUMB_LABEL } from "../../constants/service-page";
import type { ServicePageData } from "../../types/service";
import { ServiceShareLinks } from "./ServiceShareLinks";

interface ServiceBannerProps {
  readonly service: ServicePageData;
  readonly shareUrl: string;
}

/** Wide photo banner: breadcrumb and share bar on top, the service promise over a `deep` gradient. */
export function ServiceBanner({ service, shareUrl }: ServiceBannerProps) {
  return (
    <section className="relative isolate overflow-hidden bg-deep text-on-brand">
      <Image alt={service.imageAlt} className="-z-20 object-cover" fill priority sizes="100vw" src={service.imageSrc} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/95 via-deep/65 to-deep/20" />

      <div className="border-b border-white/15 bg-deep/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label={SERVICE_BREADCRUMB_LABEL}>
            <ol className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
              <li>
                <Link className="text-white/75 transition-colors hover:text-accent" href="/">
                  {SERVICE_BREADCRUMB_HOME}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-white/60" />
              </li>
              <li aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <ServiceShareLinks title={`${BRAND_NAME} ${service.name}: ${service.headline}`} url={shareUrl} />
        </div>
      </div>

      <div className="mx-auto flex min-h-[20rem] max-w-7xl items-center px-4 py-14 sm:min-h-[24rem] sm:px-6 sm:py-20 lg:px-8">
        <div className="animate-hero-content max-w-2xl">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{service.headline}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">{service.description}</p>
        </div>
      </div>
    </section>
  );
}
