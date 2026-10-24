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
