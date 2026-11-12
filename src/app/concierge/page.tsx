import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Concierge", description: getServicePage("concierge")?.description };

export default function ConciergePage() {
  const service = getServicePage("concierge");
  if (!service) throw new Error("Concierge service content is not configured.");
  return <ServicePageContent service={service} />;
}
