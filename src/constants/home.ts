export const HOME_AUDIENCES = [
  { title: "Individuals", description: "Everyday tasks, arrangements and responsibilities handled with care." },
  { title: "Families", description: "Coordination for services, purchases and responsibilities for loved ones." },
  { title: "Nigerians in the diaspora", description: "A trusted presence on the ground that keeps you connected and involved." },
  { title: "Busy professionals", description: "Dependable delegation when your time and attention are already committed." },
  { title: "Businesses", description: "Local coordination, procurement, representation and operational follow-through." },
] as const;

export const HOME_PRICING_OPTIONS = [
  { title: "Fixed service fees", description: "For simple and predictable services." },
  { title: "Percentage-based fees", description: "For procurement, bookings and assignments where costs vary by scope." },
  { title: "Management fees", description: "For projects requiring supervision, coordination or ongoing oversight." },
  { title: "Concierge retainers", description: "For continuous, personalised support for people, families and businesses." },
] as const;

import type { ServicePromise } from "../types/home";
import type { ServiceSlug } from "../types/service";

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
    description: "Third-party vendor procurement separated from Omoodo management with zero markups.",
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


export const HOME_SERVICE_CAPABILITIES: Record<ServiceSlug, readonly string[]> = {
  concierge: [
    "Property checks and property-related follow-ups",
    "Repairs, maintenance and service-provider supervision",
    "Building supervision (coming soon)",
    "Land title document and survey coordination",
    "Family purchases, deliveries and appointments",
    "Support for parents and loved ones",
    "Local site visits and business representation",
    "Vendor, supplier and procurement coordination",
    "Document collection, delivery and administrative support",
    "Time-sensitive tasks, bookings and special requests",
  ],
  move: [
    "Airport pick-up and drop-off",
    "Luxury car rentals",
    "Wedding and event transportation",
    "Intrastate and interstate arrangements",
    "Car hire and related transportation support",
  ],
  stay: [
    "Hotel bookings",
    "Apartment bookings",
    "Premium accommodation",
    "Travel-related reservations",
    "Local travel arrangements",
  ],
  "home-care": [
    "Laundry pick-up and drop-off",
    "Home-service car wash",
    "Personal errands",
    "Shopping and everyday assistance",
  ],
  shop: [
    "Personal and bulk shopping",
    "Business purchases",
    "Event procurement",
    "Sourcing and procurement",
    "Delivery coordination",
  ],
};
