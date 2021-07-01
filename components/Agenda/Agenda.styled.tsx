import { breakpoint, breakpointBetween, breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from 'components/utils/styles/theme'

const rowBackgroundColor = '#f9f9f9'
const cellBorder = '1px solid #ddd'

interface StyledAgendaRowProps {
  tracks?: number
}

export const StyledAgendaRow = styled('section')<StyledAgendaRowProps>(({ tracks = 4 }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(2, 1fr)`,
  backgroundColor: rowBackgroundColor,
  border: cellBorder,
  textAlign: 'center',

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

    [`& > section:nth-last-child(n+${Math.floor(tracks / 2)})`]: {
      borderBottom: cellBorder,
    },
  },

  [breakpointBetween('xs', 'sm')]: {
    [`& > section:nth-child(${Math.floor(tracks / 2)}n+1)`]: {
      borderRight: 0,
    },

    [`& > section:nth-last-child(n+${Math.floor(tracks / 2) + 1})`]: {
      borderBottom: cellBorder,
    },
  },

  [breakpoint('xs')]: {
    gridTemplateColumns: `repeat(${Math.floor(tracks / 2)}, 1fr)`,
  },

  [breakpoint('sm')]: {
    gridTemplateColumns: `${calcRem(90)} repeat(auto-fit, minmax(${calcRem(80)}, 1fr))`,
    '& > div:not(:last-child)': {
      borderRight: cellBorder,
    },
  },
}))
StyledAgendaRow.displayName = 'StyledAgendaRow'

export const StyledAgendaRowList = styled('ul')(({ theme }) => ({
  position: 'sticky',
  top: 100,
  display: 'none',
  margin: 0,
  backgroundColor: theme.colors.grey300,
  listStyle: 'none',

  li: {
    padding: calcRem(theme.metrics.md),
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    fontSize: calcRem(20),
    fontWeight: theme.weights.bold,
    textAlign: 'center',
  },

  [breakpoint('sm')]: {
    display: 'grid',
    gridTemplateColumns: `${calcRem(90)} repeat(auto-fit, minmax(${calcRem(80)}, 1fr))`,
    gridGap: calcRem(1),
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

export const StyledAgendaContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  marginBottom: calcRem(theme.metrics.xl),
}))
StyledAgendaContainer.displayName = 'StyledAgendaContainer'

export const StyledVideoContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: calcRem(theme.metrics.md),
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  marginBottom: calcRem(theme.metrics.md),
}))
