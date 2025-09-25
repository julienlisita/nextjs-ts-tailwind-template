// src/components/pages/News.tsx

import { Newspaper } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import NewsSectionServer from '../section/NewsSectionServer';
import Cta from '../ui/Cta';

export default function NewsPageView() {
  return (
    <div>
      <HeroIntro
        icon={<Newspaper size={40} />}
        title="Actualités"
        subtitle="Retrouvez les dernières nouvelles, articles et mises à jour."
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
