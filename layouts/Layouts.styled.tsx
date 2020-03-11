import styled from '../components/utils/styles/theme'
import { calcRem } from '../components/utils/styles/calcRem'
import { breakpoint } from '../components/utils/styles/breakpoints'

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 120ch) minmax(1rem, 1fr)',
  gridGap: calcRem(theme.metrics.md),

  '& > *': {
    gridColumn: 2,
  },
}))

export const StyledSidebarContainer = styled('div')(({ theme }) => ({
  display: 'table',
  tableLayout: 'fixed',

  ['@supports(display: grid)']: {
    display: 'grid',
    gridGap: calcRem(theme.metrics.md),

    [breakpoint('md')]: {
      gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 90ch) minmax(0, 30ch) minmax(1rem, 1fr)',

      main: {
        gridColumn: 2,
      },

      aside: {
        gridColumn: 3,
      },
    },
  },
}))
