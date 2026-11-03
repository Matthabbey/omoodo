import { MessageCircle } from "lucide-react";
import { WHATSAPP_FAB_LABEL, WHATSAPP_GREETING, WHATSAPP_NUMBER } from "../../constants/whatsapp";
import { buildWhatsAppHref } from "../../lib/whatsapp";

/**
 * Floating WhatsApp link shown on every page. Sits higher on large screens so
 * it clears the home hero's slider controls. Hidden when no number is set.
 */
export function WhatsAppFab() {
  if (!WHATSAPP_NUMBER) return null;
  return (
    <a
      aria-label={WHATSAPP_FAB_LABEL}
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-bold text-on-whatsapp shadow-lg shadow-deep/25 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:bottom-28 lg:right-8"
      href={buildWhatsAppHref(WHATSAPP_NUMBER, WHATSAPP_GREETING)}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
      {WHATSAPP_FAB_LABEL}
    </a>
  );
}
