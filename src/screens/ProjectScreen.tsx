// src/screens/ProjectScreen.tsx

import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';
import PageHero from '@/components/patterns/PageHero';
import ProjectContent from '@/components/portfolio/project/ProjectContent';
import Cta from '@/components/patterns/Cta';

export default function ProjectScreen({ project }: { project: Project }) {
  return (
    <div>
      <PageHero
        icon={<ExternalLink size={40} />}
        title={project.title}
        subtitle={project.summary}
        align="center"
      />

      <ProjectContent project={project} />

      <Cta
        title="Un projet similaire en tête ?"
        description="Je peux vous accompagner de l’idée jusqu’à une solution claire et maintenable."
        align="left"
        primaryLabel="Me contacter"
        primaryHref="/contact"
      />
    </div>
  );
}
