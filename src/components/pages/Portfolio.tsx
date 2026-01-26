// src/components/pages/Projects.tsx

import { FolderKanban } from 'lucide-react';
import PageHero from '../patterns/PageHero';
import Cta from '../patterns/Cta';
import ProjectsSectionServer from '../portfolio/ProjectsSectionServer';

export const runtime = 'nodejs';

export default function ProjectsPageView() {
  return (
    <div>
      <PageHero
        icon={<FolderKanban size={40} />}
        title="Projets"
        subtitle="Une sélection de projets pour illustrer ma démarche produit, ma rigueur et mon sens du détail."
        align="center"
      />

      <ProjectsSectionServer />

      <Cta
        title="Vous avez un projet en tête ?"
        description="Je peux vous aider à le cadrer et le livrer proprement avec une base moderne."
        align="left"
        primaryLabel="Me contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
