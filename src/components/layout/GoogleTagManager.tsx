import Script from "next/script";
import { GTM_DATA_LAYER_BOOTSTRAP, GTM_SCRIPT_URL } from "../../constants/analytics";

/** Google Tag Manager install snippet, loaded once for every page from the root layout. */
export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-data-layer" strategy="afterInteractive">
        {GTM_DATA_LAYER_BOOTSTRAP}
      </Script>
      <Script id="gtm-container" src={GTM_SCRIPT_URL} strategy="afterInteractive" />
    </>
  );
}
