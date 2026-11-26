// src/components/animations/RevealGroup.tsx

'use client';

import {
  Children,
  useState,
  type ElementType,
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
} from 'react';
import { useReducedMotion, type HTMLMotionProps, type Variants } from 'motion/react';

import { DISTANCE, DURATION, STAGGER, STAGGER_MAX_TOTAL, VIEWPORT } from '@/lib/motion';
import { createRevealVariants, useRevealGate, type ViewportAmount } from './Reveal';
import { MOTION_TAGS, type MotionTag } from './motionTags';

/** Props pilotées par les primitives : elles ne sont pas surchargeables depuis l'extérieur. */
type ControlledMotionProps =
  'initial' | 'animate' | 'whileInView' | 'viewport' | 'variants' | 'ref';

type RevealGroupOwnProps<T extends MotionTag> = {
  /** Balise du conteneur ("div" par défaut ; "ul", "ol", "section"…). */
  as?: T;
  /**
   * Pas entre deux items en secondes (`STAGGER` par défaut). Il est réduit
   * automatiquement pour que le décalage cumulé entre le premier et le dernier
   * item ne dépasse pas `STAGGER_MAX_TOTAL`, quel que soit le nombre d'items.
   */
  stagger?: number;
  /** Délai avant le premier item, en secondes. */
  delay?: number;
  /** Part du GROUPE visible déclenchant l'animation. Pour un groupe plus haut que l'écran, préférer "some". */
  amount?: ViewportAmount;
  /** Ne joue qu'une fois (true par défaut). */
  once?: boolean;
  onFocus?: FocusEventHandler<HTMLElement>;
  children?: ReactNode;
};

export type RevealGroupProps<T extends MotionTag = 'div'> = RevealGroupOwnProps<T> &
  Omit<HTMLMotionProps<T>, keyof RevealGroupOwnProps<T> | ControlledMotionProps>;

/**
 * Groupe dont les enfants `RevealItem` apparaissent successivement au
 * défilement. Rend UN SEUL élément DOM (choisi via `as`).
 *
 * Les `RevealItem` doivent être des descendants directs du groupe (ou de
 * wrappers non animés) : ils héritent de l'état du groupe. Pour une liste
 * sémantique, utiliser `as="ul"` sur le groupe et `as="li"` sur les items.
 *
 * Mouvement réduit : aucun décalage entre les items, fondu de 0,2 s au maximum.
 * Si un élément focalisable du groupe reçoit le focus alors que le groupe est
 * masqué, tout le groupe devient visible immédiatement.
 *
 * @example
 * <RevealGroup className="grid gap-6 md:grid-cols-3">
 *   {items.map((item) => (
 *     <RevealItem key={item.id}>
 *       <Card {...item} />
 *     </RevealItem>
 *   ))}
 * </RevealGroup>
 */
export function RevealGroup<T extends MotionTag = 'div'>({
  as,
  stagger = STAGGER,
  delay = 0,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  onFocus,
  children,
  ...props
}: RevealGroupProps<T>) {
  const reduced = Boolean(useReducedMotion());
  const [ref, isHidden] = useRevealGate();
  const [focused, setFocused] = useState(false);

  const Component: ElementType = MOTION_TAGS[as ?? 'div'];

  // Pas plafonné : décalage cumulé entre le premier et le dernier item <= STAGGER_MAX_TOTAL
  const count = Children.toArray(children).length;
  const step = count > 1 ? Math.min(stagger, STAGGER_MAX_TOTAL / (count - 1)) : 0;

  const variants: Variants = {
    hidden: { transition: { staggerChildren: 0 } },
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : step,
        delayChildren: reduced ? 0 : delay,
      },
    },
    shown: { transition: { staggerChildren: 0, delayChildren: 0 } },
  };

  const handleFocus = (event: FocusEvent<HTMLElement>) => {
    if (isHidden && !focused) setFocused(true);
    onFocus?.(event);
  };

  let state = 'visible';
  if (isHidden) state = focused ? 'shown' : 'hidden';

  return (
    <Component
      {...props}
      ref={ref}
      initial={false}
      animate={state}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      onFocus={handleFocus}
    >
      {children}
    </Component>
  );
}

type RevealItemOwnProps<T extends MotionTag> = {
  /** Balise de l'item ("div" par défaut ; "li", "article"…). */
  as?: T;
  /** Décalage vertical initial en px (`DISTANCE.md` par défaut). */
  y?: number;
  /** Décalage horizontal initial en px. */
  x?: number;
  /** Échelle initiale (optionnelle). */
  scale?: number;
  /** Durée en secondes (`DURATION.base` par défaut). */
  duration?: number;
  children?: ReactNode;
};

export type RevealItemProps<T extends MotionTag = 'div'> = RevealItemOwnProps<T> &
  Omit<HTMLMotionProps<T>, keyof RevealItemOwnProps<T> | ControlledMotionProps>;

/**
 * Élément d'un `RevealGroup`. Rend UN SEUL élément DOM (choisi via `as`) et
 * accepte les attributs HTML de la balise. Le délai de chaque item est géré
 * par le groupe (stagger).
 */
export function RevealItem<T extends MotionTag = 'div'>({
  as,
  y = DISTANCE.md,
  x = 0,
  scale,
  duration = DURATION.base,
  children,
  ...props
}: RevealItemProps<T>) {
  const reduced = Boolean(useReducedMotion());

  const Component: ElementType = MOTION_TAGS[as ?? 'div'];

  return (
    <Component {...props} variants={createRevealVariants({ y, x, scale, duration, reduced })}>
      {children}
    </Component>
  );
}

export default RevealGroup;
