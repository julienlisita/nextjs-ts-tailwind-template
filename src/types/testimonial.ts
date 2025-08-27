// src/types/testimonial.ts

import type { TestimonialCardProps } from '@/components/widgets/TestimonialCard';

export interface Testimonial extends TestimonialCardProps {
  id: number;
  // optionnel côté BDD :
  publishedAt?: string; // ISO string si tu veux trier par date de publication
  isPublished?: boolean;
}
