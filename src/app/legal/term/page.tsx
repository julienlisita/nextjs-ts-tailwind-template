// src/app/legal/term/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Conditions d’utilisation – Nom entreprise",
  description: "Conditions générales d’utilisation de notre site et de nos services.",
  alternates: {
    canonical: "https://www.exemple.com/legal/term",
  },
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Conditions d'utilisation</PageTitle>
      <p className="text-gray-700">Conditions générales d'utilisation du site.</p>
    </div>
  );
}