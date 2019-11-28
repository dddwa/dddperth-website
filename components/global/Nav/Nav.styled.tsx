/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { srOnly } from '../../utils/styles/accessibility'
import { breakpoint, breakpointMax } from '../../utils/styles/breakpoints'
import { calcRem } from '../../utils/styles/calcRem'
import styled from '../../utils/styles/theme'

export const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  padding: calcRem(8, 15),
  backgroundColor: theme.colors.primary150,

  [breakpoint('sm')]: {
    padding: 0,
  },
}))
StyledNav.displayName = 'StyledNav'

interface StyledNavCollapseProps {
  height: number
}

export const StyledNavCollapse = styled('div')<StyledNavCollapseProps>(({ height }) => ({
  [breakpointMax('sm')]: {
    height,
    transition: 'height 0.35s ease',
    overflow: 'hidden',
  },
}))
StyledNavCollapse.displayName = 'StyledNavCollapse'

export const StyledNavList = styled('ul')({
  display: 'block',
  margin: 0,
  listStyle: 'none',

  [breakpoint('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 750,
    paddingRight: calcRem(15),
    paddingLeft: calcRem(15),
    marginRight: 'auto',
    marginLeft: 'auto',
  },

  [breakpoint('md')]: {
    width: 970,
  },

  [breakpoint('lg')]: {
    width: 1170,
  },
})
StyledNavList.displayName = 'StyledNavList'

interface StyledNavLinkProps {
  active?: boolean
}

export const StyledNavLink = styled('a')<StyledNavLinkProps>(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: calcRem(10, 6),
  color: '#fff',
  backgroundColor: active ? theme.colors.primary : 'transparent',
  fontWeight: theme.weights.bold,

  '&:link': {
    color: '#fff',
    textDecoration: 'none',
  },

  '&:hover, &:focus': {
    color: '#fff',
    textDecoration: 'underline',
    // TODO: Sort this when global anchors dont change background
    backgroundColor: active ? theme.colors.primary : 'transparent',
  },

  '.fa-external-link': {
    marginLeft: calcRem(6),
  },

  [breakpointMax('sm')]: {
    '&::after': {
      display: 'block',
      width: 0,
      height: 0,
      marginLeft: 'auto',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: '6px solid rgba(255, 255, 255, 0.3)',
      content: "''",
    },
  },

  [breakpoint('sm')]: {
    fontSize: calcRem(14),
    padding: calcRem(15),
  },

  [breakpoint('md')]: {
    fontSize: calcRem(16),
    padding: calcRem(14, 20),
  },

  [breakpoint('lg')]: {
    fontSize: calcRem(17),
    padding: calcRem(13, 28),
  },

  [breakpoint('xl')]: {
    fontSize: calcRem(18),
    padding: calcRem(12, 30),
  },
}))
StyledNavLink.displayName = 'StyledNavLink'

interface StyledToggleProps {
  active: boolean
}

export const StyledToggle = styled('button')<StyledToggleProps>(({ theme, active }) => ({
  width: calcRem(42),
  height: calcRem(32),
  alignSelf: 'flex-end',
  padding: 0,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 0,
  borderRadius: calcRem(4),

  span: srOnly,

  div: {
    position: 'relative',
    display: 'inline-block',
    width: calcRem(22),
    height: calcRem(2),
    verticalAlign: 'middle',
    transition: 'background 250ms cubic-bezier(0.55, 0, 0.1, 1) 0s',
    backgroundColor: active ? 'transparent' : theme.colors.white,

    '&::before, &::after': {
      position: 'absolute',
      height: calcRem(2),
      right: 0,
      left: 0,
      transformOrigin: 'center',
      backgroundColor: theme.colors.white,
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

  [breakpoint('sm')]: {
    display: 'none',
  },
}))
StyledToggle.displayName = 'StyledToggle'
