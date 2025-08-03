// src/app/faq/page.tsx

import PageTitle from "@/components/ui/PageTitle";

// src/app/faq/page.tsx
export const metadata = {
  title: "FAQ – Nom entreprise",
  description: "Trouvez des réponses aux questions fréquentes sur nos services, notre fonctionnement ou notre site.",
  alternates: {
    canonical: "https://www.exemple.com/faq",
  },
};

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Foire aux questions</PageTitle>
      <p className="text-gray-700">Réponses aux questions fréquentes.</p>
    </div>
  );
}