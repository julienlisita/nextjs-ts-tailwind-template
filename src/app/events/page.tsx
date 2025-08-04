// src/app/events/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Événements – Agenda et actualités",
  description: "Retrouvez les événements à venir, nos participations et toutes les dates importantes à ne pas manquer.",
  alternates: {
    canonical: "https://www.exemple.com/events",
  },
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Portfolio</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}