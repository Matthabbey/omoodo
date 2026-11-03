import { BRAND_NAME } from "./brand";

/** Business number in international format with digits only; empty when not configured. */
export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const WHATSAPP_BASE_URL = "https://wa.me";
export const WHATSAPP_GREETING = `Hello ${BRAND_NAME}, I'd like to ask about your services.`;
export const WHATSAPP_ERRAND_GREETING = `Hello ${BRAND_NAME}, I'd like to request an errand.`;
export const WHATSAPP_FAB_LABEL = "WhatsApp us";
