import type { HomeServiceCard } from "../types/home";
import { BRAND_NAME } from "./brand";

/** Accessible name for the services section, which has no visible heading. */
export const HOME_SERVICES_SECTION_LABEL = `${BRAND_NAME} services`;
export const HOME_SERVICE_CARD_CTA = "Explore";
/** On desktop the first row holds this many wider cards; the remaining four sit on the second row. */
export const HOME_SERVICE_TOP_ROW_COUNT = 3;
/** A home card shows only the first few points so the photo has room; the service page lists them all. */
export const HOME_SERVICE_CARD_MAX_POINTS = 4;

/** Home service cards in display order. Title, category, photo and link come from the matching `SERVICE_PAGES` entry. */
export const HOME_SERVICE_CARDS: readonly HomeServiceCard[] = [
  {
    slug: "move",
    points: [
      "Airport pick-up and drop-off",
      "Luxury car rentals",
      "Wedding and event transportation",
      "Intrastate and interstate transportation arrangements",
      "Car hire and related transportation support",
    ],
  },
  {
    slug: "stay",
    points: [
      "Hotel bookings",
      "Apartment bookings",
      "Premium accommodation",
      "Travel-related reservations",
      "Local travel arrangements",
    ],
  },
  {
    slug: "home-care",
    points: [
      "Laundry pick-up and drop-off",
      "Home-service car wash",
      "Personal errands",
      "Shopping and everyday assistance",
      "Home service coordination",
    ],
  },
  {
    slug: "shop",
    points: [
      "Personal shopping",
      "Business purchases",
      "Bulk shopping",
      // "Event procurement",
      "Sourcing and procurement",
      "Delivery coordination",
    ],
  },
  {
    slug: "events",
    points: [
      "Event planning support",
      "Event procurement",
      "Wedding transportation",
      "Vendor coordination",
      "Event logistics and on-ground support",
    ],
  },
  {
    slug: "gives",
    points: [
      "Personal giving project design",
      "Birthday & celebration projects",
      "Widow support projects",
      "Community giving projects",
      "Project planning & coordination",
      "Legacy giving initiative management",
    ],
  },
  {
    slug: "concierge",
    summary: `You need someone you can trust to keep things handled for you. ${BRAND_NAME} Concierge is our personalised support and retainer service for individuals, families and businesses that require ongoing assistance, local representation, coordination and follow-through.`,
  },
];
