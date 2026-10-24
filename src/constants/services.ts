import type { ServicePageData } from "../types/service";
import type { HeroPillarId } from "../types/hero";

export const SERVICE_PAGES: readonly ServicePageData[] = [
  {
    slug: "concierge",
    name: "Concierge",
    eyebrow: "Personal representation",
    headline: "A trusted presence, wherever you are.",
    description:
      "From property checks to family support, we take thoughtful ownership of the important things happening on the ground.",
    imageSrc: "/images/hero/hero-concierge.jpg",
    imageAlt: "Omoodo concierge inspecting a modern residence",
    highlights: ["Property visits and updates", "Family and business support", "Clear communication"],
    detailHeading: "Peace of mind, handled personally.",
    detailDescription:
      "One dependable local partner coordinates your requests, shares clear updates, and follows through until the details are taken care of.",
  },
  {
    slug: "move",
    name: "Move",
    eyebrow: "Mobility and transportation",
    headline: "Arrive comfortably. Travel confidently.",
    description:
      "Airport transfers, executive transport, and event travel arranged with dependable local coordination.",
    imageSrc: "/images/hero/hero-move.jpg",
    imageAlt: "Professional chauffeur beside an executive vehicle",
    highlights: ["Airport pickup and drop-off", "Executive and event transport", "Professional chauffeurs"],
    detailHeading: "A smoother journey from pickup to arrival.",
    detailDescription:
      "We coordinate your journey around your schedule, share the details in advance, and stay available when plans change.",
  },
  {
    slug: "stay",
    name: "Stay",
    eyebrow: "Accommodation and travel",
    headline: "Feel at home, wherever you land.",
    description:
      "Discover considered stays and travel arrangements selected around comfort, convenience, and your plans.",
    imageSrc: "/images/hero/hero-stay.jpg",
    imageAlt: "Sunlit contemporary serviced apartment in Lagos",
    highlights: ["Serviced apartments and short-lets", "Curated hotel stays", "Travel coordination"],
    detailHeading: "The right stay makes all the difference.",
    detailDescription:
      "We help coordinate comfortable, well-suited accommodation and the details around your visit.",
  },
  {
    slug: "home-care",
    name: "Home Care",
    eyebrow: "Home and lifestyle support",
    headline: "Make more room for what matters.",
    description:
      "From laundry and errands to trusted home support, everyday details are coordinated with care.",
    imageSrc: "/images/hero/hero-home.jpg",
    imageAlt: "Lifestyle assistant preparing a home-care delivery",
    highlights: ["Laundry pickup and delivery", "Errands and everyday help", "Coordinated home support"],
    detailHeading: "Everyday help, thoughtfully arranged.",
    detailDescription:
      "Tell us what would make your week easier. We coordinate the practical details and keep you informed along the way.",
  },
  {
    slug: "shop",
    name: "Shop",
    eyebrow: "Sourcing and procurement",
    headline: "Get what you need, with clarity.",
    description:
      "Personal shopping, business supplies, and event sourcing coordinated with transparent updates and receipts.",
    imageSrc: "/images/hero/hero-shop.jpg",
    imageAlt: "Procurement specialist checking selected items",
    highlights: ["Personal and business sourcing", "Event procurement", "Clear receipts and updates"],
    detailHeading: "Sourcing made straightforward.",
    detailDescription:
      "We help define what you need, coordinate local sourcing, and keep costs and progress clear throughout.",
  },
];

export const SERVICE_PATHS: Record<HeroPillarId, string> = {
  concierge: "/concierge",
  move: "/move",
  stay: "/stay",
  home: "/home-care",
  shop: "/shop",
} as const;

export const SERVICE_OPTIONS = [
  { value: "concierge", label: "Omoodo Concierge · Property & Representation" },
  { value: "move", label: "Omoodo Move · Mobility & Airport Transfers" },
  { value: "stay", label: "Omoodo Stay · Serviced Apartments & Stays" },
  { value: "home", label: "Omoodo Home · Laundry & Lifestyle Support" },
  { value: "shop", label: "Omoodo Shop · Sourcing & Procurement" },
] as const satisfies readonly { value: HeroPillarId; label: string }[];

export function getServicePage(slug: ServicePageData["slug"]) {
  return SERVICE_PAGES.find((service) => service.slug === slug);
}
