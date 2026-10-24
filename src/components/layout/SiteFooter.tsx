import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border px-4 py-8 text-center text-xs text-muted sm:flex-row sm:px-6 sm:text-left lg:px-8">
      <p>Omoodo Concierge & Lifestyle Services · All rights reserved.</p>
      <Link className="font-semibold text-brand hover:text-brand-deep" href="/how-it-works">
        You tell us what needs doing. We help you get it done.
      </Link>
    </footer>
  );
}
