// src/components/animations/motionTags.ts

import { motion } from 'motion/react';

/**
 * Balises HTML supportées par `Reveal`, `RevealGroup` et `RevealItem`
 * (prop `as`). Chaque primitive rend UN SEUL élément DOM parmi celles-ci.
 * Module partagé par les composants clients d'animation : pour supporter une
 * balise de plus, l'ajouter ici.
 */
export const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  span: motion.span,
  h2: motion.h2,
  h3: motion.h3,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
} as const;

export type MotionTag = keyof typeof MOTION_TAGS;
