// src/components/home/Hero.tsx

import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  const showBackground = false;

  return (
    <section className="hero-section">
      {/* Image de fond */}
      {showBackground && (
        <>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/home/hero.avif"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {/* Overlay noir avec opacité */}
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      <div className="hero-container">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/images/logo-dark.png"
            alt="Company Care & Services logo"
            width={300}
            height={300}
            sizes="300px"
          />
        </div>

        {/* Titre */}
        <PageTitle color="#00000">
          Mettre en valeur votre activité avec un site professionnel
        </PageTitle>

        {/* Tagline*/}
        <p className="hero-subtitle">Un design clair, responsive et rapide à mettre en place.</p>

        {/* CTAs */}
        <div className="hero-actions">
          <Button variant="primary" href="/contact">
            Demander un devis
          </Button>
          <Button variant="secondary" href="/portfolio">
            Voir des exemples
          </Button>
        </div>
      </div>
    </section>
  );
}
