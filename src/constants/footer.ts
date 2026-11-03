import type { FooterColumn } from "../types/footer";
import { buildWhatsAppHref } from "../lib/whatsapp";
import { FAQ_SECTION_ID } from "./faqs";
import { ABOUT_SECTION_ID } from "./navigation";
import { SERVICE_PAGES } from "./services";
import { WHATSAPP_FAB_LABEL, WHATSAPP_GREETING, WHATSAPP_NUMBER } from "./whatsapp";

const SERVICES_COLUMN: FooterColumn = {
  title: "Services",
  links: SERVICE_PAGES.map((service) => ({ label: service.name, href: `/${service.slug}` })),
};

const COMPANY_COLUMN: FooterColumn = {
  title: "Company",
  links: [
    { label: "About", href: `/#${ABOUT_SECTION_ID}` },
    { label: "How it works", href: "/how-it-works" },
    { label: "FAQs", href: `/#${FAQ_SECTION_ID}` },
    { label: "Contact", href: "/contact" },
  ],
};

const CONTACT_COLUMN: FooterColumn = {
  title: "Get in touch",
  links: [
    { label: "Request an errand", href: "/contact" },
    ...(WHATSAPP_NUMBER
      ? [{ label: WHATSAPP_FAB_LABEL, href: buildWhatsAppHref(WHATSAPP_NUMBER, WHATSAPP_GREETING), external: true }]
      : []),
  ],
};

export const FOOTER_COLUMNS: readonly FooterColumn[] = [SERVICES_COLUMN, COMPANY_COLUMN, CONTACT_COLUMN];

export const FOOTER_LOCATIONS = "Lagos · Abuja · Port Harcourt · Across Nigeria · For Nigerians abroad";
