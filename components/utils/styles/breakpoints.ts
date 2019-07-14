interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

const breakpointSizes: Breakpoints = {
  xs: 480,
  // tslint:disable-next-line:object-literal-sort-keys
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1400,
}

export const breakpoint = (size: keyof Breakpoints) => `@media (min-width: ${breakpointSizes[size]}px)`

export const breakpointMax = (size: keyof Breakpoints) => `@media (max-width: ${breakpointSizes[size] - 1}px)`

export const breakpointBetween = (min: keyof Breakpoints, max: keyof Breakpoints) =>
  `@media (min-width: ${breakpointSizes[min]}px) and (max-width: ${breakpointSizes[max] - 1}px)`
