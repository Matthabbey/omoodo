import type { HomeReview } from "../types/home";
import type { SectionCopy } from "../types/home-copy";
import { BRAND_NAME } from "./brand";

/**
 * Set to true ONLY once every entry in HOME_REVIEWS is a real customer's words, used with their
 * permission. While false, the live site shows the labelled example scenarios instead and the
 * drafts below are visible in development only.
 */
export const HOME_REVIEWS_PUBLISHED = false;

export const HOME_REVIEWS_COPY: SectionCopy = {
  eyebrow: "Reviews",
  title: "What our customers say.",
  description: `People who handed ${BRAND_NAME} something that mattered, in their own words.`,
};

export const HOME_REVIEWS_REGION_LABEL = "Customer reviews";
export const HOME_REVIEWS_PAUSE_LABEL = "Pause the moving reviews";
export const HOME_REVIEWS_PLAY_LABEL = "Play the moving reviews";

/** Seconds for the review row to travel half its length, which is one full loop. */
export const HOME_REVIEWS_SCROLL_SECONDS = 50;

/** How many times the list is repeated in the moving row. Keep it even: the loop slides by half the row. */
export const HOME_REVIEWS_TRACK_COPIES = 4;

/** DRAFTS written as layout samples, not real customer statements. Replace quote, name, location and service. */
export const HOME_REVIEWS: readonly HomeReview[] = [
  {
    id: "review-1",
    quote: `I had not seen my house in Lekki for two years. ${BRAND_NAME} sent me photos of every room the same day, with a quote before touching anything. For the first time I felt like I was actually there.`,
    name: "Customer name",
    location: "London",
    service: "Concierge",
  },
  {
    id: "review-2",
    quote:
      "They took my mother to her appointment, waited with her, collected her medication and sent me the receipts. I was at work in another city and did not have to worry once.",
    name: "Customer name",
    location: "Abuja",
    service: "Home Care",
  },
  {
    id: "review-3",
    quote:
      "My flight landed late and the driver was already waiting with my name. The apartment was ready and everything had been sent to my WhatsApp before I took off. I have used them on every trip since.",
    name: "Customer name",
    location: "Lagos",
    service: "Move and Stay",
  },
];
