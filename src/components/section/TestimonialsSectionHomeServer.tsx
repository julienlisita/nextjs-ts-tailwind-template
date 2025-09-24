// src/components/sections/TestimonialsSectionHomeServer.tsx

import TestimonialsSectionHome from './TestimonialsSectionHome';
import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';

export default async function TestimonialsSectionHomeServer() {
  const LIMIT = 2;
  const onlyFeatured = false;

  const all = await getPublicTestimonialsServer();

  let filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
  if (filtered.length === 0) filtered = all;

  const items = filtered.slice(0, LIMIT);
  return <TestimonialsSectionHome items={items} />;
}
