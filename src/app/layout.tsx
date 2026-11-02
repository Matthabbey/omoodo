import type { Metadata } from "next";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { CustomScrollbars } from "../components/layout/CustomScrollbars";
import { BRAND_DESCRIPTION, BRAND_SITE_TITLE, BRAND_TITLE_TEMPLATE } from "../constants/brand";
import { getSiteUrl } from "../lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: BRAND_SITE_TITLE,
    template: BRAND_TITLE_TEMPLATE,
  },
  description: BRAND_DESCRIPTION,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <CustomScrollbars />
      </body>
    </html>
  );
}
