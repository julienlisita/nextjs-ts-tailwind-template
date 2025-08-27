// src/services/testimonials.server.ts

import 'server-only';
import { IS_DB } from '@/config/dataMode';
import type { Testimonial } from '@/types/testimonial';
import { testimonials } from '@/data/testimonials';

export async function getPublicTestimonialsServer(): Promise<ReadonlyArray<Testimonial>> {
  if (!IS_DB) return testimonials;

  // Import conditionnel pour éviter de bundler Prisma en mode static/edge
  const { getPublicTestimonials } = await import('@/services/testimonials');
  return getPublicTestimonials(); // déjà server-only + noStore()
}
