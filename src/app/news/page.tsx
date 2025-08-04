// src/app/news/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Actualités",
  description: "Actualités ou publications de l’entreprise. Cette page peut contenir des articles internes, des liens externes, ou évoluer vers un blog complet.",
  alternates: {
    canonical: "https://www.exemple.com/news",
  },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Actualités</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}