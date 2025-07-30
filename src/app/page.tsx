// src/app/page.tsx

import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur notre site</h1>
      <p className="text-lg text-gray-600 mb-6">
        Découvrez nos services et notre expertise.
      </p>
      <Button href="/about">En savoir plus</Button>
    </div>
  );
}
