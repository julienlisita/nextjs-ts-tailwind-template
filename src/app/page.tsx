// src/app/page.tsx

import Button from "@/components/ui/Button";
import PageTitle from "@/components/ui/PageTitle";

export default function Home() {
  return (
    <div className="py-20 text-center">
      <PageTitle>Bienvenue sur notre site</PageTitle>
      <p className="text-lg text-gray-600 mb-6">
        Découvrez nos services et notre expertise.
      </p>
      <Button href="/about">En savoir plus</Button>
    </div>
  );
}
