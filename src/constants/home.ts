import type { HeroCta } from "../types/hero-home";
import type { HomeAudience, HomePurpose } from "../types/home";
import type { ServiceSlug } from "../types/service";
import { getContactHref } from "./contact";

export const HOME_INTRO_HEADLINE_LEAD = "A";
export const HOME_INTRO_HEADLINE_EMPHASIS = "trusted partner";
export const HOME_INTRO_HEADLINE_TAIL = "for the things you cannot always handle yourself.";

export const HOME_INTRO_PRIMARY_CTA: HeroCta = { label: "Tell us what you need", href: "/contact" };
export const HOME_INTRO_SECONDARY_CTA: HeroCta = { label: "Who we help", href: "#audiences" };

export const HOME_SERVICES_HEADER = {
  badge: "02 · What we do",
  title: "One buddy. Five ways to show up.",
  description: "Start with the one you need today. Combine them through Concierge when you want one person keeping everything moving.",
} as const;
export const HOME_SERVICES_LINK: HeroCta = { label: "How we behave", href: "#values" };
/** Sticky top offsets per stacked service card; each later card pins one rem lower so earlier cards peek above it. */
export const HOME_SERVICE_STACK_OFFSETS: Readonly<Record<ServiceSlug, string>> = {
  concierge: "top-20",
  move: "top-24",
  stay: "top-28",
  "home-care": "top-32",
  shop: "top-36",
};

/**
 * Audience photos: real photographs from Unsplash, downloaded to public/images/audiences.
 * All are "Free to use under the Unsplash License" (free for commercial use, no attribution required).
 * - individuals.jpg: Adeniji Abdullahi A, https://unsplash.com/photos/_MExu0l-sCM
 * - families.jpg: Muhammad-Taha Ibrahim (Abuja, Nigeria), https://unsplash.com/photos/HfC8mUqulJ8
 * - diaspora.jpg: Vitaly Gariev, https://unsplash.com/photos/WNy6w1goBqo
 * - professionals.jpg: Christina @ wocintechchat.com, https://unsplash.com/photos/L85a1k-XqH8
 * - businesses.jpg: Blessing Olarewaju (Enugu, Nigeria), https://unsplash.com/photos/gsw3AP6I-EY
 */
export const HOME_AUDIENCES: readonly HomeAudience[] = [
  {
    id: "individuals",
    image: { src: "/images/audiences/individuals.jpg", alt: "A smiling young woman in a white T-shirt holds her phone with both hands." },
    title: "Individuals",
    eyebrow: "Personal support",
    description: "Your day has more on it than hours. We take the errands, pickups and follow-ups off your list.",
    iconName: "user",
    examples: [
      "Personal errands, shopping and deliveries",
      "Document collection and administrative follow-ups",
      "Time-sensitive bookings and special requests",
    ],
    cta: { label: "Request support for yourself", href: "/contact" },
  },
  {
    id: "families",
    image: { src: "/images/audiences/families.jpg", alt: "Three sisters in matching floral outfits look at a phone together outside a house in Abuja." },
    title: "Families",
    eyebrow: "Family care",
    description: "Someone you love needs something done. We handle it with the care you would bring yourself.",
    iconName: "house",
    examples: [
      "Support, purchases and appointments for parents",
      "Repairs and maintenance supervised on your behalf",
      "Family deliveries and event transportation",
    ],
    cta: { label: "Request support for your family", href: "/contact" },
  },
  {
    id: "diaspora",
    image: { src: "/images/audiences/diaspora.jpg", alt: "A Black businessman in a suit works on his laptop with earbuds in at a glass-walled cafe abroad." },
    title: "Nigerians in the diaspora",
    eyebrow: "Our speciality",
    description: "You are far, but your responsibilities are here. We are your eyes, hands and voice on the ground.",
    iconName: "globe",
    examples: [
      "Property checks with time-stamped photos",
      "Land title document and survey coordination",
      "Support and purchases for loved ones at home",
    ],
    cta: { label: "Request support from abroad", href: getContactHref("concierge", "diaspora") },
  },
  {
    id: "professionals",
    image: { src: "/images/audiences/professionals.jpg", alt: "A Black woman entrepreneur works on a laptop at an office desk." },
    title: "Busy professionals",
    eyebrow: "Delegation",
    description: "Your attention is already spoken for. Hand us the task and get it back finished.",
    iconName: "briefcase",
    examples: [
      "Airport pick-up, car hire and travel arrangements",
      "Laundry, car wash and everyday errands",
      "Hotel and apartment bookings handled end to end",
    ],
    cta: { label: "Delegate your next task", href: "/contact" },
  },
  {
    id: "businesses",
    image: { src: "/images/audiences/businesses.jpg", alt: "A Nigerian business owner stands in front of his store in Enugu with his arms crossed." },
    title: "Businesses",
    eyebrow: "Operations",
    description: "You need a local presence you can rely on. We coordinate, represent and follow through.",
    iconName: "building",
    examples: [
      "Vendor, supplier and procurement coordination",
      "Local site visits and business representation",
      "Bulk purchases and event procurement",
    ],
    cta: { label: "Request support for your business", href: getContactHref("concierge", "lagos") },
  },
];

export const HOME_PRICING_OPTIONS = [
  { title: "Fixed service fees", description: "For simple and predictable services." },
  { title: "Percentage-based fees", description: "For procurement, bookings and assignments where costs vary by scope." },
  { title: "Management fees", description: "For projects requiring supervision, coordination or ongoing oversight." },
  { title: "Concierge retainers", description: "For continuous, personalised support for people, families and businesses." },
] as const;

export const HOME_PURPOSE: readonly HomePurpose[] = [
  {
    id: "vision",
    title: "Our vision",
    description: "To become a trusted partner for individuals, families and businesses who need reliable support, representation and coordination wherever they are.",
  },
  {
    id: "mission",
    title: "Our mission",
    description: "To make life easier through reliable, responsive and personalised support for responsibilities people may not have the time, presence or capacity to handle themselves.",
  },
];
