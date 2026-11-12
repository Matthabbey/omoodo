import { BRAND_NAME, PRIMARY_CTA_LABEL } from "./brand";

export const SERVICE_BREADCRUMB_LABEL = "Breadcrumb";
export const SERVICE_BREADCRUMB_HOME = "Home";

export const SERVICE_SHARE_COPY = {
  heading: "Share",
  email: "Share by email",
  whatsapp: "Share on WhatsApp",
  copy: "Copy link",
  copied: "Link copied",
  copyFailed: "Could not copy the link",
} as const;

export const SERVICE_COMING_SOON_LABEL = "Coming soon";
export const SERVICE_OVERVIEW_CTA = PRIMARY_CTA_LABEL;
export const SERVICE_CLOSING_EYEBROW = `The ${BRAND_NAME} difference`;
export const SERVICE_CLOSING_LINK = { label: `How ${BRAND_NAME} works`, href: "/how-it-works" } as const;
