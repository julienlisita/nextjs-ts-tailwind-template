// src/app/testimonials/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Témoignages – Avis de nos clients",
  description: "Lisez les témoignages et retours d’expérience de nos clients satisfaits, preuve de notre engagement et de notre qualité de service.",
  alternates: {
    canonical: "https://www.exemple.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Témoignages</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}