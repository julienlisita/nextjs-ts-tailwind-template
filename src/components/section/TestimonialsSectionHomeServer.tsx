// src/components/sections/TestimonialsSectionHomeServer.tsx

import TestimonialsSectionHome from './TestimonialsSectionHome';
import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';

type Props = {
  limit?: number;
  onlyFeatured?: boolean;
  container?: boolean;
};

export default async function TestimonialsSectionHomeServer({
  limit = 3,
  onlyFeatured = true,
  container = true,
}: Props) {
  const all = await getPublicTestimonialsServer();

  // filtre "featured" + fallback si vide
  let filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
  if (filtered.length === 0) filtered = all;

  const items = filtered.slice(0, limit);

  const content = <TestimonialsSectionHome items={items} />;

  return content;
}
