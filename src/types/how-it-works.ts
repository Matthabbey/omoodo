import type { HeroIconName } from "./hero-home";

export interface HowItWorksHeadline {
  /** First line of the headline. */
  readonly lead: string;
  /** Second line, before the underlined word. */
  readonly tail: string;
  /** Wine word rendered over the gold underline. */
  readonly underlined: string;
}

export type HowItWorksFeedTone = "brand" | "accent";

export interface HowItWorksFeedItem {
  readonly iconName: HeroIconName;
  readonly title: string;
  readonly meta: string;
  readonly tone: HowItWorksFeedTone;
  /**
   * Literal Tailwind arbitrary-property utility that sets `--feed-delay`,
   * e.g. "[--feed-delay:0.9s]". Must stay a literal so the scanner finds it.
   */
  readonly delayClass: string;
  readonly badge?: string;
}

export interface HowItWorksFeedToneClasses {
  readonly dot: string;
  readonly disc: string;
}
