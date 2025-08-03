// src/app/contact/page.tsx

import ContactForm from "@/components/form/ContactForm";
import PageTitle from "@/components/ui/PageTitle";

export const metadata = {
  title: "Contact – Nom entreprise",
  description: "Besoin d’informations ou d’un devis ? Contactez-nous via notre formulaire ou par téléphone.",
  alternates: {
    canonical: "https://www.exemple.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Contact</PageTitle>
      <p className="text-gray-700">Contactez-nous via le formulaire ou les réseaux.</p>
      <div className="max-w-2xl w-full mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}