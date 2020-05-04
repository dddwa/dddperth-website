import styled from '../../utils/styles/theme'
import { calcRem } from '../../utils/styles/calcRem'
import { breakpoint } from '../../utils/styles/breakpoints'
import { SafeLink } from '../safeLink'
import { srOnly } from '../../utils/styles/accessibility'

export const StyledFooter = styled('footer')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 120ch) minmax(1rem, 1fr)',
  gridGap: calcRem(theme.metrics.md),
  padding: calcRem(theme.metrics.md, 0),
  marginTop: calcRem(theme.metrics.xl),

  '& > *': {
    gridColumn: 2,
  },

  backgroundColor: theme.colors.grey100,
  color: theme.colors.grey800,
}))
StyledFooter.displayName = 'StyledFooter'

export const StyledFooterCopyright = styled('p')({
  fontSize: '90%',
  textAlign: 'center',
})
StyledFooterCopyright.displayName = 'StyledFooterCopyright'

export const StyledFooterNav = styled('nav')(({ theme }) => ({
  textAlign: 'center',

  ul: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  li: {
    margin: calcRem(0, theme.metrics.md),
  },

  a: {
    color: theme.colors.grey800,

    '&:focus, &:hover': {
      color: theme.colors.dddpink,
      outline: 0,
    },
  },

  [breakpoint('sm')]: {
    ul: {
      flexDirection: 'row',
    },
  },
}))
StyledFooterNav.displayName = 'StyledFooterNav'

export const StyledSocialLinks = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,
})

export const StyledSocialLink = styled(SafeLink)(({ theme }) => ({
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
