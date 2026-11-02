import Link from "next/link";
import { HERO_PILLARS, HERO_PILLARS_HEADING } from "../../constants/hero-home";
import { HeroIcon } from "./HeroIcon";

export function HeroPillarRow() {
  return (
    <nav aria-label="Our services" className="mt-10 hidden lg:block">
      <p className="inline-flex rounded-full border border-border bg-surface/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand backdrop-blur-sm">
        {HERO_PILLARS_HEADING}
      </p>
      <ul className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {HERO_PILLARS.map((pillar) => (
          <li className="shrink-0" key={pillar.slug}>
            <Link
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-brand hover:bg-brand hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              href={pillar.href}
            >
              <HeroIcon className="h-4 w-4 text-brand transition group-hover:text-accent" name={pillar.iconName} />
              {pillar.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
