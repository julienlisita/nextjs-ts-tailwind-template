// src/app/legal/privacy/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Politique de confidentialité – Nom entreprise",
  description: "Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
  alternates: {
    canonical: "https://www.exemple.com/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Politique de confidentialité</PageTitle>
      <p className="text-gray-700">Utilisation des données personnelles.</p>
    </div>
  );
}