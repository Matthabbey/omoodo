import type { HeroCta, HeroImage } from "../types/hero-home";
import { BRAND_NAME } from "./brand";

export const HERO_EYEBROW = "Your trusted partner to get things done.";
export const HERO_HEADLINE_LEAD = "Life gets busy.";
export const HERO_HEADLINE_TAIL = "We get things";
export const HERO_HEADLINE_UNDERLINED = "done.";
export const HERO_DESCRIPTION = `Whether you are across town or across the ocean, ${BRAND_NAME} is the friend who shows up, handles the task and sends you the proof.`;

export const HERO_PRIMARY_CTA: HeroCta = { label: "Request an errand", href: "/contact" };
export const HERO_SECONDARY_CTA: HeroCta = { label: "Explore services", href: "#services" };

/**
 * Real photograph, not an AI render.
 * Source: Pexels photo 6868623 by Kindel Media,
 * https://www.pexels.com/photo/man-delivering-parcels-6868623/
 * Licence: Pexels licence (free for commercial use, no attribution required).
 */
export const HERO_IMAGE: HeroImage = {
  src: "/images/hero/home-hero.jpg",
  alt: "A man hands a parcel and envelope to a smiling woman on a sunlit residential street.",
};
