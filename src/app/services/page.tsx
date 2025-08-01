// src/app/services/page.tsx

import PageTitle from "@/components/ui/PageTitle";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Nos services</PageTitle>
      <p className="text-gray-700">Liste des services proposés.</p>
    </div>
  );
}