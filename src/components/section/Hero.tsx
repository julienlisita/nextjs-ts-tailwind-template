// src/components/sections/Hero.tsx

'use client';

import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
import './Hero.css';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="flex justify-center">
        <Image src="/images/logo.png" alt="Company Care & Services logo" width={200} height={200} />
      </div>
      <div className="hero-container">
        <PageTitle>Mettre en valeur votre activité avec un site professionnel</PageTitle>

        <p className="hero-subtitle">Un design clair, responsive et rapide à mettre en place.</p>

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
