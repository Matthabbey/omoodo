import { BRAND_SITE_TITLE } from "../../constants/brand";
import { HeroSlider } from "./HeroSlider";

const HERO_HEADING_ID = "home-hero-heading";

export function HomeHero() {
  return (
    <section aria-labelledby={HERO_HEADING_ID} className="relative isolate bg-deep text-on-brand">
      <h1 className="sr-only" id={HERO_HEADING_ID}>
        {BRAND_SITE_TITLE}
      </h1>
      <HeroSlider />
    </section>
  );
}
