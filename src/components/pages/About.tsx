// src/components/pages/About.tsx

import Cta from '../ui/Cta';
import HeroIntro from '../section/HeroIntro';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <div>
      <HeroIntro
        icon={<Users size={40} />}
        title="Qui sommes-nous ?"
        subtitle="Découvrez notre équipe, nos valeurs et notre vision."
        align="center"
      />
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
