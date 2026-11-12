import type { ServicePageExtras, ServiceSlug } from "../types/service";
import { CONCIERGE_PAGE_EXTRAS } from "./concierge";

/** Services whose page carries longer-form content on top of the standard template. */
export const SERVICE_PAGE_EXTRAS: Partial<Record<ServiceSlug, ServicePageExtras>> = {
  concierge: CONCIERGE_PAGE_EXTRAS,
};
