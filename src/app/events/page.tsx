import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Events", description: getServicePage("events")?.description };

export default function EventsPage() {
  const service = getServicePage("events");
  if (!service) throw new Error("Events service content is not configured.");
  return <ServicePageContent service={service} />;
}
