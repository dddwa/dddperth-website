import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import React from 'react'

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

const StyledPara = styled('p')(({ theme }) => ({
  marginBottom: calcRem(theme.metrics.lg),
  color: theme.colors.body,
  fontSize: calcRem(theme.fonts.defaultSize),
  lineHeight: theme.fonts.lineHeight,
  overflowWrap: 'break-word',
  wordBreak: 'break-word',
}))
StyledPara.displayName = 'StyledPara'

type TextProps = {
  children: React.ReactNode
  textAlign?: 'left' | 'center' | 'right'
  className?: string
  tag?: React.ElementType<any>
}

export function Text({ children, textAlign, tag = 'p', className }: TextProps): JSX.Element {
  return (
    <StyledPara className={className} as={tag} style={{ textAlign }}>
      {children}
    </StyledPara>
  )
}
