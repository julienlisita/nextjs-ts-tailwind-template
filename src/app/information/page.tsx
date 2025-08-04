// src/app/information/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Informations",
  description: "Découvrez des informations utiles sur les droits, aides et dispositifs liés aux services de notre activité.",
  alternates: {
    canonical: "https://www.exemple.com/information",
  },
};

export default function InformationPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Informations</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}