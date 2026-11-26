// src/components/animations/MotionProvider.tsx

'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'motion/react';

/**
 * Applique la préférence système « réduire les animations » à tous les
 * composants Motion de l'arbre (translations et changements d'échelle
 * neutralisés). Petit composant client monté depuis le layout, qui reste un
 * Server Component.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
