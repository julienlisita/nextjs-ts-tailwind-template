// src/app/services/page.tsx

import PageTitle from "@/components/ui/PageTitle";
import ServiceCard from "@/components/widgets/ServicesCard";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <PageTitle>Nos services</PageTitle>
      <p className="text-gray-700">Liste des services proposés.</p>
       <section className="flex flex-wrap justify-center gap-6 py-12 px-4">
        <ServiceCard
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          color={["#34D399", "#10B981"]}
        />
        <ServiceCard
          title="Service 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          color={["#FBBF24", "#F59E0B"]}
        />
        <ServiceCard
          title="Service 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          color={["#60A5FA", "#3B82F6"]}
        />
    </section>
    </div>
  );
}