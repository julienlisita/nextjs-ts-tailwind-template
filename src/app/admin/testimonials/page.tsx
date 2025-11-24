// src/app/admin/testimonials/page.tsx

export const dynamic = 'force-dynamic';

import TestimonialsAdmin from '@/components/pages/admin/TestimonialsAdmin';

export const metadata = { title: 'Administration – Témoignages' };

export default function TestimonialsAdminPage() {
  return <TestimonialsAdmin />;
}
