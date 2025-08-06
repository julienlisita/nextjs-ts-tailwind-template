// src/app/events/page.tsx

import Events from '@/components/pages/Events';

export const metadata = {
  title: 'Événements – Agenda et actualités',
  description:
    'Retrouvez les événements à venir, nos participations et toutes les dates importantes à ne pas manquer.',
  alternates: {
    canonical: 'https://www.exemple.com/events',
  },
};

export default function EventsPage() {
  return <Events />;
}
