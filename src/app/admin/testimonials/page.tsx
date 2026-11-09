// src/app/admin/testimonials/page.tsx

export const dynamic = 'force-dynamic';

import TestimonialsAdminScreen from '@/screens/admin/TestimonialsAdminScreen';
import { listAllTestimonials } from '@/server/services/testimonials.service';

export const metadata = { title: 'Administration – Témoignages' };

export default async function TestimonialsAdminPage() {
  const items = await listAllTestimonials();
  return <TestimonialsAdminScreen items={items} />;
}
