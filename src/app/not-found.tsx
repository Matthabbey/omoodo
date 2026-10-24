import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative isolate grid min-h-[calc(100dvh-9rem)] place-items-center overflow-hidden bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-brand-soft/70 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent-soft/70 blur-3xl" />
      </div>
      <section className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
          Omoodo Concierge & Lifestyle Services
        </p>
        <p aria-hidden="true" className="mt-6 text-8xl font-black leading-none tracking-tight text-brand sm:text-9xl">
          404
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          We can’t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted sm:text-lg">
          The page may have moved, or the address might be incorrect. Let’s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold leading-none text-on-brand transition hover:bg-brand-deep [&_svg]:shrink-0"
            href="/"
          >
            <Home aria-hidden="true" className="h-4 w-4" />
            Go to homepage
          </Link>
          <Link
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-semibold leading-none text-foreground transition hover:border-brand-accent hover:bg-brand-soft hover:text-brand-deep [&_svg]:shrink-0"
            href="/contact"
          >
            Contact support <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <Link className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-brand" href="/">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Omoodo
        </Link>
      </section>
    </main>
  );
}
