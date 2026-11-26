// src/components/animations/motionTags.ts

import { motion } from 'motion/react';

export const MOTION_TAGS = {
  div: motion.create('div'),
  section: motion.create('section'),
  article: motion.create('article'),
  p: motion.create('p'),
  span: motion.create('span'),
  h2: motion.create('h2'),
  h3: motion.create('h3'),
  ul: motion.create('ul'),
  ol: motion.create('ol'),
  li: motion.create('li'),
} as const;

export type MotionTag = keyof typeof MOTION_TAGS;