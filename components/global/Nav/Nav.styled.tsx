import { calcRem } from 'components/utils/styles/calcRem'
import styled from 'components/utils/styles/theme'
import { zIndex } from 'components/utils/styles/zindex'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { NavStatus } from './Nav'

interface StyleNavProps {
  status: NavStatus
}

export const StyledNav = styled('nav')<StyleNavProps>(({ status }) => ({
  position: 'fixed',
  overflow: 'hidden',
  transition: 'transform 0.25s ease',
  transform: `scaleX(${status === 'opening' || status === 'open' ? 1 : 0})`,
  transformOrigin: 'top left',
  zIndex: zIndex.flyoutnav,
  visibility: status !== 'closed' ? 'visible' : 'hidden',
}))
StyledNav.displayName = 'StyledNav'

export const StyledNavList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '40vw',
  height: '100vh',
  minWidth: 280,
  padding: calcRem(0, theme.metrics.md),
  backgroundColor: theme.colors.grey100,
  overflowY: 'scroll',
  zIndex: zIndex.flyoutnav,
}))
StyledNavList.displayName = 'StyledNavList'

interface StyledNavLinkProps {
  active?: boolean
}

export const StyledNavLink = styled('a')<StyledNavLinkProps>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: calcRem(theme.metrics.lg, theme.metrics.lg),
  color: active ? theme.colors.white : theme.colors.grey800,
  backgroundColor: active ? theme.colors.grey800 : 'transparent',
  cursor: 'pointer',
  textDecoration: 'none',
  textTransform: 'uppercase',
  transition: 'all 0.1s linear',
  outline: 0,

  '&:focus': {
    backgroundColor: active ? theme.colors.grey800 : theme.colors.grey300,
  },

  '&:hover': {
    backgroundColor: active ? theme.colors.grey800 : theme.colors.dddpink,
    color: theme.colors.white,
  },

  [breakpoint('md')]: {
    paddingLeft: calcRem(theme.metrics.xxl),
  },
}))
StyledNavLink.displayName = 'StyledNavLink'
