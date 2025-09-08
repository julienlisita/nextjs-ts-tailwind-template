// src/components/pages/About.tsx

import PageTitle from '@/components/ui/PageTitle';
import Cta from '../ui/Cta';

export default function About() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <PageTitle>À propos</PageTitle>
      <Cta />
    </div>
  );
}
