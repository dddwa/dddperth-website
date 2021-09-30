interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

const breakpointSizes: Breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

export const breakpoint = (size: keyof Breakpoints): string => `@media (min-width: ${breakpointSizes[size]}px)`

export const breakpointMax = (size: keyof Breakpoints): string => `@media (max-width: ${breakpointSizes[size] - 1}px)`

export const breakpointBetween = (min: keyof Breakpoints, max: keyof Breakpoints): string =>
  `@media (min-width: ${breakpointSizes[min]}px) and (max-width: ${breakpointSizes[max] - 1}px)`
