// src/config/site.ts

const DEFAULT_SITE_URL = 'https://www.exemple.com';

/** Public base URL of the site (no trailing slash). Set NEXT_PUBLIC_SITE_URL in .env. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
