import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Home Care", description: getServicePage("home-care")?.description };

export default function HomeCarePage() {
  const service = getServicePage("home-care");
  if (!service) throw new Error("Home Care service content is not configured.");
  return <ServicePageContent service={service} />;
}
