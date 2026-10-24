import type { Metadata } from "next";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { CustomScrollbars } from "../components/layout/CustomScrollbars";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Omoodo",
    template: "%s | Omoodo",
  },
  description: "Thoughtful concierge and lifestyle services, coordinated locally.",
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
