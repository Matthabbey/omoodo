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

## Contact submissions

Configure `CONTACT_BACKEND_URL` in the server environment with the backend
endpoint that accepts contact-request JSON. The Next.js `POST /api/contact`
route validates the form fields and forwards the request to that endpoint. The
form reports a configuration error rather than claiming success when the
backend URL is missing.

The form follows the customer-facing sections in
`app_scheme_images/Omoodo Service Request Form.pdf`. It supports multiple
service selections in a guided stepper, task checklists, conditional
service-specific detail steps, request overview, optional concierge-retainer
steps, update preferences, authorisation, and the customer declaration.

The forwarded JSON contains `name`, `email`, `phone`, `service` (primary
selection or `general`), `services` (all selected categories),
`serviceRequests` (selected tasks grouped by service), `location`, `message`,
and `details` (the supplied answers keyed by field). Service values are
`concierge`, `move`, `stay`, `home-care`, and `shop`; location values are
`lagos`, `abuja`, `port-harcourt`, `other-nigeria`, and `international`.
