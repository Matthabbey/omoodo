import type {
  HeroSlide,
  PillarTabItem,
  QuickRequestLocation,
} from "../types/hero";

export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: "concierge",
    pillarLabel: "Omoodo Concierge",
    tagline: "Personalised Retainer & Representation",
    headlinePrefix: "You may be far away.",
    headlineHighlight: "You don't have to be absent.",
    headlineSuffix: "Your trusted presence on the ground.",
    description:
      "From ongoing property checks and building supervision to caring for parents and managing local business representation, we take full ownership.",
    primaryCta: { label: "Request Concierge", href: "/concierge" },
    secondaryCta: { label: "How We Work", href: "/how-it-works" },
    badge: "Trusted On Ground",
    badgeSubtext: "Photos, receipts & real-time updates",
    imageSrc: "/images/hero/hero-concierge.jpg",
    imageAlt: "Professional Omoodo concierge inspecting a modern residence",
    stat: { value: "100%", label: "Verified Ownership" },
  },
  {
    id: "move",
    pillarLabel: "Omoodo Move",
    tagline: "Mobility & Transportation",
    headlinePrefix: "Arrive in comfort with",
    headlineHighlight: "dependable mobility",
    headlineSuffix: "across Nigeria.",
    description:
      "Airport pick-up and drop-off, luxury executive car rentals, wedding fleets, and intrastate travel arrangements managed with discretion.",
    primaryCta: { label: "Book Mobility", href: "/move" },
    secondaryCta: { label: "How We Work", href: "/how-it-works" },
    badge: "Executive Fleet",
    badgeSubtext: "Vetted professional chauffeurs",
    imageSrc: "/images/hero/hero-move.jpg",
    imageAlt: "Executive chauffeur welcoming a traveler beside a luxury SUV",
    stat: { value: "24/7", label: "Airport Reception" },
  },
  {
    id: "stay",
    pillarLabel: "Omoodo Stay",
    tagline: "Accommodation & Travel",
    headlinePrefix: "Curated comfort with",
    headlineHighlight: "handpicked stays",
    headlineSuffix: "and verified apartments.",
    description:
      "Boutique hotels, luxury serviced short-lets, and seamless travel arrangements designed for relaxing family visits and productive business trips.",
    primaryCta: { label: "Reserve a Stay", href: "/stay" },
    secondaryCta: { label: "How We Work", href: "/how-it-works" },
    badge: "Verified Stays",
    badgeSubtext: "Inspected for comfort & security",
    imageSrc: "/images/hero/hero-stay.jpg",
    imageAlt: "Sunlit luxury contemporary serviced apartment in Lagos",
    stat: { value: "5-Star", label: "Curated Quality" },
  },
  {
    id: "home",
    pillarLabel: "Omoodo Home",
    tagline: "Home & Lifestyle Support",
    headlinePrefix: "Reclaim your time with",
    headlineHighlight: "everyday lifestyle care",
    headlineSuffix: "handled with precision.",
    description:
      "Home-service car wash, scheduled laundry pick-up, errands, and domestic support that eliminate stress so you can focus on what matters most.",
    primaryCta: { label: "Arrange Home Care", href: "/home-care" },
    secondaryCta: { label: "How We Work", href: "/how-it-works" },
    badge: "Lifestyle Care",
    badgeSubtext: "Scheduled pick-up & delivery",
    imageSrc: "/images/hero/hero-home.jpg",
    imageAlt: "Friendly lifestyle assistant delivering pressed laundry",
    stat: { value: "Fast", label: "Turnaround Time" },
  },
  {
    id: "shop",
    pillarLabel: "Omoodo Shop",
    tagline: "Shopping & Procurement",
    headlinePrefix: "Source and deliver with",
    headlineHighlight: "transparent procurement",
    headlineSuffix: "for personal & business needs.",
    description:
      "Personal shopping, bulk household supplies, event procurement, and business supply runs coordinated with clear receipts and verified quality.",
    primaryCta: { label: "Start Procurement", href: "/shop" },
    secondaryCta: { label: "How We Work", href: "/how-it-works" },
    badge: "Clear Receipts",
    badgeSubtext: "Zero markup on vendor costs",
    imageSrc: "/images/hero/hero-shop.jpg",
    imageAlt: "Procurement specialist inspecting quality items for delivery",
    stat: { value: "0% Hidden", label: "Cost Transparency" },
  },
];

export const PILLAR_TABS: readonly PillarTabItem[] = [
  { id: "concierge", label: "Concierge", shortDescription: "Representation" },
  { id: "move", label: "Move", shortDescription: "Mobility" },
  { id: "stay", label: "Stay", shortDescription: "Accommodation" },
  { id: "home", label: "Home", shortDescription: "Lifestyle" },
  { id: "shop", label: "Shop", shortDescription: "Procurement" },
];

export const QUICK_REQUEST_LOCATIONS: readonly QuickRequestLocation[] = [
  { value: "lagos", label: "Lagos (Island & Mainland)" },
  { value: "abuja", label: "Abuja (FCT)" },
  { value: "ph", label: "Port Harcourt" },
  { value: "diaspora", label: "Diaspora / International" },
  { value: "other", label: "Other States" },
];

export const HERO_AUTOPLAY_DURATION_MS = 6000;
