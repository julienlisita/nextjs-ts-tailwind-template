// src/components/pages/Project.tsx

import { notFound } from 'next/navigation';
import { ExternalLink } from 'lucide-react';

import { getPublicProjectBySlugServer } from '@/server/services/projects.server';

import PageHero from '../patterns/PageHero';
import Cta from '../patterns/Cta';

import ProjectContent from '../portfolio/project/ProjectContent';

export const runtime = 'nodejs';

export default async function ProjectPageView({ slug }: { slug: string }) {
  const project = await getPublicProjectBySlugServer(slug);
  if (!project) notFound();

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
