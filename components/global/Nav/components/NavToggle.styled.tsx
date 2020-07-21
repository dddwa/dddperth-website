import styled from 'components/utils/styles/theme'
import { calcRem } from 'components/utils/styles/calcRem'
import { breakpoint } from 'components/utils/styles/breakpoints'

interface StyledToggleProps {
  active: boolean
}

export const StyledToggle = styled('button')<StyledToggleProps>(({ theme, active }) => ({
  width: calcRem(120),
  padding: calcRem(theme.metrics.md, theme.metrics.sm),
  cursor: 'pointer',
  backgroundColor: active ? theme.colors.grey800 : theme.colors.white,
  border: 0,
  borderRight: `1px solid ${theme.colors.lightGrey}`,
  color: active ? theme.colors.white : theme.colors.grey800,
  fontFamily: theme.fonts.main,
  fontSize: calcRem(theme.fonts.defaultSize),
  fontWeight: theme.weights.medium,
  textTransform: 'uppercase',

  div: {
    position: 'relative',
    display: 'inline-block',
    width: calcRem(theme.metrics.lg),
    height: calcRem(2),
    marginRight: calcRem(theme.metrics.sm),
    verticalAlign: 'middle',
    backgroundColor: active ? 'transparent' : theme.colors.grey800,

    '&::before, &::after': {
      position: 'absolute',
      height: calcRem(2),
      right: 0,
      left: 0,
      transformOrigin: 'center',
      backgroundColor: active ? theme.colors.white : theme.colors.grey800,
      content: "''",
      transition:
        'transform 350ms cubic-bezier(0.55, 0, 0.1, 1) 0s, top 250ms cubic-bezier(0.55, 0, 0.1, 1) 0s, bottom 250ms cubic-bezier(0.55, 0, 0.1, 1) 0s',
    },

    '&::before': {
      top: active ? 0 : calcRem(6),
      transform: active ? 'rotate(-45deg)' : undefined,
    },

    '&::after': {
      bottom: active ? 0 : calcRem(6),
      transform: active ? 'rotate(45deg)' : undefined,
    },
  },

  '&:hover, &:focus': {
    backgroundColor: theme.colors.grey800,
    color: theme.colors.white,

    div: {
      backgroundColor: active ? 'transparent' : theme.colors.white,

      '&::before, &::after': {
        backgroundColor: theme.colors.white,
      },
    },
  },

  [breakpoint('sm')]: {
    width: calcRem(160),
    padding: calcRem(theme.metrics.lg),
    fontSize: calcRem(theme.fonts.sizeLg),
  },
}))
StyledToggle.displayName = 'StyledToggle'
