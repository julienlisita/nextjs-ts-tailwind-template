// src/app/recruitment/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Recrutement",
  description: "Page de recrutement avec un formulaire de candidature complet (CV, lettre de motivation, message). Idéal pour les entreprises qui souhaitent recevoir des candidatures en ligne.",
  alternates: {
    canonical: "https://www.exemple.com/recruitment",
  },
};

export default function RecruitmentPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Recrutement</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}