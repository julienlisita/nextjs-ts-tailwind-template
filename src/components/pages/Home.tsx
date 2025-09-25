// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
import ServicesFeaturesIntro from '../section/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import NewsSectionHomeServer from '../section/NewsSectionHomeServer';
import AboutSectionHome from '../section/AboutSectionHome';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSectionHome />
      <ServicesFeaturesIntro />
      <TestimonialsSectionHomeServer />
      <NewsSectionHomeServer />
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
