import * as React from "react";
import {
  ShieldCheck,
  Car,
  Building2,
  Sparkles,
  ShoppingBag,
} from "lucide-react";
import type { OmoodoSlideData } from "../types/hero-slider";

export const OMOODO_SLIDES: readonly OmoodoSlideData[] = [
  {
    id: 1,
    pillar: "concierge",
    category: "Omoodo Concierge · Trusted Local Partner",
    categoryIcon: <ShieldCheck className="h-4 w-4 text-brand-accent" />,
    headline: "You may be far away.",
    highlightText: "You don't have to be absent.",
    description:
      "Personalised on-the-ground representation, property checks, building supervision, family care, and dedicated follow-through across Nigeria.",
    primaryBtnText: "Request Concierge",
    primaryBtnHref: "/concierge",
    secondaryBtnText: "How We Work",
    secondaryBtnHref: "/how-it-works",
    badge: "100% Verified Local Ownership · Real-Time Updates & Receipts",
    imageSrc: "/images/hero/hero-concierge.jpg",
    imageAlt: "Professional Omoodo concierge inspecting a modern residence",
  },
  {
    id: 2,
    pillar: "move",
    category: "Omoodo Move · Mobility & Transportation",
    categoryIcon: <Car className="h-4 w-4 text-brand-accent" />,
    headline: "Arrive in comfort with",
    highlightText: "dependable mobility",
    description:
      "Airport pick-up and drop-off, luxury executive rentals, wedding fleets, and intercity travel with vetted professional chauffeurs.",
    primaryBtnText: "Book Mobility",
    primaryBtnHref: "/move",
    secondaryBtnText: "How We Work",
    secondaryBtnHref: "/how-it-works",
    badge: "24/7 Airport Reception · Luxury Executive Fleets",
    imageSrc: "/images/hero/hero-move.jpg",
    imageAlt: "Executive chauffeur welcoming a traveler beside a luxury SUV",
  },
  {
    id: 3,
    pillar: "stay",
    category: "Omoodo Stay · Accommodation & Travel",
    categoryIcon: <Building2 className="h-4 w-4 text-brand-accent" />,
    headline: "Curated comfort with",
    highlightText: "handpicked stays",
    description:
      "Boutique hotels, luxury serviced short-lets, and seamless travel reservations designed for relaxing family visits and productive business trips.",
    primaryBtnText: "Reserve a Stay",
    primaryBtnHref: "/stay",
    secondaryBtnText: "How We Work",
    secondaryBtnHref: "/how-it-works",
    badge: "5-Star Inspected Quality · Prime Safe Locations",
    imageSrc: "/images/hero/hero-stay.jpg",
    imageAlt: "Sunlit luxury contemporary serviced apartment in Lagos",
  },
  {
    id: 4,
    pillar: "home",
    category: "Omoodo Home · Home & Lifestyle Care",
    categoryIcon: <Sparkles className="h-4 w-4 text-accent" />,
    headline: "Reclaim your time with",
    highlightText: "everyday lifestyle care",
    description:
      "Scheduled laundry pick-up, home-service car wash, errands, and domestic support that eliminate stress so you can focus on what matters most.",
    primaryBtnText: "Arrange Home Care",
    primaryBtnHref: "/home-care",
    secondaryBtnText: "How We Work",
    secondaryBtnHref: "/how-it-works",
    badge: "Convenient Scheduled Pick-ups · Verified Domestic Support",
    imageSrc: "/images/hero/hero-home.jpg",
    imageAlt: "Friendly lifestyle assistant delivering pressed laundry",
  },
  {
    id: 5,
    pillar: "shop",
    category: "Omoodo Shop · Sourcing & Procurement",
    categoryIcon: <ShoppingBag className="h-4 w-4 text-brand-accent" />,
    headline: "Source and deliver with",
    highlightText: "transparent procurement",
    description:
      "Personal shopping, bulk household supplies, event procurement, and business supply runs coordinated with verified quality and clear receipts.",
    primaryBtnText: "Start Procurement",
    primaryBtnHref: "/shop",
    secondaryBtnText: "How We Work",
    secondaryBtnHref: "/how-it-works",
    badge: "Zero Markup on Vendor Costs · Clear Receipts Provided",
    imageSrc: "/images/hero/hero-shop.jpg",
    imageAlt: "Procurement specialist inspecting quality items for delivery",
  },
];

export const SLIDER_AUTOPLAY_INTERVAL_MS = 6000;
