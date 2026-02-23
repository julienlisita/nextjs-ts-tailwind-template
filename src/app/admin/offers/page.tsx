// src/app/admin/offers/page.tsx

import OffersAdminScreen from '@/screens/admin/OffersAdminScreen';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Administration – Offres d’emploi' };

export default function OffersAdminPage() {
  return <OffersAdminScreen />;
}
