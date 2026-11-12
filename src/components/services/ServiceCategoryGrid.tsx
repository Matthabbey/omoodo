import { SERVICE_COMING_SOON_LABEL } from "../../constants/service-page";
import type { ServiceCategory } from "../../types/service";
import { HeroIcon } from "../hero/HeroIcon";
import { Badge } from "../ui";

interface ServiceCategoryGridProps {
  readonly headingId: string;
  readonly heading: string;
  readonly categories: readonly ServiceCategory[];
}

/** The areas a service covers, one card per area with its own list. */
export function ServiceCategoryGrid({ headingId, heading, categories }: ServiceCategoryGridProps) {
  return (
    <section aria-labelledby={headingId} className="border-t border-border bg-brand-soft py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" id={headingId}>
          {heading}
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li className="rounded-3xl border border-border bg-surface p-6 shadow-sm" key={category.id}>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-on-brand">
                <HeroIcon className="h-5 w-5" name={category.iconName} />
              </span>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{category.title}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-foreground/85 marker:text-accent-deep">
                {category.items.map((item) => (
                  <li key={item.label}>
                    {item.label}
                    {item.comingSoon ? (
                      <Badge className="ml-2 align-middle" size="sm" variant="accent">
                        {SERVICE_COMING_SOON_LABEL}
                      </Badge>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
