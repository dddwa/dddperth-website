import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import { tableLayoutBreakpointFrom } from './layout'

export const StyledAgendaTime = styled('div')(({ theme }) => ({
  gridColumn: `1 / -1`,
  padding: calcRem(10),
  backgroundColor: theme.colors.primary,
  color: '#fff',
  fontWeight: theme.weights.semiBold,

  [breakpoint(tableLayoutBreakpointFrom)]: {
    gridColumn: 'auto',
    backgroundColor: 'transparent',
    color: 'inherit',
  },
}))
StyledAgendaTime.displayName = 'StyledAgendaTime'
