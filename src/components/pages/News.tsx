// src/components/pages/News.tsx

import PageTitle from '@/components/ui/PageTitle';
import NewsSectionServer from '../section/NewsSection.server';

export default function NewsPageView() {
  return (
    <div className="py-8 sm:py-10 md:py-14 lg:py-20 container mx-auto px-4">
      <PageTitle>Actualités</PageTitle>
      <NewsSectionServer />
    </div>
  );
}
