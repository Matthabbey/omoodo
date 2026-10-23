import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          aria-label="Omoodo home"
          className="text-2xl font-bold tracking-tight text-brand"
          href="/#home"
        >
          Omoodo<span className="text-accent">.</span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden gap-8 text-sm font-medium text-muted sm:flex"
        >
          <Link className="transition hover:text-brand" href="#foundation">
            Foundation
          </Link>
          <Link className="transition hover:text-brand" href="#principles">
            Principles
          </Link>
        </nav>
        <Link
          className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-on-brand transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          href="#principles"
        >
          Get started
        </Link>
      </header>

      <main className="min-h-screen bg-background text-foreground">
        <section
          aria-labelledby="hero-title"
          className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-12 sm:pt-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:pb-28"
          id="home"
        >
          <div>
            <p className="mb-6 inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand">
              A thoughtful start for Omoodo
            </p>
            <h1
              className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
              id="hero-title"
            >
              Build something that feels as good as it works.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              A clear, considered foundation for the features and experiences
              you will build next.
            </p>
            <Link
              className="mt-9 inline-flex rounded-full bg-brand px-6 py-3.5 font-semibold text-on-brand transition hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              href="#foundation"
            >
              Explore the foundation
            </Link>
          </div>

          <aside
            aria-label="Omoodo product principles"
            className="rounded-3xl bg-deep p-8 text-on-brand sm:p-10"
            id="foundation"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-soft">
              Made to grow
            </p>
            <p className="mt-8 text-3xl font-semibold leading-tight">
              A strong foundation makes room for better ideas.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-brand-deep">
                Fast by default
              </span>
              <span className="rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep">
                Typed with care
              </span>
              <span className="rounded-full bg-accent-soft px-4 py-2 text-sm font-semibold text-accent-deep">
                Built to reuse
              </span>
            </div>
          </aside>
        </section>

        <section
          aria-labelledby="principles-title"
          className="border-t border-border bg-surface py-16 sm:py-20"
          id="principles"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              The foundation
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              id="principles-title"
            >
              Thoughtful from the first line.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <article className="rounded-3xl border border-border bg-background p-6">
                <h3 className="text-xl font-semibold">Performance</h3>
                <p className="mt-3 leading-7 text-muted">
                  Server-first rendering and a lean client keep the experience
                  responsive.
                </p>
              </article>
              <article className="rounded-3xl border border-border bg-background p-6">
                <h3 className="text-xl font-semibold">Maintainability</h3>
                <p className="mt-3 leading-7 text-muted">
                  Clear feature boundaries make the codebase easier to extend
                  with confidence.
                </p>
              </article>
              <article className="rounded-3xl border border-border bg-background p-6">
                <h3 className="text-xl font-semibold">Consistency</h3>
                <p className="mt-3 leading-7 text-muted">
                  Shared theme tokens and reusable patterns keep every feature
                  recognizably Omoodo.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted lg:px-8">
        Omoodo · Thoughtfully built for what comes next.
      </footer>
    </>
  );
}
