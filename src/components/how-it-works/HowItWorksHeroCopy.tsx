import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  HOW_IT_WORKS_DESCRIPTION,
  HOW_IT_WORKS_EYEBROW,
  HOW_IT_WORKS_HEADING_ID,
  HOW_IT_WORKS_HEADLINE,
  HOW_IT_WORKS_PRIMARY_CTA,
  HOW_IT_WORKS_SECONDARY_CTA,
  HOW_IT_WORKS_TRUST_FACTS,
} from "../../constants/how-it-works";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui";
import { HeroIcon } from "../hero/HeroIcon";

export function HowItWorksHeroCopy() {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-brand">
        <span aria-hidden="true" className="h-0.5 w-8 shrink-0 rounded-full bg-accent" />
        {HOW_IT_WORKS_EYEBROW}
      </p>

      <h1
        className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        id={HOW_IT_WORKS_HEADING_ID}
      >
        {HOW_IT_WORKS_HEADLINE.lead}
        <br />
        {HOW_IT_WORKS_HEADLINE.tail}{" "}
        <span className="relative inline-block whitespace-nowrap text-brand">
          <span className="relative z-10">{HOW_IT_WORKS_HEADLINE.underlined}</span>
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0.5 h-2 rounded-full bg-accent/90 sm:bottom-1 sm:h-2.5 lg:h-3"
          />
        </span>
      </h1>

      <p className="mt-6 max-w-lg text-lg leading-8 text-muted">{HOW_IT_WORKS_DESCRIPTION}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          className={cn(buttonVariants({ variant: "brand", size: "lg" }), "font-bold")}
          href={HOW_IT_WORKS_PRIMARY_CTA.href}
        >
          {HOW_IT_WORKS_PRIMARY_CTA.label}
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "accent", size: "lg" }), "font-bold")}
          href={HOW_IT_WORKS_SECONDARY_CTA.href}
        >
          {HOW_IT_WORKS_SECONDARY_CTA.label}
          <ArrowDown aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-foreground/80">
        {HOW_IT_WORKS_TRUST_FACTS.map((fact) => (
          <li className="flex items-center gap-2" key={fact.label}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-deep">
              <HeroIcon className="h-3.5 w-3.5" name={fact.iconName} />
            </span>
            {fact.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
