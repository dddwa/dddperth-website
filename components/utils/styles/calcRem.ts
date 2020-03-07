import { theme } from './theme'

export const calcRem = (...values: number[]) =>
  values.map(value => (value !== 0 ? `${value / theme.fonts.defaultSize}rem` : 0)).join(' ')
