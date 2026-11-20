export const GTM_CONTAINER_ID = "GTM-5R9CCKKF";

export const GTM_SCRIPT_URL = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`;

/** Sets up the dataLayer queue the container reads from, exactly as Google's install snippet does. */
export const GTM_DATA_LAYER_BOOTSTRAP = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`;
