import type { HeroCta, HeroImage } from "../types/hero-home";
import { BRAND_NAME, PRIMARY_CTA_LABEL } from "./brand";

export const HERO_EYEBROW = "Your Trusted Partner for Getting Things Done";
export const HERO_HEADLINE_LEAD = "Life gets busy.";
export const HERO_HEADLINE_TAIL = "We get things";
export const HERO_HEADLINE_UNDERLINED = "done.";
export const HERO_DESCRIPTION = `Whether you are across town or across the ocean, ${BRAND_NAME} is the friend who shows up, handles the task and sends you the proof.`;

export const HERO_PRIMARY_CTA: HeroCta = { label: PRIMARY_CTA_LABEL, href: "/contact" };
export const HERO_SECONDARY_CTA: HeroCta = { label: "Explore services", href: "#services" };

/**
 * Brand services graphic supplied by the business owner on 2026-11-12 (original file name
 * "Omoodo Renders Service Showcase.png"): a transparent cut-out of the team with five service labels.
 * Converted to WebP, with the baked-in "Omoodo Renders" strapline erased so the page's own headline is used.
 */
export const HERO_IMAGE: HeroImage = {
  src: "/images/hero/home-hero-renders.webp",
  alt: `${BRAND_NAME} team members in maroon polo shirts handling many tasks at once: on the phone with a suitcase, working on a laptop, relaxing in an armchair, carrying shopping bags and using a tablet, each labelled with a service.`,
};
/** Matches the graphic's 1671x941 pixels so the frame never crops it on small screens. */
export const HERO_IMAGE_ASPECT = "aspect-[1671/941]";
