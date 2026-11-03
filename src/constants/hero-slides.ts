import type { HeroSlide } from "../types/hero-slides";
import type { ServiceSlug } from "../types/service";
import { BRAND_NAME, BRAND_TAGLINE } from "./brand";
import {
  HERO_DESCRIPTION,
  HERO_EYEBROW,
  HERO_HEADLINE_LEAD,
  HERO_HEADLINE_TAIL,
  HERO_HEADLINE_UNDERLINED,
  HERO_IMAGE,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
} from "./hero-home";
import { SERVICE_PAGES } from "./services";

export const HERO_SLIDE_INTERVAL_MS = 7000;
export const HERO_SLIDE_SWIPE_THRESHOLD_PX = 50;
export const HERO_SLIDER_LABEL = `${BRAND_NAME} highlights`;
/** Keeps heads in frame when a landscape photo fills a viewport-tall slide. */
export const HERO_SLIDE_DEFAULT_FOCAL = "object-[50%_15%]";

/** Short promise shown in each service's tab under the slider. */
const SERVICE_TAB_TITLES: Readonly<Record<ServiceSlug, string>> = {
  concierge: "Your presence on the ground",
  move: "Arrive with ease",
  stay: "Feel at home anywhere",
  "home-care": "Room for what matters",
  shop: "Sourced with clarity",
};

const LEAD_SLIDE: HeroSlide = {
  id: "lead",
  eyebrow: HERO_EYEBROW,
  headline: `${HERO_HEADLINE_LEAD} ${HERO_HEADLINE_TAIL}`,
  emphasis: HERO_HEADLINE_UNDERLINED,
  description: HERO_DESCRIPTION,
  image: HERO_IMAGE,
  tab: { kicker: "Start here", title: BRAND_TAGLINE },
  primaryCta: HERO_PRIMARY_CTA,
  secondaryCta: HERO_SECONDARY_CTA,
};

export const HERO_SLIDES: readonly HeroSlide[] = [
  LEAD_SLIDE,
  ...SERVICE_PAGES.map(
    (service): HeroSlide => ({
      id: service.slug,
      eyebrow: service.eyebrow,
      headline: service.headline,
      description: service.description,
      image: { src: service.imageSrc, alt: service.imageAlt },
      tab: { kicker: service.name, title: SERVICE_TAB_TITLES[service.slug] },
      primaryCta: { label: `Explore ${service.name}`, href: `/${service.slug}` },
      secondaryCta: HERO_PRIMARY_CTA,
    }),
  ),
];
