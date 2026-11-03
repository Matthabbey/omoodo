import type { Metadata } from "next";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { CustomScrollbars } from "../components/layout/CustomScrollbars";
import { WhatsAppFab } from "../components/layout/WhatsAppFab";
import { BRAND_DESCRIPTION, BRAND_NAME, BRAND_SITE_TITLE, BRAND_TITLE_TEMPLATE } from "../constants/brand";
import { getSiteUrl } from "../lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: BRAND_SITE_TITLE,
    template: BRAND_TITLE_TEMPLATE,
  },
  description: BRAND_DESCRIPTION,
  alternates: { canonical: "/" },
  // The logo card beside this file (opengraph-image.jpg) is attached to every page automatically;
  // these fields give WhatsApp, iMessage, Slack and X the site name, type and locale they expect.
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_NG",
    url: "/",
    title: BRAND_SITE_TITLE,
    description: BRAND_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_SITE_TITLE,
    description: BRAND_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  // suppressHydrationWarning: browsers and extensions (Chrome iOS autofill, Grammarly) add attributes to <html>/<body> before React hydrates.
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppFab />
        <CustomScrollbars />
      </body>
    </html>
  );
}
