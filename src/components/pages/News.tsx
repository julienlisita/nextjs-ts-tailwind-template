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
        title="Une question suite à un article ?"
        description="Contactez-nous : nous vous répondrons rapidement et avec clarté."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
