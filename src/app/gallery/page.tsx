// src/app/gallery/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Galerie – Photos et visuels",
  description: "Parcourez notre galerie photo pour découvrir nos travaux, nos ambiances et les moments forts de nos projets ou événements.",
  alternates: {
    canonical: "https://www.exemple.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Portfolio</PageTitle>
      <p className="text-gray-700 py-8">Contenu à venir…</p>
    </div>
  );
}