import styled from '../../../utils/styles/theme'
import { calcRem } from '../../../utils/styles/calcRem'
import { SafeLink } from '../../safeLink'
import { srOnly } from '../../../utils/styles/accessibility'
import { breakpoint } from '../../../utils/styles/breakpoints'

export const StyledSocialList = styled('ul')(({ theme }) => ({
  display: 'none',
  flexDirection: 'row',
  padding: 0,
  margin: calcRem(0, theme.metrics.md),

  [breakpoint('sm')]: {
    display: 'flex',
  },
}))

export const StyledSafeLink = styled(SafeLink)(({ theme }) => ({
  display: 'flex',
  margin: calcRem(0, theme.metrics.sm),
  outline: 0,

  svg: {
    display: 'block',
    width: calcRem(theme.metrics.lg),
    height: calcRem(theme.metrics.lg),
    fill: theme.colors.grey800,
    transition: 'fill 0.25s ease',
  },

  span: srOnly,

  '&:hover, &:focus': {
    svg: {
      fill: theme.colors.dddpink,
    },
  },
}))
