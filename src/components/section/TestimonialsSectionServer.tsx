// src/components/sections/TestimonialsSectionServer.tsx

import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';
import TestimonialsSection from './TestimonialsSection';

export default async function TestimonialsSectionServer() {
  const onlyFeatured = false;
  const all = await getPublicTestimonialsServer();

  let filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
  if (filtered.length === 0) filtered = all;

  return <TestimonialsSection items={filtered} />;
}
