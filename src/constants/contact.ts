import type { HeroPillarId } from "../types/hero";
import type { ContactLocation, ContactService } from "../types/contact";

export const CONTACT_SERVICE_OPTIONS = [
  { value: "general", label: "General enquiry" },
  { value: "concierge", label: "Concierge & representation" },
  { value: "move", label: "Move & transportation" },
  { value: "stay", label: "Stay & accommodation" },
  { value: "home-care", label: "Home & lifestyle care" },
  { value: "shop", label: "Shop & procurement" },
] as const satisfies readonly { readonly value: ContactService; readonly label: string }[];

export const CONTACT_LOCATION_OPTIONS = [
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "port-harcourt", label: "Port Harcourt" },
  { value: "other-nigeria", label: "Another location in Nigeria" },
  { value: "international", label: "Outside Nigeria" },
] as const satisfies readonly { readonly value: ContactLocation; readonly label: string }[];

const CONTACT_SERVICE_BY_PILLAR: Record<HeroPillarId, ContactService> = {
  concierge: "concierge",
  move: "move",
  stay: "stay",
  home: "home-care",
  shop: "shop",
};

const CONTACT_LOCATION_BY_QUICK_REQUEST: Record<string, ContactLocation> = {
  lagos: "lagos",
  abuja: "abuja",
  ph: "port-harcourt",
  diaspora: "international",
  other: "other-nigeria",
};

export function getContactHref(service: HeroPillarId, location: string): string {
  const query = new URLSearchParams({
    service: CONTACT_SERVICE_BY_PILLAR[service],
    location: CONTACT_LOCATION_BY_QUICK_REQUEST[location] ?? "other-nigeria",
  });
  return `/contact?${query.toString()}`;
}

export const CONTACT_DEFAULTS = {
  service: "general" as ContactService,
  location: "lagos" as ContactLocation,
  message: "",
};
