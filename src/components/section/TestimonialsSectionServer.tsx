// src/components/sections/TestimonialsSectionServer.tsx

import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';
import TestimonialsSection from './TestimonialsSection';
import type { ComponentProps } from 'react';
import SectionWrapper from '../common/SectionWrapper';

type ServerProps = {
  /** Filtres/limites côté data */
  onlyFeatured?: boolean;
  limit?: number;
  /** Ajoute un container autour du contenu */
  container?: boolean;
} & Omit<ComponentProps<typeof TestimonialsSection>, 'items'>; // toutes les props UI sauf items

export default async function TestimonialsSectionServer({
  onlyFeatured = false,
  limit,
  container = false,
  ...uiProps
}: ServerProps) {
  const all = await getPublicTestimonialsServer();
  const filtered = onlyFeatured ? all.filter((t) => t.highlight) : all;
  const items = typeof limit === 'number' ? filtered.slice(0, Math.max(0, limit)) : filtered;

  const content = <TestimonialsSection items={items} {...uiProps} />;
  return container ? <SectionWrapper>{content}</SectionWrapper> : content;
}
