// src/components/pages/About.tsx

import { Users } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import ValuesSection from '../about/ValuesSection';
import Cta from '../patterns/Cta';

export default function About() {
  return (
    <div>
      <PageHero
        icon={<Users size={40} />}
        title="Une équipe à votre écoute"
        subtitle="Nous accompagnons particuliers et organisations avec sérieux et proximité.."
        align="center"
      />

      <ValuesSection />

      <Cta
        title="Envie d’échanger avec nous ?"
        description="Notre équipe est disponible pour répondre à vos questions et discuter de vos besoins."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
