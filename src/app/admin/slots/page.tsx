// src/app/admin/slots/page.tsx

import SlotsAdminScreen from '@/screens/admin/SlotsAdminScreen';
import { listAllSlotsAdmin } from '@/server/services/reservations.service';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Administration – Créneaux',
  description: 'Gérez les créneaux disponibles, les statuts et la planification des réservations.',
};

export default async function SlotsAdminPage() {
  const slots = await listAllSlotsAdmin();
  return <SlotsAdminScreen slots={slots} />;
}
