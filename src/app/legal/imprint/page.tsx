// src/app/legal/imprint/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Mentions légales – Nom entreprise",
  description: "Informations légales concernant l’éditeur du site, l’hébergement et la propriété intellectuelle.",
  alternates: {
    canonical: "https://www.exemple.com/legal/imprint",
  },
};

export default function ImprintPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Mentions légales</PageTitle>
      <p className="text-gray-700">Mentions légales obligatoires en France.</p>
    </div>
  );
}