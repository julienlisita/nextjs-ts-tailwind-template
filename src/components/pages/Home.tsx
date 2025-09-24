// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
import SplitSection from '../section/SplitSection';
import ServicesFeaturesIntro from '../section/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import NewsSectionHomeServer from '../section/NewsSectionHomeServer';

export default function Home() {
  return (
    <div>
      <Hero />
      <SplitSection
        // contenu
        eyebrow="Notre mission"
        title="Un accompagnement humain et personnalisé"
        subtitle="La proximité est au cœur de nos valeurs"
        content={
          <>
            Nous aidons les personnes âgées ou en situation de handicap à mieux vivre au quotidien,
            grâce à une approche familiale, respectueuse et professionnelle. Nos équipes sont
            formées, encadrées et disponibles pour répondre à vos besoins réels.
          </>
        }
        // image
        imageSrc="/images/image.png"
        imageAlt="Accompagnement à domicile chaleureux"
        // layout
        reverse={true}
        tone="muted"
        className="mt-8"
        // CTAs
        ctaLabel="En savoir plus"
        ctaHref="/about"
        secondaryCtaLabel="Nous contacter"
        secondaryCtaHref="/contact"
      >
        {/* children : bloc libre supplémentaire (liste, bullets, etc.) */}
        <ul className="list-disc pl-6 text-left inline-block">
          <li>Interventions rapides et flexibles</li>
          <li>Suivi personnalisé et transparent</li>
          <li>Professionnels formés et à l’écoute</li>
        </ul>
      </SplitSection>
      <ServicesFeaturesIntro />
      <TestimonialsSectionHomeServer limit={2} onlyFeatured={false} />
      <NewsSectionHomeServer />
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
