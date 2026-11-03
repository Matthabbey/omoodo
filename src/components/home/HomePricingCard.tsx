import type { CSSProperties } from "react";
import { HOME_PRICING_NOTE } from "../../constants/home-copy";
import { cn } from "../../lib/utils";

interface HomePricingCardProps {
  readonly number: number;
  readonly title: string;
  readonly description: string;
  readonly className?: string;
  readonly ariaLabel?: string;
  readonly ariaHidden?: boolean;
  readonly style?: CSSProperties;
  readonly onAnimationEnd?: () => void;
}

export function HomePricingCard({ number, title, description, className, ariaLabel, ariaHidden, style, onAnimationEnd }: HomePricingCardProps) {
  return (
    <article
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      aria-roledescription={ariaHidden ? undefined : "slide"}
      className={cn(
        "relative rounded-2xl bg-surface px-6 pb-10 pt-16 text-foreground shadow-2xl shadow-deep/40 sm:px-14 sm:pb-14 sm:pt-20 lg:pl-28",
        className,
      )}
      onAnimationEnd={onAnimationEnd}
      style={style}
    >
      <span
        aria-hidden="true"
        className="absolute -top-10 left-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-deep bg-accent text-xl font-black text-on-accent shadow-lg sm:-top-12 sm:h-24 sm:w-24 sm:text-2xl lg:-left-10"
      >
        0{number}
      </span>
      <p className="text-xl leading-8 text-foreground sm:text-2xl sm:leading-9">{description}</p>
      <h3 className="mt-8 text-lg font-bold text-foreground sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm text-muted">{HOME_PRICING_NOTE}</p>
    </article>
  );
}
