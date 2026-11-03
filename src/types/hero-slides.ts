import type { HeroCta, HeroImage } from "./hero-home";

export interface HeroSlideTab {
  readonly kicker: string;
  readonly title: string;
}

export interface HeroSlide {
  readonly id: string;
  readonly eyebrow: string;
  readonly headline: string;
  readonly emphasis?: string;
  readonly description: string;
  readonly image: HeroImage;
  /** Tailwind object-position class placing the photo's focal point; defaults keep faces in frame. */
  readonly focal?: string;
  readonly tab: HeroSlideTab;
  readonly primaryCta: HeroCta;
  readonly secondaryCta: HeroCta;
}
