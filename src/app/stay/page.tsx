import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Stay" };

export default function StayPage() {
  const service = getServicePage("stay");
  if (!service) throw new Error("Stay service content is not configured.");
  return <ServicePageContent service={service} />;
}
