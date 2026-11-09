// src/app/admin/offers/page.tsx

import OffersAdminScreen from '@/screens/admin/OffersAdminScreen';
import { listJobOffers } from '@/server/services/job-offer.service';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Administration – Offres d’emploi' };

export default async function OffersAdminPage() {
  const offers = await listJobOffers();
  return <OffersAdminScreen offers={offers} />;
}
