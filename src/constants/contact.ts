import type { HeroPillarId } from "../types/hero";
import type {
  ContactLocation,
  ContactPageCopy,
  ContactService,
  ErrandCustomerType,
  ErrandOption,
  ErrandService,
} from "../types/contact";
import { BRAND_NAME } from "./brand";
import { SERVICE_PAGES } from "./services";

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

export const ERRAND_CUSTOMER_TYPES: readonly ErrandOption<ErrandCustomerType>[] = [
  { value: "individual", label: "Individual" },
  { value: "family", label: "Family" },
  { value: "diaspora", label: "Nigerian in the diaspora" },
  { value: "professional", label: "Busy professional" },
  { value: "business", label: "Business" },
];

export const ERRAND_SERVICE_OPTIONS: readonly ErrandOption<ErrandService>[] = [
  ...SERVICE_PAGES.map(
    (service): ErrandOption<ErrandService> => ({ value: service.slug, label: `${BRAND_NAME} ${service.name}` }),
  ),
  { value: "unsure", label: "Not sure yet" },
];

export const CONTACT_PAGE_COPY: ContactPageCopy = {
  headline: "What can we take off your list?",
  intro: "Share a few details about the task. Your request will be prepared as a WhatsApp message to our business number.",
  bullets: [
    { iconName: "message-circle", label: "WhatsApp enquiries" },
    { iconName: "globe", label: "Local and diaspora customers" },
    { iconName: "receipt", label: "Clear costs before we begin" },
  ],
  formTitle: "Request an errand",
  requiredNote: "Fields marked * are required.",
  fields: {
    name: { label: "Your name *", placeholder: "Full name" },
    phone: { label: "Your phone / WhatsApp *", placeholder: "+234..." },
    customerType: { label: "I am a *", placeholder: "Choose one" },
    location: { label: "Errand location in Nigeria *", placeholder: "Area / city" },
    service: { label: "Service required *", placeholder: "Choose a service" },
    timing: { label: "When do you need it?", placeholder: "e.g. Friday afternoon" },
    details: { label: "Task details *", placeholder: "Describe the task and any instructions" },
  },
  selectRequired: "Please choose an option.",
  submitLabel: "Send via WhatsApp",
  successNote: "Your message is ready in WhatsApp.",
  fallbackLinkLabel: "If it did not open, tap here.",
  notConfigured: "WhatsApp requests are not configured yet. Set NEXT_PUBLIC_WHATSAPP_NUMBER to enable this form.",
};
