import type { ReactNode } from "react";
import type { HeroCta, HeroIconName } from "./hero-home";

export interface ServicePromise {
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly iconName: "radio" | "camera" | "receipt" | "shield";
}

export type ScrollRevealDelay = 0 | 1 | 2 | 3 | 4;

export interface ScrollRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly effect?: "rise" | "skew-left" | "skew-right" | "scale";
  readonly delay?: ScrollRevealDelay;
}

export type HomeAudienceId = "individuals" | "families" | "diaspora" | "professionals" | "businesses";

export interface HomeAudience {
  readonly id: HomeAudienceId;
  readonly title: string;
  readonly description: string;
  readonly iconName: HeroIconName;
  readonly examples: readonly string[];
  readonly cta: HeroCta;
  readonly eyebrow: string;
}

export interface HomeConnectionPoint {
  readonly x: number;
  readonly y: number;
}

export interface HomeConnectionRoute extends HomeConnectionPoint {
  readonly id: string;
  readonly path: string;
}

export interface HomeConnectionArt {
  readonly viewBox: string;
  readonly origin: HomeConnectionPoint;
  readonly routes: readonly HomeConnectionRoute[];
}
