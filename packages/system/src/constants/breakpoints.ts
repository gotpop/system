// TODO: Use 1536px for xl2
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xl2: 1480,
} as const

export const MEDIA_QUERIES: Record<BreakpointKey, string> = {
  sm: `(width >= ${BREAKPOINTS.sm}px)`,
  md: `(width >= ${BREAKPOINTS.md}px)`,
  lg: `(width >= ${BREAKPOINTS.lg}px)`,
  xl: `(width >= ${BREAKPOINTS.xl}px)`,
  xl2: `(width >= ${BREAKPOINTS.xl2}px)`,
} as const

export type BreakpointKey = keyof typeof BREAKPOINTS
export type MediaQueryKey = keyof typeof MEDIA_QUERIES
