// src/components/pages/News.tsx

import PageTitle from '@/components/ui/PageTitle';
import NewsSectionServer from '../section/NewsSection.server';
import Cta from '../ui/Cta';

export default function NewsPageView() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Actualités</PageTitle>
      <NewsSectionServer />
      <Cta
        title="Titre du CTA"
        description="Description du CTA"
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
