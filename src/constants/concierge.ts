import type { ServicePageExtras } from "../types/service";
import { BRAND_NAME } from "./brand";

/** Concierge page copy, as supplied by the business owner. */
export const CONCIERGE_PAGE_EXTRAS: ServicePageExtras = {
  overviewParagraphs: [
    `${BRAND_NAME} Concierge is our personalised support and retainer service for individuals, families and businesses that require ongoing assistance, local representation, coordination and follow-through.`,
    `Whether you are managing responsibilities from another city, another state or another country, ${BRAND_NAME} Concierge provides a trusted presence on the ground.`,
  ],
  categoriesHeading: "What Concierge covers",
  categories: [
    {
      id: "home-property",
      title: "Home & Property",
      iconName: "house",
      items: [
        { label: "Property checks" },
        { label: "Repairs and maintenance coordination" },
        { label: "Supervision of service providers" },
        { label: "Building supervision", comingSoon: true },
        { label: "Property-related follow-ups" },
      ],
    },
    {
      id: "family-support",
      title: "Family Support",
      iconName: "users",
      items: [
        { label: "Arranging services and purchases" },
        { label: "Coordinating deliveries and appointments" },
        { label: "Supporting agreed family responsibilities" },
        { label: "Assistance with tasks for parents and loved ones" },
        { label: "Local coordination on behalf of family members" },
      ],
    },
    {
      id: "business-representation",
      title: "Business Representation",
      iconName: "building",
      items: [
        { label: "Local follow-ups and site visits" },
        { label: "Vendor and supplier coordination" },
        { label: "Procurement and sourcing" },
        { label: "Document collection and delivery" },
        { label: "Administrative support" },
        { label: "Local representation" },
      ],
    },
    {
      id: "project-logistics",
      title: "Project & Logistics Support",
      iconName: "map-pin",
      items: [
        { label: "Project monitoring and updates" },
        { label: "Coordination of multiple service providers" },
        { label: "Shipment and delivery coordination" },
        { label: "Local logistics support" },
        { label: "Seaport goods clearing and logistics" },
      ],
    },
    {
      id: "personal-assistance",
      title: "Personal Assistance",
      iconName: "user-check",
      items: [
        { label: "Special requests" },
        { label: "Time-sensitive tasks" },
        { label: "Local bookings and arrangements" },
        { label: "Shopping and purchases" },
        { label: "Personal coordination" },
        { label: "Other agreed support requiring a trusted person on ground" },
      ],
    },
  ],
  closing: {
    heading: `With ${BRAND_NAME} Concierge, you have a trusted partner on the ground, wherever you are.`,
    emphasis: "You may be far away. You don't have to be absent.",
  },
};
