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
          "flex min-h-[26rem] h-full flex-col rounded-[2rem] border p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0",
          dark ? "border-deep bg-deep text-on-brand shadow-lg shadow-deep/20" : "border-border bg-surface text-foreground shadow-sm",
        )}
      >
        <p className={cn("flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em]", dark ? "text-accent" : "text-brand")}>
          <span aria-hidden="true" className={cn("h-2 w-2 rounded-full", dark ? "bg-accent" : "bg-brand")} />
          {audience.eyebrow}
        </p>
        <h3 className="mt-4 text-2xl font-bold tracking-tight">{audience.title}</h3>
        <p className={cn("mt-3 leading-7", dark ? "text-white/80" : "text-muted")}>{audience.description}</p>
        <ul className="mt-5 space-y-2 text-sm leading-6">
          {audience.examples.map((example) => (
            <li className="flex items-start gap-2" key={example}>
              <Check aria-hidden="true" className={cn("mt-1 h-4 w-4 shrink-0", dark ? "text-accent" : "text-accent-deep")} />
              <span className={dark ? "text-white/85" : "text-foreground/80"}>{example}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <span
            aria-hidden="true"
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg",
              dark ? "bg-accent text-on-accent shadow-accent/20" : "bg-brand text-on-brand shadow-brand/20",
            )}
          >
            <HeroIcon className="h-7 w-7" name={audience.iconName} />
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
