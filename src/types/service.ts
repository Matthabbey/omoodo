export type ServiceSlug = "concierge" | "move" | "stay" | "home-care" | "shop";

export interface ServicePageData {
  readonly slug: ServiceSlug;
  readonly name: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly highlights: readonly string[];
  readonly detailHeading: string;
  readonly detailDescription: string;
}
