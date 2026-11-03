import { BRAND_SITE_ORIGIN } from "../constants/brand";

const LOCAL_SITE_URL = "http://localhost:3000";

/**
 * Absolute site origin used for metadataBase so Open Graph and icon URLs resolve.
 * Order: explicit NEXT_PUBLIC_SITE_URL, then Vercel's production URL, then the
 * brand's public origin for any other production host, and localhost in dev.
 * Link previews break silently if this ever resolves to localhost in production.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) return new URL(`https://${vercelProduction}`);

  if (process.env.NODE_ENV === "production") return new URL(BRAND_SITE_ORIGIN);

  return new URL(LOCAL_SITE_URL);
}
