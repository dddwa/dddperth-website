import { theme } from './theme'

export const calcRem = (...values: number[]) => values.map(value => `${value / theme.fonts.defaultSize}rem`).join(' ')
