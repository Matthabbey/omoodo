import { WHATSAPP_BASE_URL, WHATSAPP_ERRAND_GREETING } from "../constants/whatsapp";
import type { ErrandRequest } from "../types/contact";

export function buildWhatsAppHref(number: string, text: string): string {
  return `${WHATSAPP_BASE_URL}/${number}?text=${encodeURIComponent(text)}`;
}

export function buildErrandMessage(request: ErrandRequest): string {
  const lines = [
    WHATSAPP_ERRAND_GREETING,
    `Name: ${request.name}`,
    `Phone / WhatsApp: ${request.phone}`,
    `I am a: ${request.customerType}`,
    `Location: ${request.location}`,
    `Service: ${request.service}`,
  ];
  if (request.timing) lines.push(`When: ${request.timing}`);
  lines.push(`Details: ${request.details}`);
  return lines.join("\n");
}
