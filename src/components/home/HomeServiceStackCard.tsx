import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import type { ServicePageData } from "../../types/service";
import { Badge, buttonVariants } from "../ui";

interface HomeServiceStackCardProps {
  readonly service: ServicePageData;
  readonly offsetClass: string;
}

export function HomeServiceStackCard({ service, offsetClass }: HomeServiceStackCardProps) {
  return (
    <li className={cn("sticky", offsetClass)}>
      <article className="group relative isolate flex h-[78svh] min-h-[30rem] flex-col justify-between overflow-hidden rounded-[2rem] bg-deep text-on-brand shadow-xl shadow-deep/20 sm:rounded-[2.5rem]">
        <Image
          alt={service.imageAlt}
          className="object-cover transition duration-1000 group-hover:scale-105 motion-reduce:transform-none"
          fill
          sizes="(max-width: 80rem) 100vw, 80rem"
          src={service.imageSrc}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-deep/5" />

        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          <Badge variant="blur">
            <span className="text-accent">Ọmọ Ọdọ {service.name}</span>
            <span aria-hidden="true" className="text-white/60">·</span>
            <span>{service.eyebrow}</span>
          </Badge>
        </div>

        <div className="relative z-10 flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold leading-[1.05] tracking-tight sm:text-5xl">{service.headline}</h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{service.description}</p>
          </div>
          <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-surface/90 p-5 text-foreground shadow-lg backdrop-blur-md lg:shrink-0">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">What&apos;s included</p>
              <Link
                aria-label={`Explore ${service.name}`}
                className={buttonVariants({ variant: "accent", size: "icon" })}
                href={`/${service.slug}`}
                title={`Explore ${service.name}`}
              >
                <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>
            <ul className="mt-3 space-y-2 text-sm leading-6">
              {service.highlights.map((highlight) => (
                <li className="flex items-start gap-2" key={highlight}>
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent-deep" />
                  <span className="text-foreground/85">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </li>
  );
}
