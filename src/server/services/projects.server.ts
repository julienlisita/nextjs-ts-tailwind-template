// src/server/services/projects.server.ts

// Portfolio : données exclusivement statiques (src/data/projects), quel que soit DATA_MODE.
// Pas de modèle Prisma, pas de repository, pas de bascule IS_DB.

import { projects } from '@/data/projects';
import type { Project } from '@/types/project';

export async function getPublicProjectsServer(): Promise<ReadonlyArray<Project>> {
  return projects;
}

export async function getPublicProjectBySlugServer(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) ?? null;
}
