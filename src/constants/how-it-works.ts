import type { CulturalWatermarkArt } from "../types/cultural-watermark";

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
  { surface: "border-accent bg-accent-soft/80", label: "text-accent-deep", node: "bg-accent text-on-brand" },
  { surface: "border-culture-green bg-surface", label: "text-culture-green", node: "bg-culture-green text-on-brand" },
  { surface: "border-culture-gold bg-brand-soft/60", label: "text-accent-deep", node: "bg-culture-gold text-foreground" },
  { surface: "border-brand-accent bg-brand-soft/60", label: "text-brand-deep", node: "bg-brand-accent text-on-brand" },
  { surface: "border-brand bg-surface", label: "text-brand-deep", node: "bg-brand-deep text-on-brand" },
] as const;
