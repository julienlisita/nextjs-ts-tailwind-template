// src/components/sections/Hero.tsx

'use client';

import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';

export default function Hero() {
  return (
    <section
      className="w-full  flex flex-col justify-center  text-[#3B2F2F] px-4 text-center"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <PageTitle> Mettez en valeur votre activité avec un site professionnel</PageTitle>
        <p className="text-lg sm:text-xl text-[#3B2F2F]/80">
          Un design clair, responsive et rapide à mettre en place.
        </p>
        <Button variant="primary" href="/contact">
          Demander un devis
        </Button>
      </div>
    </section>
  );
}
