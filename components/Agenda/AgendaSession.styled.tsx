import { breakpoint, breakpointMax } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'
import { zIndex } from '../utils/styles/zindex'

interface StyledSectionProps {
  fullWidth?: boolean
  session?: boolean
}

export const StyledSection = styled('section')<StyledSectionProps>(({ fullWidth, session }) => ({
  padding: session ? undefined : calcRem(20, 8),

  [breakpointMax('sm')]: {
    gridColumn: fullWidth ? '1 / -1' : 'auto',
  },
}))
StyledSection.displayName = 'StyledSection'

interface StyledAgendaButtonProps {
  isKeynote?: boolean
}

export const StyledAgendaButton = styled('button')<StyledAgendaButtonProps>(({ isKeynote, theme }) => ({
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: calcRem(8),
  margin: 0,
  flexDirection: 'column',
  alignItems: 'stretch',
  backgroundColor: '#FFF',
  border: 0,
  cursor: 'pointer',
  textAlign: isKeynote ? 'center' : 'left',
  transition: 'background-color 0.3s linear',

  '&:hover, &:focus': {
    position: 'relative',
    zIndex: zIndex.agendaItem,
  },

  '&:hover': {
    boxShadow: `0 0 0 ${calcRem(4)} ${theme.colors.secondary}`,
  },

  '&:focus': {
    outline: `${calcRem(4)} solid ${theme.colors.linkFocusBg}`,
  },
}))
StyledAgendaButton.displayName = 'StyledAgendaButton'

interface StyledAgendaPresenterProps {
  isKeynote?: boolean
}

export const StyledAgendaPresenter = styled('h3')<StyledAgendaPresenterProps>(({ theme, isKeynote }) => ({
  padding: 0,
  margin: 0,
  fontSize: calcRem(isKeynote ? 18 : 16),
  fontWeight: theme.weights.bold,
}))
StyledAgendaPresenter.displayName = 'StyledAgendaPresenter'

interface StyledAgendaTitle {
  isKeynote?: boolean
}

export const StyledAgendaTitle = styled('h2')<StyledAgendaTitle>(({ theme, isKeynote }) => ({
  padding: 0,
  margin: 0,
  fontSize: calcRem(isKeynote ? 18 : 16),
  fontStyle: 'italic',
  fontWeight: theme.weights.regular,
  wordBreak: 'break-word',
}))
StyledAgendaTitle.displayName = 'StyledAgendaTitle'

export const StyledSponsor = styled('small')(({ theme }) => ({
  fontSize: calcRem(15),
  fontWeight: theme.weights.semiBold,
}))
StyledSponsor.displayName = 'StyledSponsor'

interface StyledRoomProps {
  showOnMobile?: boolean
}

export const StyledRoom = styled('span')<StyledRoomProps>(({ theme, showOnMobile }) => ({
  display: 'block',
  marginTop: showOnMobile ? 'auto' : undefined,
  paddingTop: showOnMobile ? calcRem(10) : undefined,
  color: theme.colors.secondary,
  fontSize: calcRem(15),
  fontWeight: theme.weights.semiBold,
  textAlign: showOnMobile ? 'center' : undefined,

  [breakpoint('sm')]: {
    display: showOnMobile ? 'none' : undefined,
  },
}))
StyledRoom.displayName = 'StyledRoom'
