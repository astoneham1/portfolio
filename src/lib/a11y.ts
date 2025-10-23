export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  'matchMedia' in window &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
