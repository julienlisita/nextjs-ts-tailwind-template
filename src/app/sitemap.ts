// src/app/sitemap.ts

import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config/site';

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
};

// Public static pages. Dynamic pages (portfolio/[slug], recruitment/[slug]) can be added here if needed.
const entries: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/portfolio', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/events', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/testimonials', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/gallery', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/recruitment', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/reservations', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/legal/imprint', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/legal/term', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
