// src/components/sections/TestimonialsSectionServer.tsx
import TestimonialsSection from './TestimonialsSection';
import { getPublicTestimonialsServer } from '@/server/services/testimonials.server';

type Props = {
  title?: string;
  limit?: number;
  onlyFeatured?: boolean; // filtre sur highlight
  className?: string;
  container?: boolean; // option pour ajouter/retirer le container
};

export default async function TestimonialsSectionServer({
  title,
  limit,
  onlyFeatured = false,
  className,
  container = true,
}: Props) {
  const testimonials = await getPublicTestimonialsServer();
  const items = onlyFeatured ? testimonials.filter((t) => t.highlight) : testimonials;

  const content = (
    <TestimonialsSection title={title} items={items} limit={limit} className={className} />
  );

  return container ? <div className="container mx-auto px-4">{content}</div> : content;
}
