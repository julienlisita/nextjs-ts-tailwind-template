// src/components/animations/Reveal.tsx

'use client';

import {
  useCallback,
  useState,
  type ElementType,
  type FocusEvent,
  type FocusEventHandler,
  type ReactNode,
  type RefCallback,
} from 'react';
import {
  useReducedMotion,
  type HTMLMotionProps,
  type TargetAndTransition,
  type Transition,
  type Variants,
} from 'motion/react';

import { DISTANCE, DURATION, EASE, REDUCED_DURATION, VIEWPORT } from '@/lib/motion';
import { MOTION_TAGS, type MotionTag } from './motionTags';

/** Part visible déclenchant l'animation : 0 à 1, ou "some" / "all". */
export type ViewportAmount = number | 'some' | 'all';

/** Props pilotées par les primitives : elles ne sont pas surchargeables depuis l'extérieur. */
type ControlledMotionProps =
  'initial' | 'animate' | 'whileInView' | 'viewport' | 'variants' | 'ref';

/**
 * Masque un élément « sous la ligne de flottaison » une fois le JavaScript
 * chargé, pour que `whileInView` puisse le révéler au défilement.
 *
 * - Rendu serveur et premier rendu client : élément VISIBLE (contenu lisible
 *   sans JavaScript et avant hydratation, aucun impact sur le LCP).
 * - Élément déjà visible (ou au-dessus du viewport) au montage : il reste
 *   visible, sans animation.
 * - Élément entièrement sous le viewport au montage : masqué instantanément
 *   (hors écran, donc sans scintillement), puis révélé quand il entre dans
 *   l'écran.
 *
 * La mesure se fait dans un callback de ref, exécuté au montage quand
 * l'élément est dans le DOM : pas de `setState` dans un effet.
 *
 * Retourne `[ref, isHidden]`.
 */
export function useRevealGate(): [RefCallback<HTMLElement>, boolean] {
  const [isHidden, setIsHidden] = useState(false);

  const ref = useCallback<RefCallback<HTMLElement>>((element) => {
    if (element && element.getBoundingClientRect().top >= window.innerHeight) {
      setIsHidden(true);
    }
  }, []);

  return [ref, isHidden];
}

export type GatedInViewOptions = {
  /** État masqué (ex. `{ opacity: 0, x: -12 }`). */
  from: TargetAndTransition;
  /** État final (ex. `{ opacity: 1, x: 0 }`). */
  to: TargetAndTransition;
  /** Transition jouée à l'apparition (délai, durée, ease…). */
  transition?: Transition;
  /** Part visible déclenchant l'animation. */
  amount?: ViewportAmount;
  /** Ne joue qu'une fois (true par défaut). */
  once?: boolean;
  /** true (ex. mouvement réduit) : l'élément reste visible, sans animation. */
  disabled?: boolean;
};

/** Props à étaler sur un élément `motion.*`. */
export type GatedInViewProps = {
  ref: RefCallback<HTMLElement>;
  initial: false;
  animate: TargetAndTransition;
  whileInView: TargetAndTransition;
  viewport: { once: boolean; amount: ViewportAmount };
  onFocus: FocusEventHandler<HTMLElement>;
};

/**
 * Variante « sur mesure » de la même mécanique, pour les animations
 * spécifiques (micro-animations d'un mockup, d'un tableau de bord…) qui
 * gardent leur propre chorégraphie mais ne doivent pas masquer leur contenu
 * avant hydratation ou sans JavaScript.
 *
 * Si l'élément contient un élément focalisable et reçoit le focus alors qu'il
 * est masqué, il devient visible immédiatement. Les props retournées incluent
 * `onFocus` : à composer avec le vôtre si besoin.
 *
 * @example
 * const motionProps = useGatedInView({
 *   from: { opacity: 0, x: -12 },
 *   to: { opacity: 1, x: 0 },
 *   transition: { duration: DURATION.base, ease: EASE },
 *   disabled: Boolean(useReducedMotion()),
 * });
 * return <motion.div {...motionProps}>…</motion.div>;
 */
export function useGatedInView({
  from,
  to,
  transition,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  disabled = false,
}: GatedInViewOptions): GatedInViewProps {
  const [ref, isHidden] = useRevealGate();
  const [focused, setFocused] = useState(false);
  const onFocus = useCallback(() => setFocused(true), []);

  const concealed = isHidden && !disabled;
  let animate: TargetAndTransition = to;
  if (concealed) {
    animate = { ...(focused ? to : from), transition: { duration: 0 } };
  }

  return {
    ref,
    initial: false,
    animate,
    whileInView: { ...to, transition },
    viewport: { once, amount },
    onFocus,
  };
}

type RevealVariantsOptions = {
  y: number;
  x: number;
  scale?: number;
  duration: number;
  /**
   * Délai propre à l'élément. À OMETTRE pour un `RevealItem` : une clé `delay`
   * (même à 0) écraserait le délai calculé par le groupe (stagger).
   */
  delay?: number;
  reduced: boolean;
};

/**
 * Variants partagés par `Reveal` et `RevealItem` :
 * - `hidden`  masqué instantanément ;
 * - `visible` apparition (fondu + translation) ;
 * - `shown`   révélation immédiate (focus clavier).
 *
 * Mouvement réduit : aucun décalage ni changement d'échelle, pas de délai,
 * fondu de `REDUCED_DURATION` au maximum.
 */
export function createRevealVariants({
  y,
  x,
  scale,
  duration,
  delay,
  reduced,
}: RevealVariantsOptions): Variants {
  return {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : y,
      x: reduced ? 0 : x,
      ...(scale !== undefined && { scale: reduced ? 1 : scale }),
      transition: { duration: 0 },
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      ...(scale !== undefined && { scale: 1 }),
      transition: {
        duration: reduced ? REDUCED_DURATION : duration,
        ...(delay !== undefined && { delay: reduced ? 0 : delay }),
        ease: EASE,
      },
    },
    shown: {
      opacity: 1,
      y: 0,
      x: 0,
      ...(scale !== undefined && { scale: 1 }),
      transition: { duration: 0 },
    },
  };
}

type RevealOwnProps<T extends MotionTag> = {
  /** Balise rendue ("div" par défaut). */
  as?: T;
  /** Décalage vertical initial en px (`DISTANCE.md` par défaut). */
  y?: number;
  /** Décalage horizontal initial en px. */
  x?: number;
  /** Échelle initiale (ex. 0.96) ; ignorée si non fournie. */
  scale?: number;
  /** Délai en secondes. */
  delay?: number;
  /** Durée en secondes (`DURATION.base` par défaut). */
  duration?: number;
  /** Part de l'élément visible déclenchant l'animation. Pour un élément plus haut que l'écran, préférer "some". */
  amount?: ViewportAmount;
  /** Ne joue qu'une fois (true par défaut). */
  once?: boolean;
  onFocus?: FocusEventHandler<HTMLElement>;
  children?: ReactNode;
};

export type RevealProps<T extends MotionTag = 'div'> = RevealOwnProps<T> &
  Omit<HTMLMotionProps<T>, keyof RevealOwnProps<T> | ControlledMotionProps>;

/**
 * Apparition au défilement d'un élément : fondu + translation légère.
 * Rend UN SEUL élément DOM (choisi via `as`) : pas de wrapper supplémentaire.
 * Accepte les attributs HTML de la balise (id, className, aria-*, data-*, style…).
 *
 * Valeurs par défaut dans `src/lib/motion.ts`.
 *
 * Mouvement réduit (`MotionConfig reducedMotion="user"`, voir `MotionProvider`) :
 * pas de translation ni d'échelle, pas de délai, fondu de 0,2 s au maximum.
 *
 * Un élément masqué qui reçoit le focus clavier devient visible immédiatement.
 *
 * Ne pas imbriquer un Reveal dans un autre Reveal / RevealGroup sur le même
 * contenu : une seule couche d'animation par élément.
 *
 * @example
 * <Reveal as="p" className="mt-4">Texte…</Reveal>
 * <Reveal y={DISTANCE.lg} scale={0.96} duration={DURATION.slow}>
 *   <Mockup />
 * </Reveal>
 */
export default function Reveal<T extends MotionTag = 'div'>({
  as,
  y = DISTANCE.md,
  x = 0,
  scale,
  delay = 0,
  duration = DURATION.base,
  amount = VIEWPORT.amount,
  once = VIEWPORT.once,
  onFocus,
  children,
  ...props
}: RevealProps<T>) {
  const reduced = Boolean(useReducedMotion());
  const [ref, isHidden] = useRevealGate();
  const [focused, setFocused] = useState(false);

  const Component: ElementType = MOTION_TAGS[as ?? 'div'];

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
      variants={createRevealVariants({ y, x, scale, duration, delay, reduced })}
      onFocus={handleFocus}
    >
      {children}
    </Component>
  );
}
