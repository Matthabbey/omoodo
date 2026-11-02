import type { HeroCta } from "../types/hero-home";
import type { HomeAudience, ServicePromise } from "../types/home";
import type { ServiceSlug } from "../types/service";
import { getContactHref } from "./contact";

export const HOME_INTRO_HEADLINE_LEAD = "A";
export const HOME_INTRO_HEADLINE_EMPHASIS = "trusted partner";
export const HOME_INTRO_HEADLINE_TAIL = "for the things you cannot always handle yourself.";

export const HOME_INTRO_PRIMARY_CTA: HeroCta = { label: "Tell us what you need", href: "/contact" };
export const HOME_INTRO_SECONDARY_CTA: HeroCta = { label: "See how it works", href: "/how-it-works" };

export const HOME_SERVICES_HEADER = {
  badge: "Five connected solutions",
  title: "One partner for the moving parts of modern life.",
  description: "Use one service for a specific need or combine them through Ọmọ Ọdọ Concierge for ongoing coordination.",
} as const;
export const HOME_SERVICES_LINK: HeroCta = { label: "See how it works", href: "/how-it-works" };
/** Sticky top offsets per stacked service card; each later card pins one rem lower so earlier cards peek above it. */
export const HOME_SERVICE_STACK_OFFSETS: Readonly<Record<ServiceSlug, string>> = {
  concierge: "top-20",
  move: "top-24",
  stay: "top-28",
  "home-care": "top-32",
  shop: "top-36",
};

export const HOME_AUDIENCES: readonly HomeAudience[] = [
  {
    id: "individuals",
    title: "Individuals",
    eyebrow: "Personal support",
    description: "Everyday tasks, arrangements and responsibilities handled with care.",
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
    title: "Families",
    eyebrow: "Family care",
    description: "Coordination for services, purchases and responsibilities for loved ones.",
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
    title: "Nigerians in the diaspora",
    eyebrow: "Our speciality",
    description: "A trusted presence on the ground that keeps you connected and involved.",
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
    title: "Busy professionals",
    eyebrow: "Delegation",
    description: "Dependable delegation when your time and attention are already committed.",
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
    title: "Businesses",
    eyebrow: "Operations",
    description: "Local coordination, procurement, representation and operational follow-through.",
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

export const HOME_SERVICE_PROMISES: readonly ServicePromise[] = [
  {
    title: "Clear updates",
    description: "Real-time milestone tracking, direct supervisor check-ins, and live progress at every stage.",
    badge: "LIVE MILESTONES",
    iconName: "radio",
  },
  {
    title: "Visible evidence",
    description: "Itemized receipts, time-stamped photographs, and signed completion records shared directly.",
    badge: "FORENSIC PROOF",
    iconName: "camera",
  },
  {
    title: "Transparent costs",
    description: "Third-party vendor procurement separated from Ọmọ Ọdọ management with zero markups.",
    badge: "ZERO MARKUP",
    iconName: "receipt",
  },
  {
    title: "Owned outcomes",
    description: "Accepted responsibilities backed by escrow and managed through to confirmed handover.",
    badge: "ESCROW SECURED",
    iconName: "shield",
  },
] as const;

export const HOME_PURPOSE = [
  {
    title: "Our vision",
    description: "To become a trusted partner for individuals, families and businesses who need reliable support, representation and coordination wherever they are.",
  },
  {
    title: "Our mission",
    description: "To make life easier through reliable, responsive and personalised support for responsibilities people may not have the time, presence or capacity to handle themselves.",
  },
] as const;
