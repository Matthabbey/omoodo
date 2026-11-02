import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HOME_SERVICE_STACK_OFFSETS, HOME_SERVICES_HEADER, HOME_SERVICES_LINK } from "../../constants/home";
import { SERVICE_PAGES } from "../../constants/services";
import { Badge } from "../ui";
import { HomeServiceStackCard } from "./HomeServiceStackCard";
import { ScrollReveal } from "./ScrollReveal";

export function HomeServicesStory() {
  return (
    <section aria-labelledby="solutions-title" className="scroll-mt-20 bg-background py-20 sm:py-28" id="services">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" effect="rise">
          <div className="max-w-3xl">
            <Badge variant="accent">{HOME_SERVICES_HEADER.badge}</Badge>
            <h2 className="mt-5 text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl" id="solutions-title">
              {HOME_SERVICES_HEADER.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{HOME_SERVICES_HEADER.description}</p>
          </div>
          <Link className="inline-flex items-center gap-1 font-semibold text-brand transition-colors hover:text-brand-deep lg:shrink-0 lg:pb-3" href={HOME_SERVICES_LINK.href}>
            {HOME_SERVICES_LINK.label}
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </ScrollReveal>

        <ul className="relative mt-12 space-y-6 sm:space-y-8">
          {SERVICE_PAGES.map((service) => (
            <HomeServiceStackCard
              key={service.slug}
              offsetClass={HOME_SERVICE_STACK_OFFSETS[service.slug]}
              service={service}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
