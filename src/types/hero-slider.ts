import type { ReactNode } from "react";

export type OmoodoPillar = "concierge" | "move" | "stay" | "home" | "shop";

export interface OmoodoSlideData {
  readonly id: number;
  readonly pillar: OmoodoPillar;
  readonly category: string;
  readonly categoryIcon: ReactNode;
  readonly headline: string;
  readonly highlightText: string;
  readonly description: string;
  readonly primaryBtnText: string;
  readonly primaryBtnHref: string;
  readonly secondaryBtnText: string;
  readonly secondaryBtnHref: string;
  readonly badge: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
}
