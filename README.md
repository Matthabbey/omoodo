# Omoodo

A TypeScript and Next.js App Router foundation styled with Tailwind CSS and
Omoodo's shared visual theme.

## Getting started

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Use
`npm run lint` and `npm run typecheck` to check the project, and `npm run build`
to create a production build.

## Project structure

- `src/app/` contains the App Router entrypoints for the home page, service
  pages, and shared global theme.
- `src/components/services/` contains the shared service-page presentation.
- `src/constants/` and `src/types/` contain shared service content and types.
- `.agent/skills/` contains shared implementation and design standards.
- `app_scheme_images/` contains the Omoodo visual references.

Use the existing feature structure, shared theme tokens, and agent guidance
when adding new routes or UI.

## Link previews (shareable links)

Shared links show the logo card in `src/app/opengraph-image.jpg`. Messaging
apps fetch that image from an absolute URL built from `metadataBase`, so the
site must know its public origin. Production builds default to
`BRAND_SITE_ORIGIN` in `src/constants/brand.ts` (https://omoodong.com); on
Vercel the production URL is picked up automatically, and
`NEXT_PUBLIC_SITE_URL` overrides both (for example for a staging domain).
If the domain ever changes, update `BRAND_SITE_ORIGIN` or set the variable;
if the origin resolved to `localhost`, previews would show no logo. Previews from a dev or LAN URL cannot
work, because WhatsApp cannot reach your machine. WhatsApp also caches a
link's preview, so test with a URL it has not seen before (add `?v=2`).

## WhatsApp contact

The `/contact` page is a single-step "Request an errand" form. Submitting it
opens WhatsApp with the answers prefilled as a message to the business number
in `NEXT_PUBLIC_WHATSAPP_NUMBER` (international format, digits only, for
example `2348012345678`). Set it in `.env.local` for development and in the
hosting environment for production. When it is unset the form disables its
submit button and explains why, and the floating "WhatsApp us" button is not
rendered. Nothing is sent to a backend.
