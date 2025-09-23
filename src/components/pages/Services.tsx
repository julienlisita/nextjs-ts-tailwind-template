// src/components/pages/Services.tsx

import PageTitle from '@/components/ui/PageTitle';
import Cta from '../ui/Cta';
import FeatureCard from '../widgets/FeaturedCard';

export default function Services() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>Nos services</PageTitle>
      <section className="flex flex-wrap justify-center gap-6 py-12 px-4">
        <FeatureCard
          title="Service 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          variant="with-header"
          width="w-72"
          height="h-80"
          gradient={['#60A5FA', '#3B82F6']}
        />
        <FeatureCard
          title="Service 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          variant="with-header"
          width="w-72"
          height="h-80"
          gradient={['#60A5FA', '#3B82F6']}
        />
        <FeatureCard
          title="Service 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae diam eget orci semper ullamcorper ullamcorper at eros. Sed pretium sed augue id pretium."
          variant="with-header"
          width="w-72"
          height="h-80"
          gradient={['#60A5FA', '#3B82F6']}
        />
      </section>
      <Cta
        title="Titre du CTA"
        description="Description du CTA"
        align="left"
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
