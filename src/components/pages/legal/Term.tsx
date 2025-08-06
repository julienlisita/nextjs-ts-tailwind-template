// src/components/pages/legal/Term.tsx

import PageTitle from '@/components/ui/PageTitle';

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-4">
      <PageTitle>Conditions d'utilisation</PageTitle>
      <p className="text-gray-700">
        En utilisant ce site, vous acceptez les présentes conditions d&apos;utilisation. Le contenu
        du site est fourni à titre informatif uniquement.
      </p>
      <p className="text-gray-700">
        Toute reproduction ou diffusion du contenu sans autorisation est interdite.
      </p>
      <p className="text-gray-700">
        Nous nous réservons le droit de modifier ces conditions à tout moment.
      </p>
    </div>
  );
}
