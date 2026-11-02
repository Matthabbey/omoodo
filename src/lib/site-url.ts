const LOCAL_SITE_URL = "http://localhost:3000";

/** Absolute site origin used for metadataBase so Open Graph and icon URLs resolve. */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return new URL(`https://${vercelProduction}`);

  return new URL(LOCAL_SITE_URL);
}
