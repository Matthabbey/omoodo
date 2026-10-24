import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-3 border-t border-border px-4 py-3 text-center text-xs text-muted sm:flex-row sm:gap-4 sm:px-6 sm:py-4 sm:text-left lg:px-8">
      <p>Omoodo Concierge & Lifestyle Services · All rights reserved.</p>
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <Link className="font-semibold text-brand hover:text-brand-deep" href="/contact">
          Contact us
        </Link>
        <Link className="font-semibold text-brand hover:text-brand-deep" href="/how-it-works">
          How it works
        </Link>
      </div>
    </footer>
  );
}
