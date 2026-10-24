import type { Metadata } from "next";
import { ServicePageContent } from "../../components/services/ServicePageContent";
import { getServicePage } from "../../constants/services";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage() {
  const service = getServicePage("shop");
  if (!service) throw new Error("Shop service content is not configured.");
  return <ServicePageContent service={service} />;
}
