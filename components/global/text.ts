import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const StyledList = styled('ul')(({ theme }) => ({
  paddingLeft: calcRem(theme.metrics.md),
  marginBottom: calcRem(theme.metrics.lg),
  marginLeft: calcRem(theme.metrics.lg),

  li: {
    paddingLeft: calcRem(theme.metrics.xs),
    listStyleImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='${theme.colors.primary.replace(
      '#',
      '%23',
    )}' d='M0 0h6v6H0z'/%3E%3C/svg%3E")`,
    listStyleType: 'none',
  },
}))
StyledList.displayName = 'StyledList'

export const StyledOrderedList = StyledList.withComponent('ol')
StyledOrderedList.displayName = 'StyledOrderedList'

export const StyledPara = styled('p')(({ theme }) => ({
  marginBottom: calcRem(theme.metrics.lg),
  color: theme.colors.body,
  fontSize: calcRem(theme.fonts.defaultSize),
  lineHeight: theme.fonts.lineHeight,
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
}))
StyledPara.displayName = 'StyledPara'
