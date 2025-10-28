// src/components/pages/Home.tsx

import AboutTeaser from '../home/AboutTeaser';
import Hero from '../home/Hero';
import NewsTeaserServer from '../home/NewsTeaserServer';
import ServicesTeaser from '../home/ServicesTeaser';
import TestimonialsTeaserServer from '../home/TestimonialsTeaserServer';
import Cta from '../patterns/Cta';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <TestimonialsTeaserServer />
      <NewsTeaserServer />
      <Cta
        title="Prêt à en savoir plus ?"
        description="Contactez-nous dès aujourd’hui pour découvrir comment nous pouvons vous accompagner."
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
