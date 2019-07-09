/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const StyledAgendaTime = styled('div')(({ theme }) => ({
  gridColumn: `1 / -1`,
  padding: calcRem(10),
  backgroundColor: theme.colors.primary,
  color: '#fff',
  fontWeight: theme.weights.semiBold,

  [breakpoint('sm')]: {
    gridColumn: 'auto',
    backgroundColor: 'transparent',
    color: 'inherit',
  },
}))
StyledAgendaTime.displayName = 'StyledAgendaTime'
