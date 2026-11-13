---
name: omoodo-theme-standards
description: Apply when designing or implementing any Omoodo frontend feature or interface, using the app scheme images as the visual reference.
---

# Omoodo theme standards

These standards are shared across agents. The root [`AGENTS.md`](../../../AGENTS.md)
sets the repository-wide requirements; the
[`UI change workflow`](../../workflows/ui-change.md) covers discovery and
verification.

## Visual source of truth

The brand is defined by the Ọmọ Ọdọ logo: a round emblem (smiling agent with a
headset over a maroon-and-gold map of Africa) and the maroon wordmark with the
tagline "Your reliable buddy". The emblem is checked in at
`public/images/brand/omoodo-mark.png`; the favicon, Apple touch icon, and
Open Graph image live beside `src/app/layout.tsx` as file-based metadata.

- The semantic color tokens in `src/app/globals.css` are the single source of
  truth for the palette. Read them before styling anything.
- The logo lockup (emblem + wordmark) is owned by
  `src/components/layout/BrandMark`; brand strings live in
  `src/constants/brand.ts`. Reuse them rather than re-typing the name.
- `app_scheme_images/` is referenced by older guidance but is not present in
  the repository. Do not block on it; the tokens and existing screens are the
  reference.

## Omoodo visual language

### Color

- Use the logo palette: deep maroon (`brand`, `brand-deep`) as the primary
  brand/action family, a lighter maroon-rose (`brand-accent`) for hover
  borders and icons, warm gold (`accent`) as the accent, very dark maroon
  (`deep`) for strong contrast panels and photo overlays, pale maroon and gold
  tints (`brand-soft`, `accent-soft`) for soft surfaces, and a warm, slightly
  maroon-tinted neutral scale (`foreground`, `muted`, `border`, `background`).
- Assign colors by semantic role, not by arbitrary preference: primary actions
  and links use `brand`; highlights and selected accents use gold; `deep`
  supports high-emphasis panels; pale tints separate surfaces without
  competing with content.
- Gold is light: use `text-accent` only on `deep`/maroon panels or as
  non-text decoration. On light surfaces use `text-accent-deep`, and put
  `text-on-accent` (not `text-on-brand`) on a `bg-accent` fill.
- `culture-green`, `culture-gold`, and `culture-red` are a separate
  Pan-African family for the cultural watermark art, not general accents.
- `whatsapp` / `on-whatsapp` are reserved for the WhatsApp hand-off action
  (the floating `WhatsAppFab` and nothing else); never use them as accents.
- Establish or reuse semantic theme tokens for those roles. Use the project's
  token mechanism rather than hard-coded hex/RGB/HSL values, arbitrary color
  utilities, raw palette classes, inline colors, or isolated `dark:` overrides.
- Reserve gradients for expressive promotional moments where they fit the
  references; do not make gradients the default surface treatment.
- Check text, icon, and control contrast against the actual token pair. Never
  use a palette swatch as text color without verifying readable contrast.

### Typography

- Use clear, confident display headings; readable medium-weight section
  titles; and calm, legible body and supporting text.
- The app uses the system `Segoe UI` stack defined by `--font-body`. Do not add
  or download a font solely on assumption; retain the established font unless
  the task explicitly includes a typography migration. The wordmark uses the
  dotted Yoruba letters in "Ọmọ Ọdọ"; keep source files UTF-8.
- Keep heading hierarchy, line-height, and text measure consistent. Use
  sentence case for product UI, concise labels, and readable line lengths.
  Avoid using oversized display type for dense dashboard content.

### Shape, spacing, and surfaces

- Favor spacious layouts, generous section separation, and a consistent spacing
  scale rather than dense decoration.
- Use softly rounded cards, image frames, search/filter controls, and pill
  buttons/tags, following the references. Reuse shared radius and spacing
  tokens; do not invent a new radius for each component.
- Keep app content on clean white or pale warm-neutral surfaces. Use borders,
  subtle tonal separation, and restrained elevation to define hierarchy;
  avoid heavy shadows and nested card-on-card layers.
- Keep content alignment and column gaps consistent. On smaller screens,
  collapse multi-column layouts in a clear reading order without horizontal
  overflow.

### Icons and imagery

- Follow the existing app icons: use a consistent, simple line-icon family
  (lucide-react) with aligned stroke weight and optical size.
- Prefer the project's existing icon package and shared icon wrappers. Do not
  mix emoji, unrelated icon packs, and custom glyphs as UI icons.
- Use imagery intentionally and consistently. Preserve a useful aspect ratio
  and focal point; use existing image assets where appropriate and do not
  distort people or product imagery.
- Hero and marketing photography must be real, licensed photographs (owned,
  or under the Pexels/Unsplash licence), never AI renders. Record the source
  and licence in a comment next to the image constant.
- Keep Omoodo identity in new UI: use `BrandMark` for the logo lockup and do
  not redraw or recolor the emblem.

## Reusable feature patterns

Use these as starting patterns, adapting them to the feature's user and task:

- **Marketing or discovery landing:** use a concise headline and supporting
  copy, one clear primary action, and a relevant image or illustration.
  The home hero (`HomeHero`) is a fixed single image, not a slider: the
  owner-supplied transparent cut-out of the team multitasking across the
  services, with its own service labels (the one exception to the
  licensed-photograph rule below). It sits uncropped (`object-contain`) on a
  `brand-soft` surface with no overlay. The promise sits in a row beneath it
  on the same `brand-soft` surface, with no divider and more space below
  than above: `accent-deep` eyebrow, compact dark `h1` with the last word in
  `brand` over a gold underline, one short `muted` paragraph, and the
  `primary` + `outline` buttons. The whole hero fills the screen below the
  header at every size. From `xl` the graphic scales to the space above the
  promise; on smaller screens the graphic keeps its own aspect ratio
  (`HERO_IMAGE_ASPECT`) centred in any spare height, and the hero grows
  taller than the screen rather than clipping. Copy and the image live in
  `src/constants/hero-home.ts`. Inner-page heroes (for example `/how-it-works`) use a split
  hero instead; when no licensed photograph exists, the right column is
  an illustrated, token-based visual built from existing patterns (`surface`
  cards, an `accent` progress line, CSS keyframes disabled under
  `prefers-reduced-motion`), never an AI render. Elsewhere, arrange text and
  imagery side by side on wide screens and stack them on narrow screens.
- **Service pages:** every service page uses `ServicePageContent`: a wide
  photo `ServiceBanner` under a `deep` gradient (top bar with a "Home >
  Service" breadcrumb and `ServiceShareLinks` for email, WhatsApp and copy
  link as `secondary` icon buttons; the `h1` headline and one lead paragraph
  over the photo), then `ServiceOverview` on the cream background (category
  line, "Ọmọ Ọdọ <service>" `h2`, description, tick list of what is covered,
  a `primary` button using the shared `PRIMARY_CTA_LABEL`, and a second licensed photo in a
  `rounded-3xl` frame), then a slim closing band linking to how it works.
  A service with longer content (`SERVICE_PAGE_EXTRAS`, currently Concierge)
  swaps the tick list for its own paragraphs and adds `ServiceCategoryGrid`
  on `brand-soft`: `surface` cards, each with a `brand` icon tile, an area
  title and a bullet list, with an `accent` "Coming soon" `Badge` where needed.
- **Example scenarios:** the home page's "In practice" section
  (`HomeScenariosSection`, before the FAQs) shows three `rounded-3xl` cards
  of typical requests, each tagged "Example" with an `accent` `Badge`. They
  are illustrations, never invented customer quotes; only add real reviews
  with a real source and permission, and keep examples labelled as examples.
- **Reviews:** `HomeReviewsSection` (quote cards: `accent` quote tile,
  `blockquote`, name, location and service) replaces the example scenarios
  on the live site only when `HOME_REVIEWS_PUBLISHED` in
  `src/constants/home-reviews.ts` is true. Set it to true only when every
  review is a real customer's words used with permission. Until then the
  drafts render in development only. The cards move in one endless row
  (`HomeReviewsMarquee`, `.animate-reviews-marquee`): it must pause on
  hover, on focus and with its pause/play button, expose each review to
  assistive technology once, and stand still as a hand-scrolled row under
  `prefers-reduced-motion`.
- **Section backgrounds:** a plain cream or `deep` section gets the faint
  triangle-weave `SIMPLE_WATERMARK_ART` via `CulturalWatermarks` (subtle, no
  corner medallions) behind `relative z-10` content. Photo heroes and
  banners carry no pattern.
- **Voice and narrative:** the home page reads as one story. The hero makes
  the promise, the service cards follow with no heading, and each later section carries
  a short unnumbered eyebrow ("Why we exist" … "Good to know" FAQs as native
  `details` disclosures, "Your move") and each hands off to the next, and the multi-column `SiteFooter`
  signs off with the tagline. "Buddy" is the brand voice word at the open and
  close; "trusted partner" is reserved for the purpose statement in the intro
  headline. Section copy lives in `src/constants/home-copy.ts` and
  `src/constants/home.ts`, never inline in components.
- **Search and browse:** present the search/filter controls as one coherent
  group, keep the main submit action visually prominent, and show results in
  consistent cards with scannable metadata and clear click targets.
- **Dashboard:** use stable, understandable navigation; prioritize the
  page-specific task; and group related actions or summaries. Avoid turning
  every item into a competing brightly colored tile.
- **Forms and onboarding:** use persistent labels, clear input affordances,
  logical grouping, visible selected states, concise validation, and one
  prominent forward action. Keep progress and recovery paths visible when
  relevant. The contact page is the reference form: a single-step
  `ContactRequestForm` beside a `deep` intro panel (`ContactIntroPanel`) that
  prepares a WhatsApp message (`buildErrandMessage`) instead of posting to a
  backend; required labels end in " *" and the page notes it.
- **Card rail:** the home "Why Ọmọ Ọdọ exists" section uses
  `HomeAudienceCarousel`: a horizontally scrolling, scroll-snap rail of tall
  `rounded-[2rem]` cards that alternate `deep` and `surface` tones. Each card
  has a dot eyebrow, title, description, a short example list, a large icon
  tile bottom-left and a round chevron link bottom-right; prev/next `Button`
  icon controls sit under the rail and disable at the ends. Reuse this pattern
  for any "lineup" of peers (audiences, products, services) rather than a
  static grid.
- **Service photo cards:** the home services section (`HomeServicesStory`,
  directly under the hero) is a grid (two columns at `sm`, one on phones; no
  sideways scrolling) of compact `HomeServiceCard`s, one per service in
  `HOME_SERVICE_CARDS` order, with no visible section heading. At `lg` all
  seven show at once as three wider cards on top and four below.
  Each is a `rounded-3xl` photo card (about 24rem tall at `lg`) whose photo
  shows clearly at the top and fades into the same `deep` gradient used by
  the hero and service banners, holding the gold category line, the white
  "Ọmọ Ọdọ <service>" title, a list of at most four bullets of what is covered (Concierge
  uses a short paragraph) and a small `primary` "Explore" pill to the service
  page.
- **Cards and tags:** make the information hierarchy obvious, keep repeated
  cards aligned, and use tags for compact secondary metadata—not as substitutes
  for headings or status text.
- **Actions:** every call to action pairs wine and yellow. The `primary`
  variant is yellow (`accent`) with wine (`brand`) text that flips to wine on
  hover (there is no separate `accent` variant); `brand` is solid wine with
  white text; `outline` is a wine outline that fills wine on hover;
  `secondary` is a translucent yellow pill for dark imagery. Use the `Button`
  primitive, or `buttonVariants` from `src/components/ui` on a `Link`, instead
  of hand-written pill classes. Every "start a request" action uses the one
  shared label, `PRIMARY_CTA_LABEL` in `src/constants/brand.ts`. The `deep`
  token is an alias of `brand-deep`, so the colour is defined once.

## Component and implementation rules

- Before coding, inspect the existing theme tokens, shared
  UI components in `src/components/ui/`, nearby feature implementations, and any
  project-specific design documentation.
- Base UI primitives are centralized in `src/components/ui/` (`Button`, `Badge`,
  `Input`, `Select`, `index.ts`). All updates or new UI components must import and
  reuse these canonical components rather than creating ad-hoc buttons, raw
  unstyled inputs, or native select elements.
- Reuse existing components and supported variants. If a needed token or
  primitive is missing, extend the canonical theme/component system in its
  established location; do not create a parallel theme or local design system.
- Keep styling in the project's established styling mechanism. Avoid inline
  visual styles and one-off component variants that duplicate shared behavior.
- Do not copy a screenshot wholesale or introduce unrelated layout changes
  while implementing a feature.
- Preserve accessibility and responsive behavior: semantic structure,
  keyboard operation, visible focus, accessible names and labels, adequate
  contrast, and touch-friendly controls.
- Implement relevant loading, empty, error, success, selected, disabled, and
  permission states with the same visual language.

## Documentation and checks

- Update the shared theme or component documentation when introducing a
  reusable pattern or changing a token.
- Run focused UI tests and the applicable checks required by the root
  [`AGENTS.md`](../../../AGENTS.md). Run theme audit/check scripts when the
  project defines them; confirm commands before use.
- In the handoff, note which reference patterns informed the feature and
  disclose any intentional visual deviation.
