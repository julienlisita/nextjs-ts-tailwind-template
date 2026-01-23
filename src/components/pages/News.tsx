// src/components/pages/News.tsx

import { Newspaper } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import NewsSectionServer from '../news/NewsSectionServer';
import Cta from '../patterns/Cta';

export default function NewsPageView() {
  return (
    <div>
      <PageHero
        icon={<Newspaper size={40} />}
        title="Actualités"
        subtitle="Articles, informations et mises à jour : retrouvez ici nos dernières publications."
        align="center"
      />
      <NewsSectionServer />
      <Cta
        title="Ne manquez pas nos prochaines actualités"
        description="Pour rester informé ou poser vos questions, contactez notre équipe."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
