// tslint:disable: object-literal-sort-keys
// tslint:disable: object-literal-key-quotes
import { breakpoint } from '../../utils/styles/breakpoints'
import { calcRem } from '../../utils/styles/calcRem'
import styled from '../../utils/styles/theme'

export const StyledFooter = styled('footer')(({ theme }) => ({
  padding: calcRem(20, 0, 30),
  background: theme.colors.primary10,
  color: '#fff',
  textAlign: 'center',

  [breakpoint('sm')]: {
    padding: calcRem(30, 0, 40),
  },

  [breakpoint('md')]: {
    padding: calcRem(35, 0, 50),
  },

  [breakpoint('lg')]: {
    padding: calcRem(40, 0, 60),
  },
}))
StyledFooter.displayName = 'StyledFooter'

export const StyledFooterNav = styled('nav')(({ theme }) => ({
  padding: 0,
  marginBottom: calcRem(20),

  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },

  a: {
    color: '#fff',
    fontWeight: theme.weights.semiBold,

    '&:hover, &:focus': {
      color: '#ddd',
    },
  },

  [breakpoint('sm')]: {
    marginBottom: calcRem(30),

    li: {
      display: 'inline-block',
      padding: calcRem(0, 20),
      margin: 0,
    },
  },

  [breakpoint('md')]: {
    marginBottom: calcRem(35),
  },

  [breakpoint('lg')]: {
    marginBottom: calcRem(40),
  },

  [breakpoint('xl')]: {
    marginBottom: calcRem(45),
  },
}))
StyledFooterNav.displayName = 'StyledFooterNav'

export const StyledSocialList = styled('ul')(({ theme }) => ({
  padding: 0,
  margin: 0,
  marginBottom: calcRem(40),

  li: {
    display: 'inline-block',
    padding: 0,
    margin: calcRem(0, 2),
    listStyle: 'none',
  },

  a: {
    display: 'block',
    width: calcRem(35),
    height: calcRem(35),
    lineHeight: calcRem(35),
    color: '#fff',
    fontSize: calcRem(16),
    backgroundColor: theme.colors.primary,
    borderRadius: '50%',
    textDecoration: 'none',
    transition: 'background-color 0.2s',

    '&:hover, &:focus': {
      backgroundColor: theme.colors.primaryDark,
    },
  },

  [breakpoint('sm')]: {
    a: {
      width: calcRem(42),
      height: calcRem(42),
      lineHeight: calcRem(42),
      fontSize: calcRem(20),
    },
  },
}))
StyledSocialList.displayName = 'StyledSocialList'

export const StyledFooterCopyright = styled('p')({
  fontSize: '90%',

  [breakpoint('lg')]: {
    fontSize: '85%',
  },
})
StyledFooterCopyright.displayName = 'StyledFooterCopyright'
