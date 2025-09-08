// src/components/pages/Contact.tsx

import PageTitle from '@/components/ui/PageTitle';
import ContactForm from '@/components/form/ContactForm';

export default function Contact() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Contact</PageTitle>
      <div className="max-w-2xl w-full mx-auto py-4">
        <ContactForm />
      </div>
    </div>
  );
}
