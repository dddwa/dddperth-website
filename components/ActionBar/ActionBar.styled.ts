import styled from '../utils/styles/theme'
import { breakpoint, breakpointMax } from '../utils/styles/breakpoints'

export const StyledActionBarContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.grey100,
  borderBottom: `1px solid ${theme.colors.grey300}`,

  '> div': {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    maxWidth: `120ch`,
    margin: '0 auto',
  },

  p: {
    display: 'none',
    flexGrow: 1,
    textAlign: 'center',

    [breakpoint('lg')]: {
      display: 'block',
    },
  },

  a: {
    [breakpointMax('lg')]: {
      flexGrow: 1,
      textAlign: 'center',
    },
  },
}))
