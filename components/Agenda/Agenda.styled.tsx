/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { breakpoint, breakpointBetween, breakpointMax } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

const rowBackgroundColor: string = '#f9f9f9'
const cellBorder: string = '1px solid #ddd'

export const StyledAgendaRow = styled('section')({
  display: 'grid',
  gridTemplateColumns: `repeat(2, 1fr)`,
  backgroundColor: rowBackgroundColor,
  border: cellBorder,

  '&:not(:first-child)': {
    borderTop: 0,
  },

  '& > section:not(:last-child)': {
    borderRight: cellBorder,
  },

  [breakpointMax('xs')]: {
    '& > section:nth-child(2n+1)': {
      borderRight: 0,
    },

    '& > section:nth-last-child(n+3)': {
      borderBottom: cellBorder,
    },
  },

  [breakpointBetween('xs', 'sm')]: {
    '& > section:nth-child(3n+1)': {
      borderRight: 0,
    },

    '& > section:nth-last-child(n+4)': {
      borderBottom: cellBorder,
    },
  },

  [breakpoint('xs')]: {
    gridTemplateColumns: `repeat(3, 1fr)`,
  },

  [breakpoint('sm')]: {
    gridTemplateColumns: `${calcRem(90)} repeat(auto-fit, minmax(${calcRem(80)}, 1fr))`,
    '& > div:not(:last-child)': {
      borderRight: cellBorder,
    },
  },
})
StyledAgendaRow.displayName = 'StyledAgendaRow'

export const StyledAgendaRowList = styled('ul')(({ theme }) => ({
  display: 'none',
  margin: 0,
  backgroundColor: theme.colors.inverse,
  listStyle: 'none',

  li: {
    backgroundColor: theme.colors.secondary,
    color: '#fff',
    fontSize: calcRem(20),
    fontWeight: theme.weights.bold,
    textAlign: 'center',
  },

  [breakpoint('sm')]: {
    display: 'grid',
    gridTemplateColumns: `${calcRem(90)} repeat(auto-fit, minmax(${calcRem(80)}, 1fr))`,
    gridGap: calcRem(10),
    padding: calcRem(8),
  },
}))
StyledAgendaRowList.displayName = 'StyledAgendaRowList'

export const StyledTrackHeader = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: calcRem(17),
  fontWeight: theme.weights.semiBold,
}))
StyledTrackHeader.displayName = 'StyledTrackHeader'

export const StyledAddress = styled('address')({
  margin: 0,
  fontSize: calcRem(17),
})
StyledAddress.displayName = 'StyledAddress'

export const StyledCenteredParagraph = styled('p')({
  textAlign: 'center',
})

export const StyledSponsorLogo = styled('img')({
  width: 200,
})

export const StyledFeedbackActions = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginBottom: calcRem(10),

  '& > *:not(:last-child)': {
    marginRight: calcRem(10),
  },
})
export const StyledUpNext = styled('div')(({ theme }) => ({
  marginBottom: calcRem(20),

  '& > h2': {
    padding: calcRem(10),
    margin: 0,
    backgroundColor: theme.colors.inverse,
    color: '#fff',
    fontSize: calcRem(20),
  },
}))
StyledUpNext.displayName = 'StyledUpNext'
