// src/components/pages/Gallery.tsx

import PageTitle from '@/components/ui/PageTitle';
import Cta from '../patterns/Cta';

export default function Gallery() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Portfolio</PageTitle>
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
