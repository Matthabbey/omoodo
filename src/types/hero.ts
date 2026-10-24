export type HeroPillarId = "concierge" | "move" | "stay" | "home" | "shop";

export interface HeroSlideCta {
  readonly label: string;
  readonly href: string;
}

export interface HeroSlideStat {
  readonly label: string;
  readonly value: string;
}

export interface HeroSlide {
  readonly id: HeroPillarId;
  readonly pillarLabel: string;
  readonly tagline: string;
  readonly headlinePrefix: string;
  readonly headlineHighlight: string;
  readonly headlineSuffix: string;
  readonly description: string;
  readonly primaryCta: HeroSlideCta;
  readonly secondaryCta: HeroSlideCta;
  readonly badge: string;
  readonly badgeSubtext: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly stat: HeroSlideStat;
}

export interface PillarTabItem {
  readonly id: HeroPillarId;
  readonly label: string;
  readonly shortDescription: string;
}

export type SlideDirection = "forward" | "backward";

export interface QuickRequestLocation {
  readonly value: string;
  readonly label: string;
}
