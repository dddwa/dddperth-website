import { calcRem } from '../../utils/styles/calcRem'
import styled, { Theme } from '../../utils/styles/theme'
import { ButtonKinds, Size } from './Button'
import { CSSObject } from '@emotion/core'
import { conditionalStyles } from '../../utils/styles/conditionalStyles'

function shouldStyledButtonForwardProps(prop: string) {
  return !['size', 'kind'].includes(prop)
}

export const StyledLinkButton = styled('button', {
  shouldForwardProp: shouldStyledButtonForwardProps,
})(({ theme }) => ({
  display: 'inline',
  padding: 0,
  margin: 0,
  textDecoration: 'underline',
  background: 'transparent',
  border: 'none',
  color: theme.colors.dddpink,
  cursor: 'pointer',

  '&:hoverm &:focus': {
    color: theme.colors.dddpink600,
  },
}))

function getButtonStylesForKind(kind: ButtonKinds, theme: Theme): CSSObject {
  switch (kind) {
    case 'primary':
      return {
        backgroundColor: theme.colors.dddpink,
        color: theme.colors.white,

        '&:hover, &:focus': {
          backgroundColor: theme.colors.dddpink600,
          color: theme.colors.white,
        },

        '&:focus': {
          boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.dddpink}`,
        },
      }
    default:
      return {
        backgroundColor: theme.colors.grey300,
        color: theme.colors.dddpink,
        '&:hover, &:focus': {
          backgroundColor: theme.colors.grey400,
        },

        '&:focus': {
          boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.grey300}`,
        },
      }
  }
}

interface StyledButtonAnchorProps {
  kind: ButtonKinds
  size?: Size
}

export const StyledButtonAnchor = styled('a', { shouldForwardProp: shouldStyledButtonForwardProps })<
  StyledButtonAnchorProps
>(({ theme, kind, size }) => ({
  display: 'inline-block',
  padding: calcRem(theme.metrics.md, theme.metrics.lg),
  fontWeight: theme.weights.medium,
  border: 0,
  cursor: 'pointer',
  outline: 0,
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'background-color 0.2s linear',
  ...getButtonStylesForKind(kind, theme),

  ...conditionalStyles(size === 'lg', {
    padding: calcRem(theme.metrics.lg, theme.metrics.xl),
  }),

  '&[disabled]': {
    opacity: 0.65,
    pointerEvents: 'none',
  },
}))

export const StyledButton = StyledButtonAnchor.withComponent('button')
