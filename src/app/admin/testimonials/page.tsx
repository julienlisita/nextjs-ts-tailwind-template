// src/app/admin/testimonials/page.tsx

export const dynamic = 'force-dynamic';

import TestimonialsAdminScreen from '@/screens/admin/TestimonialsAdminScreen';

export const metadata = { title: 'Administration – Témoignages' };

export default function TestimonialsAdminPage() {
  return <TestimonialsAdminScreen />;
}
