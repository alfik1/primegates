// URL of the React (Vite) app that holds the inner pages.
// Local dev: set in web/.env.local (http://localhost:5173)
// Live site: falls back to the production sub-domain below.
export const CLIENT = process.env.NEXT_PUBLIC_CLIENT_URL || "https://app.primegategeneral.com";

// Public address of this home page
export const SITE_URL = "https://primegategeneral.com";