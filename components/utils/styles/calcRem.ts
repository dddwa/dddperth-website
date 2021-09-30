import { theme } from './theme'

export const calcRem = (...values: number[]): string =>
  values.map((value) => (value !== 0 ? `${value / theme.fonts.defaultSize}rem` : 0)).join(' ')
