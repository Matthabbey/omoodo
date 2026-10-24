import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Move" };

export default function MovePage() {
  const service = getServicePage("move");
  if (!service) throw new Error("Move service content is not configured.");
  return <ServicePageContent service={service} />;
}
