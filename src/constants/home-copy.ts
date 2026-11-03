import type { FooterCopy, QuickFinderCopy, SectionCopy, ShowcaseCopy } from "../types/home-copy";
import { BRAND_NAME } from "./brand";

/**
 * Home page story. Each section is a numbered chapter that hands off to the
 * next: the hero makes the promise, 01-08 explain it (07 lives in faqs.ts), the footer signs off.
 */

export const AUDIENCES_SECTION_ID = "audiences";
export const VALUES_SECTION_ID = "values";

export const QUICK_FINDER_COPY: QuickFinderCopy = {
  formLabel: `${BRAND_NAME} quick service finder`,
  serviceLabel: "What needs doing?",
  locationLabel: "Where is it?",
  submitLabel: "Start my request",
};

export const HOME_INTRO_BADGE = "01 · Why we exist";
export const HOME_AUDIENCES_REGION_LABEL = "Who we show up for";

export const HOME_VALUES_COPY: SectionCopy = {
  eyebrow: "03 · How we behave",
  title: "Good service is personal.",
  description:
    "Showing up is only the start. These are the habits that make people hand us the keys, the documents and the family errands.",
};
export const HOME_VALUES_TITLE_EMPHASIS = "Trust is how we deliver it.";

export const HOME_HOW_IT_WORKS_COPY: SectionCopy = {
  eyebrow: "04 · What happens next",
  title: "From your message to your proof.",
  description: "Here is what happens after you tell us what you need.",
};

export const HOME_PRICING_COPY: SectionCopy = {
  eyebrow: "05 · What it costs",
  title: "You should understand what you are paying for.",
  description:
    `Pricing reflects the nature, complexity and duration of each assignment. Third-party costs are clearly separated from ${BRAND_NAME} fees.`,
};

export const HOME_PRICING_NOTE = "Quoted and approved before any work starts.";
/**
 * How long the outgoing pricing card takes to fly off the deck. Measured from
 * the reference recording (WhatsApp Video 2026-11-03 at 07.47.50): each fling
 * spans roughly 700 ms of motion.
 */
export const HOME_PRICING_FLING_MS = 500;

export const HOME_EXPERIENCE_COPY: SectionCopy = {
  eyebrow: "06 · What you'll see",
  title: "Confidence comes from",
  description:
    "Every assignment is built to leave a trail you can check: photos, receipts and a confirmed handover. These are standards, not testimonials.",
};
export const HOME_EXPERIENCE_TITLE_EMPHASIS = "visibility";

export const HOME_SHOWCASE_COPY: ShowcaseCopy = {
  chip: "Example assignment",
  title: "What a finished job looks like",
  location: "Lekki & Surulere, Lagos",
  proofLine: "Time-stamped photos · Itemised invoices · Zero markup",
  verdict: "Photos · Receipt · Confirmed handover",
  imageAlt: `A client reviewing photos and a receipt from a completed ${BRAND_NAME} assignment on a phone`,
};

export const HOME_FINAL_CTA_COPY: SectionCopy = {
  eyebrow: "08 · Your move",
  title: "Tell us what needs doing. We'll take it from here.",
  description: "One errand or ongoing support, it starts with a conversation.",
};

export const FOOTER_COPY: FooterCopy = {
  closingLine: "Wherever you are, you have a buddy on the ground.",
  rightsSuffix: "All rights reserved.",
};
