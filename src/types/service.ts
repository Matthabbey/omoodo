import type { HeroIconName } from "./hero-home";

export type ServiceSlug = "concierge" | "move" | "stay" | "home-care" | "shop" | "events" | "gives";

export interface ServiceCategoryItem {
  readonly label: string;
  /** Marks an item that is announced but not yet offered. */
  readonly comingSoon?: boolean;
}

export interface ServiceCategory {
  readonly id: string;
  readonly title: string;
  readonly iconName: HeroIconName;
  readonly items: readonly ServiceCategoryItem[];
}

/** Optional longer-form content a service page can carry on top of the standard template. */
export interface ServicePageExtras {
  /** Replaces the single overview description and tick list. */
  readonly overviewParagraphs: readonly string[];
  readonly categoriesHeading: string;
  readonly categories: readonly ServiceCategory[];
  readonly closing: { readonly heading: string; readonly emphasis: string };
}

export interface ServicePageData {
  readonly slug: ServiceSlug;
  readonly name: string;
  readonly iconName: HeroIconName;
  readonly eyebrow: string;
  readonly headline: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  /** Second photo shown beside the overview on the service page. */
  readonly detailImageSrc: string;
  readonly detailImageAlt: string;
  readonly highlights: readonly string[];
  readonly detailHeading: string;
  readonly detailDescription: string;
}
