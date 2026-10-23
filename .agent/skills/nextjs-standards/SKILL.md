---
name: nextjs-standards
description: Apply when implementing, changing, or reviewing Omoodo features built with Next.js, including routing, rendering, data access, mutations, performance, and reusable UI.
---

# Next.js engineering standards

These standards apply to Next.js work across agents. Follow the repository root
[`AGENTS.md`](../../../AGENTS.md), the
[`code change workflow`](../../workflows/code-change.md), and the
[`Omoodo theme standards`](../omoodo-theme-standards/SKILL.md) for UI work.

## Start with the project

- Inspect `package.json`, the lockfile, the installed Next.js version, the
  existing router (`app/` or `pages/`), and nearby feature implementations
  before choosing an API or adding a pattern.
- Follow the router, framework version, React version, styling system, module
  aliases, and directory conventions already used by the app. Do not migrate
  routers or introduce a new architecture as part of an unrelated feature.
- Prefer official APIs supported by the installed version. Next.js caching,
  rendering, and server-action behavior can change between releases: do not
  assume a default, cargo-cult an older example, or add configuration without
  verifying its behavior for this project.
- Search for existing route helpers, data-access functions, validation
  schemas, UI primitives, and feature modules before creating new ones.

## Routing and feature organization

- Use file-system routes and layouts as the composition layer. Keep route
  entrypoints focused on route parameters, metadata, and composing the owning
  feature; keep domain rules and reusable data operations in appropriately
  scoped modules.
- Co-locate route-specific components and tests where that matches the
  existing structure. Put genuinely shared UI and domain logic in shared
  modules only when there is a clear second consumer or stable reuse case.
- Use route groups, parallel routes, intercepting routes, and catch-all
  segments only when their navigation or layout behavior is needed. Avoid
  structural complexity for naming alone.
- Make loading, not-found, and error boundaries intentional at the narrowest
  useful route segment. Preserve a usable surrounding layout when a nested
  feature fails.

## Server and client boundaries

- In the App Router, default to Server Components. Add `"use client"` only
  where browser APIs, local interactive state, effects, or client-only
  libraries require it.
- Keep client boundaries small and place them as low in the component tree as
  practical. Do not convert an entire page or layout to a Client Component for
  one interactive control.
- Pass only the data a client component needs. Do not pass server-only
  credentials, database clients, or secret-bearing objects across the
  boundary.
- Keep server-only data access and secrets in server modules. Use the
  framework's server-only guard where the project supports it.
- Do not add `"use server"` to components. Use Server Actions for appropriate
  server-side mutations, and Route Handlers for HTTP endpoints, webhooks, or
  external API contracts. Do not create an API route merely to fetch data from
  the same server-rendered page.

## Data access, mutations, and cache correctness

- Fetch data on the server when the feature does not require browser-side
  fetching. Keep network and database work near the feature that owns it, and
  avoid redundant requests and N+1 query patterns.
- Define loading, error, empty, and stale-data behavior explicitly. Use
  streaming or `Suspense` when it improves useful time-to-content; do not add
  boundaries that only complicate the interface.
- Choose caching and revalidation based on data freshness, user identity, and
  mutation behavior. Verify the installed version's semantics. Never cache
  private or user-specific data publicly or across users.
- After mutations, invalidate or refresh only the relevant paths or tagged
  data using supported framework APIs. Ensure the UI reflects the committed
  result and handles mutation failures.
- Validate all untrusted input at the server boundary with existing schemas or
  project validation patterns. Enforce authentication and resource-level
  authorization on every server action and route handler; hiding a control in
  the UI is not authorization.
- Return explicit, typed outcomes for expected validation or business-rule
  failures. Do not swallow unexpected exceptions or return success-shaped
  fallback data.

## Performance

- Optimize measured user-facing bottlenecks; avoid speculative memoization,
  premature abstraction, and broad client-side state.
- Reduce client JavaScript by keeping static content server-rendered, limiting
  client boundaries, and importing only what the feature uses.
- Avoid serial data waterfalls. Start independent server requests in parallel
  where dependencies allow, and await only the data needed for each streamed
  section.
- Use `next/image` or the project's established image component for suitable
  content images; provide meaningful alternative text, dimensions or a stable
  aspect ratio, and appropriate loading priority. Do not lazy-load the primary
  above-the-fold image.
- Use `next/font` or the existing font setup. Avoid remote font requests at
  runtime where the repository has a local or build-time font strategy.
- Use dynamic imports for substantial, non-critical client-only code when they
  measurably reduce initial bundle cost. Do not split every component or
  dynamically import server-rendered UI without a reason.
- Use pagination or incremental loading for genuinely large collections.
  Prefer backend filtering and sorting over downloading an unbounded dataset
  to the browser.
- Use `Link` for internal navigation and the framework's supported navigation
  and image primitives where appropriate. Avoid unnecessary client-side
  reimplementations of built-in behavior.

## Reusability and maintainability

- Reuse established UI components, hooks, schema validators, data-access
  helpers, and feature patterns before adding alternatives.
- Extract a component or helper when it has a clear responsibility, meaningful
  complexity, or real reuse. Avoid generic abstractions with speculative
  options and avoid duplicating a feature's domain rules across routes.
- Keep component props explicit and small. Prefer composition and domain-named
  types over boolean-heavy APIs and loosely typed configuration objects.
- Keep server and client logic separate where their runtime, dependency, or
  security requirements differ.
- Use TypeScript types that represent real domain contracts. Narrow untrusted
  values at boundaries. Never use explicit or implicit `any`; use `unknown`
  with validation and narrowing when values are not yet trusted.
- Put type declarations in the established `types/` folder or a dedicated
  `types` file, not in component or route implementation files. Put named
  feature and configuration constants in the established `constants/` folder
  or a dedicated `constants` file. Follow the feature's existing organization
  and avoid duplicating definitions.
- Keep each authored or modified source-code file, including tests, at 200
  physical lines or fewer; blank lines count. Generated, vendored, and lock
  files are excluded. Split code by responsibility when needed; do not minify
  or create arbitrary fragments to satisfy the limit.
- Keep dependencies minimal. Before adding a package, check whether the
  framework or an existing project dependency already provides the needed
  capability.

## UX, accessibility, metadata, and testing

- Follow the Omoodo theme standards for all visual design and use
  `app_scheme_images/` as the visual reference.
- Follow the documented Omoodo UI structure for every interface. Reuse theme
  tokens, shared components, and established feature patterns; do not create a
  parallel visual system.
- Use semantic HTML, labeled controls, keyboard-accessible interactions,
  visible focus, and appropriate status announcements. Do not use clickable
  non-interactive elements when a link or button is correct.
- Implement relevant loading, empty, error, success, disabled, and permission
  states. Keep forms usable with clear validation and preserved user input
  after recoverable errors.
- Provide route metadata using the installed version's supported metadata
  APIs. Set meaningful titles and descriptions, and avoid duplicating metadata
  when layouts already provide it.
- Add focused tests for domain behavior, validation, authorization, and
  important route or interaction behavior using the project's existing test
  setup.
- Run the focused tests and the relevant lint, type-check, and build commands
  defined by the repository. Confirm the scripts and framework version before
  selecting commands; report checks that could not be run.
