import type { HomeScenario } from "../types/home";
import type { SectionCopy } from "../types/home-copy";
import { BRAND_NAME } from "./brand";

export const HOME_SCENARIOS_COPY: SectionCopy = {
  eyebrow: "In practice",
  title: `Three ways people use ${BRAND_NAME}.`,
  description: "Examples of typical requests, not customer quotes.",
};
export const HOME_SCENARIO_TAG = "Example";

/**
 * Illustrative scenarios, not testimonials: no real customer is quoted. Every promise here
 * (photos, receipts, a quote before work, WhatsApp updates) is one the site already makes.
 * Replace with real, attributable reviews only when the business has them and permission to show them.
 */
export const HOME_SCENARIOS: readonly HomeScenario[] = [
  {
    id: "diaspora-property",
    iconName: "globe",
    audience: "Nigerians in the diaspora",
    title: "From London, a house in Lekki",
    story:
      "You have not seen your property in two years and the caretaker has gone quiet. We visit, walk every room, and send time-stamped photos the same day, with a quote for anything that needs fixing before any work starts.",
    outcome: "You see the house without booking a flight.",
    link: { label: `Explore ${BRAND_NAME} Concierge`, href: "/concierge" },
  },
  {
    id: "family-appointment",
    iconName: "users",
    audience: "Families",
    title: "A parent's appointment in Abuja",
    story:
      "Your mother has a hospital appointment and needs her prescriptions collected. We arrange the ride, wait with her, pick up the medication and message you when she is back home, receipts attached.",
    outcome: "Handled with the care you would bring yourself.",
    link: { label: `Explore ${BRAND_NAME} Home Care`, href: "/home-care" },
  },
  {
    id: "late-arrival",
    iconName: "car",
    audience: "Busy professionals",
    title: "Landing in Lagos at 9pm",
    story:
      "Your flight is late and you have a meeting at eight. A driver is already at arrivals with your name, the apartment is checked and ready, and the details were in your WhatsApp before you took off.",
    outcome: "You arrive, and everything is already arranged.",
    link: { label: `Explore ${BRAND_NAME} Move`, href: "/move" },
  },
];
