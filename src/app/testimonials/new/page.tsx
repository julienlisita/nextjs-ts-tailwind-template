// src/app/temoignages/new/page.tsx

import { PublicTestimonialForm } from './Form';

export const metadata = { title: 'Laisser un témoignage' };

export default function NouveauTemoignagePage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Laisser un témoignage</h1>
      <p className="text-sm text-gray-600">Merci ! Votre témoignage sera relu avant publication.</p>
      <PublicTestimonialForm />
    </div>
  );
}