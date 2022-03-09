import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { EventDetailsSummary } from 'components/eventDetailsSummary'

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(0, 120ch) minmax(1rem, 1fr)',
  gridGap: calcRem(theme.metrics.md),
  marginTop: calcRem(theme.metrics.xl),
  marginBottom: calcRem(theme.metrics.xl),

  '& > *': {
    gridColumn: 2,
  },
}))

export const StyledSidebarContainer = styled('div')(({ theme }) => ({
  display: 'table',
  tableLayout: 'fixed',
  marginTop: calcRem(theme.metrics.xl),
  marginBottom: calcRem(theme.metrics.xl),

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

export const StyledEventDetailsSummary = styled(EventDetailsSummary)(({ theme }) => ({
  marginBottom: calcRem(theme.metrics.lg),
}))
