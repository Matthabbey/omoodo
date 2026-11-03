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

## WhatsApp contact

The `/contact` page is a single-step "Request an errand" form. Submitting it
opens WhatsApp with the answers prefilled as a message to the business number
in `NEXT_PUBLIC_WHATSAPP_NUMBER` (international format, digits only, for
example `2348012345678`). Set it in `.env.local` for development and in the
hosting environment for production. When it is unset the form disables its
submit button and explains why, and the floating "WhatsApp us" button is not
rendered. Nothing is sent to a backend.
