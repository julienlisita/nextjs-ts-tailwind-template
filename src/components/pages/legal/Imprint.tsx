// src/components/pages/legal/Imprint.tsx

import PageTitle from '@/components/ui/PageTitle';

export default function Imprint() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-4">
      <PageTitle>Mentions légales</PageTitle>
      <p className="text-gray-700">
        Ce site est édité par [Nom de l&apos;entreprise], situé à [Adresse complète].
      </p>
      <p className="text-gray-700">
        Directeur de la publication : [Nom complet] <br />
        Hébergeur : [Nom de l&apos;hébergeur, adresse]
      </p>
      <p className="text-gray-700">
        Pour toute question concernant ces mentions, vous pouvez nous contacter via le formulaire de
        contact.
      </p>
    </div>
  );
}
