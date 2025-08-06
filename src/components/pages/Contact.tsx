// src/components/pages/Contact.tsx

import PageTitle from '@/components/ui/PageTitle';
import ContactForm from '@/components/form/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Contact</PageTitle>
      <p className="text-gray-700 py-8">Contactez-nous via le formulaire ou les réseaux.</p>
      <div className="max-w-2xl w-full mx-auto py-4">
        <ContactForm />
      </div>
    </div>
  );
}
