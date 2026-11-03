import type { ReactNode } from "react";
import type { HeroCta, HeroIconName, HeroImage } from "./hero-home";

export type ScrollRevealDelay = 0 | 1 | 2 | 3 | 4;

export interface ScrollRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly effect?: "rise" | "skew-left" | "skew-right" | "scale";
  readonly delay?: ScrollRevealDelay;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export type HomePurposeId = "vision" | "mission";

export interface HomePurpose {
  readonly id: HomePurposeId;
  readonly title: string;
  readonly description: string;
}

export type HomeAudienceId = "individuals" | "families" | "diaspora" | "professionals" | "businesses";

export interface HomeAudience {
  readonly id: HomeAudienceId;
  readonly title: string;
  readonly description: string;
  readonly iconName: HeroIconName;
  readonly image: HeroImage;
  readonly examples: readonly string[];
  readonly cta: HeroCta;
  readonly eyebrow: string;
}
