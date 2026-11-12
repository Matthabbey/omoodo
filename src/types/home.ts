import type { ReactNode } from "react";
import type { HeroCta, HeroIconName, HeroImage } from "./hero-home";
import type { ServiceSlug } from "./service";

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

/** A home service card lists what the service covers, or (Concierge) describes it in a short paragraph. */
export type HomeServiceCard =
  | { readonly slug: ServiceSlug; readonly points: readonly string[] }
  | { readonly slug: ServiceSlug; readonly summary: string };

/** An illustrative example of a typical request; never a customer testimonial. */
export interface HomeScenario {
  readonly id: string;
  readonly iconName: HeroIconName;
  readonly audience: string;
  readonly title: string;
  readonly story: string;
  readonly outcome: string;
  readonly link: HeroCta;
}

/** A customer review. Entries must be real and used with permission before they are published. */
export interface HomeReview {
  readonly id: string;
  readonly quote: string;
  readonly name: string;
  readonly location: string;
  readonly service: string;
}

export interface HomeReviewCardProps {
  readonly review: HomeReview;
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
