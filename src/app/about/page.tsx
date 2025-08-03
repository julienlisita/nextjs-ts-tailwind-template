// src/app/about/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "À propos – Votre Nom",
  description: "En savoir plus sur notre entreprise, nos valeurs, et notre engagement envers nos clients.",
  alternates: {
    canonical: "https://www.exemple.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>À propos</PageTitle>
      <p className="text-gray-700">Contenu à venir…</p>
    </div>
  );
}