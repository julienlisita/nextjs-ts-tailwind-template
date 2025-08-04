// src/app/portfolio/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Portfolio – Réalisations et projets",
  description: "Découvrez une sélection de projets et de réalisations mettant en avant le savoir-faire et l’expertise, conçus pour inspirer et rassurer les clients.",
  alternates: {
    canonical: "https://www.exemple.com/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Portfolio</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}