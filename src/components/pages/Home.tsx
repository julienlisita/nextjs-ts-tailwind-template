// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';

export default function Home() {
  return (
    <div className="pt-8 sm:pt-10 md:pt-14 lg:pt-20">
      <Hero />
      <Cta />
    </div>
  );
}
