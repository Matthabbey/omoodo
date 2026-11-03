import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { cn } from "../../lib/utils";
import type { HomeAudience } from "../../types/home";
import { HeroIcon } from "../hero/HeroIcon";
import { buttonVariants } from "../ui";

interface HomeAudienceSlideProps {
  readonly audience: HomeAudience;
  readonly tone: "dark" | "light";
}

export function HomeAudienceSlide({ audience, tone }: HomeAudienceSlideProps) {
  const dark = tone === "dark";
  return (
    <li className="w-[18rem] shrink-0 snap-start sm:w-[20rem] lg:w-[22rem]">
      <article
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          dark ? "border-deep bg-deep text-on-brand shadow-lg shadow-deep/20" : "border-border bg-surface text-foreground shadow-sm",
        )}
      >
        <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] overflow-hidden">
          <Image
            alt={audience.image.alt}
            className="object-cover object-[50%_22%] transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
            fill
            sizes="(max-width: 640px) 18rem, (max-width: 1024px) 20rem, 22rem"
            src={audience.image.src}
          />
          <div aria-hidden="true" className={cn("absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t to-transparent", dark ? "from-deep" : "from-surface")} />
        </div>
        <p className={cn("flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]", dark ? "text-accent" : "text-brand")}>
          <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", dark ? "bg-accent" : "bg-brand")} />
          {audience.eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-bold tracking-tight">{audience.title}</h3>
        <p className={cn("mt-2 text-sm leading-6", dark ? "text-white/80" : "text-muted")}>{audience.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm leading-6">
          {audience.examples.map((example) => (
            <li className="flex items-start gap-2" key={example}>
              <Check aria-hidden="true" className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-accent" : "text-accent-deep")} />
              <span className={dark ? "text-white/85" : "text-foreground/80"}>{example}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-5">
          <span
            aria-hidden="true"
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg",
              dark ? "bg-accent text-on-accent shadow-accent/20" : "bg-brand text-on-brand shadow-brand/20",
            )}
          >
            <HeroIcon className="h-6 w-6" name={audience.iconName} />
          </span>
          <Link
            aria-label={audience.cta.label}
            className={buttonVariants({ variant: dark ? "secondary" : "outline", size: "icon" })}
            href={audience.cta.href}
            title={audience.cta.label}
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
      </article>
    </li>
  );
}
