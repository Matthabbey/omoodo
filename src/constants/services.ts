import type { ServicePageData } from "../types/service";
import type { HeroPillarId } from "../types/hero";

/**
 * Detail photos (public/images/services/{slug}-detail.jpg) are real photographs from Pexels,
 * used under the Pexels licence (free for commercial use, no attribution required):
 * concierge 5673477, move 8425042, stay 7128482, home-care 4959878, shop 30689327,
 * events 32005355, gives 6646903 (https://www.pexels.com/photo/{id}/).
 */
export const SERVICE_PAGES: readonly ServicePageData[] = [
  {
    slug: "concierge",
    iconName: "concierge-bell",
    name: "Concierge",
    eyebrow: "Personal representation",
    headline: "Your trusted partner to get things done.",
    description:
      "Sometimes, you don't need a one-time service. You need someone you can trust to keep things handled for you.",
    imageSrc: "/images/hero/hero-concierge.jpg",
    imageAlt: "Ọmọ Ọdọ concierge inspecting a modern residence",
    detailImageSrc: "/images/services/concierge-detail.jpg",
    detailImageAlt: "A document envelope being handed across a desk",
    highlights: ["Property visits and updates", "Family and business support", "Clear communication"],
    detailHeading: "Peace of mind, handled personally.",
    detailDescription:
      "One dependable local partner coordinates your requests, shares clear updates, and follows through until the details are taken care of.",
  },
  {
    slug: "move",
    iconName: "car",
    name: "Move",
    eyebrow: "Mobility and transportation",
    headline: "Arrive comfortably. Travel confidently.",
    description:
      "Airport transfers, executive transport, and event travel arranged with dependable local coordination.",
    imageSrc: "/images/hero/hero-move.jpg",
    imageAlt: "Professional chauffeur beside an executive vehicle",
    detailImageSrc: "/images/services/move-detail.jpg",
    detailImageAlt: "A man in a suit holds an umbrella while opening the door of a black car outside a hotel",
    highlights: ["Airport pickup and drop-off", "Executive and event transport", "Professional chauffeurs"],
    detailHeading: "A smoother journey from pickup to arrival.",
    detailDescription:
      "We coordinate your journey around your schedule, share the details in advance, and stay available when plans change.",
  },
  {
    slug: "stay",
    iconName: "bed",
    name: "Stay",
    eyebrow: "Accommodation and travel",
    headline: "Feel at home, wherever you land.",
    description:
      "Discover considered stays and travel arrangements selected around comfort, convenience, and your plans.",
    imageSrc: "/images/hero/hero-stay.jpg",
    imageAlt: "Sunlit contemporary serviced apartment in Lagos",
    detailImageSrc: "/images/services/stay-detail.jpg",
    detailImageAlt: "A traveller packing a white suitcase on a bed in a stylish room",
    highlights: ["Serviced apartments and short-lets", "Curated hotel stays", "Travel coordination"],
    detailHeading: "The right stay makes all the difference.",
    detailDescription:
      "We help coordinate comfortable, well-suited accommodation and the details around your visit.",
  },
  {
    slug: "home-care",
    iconName: "house",
    name: "Home Care",
    eyebrow: "Home and lifestyle support",
    headline: "Make more room for what matters.",
    description:
      "From laundry and errands to trusted home support, everyday details are coordinated with care.",
    imageSrc: "/images/hero/hero-home.jpg",
    imageAlt: "Lifestyle assistant preparing a home-care delivery",
    detailImageSrc: "/images/services/home-care-detail.jpg",
    detailImageAlt: "A person carrying a white laundry basket of freshly folded clothes",
    highlights: ["Laundry pickup and delivery", "Errands and everyday help", "Coordinated home support"],
    detailHeading: "Everyday help, thoughtfully arranged.",
    detailDescription:
      "Tell us what would make your week easier. We coordinate the practical details and keep you informed along the way.",
  },
  {
    slug: "shop",
    iconName: "shopping-bag",
    name: "Shop",
    eyebrow: "Sourcing and procurement",
    headline: "Get what you need, with clarity.",
    description:
      "Personal shopping, business supplies, and event sourcing coordinated with transparent updates and receipts.",
    imageSrc: "/images/hero/hero-shop.jpg",
    imageAlt: "Procurement specialist checking selected items",
    detailImageSrc: "/images/services/shop-detail.jpg",
    detailImageAlt: "Two women choosing groceries together in a Lagos mini mart",
    highlights: ["Personal and business sourcing", "Event procurement", "Clear receipts and updates"],
    detailHeading: "Sourcing made straightforward.",
    detailDescription:
      "We help define what you need, coordinate local sourcing, and keep costs and progress clear throughout.",
  },
  {
    slug: "events",
    iconName: "calendar-heart",
    name: "Events",
    eyebrow: "Events and occasions",
    headline: "Your occasion, handled on the ground.",
    description:
      "Planning support, procurement, transport and vendor coordination, so the day runs the way you pictured it.",
    // Real photograph: Pexels photo 30156896 by Deji Prince (Lagos),
    // https://www.pexels.com/photo/elegant-candlelit-wedding-reception-table-decor-30156896/ (Pexels licence).
    imageSrc: "/images/hero/hero-events.jpg",
    imageAlt: "A long reception table set with candles, pink roses and gold-rimmed plates",
    detailImageSrc: "/images/services/events-detail.jpg",
    detailImageAlt: "A couple in traditional attire dancing under stage lights at a Nigerian wedding",
    highlights: ["Event planning support", "Vendor coordination and procurement", "Logistics and on-ground support"],
    detailHeading: "Be a guest at your own event.",
    detailDescription:
      "We coordinate the vendors, purchases and movement behind the occasion, and stay on the ground until the last detail is closed out.",
  },
  {
    slug: "gives",
    iconName: "heart-handshake",
    name: "Gives",
    eyebrow: "Giving and impact projects",
    headline: "Give with intention. See it delivered.",
    description:
      "We design, plan and carry out personal and community giving projects, and show you what your gift achieved.",
    // Photograph supplied by the business owner on 2026-11-12 (original file name "charity.jpg");
    // source and licence not yet recorded.
    imageSrc: "/images/hero/hero-gives-community.jpg",
    imageAlt: "A group of children smiling and laughing together outdoors",
    detailImageSrc: "/images/services/gives-detail.jpg",
    detailImageAlt: "Hands passing a cardboard box labelled food to a volunteer",
    highlights: ["Personal and celebration giving projects", "Widow and community support", "Planning, coordination and reporting"],
    detailHeading: "Generosity, carried through properly.",
    detailDescription:
      "Tell us who you want to reach and why. We plan the project, manage it on the ground, and send you the proof.",
  },
];

export const SERVICE_PATHS: Record<HeroPillarId, string> = {
  concierge: "/concierge",
  move: "/move",
  stay: "/stay",
  home: "/home-care",
  shop: "/shop",
} as const;

export function getServicePage(slug: ServicePageData["slug"]) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
