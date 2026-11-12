import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND_NAME } from "../../constants/brand";
import { HOME_SERVICE_CARD_CTA, HOME_SERVICE_CARD_MAX_POINTS } from "../../constants/home-services";
import { cn } from "../../lib/utils";
import type { HomeServiceCard as HomeServiceCardData } from "../../types/home";
import type { ServicePageData } from "../../types/service";
import { buttonVariants } from "../ui";

interface HomeServiceCardProps {
  readonly card: HomeServiceCardData;
  readonly service: ServicePageData;
  readonly className?: string;
}

/** Portrait photo card: the photo fades into a `deep` panel holding the title, what is covered and an Explore link whose hit area covers the whole card. */
export function HomeServiceCard({ card, service, className }: HomeServiceCardProps) {
  const title = `${BRAND_NAME} ${service.name}`;
  return (
    <li className={className}>
      <article className="group relative isolate flex h-full min-h-[20rem] flex-col justify-end overflow-hidden rounded-3xl bg-deep text-on-brand shadow-lg shadow-deep/15 lg:min-h-[24rem]">
        <Image
          alt={service.imageAlt}
          className="-z-20 object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          src={service.imageSrc}
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-deep/75 via-55% to-transparent" />

        <div className="p-5 text-shadow-sm text-shadow-deep/60">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">{service.eyebrow}</p>
          <h2 className="mt-1.5 text-xl font-bold leading-tight tracking-tight">{title}</h2>
          {"points" in card ? (
            <ul className="mt-3 list-disc space-y-0.5 pl-5 text-sm leading-5 text-white/90 marker:text-accent">
              {card.points.slice(0, HOME_SERVICE_CARD_MAX_POINTS).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-5 text-white/90">{card.summary}</p>
          )}
          <Link
            aria-label={`${HOME_SERVICE_CARD_CTA} ${title}`}
            className={cn(buttonVariants({ variant: "primary", size: "sm" }), "mt-4 font-bold uppercase tracking-wide text-shadow-none active:scale-none after:absolute after:inset-0 after:content-['']")}
            href={`/${service.slug}`}
          >
            {HOME_SERVICE_CARD_CTA}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </li>
  );
}
