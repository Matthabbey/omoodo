import { Compass, Target, type LucideIcon } from "lucide-react";
import { HOME_PURPOSE } from "../../constants/home";
import { cn } from "../../lib/utils";
import type { HomePurposeId, ScrollRevealDelay, ScrollRevealProps } from "../../types/home";
import { ScrollReveal } from "./ScrollReveal";

interface PurposeStyle {
  readonly icon: LucideIcon;
  readonly card: string;
  readonly disc: string;
  readonly title: string;
  readonly body: string;
  readonly effect: NonNullable<ScrollRevealProps["effect"]>;
  readonly delay: ScrollRevealDelay;
}

const PURPOSE_STYLES: Readonly<Record<HomePurposeId, PurposeStyle>> = {
  vision: {
    icon: Compass,
    card: "border-deep bg-deep text-on-brand shadow-xl shadow-deep/25",
    disc: "bg-accent text-on-accent",
    title: "text-accent",
    body: "text-white/85",
    effect: "skew-left",
    delay: 0,
  },
  mission: {
    icon: Target,
    card: "border-brand-accent/40 bg-brand-soft text-foreground shadow-xl shadow-brand/10",
    disc: "bg-brand text-on-brand",
    title: "text-brand",
    body: "text-foreground/80",
    effect: "skew-right",
    delay: 2,
  },
};

export function HomePurposeCards() {
  return (
    <div className="mt-16 border-t border-border pt-10">
      <ScrollReveal effect="rise">
        <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          What drives us
        </p>
      </ScrollReveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {HOME_PURPOSE.map((purpose) => {
          const style = PURPOSE_STYLES[purpose.id];
          const Icon = style.icon;
          return (
            <ScrollReveal delay={style.delay} effect={style.effect} key={purpose.id}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-9",
                  style.card,
                )}
              >
                <span aria-hidden="true" className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl transition-transform duration-700 group-hover:scale-125 motion-reduce:transition-none" />
                <span className="relative flex h-14 w-14 items-center justify-center">
                  <span aria-hidden="true" className={cn("absolute inset-0 animate-ping rounded-full opacity-30 motion-reduce:animate-none", style.disc)} />
                  <span className={cn("relative flex h-12 w-12 items-center justify-center rounded-2xl", style.disc)}>
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                </span>
                <h3 className={cn("relative mt-6 text-2xl font-bold tracking-tight sm:text-3xl", style.title)}>{purpose.title}</h3>
                <p className={cn("relative mt-4 text-lg leading-8", style.body)}>{purpose.description}</p>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
