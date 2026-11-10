// src/lib/resolveColor.ts

// Convertit une valeur de couleur passée en prop (ex: bgColor, color) en valeur CSS :
// - valeur CSS directe (#hex, rgb(), hsl(), var(...), inherit) → renvoyée telle quelle
// - nom de token (ex: "section-tint") → var(--color-section-tint)
export function resolveColor(color: string): string {
  if (
    color.startsWith('#') ||
    color.startsWith('rgb') ||
    color.startsWith('hsl') ||
    color.startsWith('var(') ||
    color === 'inherit'
  ) {
    return color;
  }
  return `var(--color-${color})`;
}
