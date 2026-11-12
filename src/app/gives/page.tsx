import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Gives", description: getServicePage("gives")?.description };

export default function GivesPage() {
  const service = getServicePage("gives");
  if (!service) throw new Error("Gives service content is not configured.");
  return <ServicePageContent service={service} />;
}
