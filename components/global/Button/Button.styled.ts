/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { breakpoint } from '../../utils/styles/breakpoints'
import { calcRem } from '../../utils/styles/calcRem'
import styled, { Theme } from '../../utils/styles/theme'
import { ButtonKinds, Size } from './Button'

function buttonState(color: string, dark: string, focus: string) {
  return {
    // conflicting with prettier
    backgroundColor: color,
    '&:hover': {
      backgroundColor: dark,
    },
    '&:focus': {
      outline: 0,
      boxShadow: `0 0 0 3px ${focus}`,
    },
  }
}

function buttonKindStyles(kind: ButtonKinds, theme: Theme) {
  switch (kind) {
    case 'inverse':
      return buttonState(theme.colors.inverse, theme.colors.inverseDark, theme.colors.linkFocusBg)
    case 'primary':
      return buttonState(theme.colors.primary, theme.colors.primaryDark, theme.colors.linkFocusBg)
    case 'tertiary':
      return buttonState(theme.colors.tertiary, theme.colors.tertiaryDark, theme.colors.linkFocusBg)
    case 'secondary':
    default:
      return buttonState(theme.colors.secondary, theme.colors.secondaryDark, theme.colors.linkFocusBg)
  }
}

export interface StyledButtonProps {
  kind: ButtonKinds
  size?: Size
}

function shouldStyledButtonForwardProps(prop: string) {
  return prop !== 'kind' && prop !== 'size'
}

export const StyledButton = styled('button', {
  shouldForwardProp: shouldStyledButtonForwardProps,
})<StyledButtonProps>(({ theme, kind, size }) => ({
  ...buttonKindStyles(kind, theme),
  cursor: 'pointer',
  display: 'block',
  margin: 0,
  padding: size === 'small' ? calcRem(5, 10) : calcRem(6, 12),
  color: '#fff',
  border: 'none',
  fontSize: calcRem(14),
  fontWeight: theme.weights.bold,
  lineHeight: size === 'small' ? 1.1 : 1.4,
  textAlign: 'center',
  textShadow: '0 1px 3px rgba(0, 0, 0, 0.25)',
  verticalAlign: 'middle',
  userSelect: 'none',

  '&[disabled]': {
    opacity: 0.65,
    cursor: 'not-allowed',
  },

  '&:after': {
    position: 'relative',
    display: 'inline-block',
    top: -1,
    maxWidth: calcRem(20),
    margin: `0 0 0 ${calcRem(10)}`,
    content: "'\f0da'",
    fontFamily: 'FontAwesome',
    color: '#000',
    fontSize: calcRem(16),
    opacity: 0.3,
    verticalAlign: 'middle',
  },

  [breakpoint('xs')]: {
    padding: size === 'small' ? calcRem(5, 10) : calcRem(6, 15, 5),
  },

  [breakpoint('sm')]: {
    padding: size === 'small' ? calcRem(5, 10) : calcRem(7, 16, 6),
    fontSize: size === 'small' ? calcRem(13) : calcRem(15),

    '&:after': {
      margin: `0 0 0 ${calcRem(17)}`,
      fontSize: calcRem(19),
    },
  },

  [breakpoint('md')]: {
    padding: size === 'small' ? calcRem(7, 10, 5) : calcRem(8, 20, 7),
    fontSize: size === 'small' ? calcRem(14) : calcRem(16),
  },

  [breakpoint('lg')]: {
    padding: size === 'small' ? calcRem(7, 10, 5) : calcRem(10, 23, 8),
    fontSize: size === 'small' ? calcRem(15) : calcRem(17),

    '&:after': {
      margin: `0 0 0 ${calcRem(20)}`,
      fontSize: calcRem(20),
    },
  },

  [breakpoint('xl')]: {
    padding: size === 'small' ? calcRem(7, 10, 5) : calcRem(12, 25, 10),
    fontSize: size === 'small' ? calcRem(16) : calcRem(18),

    '&:after': {
      margin: `0 0 0 ${calcRem(20)}`,
      fontSize: calcRem(20),
    },
  },
}))

export const StyledLinkButton = styled('button', {
  shouldForwardProp: shouldStyledButtonForwardProps,
})(({ theme }) => ({
  display: 'inline',
  padding: 0,
  margin: 0,
  textDecoration: 'underline',
  background: 'transparent',
  border: 'none',
  color: theme.colors.primary,
  cursor: 'pointer',
  '&:hover': {
    color: theme.colors.linkHoverFg,
  },
  '&:focus': {
    color: theme.colors.linkFocusBg,
  },
}))
