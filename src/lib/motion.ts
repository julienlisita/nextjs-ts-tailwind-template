// src/lib/motion.ts

/**
 * Valeurs de référence du système d'animation.
 * Fichier sans "use client" : importable depuis les Server et Client Components.
 * Ce sont des valeurs par défaut : un composant peut les surcharger quand la
 * nature de son animation le justifie.
 */

// Courbe de décélération douce (courbe de Bézier cubique : x1, y1, x2, y2)
export const EASE: readonly [number, number, number, number] = [0.22, 1, 0.36, 1];

// Durées en secondes
export const DURATION = {
  fast: 0.3, // survols, bascules, petits retours visuels
  base: 0.65, // apparition standard
  slow: 0.8, // mockups, grandes images
} as const;

// Distances de translation en pixels
export const DISTANCE = {
  sm: 16,
  md: 24,
  lg: 40,
} as const;

// Déclenchement au défilement : une seule fois, dès 20 % de l'élément visible
export const VIEWPORT: { once: boolean; amount: number } = {
  once: true,
  amount: 0.2,
};

// Apparitions successives (secondes) : pas entre éléments, et durée totale
// maximale du décalage cumulé (évite qu'une longue liste retarde la lecture).
export const STAGGER = 0.08;
export const STAGGER_MAX_TOTAL = 0.5;

// Durée utilisée quand l'utilisateur préfère réduire les animations
// (seul un fondu discret est conservé, sans déplacement).
export const REDUCED_DURATION = 0.2;
