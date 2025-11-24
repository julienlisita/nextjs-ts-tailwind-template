// src/app/(site)/reservations/page.tsx

export const dynamic = 'force-dynamic';

import Reservations from '@/components/pages/Reservations';

export const metadata = {
  title: 'Réserver un créneau',
};

export default function ReservationsPage() {
  return <Reservations />;
}
