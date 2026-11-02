import type { CulturalWatermarkArt } from "../types/cultural-watermark";
import type { HeroCta, HeroTrustFact } from "../types/hero-home";
import type {
  HowItWorksFeedItem,
  HowItWorksFeedTone,
  HowItWorksFeedToneClasses,
  HowItWorksHeadline,
} from "../types/how-it-works";

export const HOW_IT_WORKS_HEADING_ID = "how-it-works-heading";
export const HOW_IT_WORKS_STEPS_ID = "steps";

export const HOW_IT_WORKS_EYEBROW = "How it works";
export const HOW_IT_WORKS_HEADLINE: HowItWorksHeadline = {
  lead: "We make getting things handled",
  tail: "simple and",
  underlined: "transparent.",
};
export const HOW_IT_WORKS_DESCRIPTION =
  "From the first conversation to final confirmation, you always know what is happening and what comes next.";

export const HOW_IT_WORKS_PRIMARY_CTA: HeroCta = { label: "Tell us what you need", href: "/contact" };
export const HOW_IT_WORKS_SECONDARY_CTA: HeroCta = { label: "See the steps", href: `#${HOW_IT_WORKS_STEPS_ID}` };

export const HOW_IT_WORKS_TRUST_FACTS: readonly HeroTrustFact[] = [
  { iconName: "shield-check", label: "Clear quote before any work starts" },
  { iconName: "camera", label: "Photos and receipts as proof" },
];

export const HOW_IT_WORKS_FEED_CHIP = "Live job updates";
export const HOW_IT_WORKS_FEED_SR_TEXT =
  "Illustration of a job's live updates: request received, agent assigned, photos sent, then job completed with the receipt attached.";

/** Delay classes are literal strings so Tailwind generates the `--feed-delay` utilities. */
export const HOW_IT_WORKS_FEED_ITEMS: readonly HowItWorksFeedItem[] = [
  { iconName: "message-square", title: "Request received", meta: "Step 01 · 9:02 am", tone: "brand", delayClass: "[--feed-delay:0s]" },
  { iconName: "user-check", title: "Agent assigned", meta: "Quote approved · 9:15 am", tone: "brand", delayClass: "[--feed-delay:0.9s]" },
  { iconName: "camera", title: "Photos sent", meta: "On site · 11:40 am", tone: "brand", delayClass: "[--feed-delay:1.8s]" },
  {
    iconName: "receipt",
    title: "Job completed",
    meta: "Confirmed · 2:40 pm",
    tone: "accent",
    delayClass: "[--feed-delay:2.7s]",
    badge: "Receipt attached",
  },
];

export const HOW_IT_WORKS_FEED_TONES: Record<HowItWorksFeedTone, HowItWorksFeedToneClasses> = {
  brand: { dot: "bg-brand", disc: "bg-brand-soft text-brand" },
  accent: { dot: "bg-accent", disc: "bg-accent text-brand" },
};

export const HOW_IT_WORKS_FEED_ART: readonly CulturalWatermarkArt[] = [
  { id: "stepped-meander", placement: "bottom-right", color: "accent" },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Share the task, service or support you require.",
  },
  {
    number: "02",
    title: "We understand & plan",
    description:
      "We clarify the requirements, determine what is needed and provide a clear quotation or service arrangement.",
  },
  {
    number: "03",
    title: "We coordinate",
    description:
      "Once approved, we coordinate the appropriate people, providers and resources required for the assignment.",
  },
  {
    number: "04",
    title: "We keep you informed",
    description:
      "We provide timely updates throughout the process and communicate any changes or issues that require your attention.",
  },
  {
    number: "05",
    title: "We complete & confirm",
    description:
      "We follow through, confirm completion and provide relevant documentation, receipts, photos or other evidence where appropriate.",
  },
  {
    number: "06",
    title: "You have peace of mind",
    description:
      "You can focus on what matters while knowing that the responsibility is being properly handled.",
  },
] as const;

export const HOW_IT_WORKS_CARD_ART: readonly (readonly CulturalWatermarkArt[])[] = [
  [{ id: "diamond-weave", placement: "top-right", color: "brand" }],
  [{ id: "sunburst", placement: "bottom-left", color: "accent" }],
  [{ id: "chevron-braid", placement: "top-right", color: "african-green" }],
  [{ id: "stepped-meander", placement: "bottom-left", color: "african-gold" }],
  [{ id: "basket-weave", placement: "top-right", color: "accent" }],
  [{ id: "rosette", placement: "bottom-left", color: "brand" }],
];

export const HOW_IT_WORKS_CARD_STYLES = [
  { surface: "border-brand-accent bg-brand-soft/80", label: "text-brand-deep", node: "bg-brand text-on-brand" },
  { surface: "border-accent bg-accent-soft/80", label: "text-accent-deep", node: "bg-accent text-on-accent" },
  { surface: "border-culture-green bg-surface", label: "text-culture-green", node: "bg-culture-green text-on-brand" },
  { surface: "border-culture-gold bg-brand-soft/60", label: "text-accent-deep", node: "bg-culture-gold text-foreground" },
  { surface: "border-brand-accent bg-brand-soft/60", label: "text-brand-deep", node: "bg-brand-accent text-on-brand" },
  { surface: "border-brand bg-surface", label: "text-brand-deep", node: "bg-brand-deep text-on-brand" },
] as const;
