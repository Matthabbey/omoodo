import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICE_PAGES } from "../../constants/services";
import { HOME_SERVICE_CAPABILITIES } from "../../constants/home";
import { SERVICE_WATERMARK_ART } from "../../constants/cultural-watermarks";
import { Badge } from "../ui/Badge";
import { CulturalWatermarks } from "./CulturalWatermarks";
import { ScrollReveal } from "./ScrollReveal";

export function HomeServicesStory() {
  return (
    <section aria-labelledby="solutions-title" className="bg-background">
      <header className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <Badge variant="accent">Five connected solutions</Badge>
        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl" id="solutions-title">
          One partner for the moving parts of modern life.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
          Use one service for a specific need or combine them through Omoodo Concierge for ongoing coordination.
        </p>
      </header>

      {SERVICE_PAGES.map((service, index) => (
        <article className={`relative isolate flex min-h-[82svh] items-center overflow-hidden border-t border-border py-16 sm:py-24 ${index % 2 === 0 ? "bg-background" : "bg-surface"}`} key={service.slug}>
          <span aria-hidden="true" className="absolute -right-4 top-8 text-[9rem] font-black leading-none text-brand-soft sm:text-[14rem]">0{index + 1}</span>
          <CulturalWatermarks designs={SERVICE_WATERMARK_ART[service.slug]} />
          <ScrollReveal className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8" effect={index % 2 === 0 ? "skew-left" : "skew-right"}>
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Solution 0{index + 1}</p>
              <h3 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Omoodo {service.name}</h3>
              <p className="mt-3 text-lg font-semibold text-brand-deep">{service.eyebrow}</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{service.description}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {HOME_SERVICE_CAPABILITIES[service.slug].map((capability) => (
                  <li className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface/80 px-3 py-2 text-sm font-medium leading-6 shadow-sm" key={capability}>
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep"><Check aria-hidden="true" className="h-4 w-4" /></span>
                    {capability}
                  </li>
                ))}
              </ul>
              <Link className="mt-8 inline-flex items-center gap-2 font-bold text-brand hover:text-brand-deep" href={`/${service.slug}`}>
                Explore {service.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div aria-hidden="true" className={`absolute inset-2 rounded-3xl bg-brand-soft ${index % 2 === 0 ? "rotate-3" : "-rotate-3"}`} />
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-brand-soft shadow-lg">
                <Image alt={service.imageAlt} className="object-cover transition duration-700 hover:scale-105 motion-reduce:transform-none" fill sizes="(max-width: 1024px) 100vw, 50vw" src={service.imageSrc} />
              </div>
            </div>
          </ScrollReveal>
        </article>
      ))}
    </section>
  );
}
