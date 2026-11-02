import type {
  HeroCta,
  HeroIconName,
  HeroImage,
  HeroPillarLink,
  HeroProofCard,
  HeroTrustFact,
} from "../types/hero-home";
import type { ServiceSlug } from "../types/service";
import { BRAND_NAME } from "./brand";
import { SERVICE_PAGES } from "./services";

export const HERO_EYEBROW = "Your trusted partner for getting things done";
export const HERO_HEADLINE_LEAD = "Life gets busy.";
export const HERO_HEADLINE_TAIL = "We get things";
export const HERO_HEADLINE_UNDERLINED = "done.";
export const HERO_DESCRIPTION = `From everyday errands to important tasks back home, ${BRAND_NAME} helps you get things done with care, clear communication and dependable local support.`;

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

export const HERO_TRUST_FACTS: readonly HeroTrustFact[] = [
  { iconName: "check", label: "For Nigerians at home and across the world" },
];

export const HERO_PROOF_CARD: HeroProofCard = {
  title: "Property check complete",
  location: "Lekki, Lagos",
  meta: "14 photos · receipt attached",
  time: "2:40 pm",
};
export const HERO_PROOF_CHIP = "Verified on the ground";
export const HERO_PILLARS_HEADING = "Five ways we help";

const PILLAR_ICON_BY_SLUG: Record<ServiceSlug, HeroIconName> = {
  concierge: "shield-check",
  move: "car",
  stay: "building",
  "home-care": "sparkles",
  shop: "shopping-bag",
};

export const HERO_PILLARS: readonly HeroPillarLink[] = SERVICE_PAGES.map((service) => ({
  slug: service.slug,
  label: service.name,
  href: `/${service.slug}`,
  iconName: PILLAR_ICON_BY_SLUG[service.slug],
}));
