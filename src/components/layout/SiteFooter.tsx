import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND_HOME_LABEL, BRAND_LEGAL_NAME, BRAND_TAGLINE } from "../../constants/brand";
import { FOOTER_COLUMNS, FOOTER_LOCATIONS } from "../../constants/footer";
import { FOOTER_COPY } from "../../constants/home-copy";
import { BrandMark } from "./BrandMark";
import { CopyrightYear } from "./CopyrightYear";

const FOOTER_LINK_CLASS =
  "text-sm font-medium text-white/75 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-deep";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-deep text-on-brand">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-12">
          <div className="max-w-sm">
            <Link aria-label={BRAND_HOME_LABEL} className="inline-flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/">
              <BrandMark inverted size="sm" />
            </Link>
            <p className="mt-5 text-lg font-semibold leading-7 text-on-brand">{FOOTER_COPY.closingLine}</p>
            <p className="mt-3 text-sm leading-6 text-white/65">{FOOTER_LOCATIONS}</p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-accent">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a className={`inline-flex items-center gap-1 ${FOOTER_LINK_CLASS}`} href={link.href} rel="noopener noreferrer" target="_blank">
                        {link.label}
                        <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link className={FOOTER_LINK_CLASS} href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {BRAND_LEGAL_NAME} · {FOOTER_COPY.rightsSuffix}
          </p>
          <p className="font-semibold text-accent">{BRAND_TAGLINE}</p>
        </div>
      </div>
    </footer>
  );
}
