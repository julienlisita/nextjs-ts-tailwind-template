// src/app/(site)/gallery/page.tsx

import GalleryScreen from '@/screens/GalleryScreen';

export const metadata = {
  title: 'Galerie – Photos et visuels',
  description:
    'Parcourez notre galerie photo pour découvrir nos travaux, nos ambiances et les moments forts de nos projets ou événements.',
  alternates: {
    canonical: '/gallery',
  },
};

export default function GalleryPage() {
  return <GalleryScreen />;
}
