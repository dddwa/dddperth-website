import React, { Fragment } from 'react'
import { Session } from '../../config/types'
import { onSelectCallback } from './Agenda'
import {
  StyledAgendaButton,
  StyledAgendaContainer,
  StyledAgendaPresenter,
  StyledAgendaTitle,
  StyledRoom,
  StyledSection,
  StyledSponsor,
} from './AgendaSession.styled'

interface AgendaSessionProps {
  session?: Session
  children?: React.ReactNode
  room?: string
  sponsor?: string
  fullWidth?: boolean
  isKeynote?: boolean
  onSelect?: onSelectCallback
  renderTitle?: (title: string) => React.ReactNode
  renderPresenters?: (presenters: string) => React.ReactNode
}

export const AgendaSession: React.FC<AgendaSessionProps> = ({
  session,
  children,
  room,
  sponsor,
  fullWidth,
  isKeynote,
  onSelect,
  renderTitle,
  renderPresenters,
}) => {
  const presenters = session ? session.Presenters.map(p => p.Name).join(', ') : ''

  const Room = () => <StyledRoom showOnMobile={typeof session !== 'undefined' && !isKeynote}>{room}</StyledRoom>

  return (
    <StyledSection fullWidth={fullWidth} session={typeof session !== 'undefined'}>
      {!session && !children && <StyledAgendaPresenter>Loading&hellip;</StyledAgendaPresenter>}
      {session && (
        <StyledAgendaButton type="button" isKeynote={isKeynote} onClick={() => onSelect(session.Id)}>
          <StyledAgendaContainer>
            {renderPresenters ? (
              renderPresenters(presenters)
            ) : (
              <StyledAgendaPresenter isKeynote={isKeynote}>{presenters}</StyledAgendaPresenter>
            )}
            {renderTitle ? (
              renderTitle(session.Title)
            ) : (
              <StyledAgendaTitle isKeynote={isKeynote}>{session.Title}</StyledAgendaTitle>
            )}
            {sponsor && <StyledSponsor>Sponsored by: {sponsor}</StyledSponsor>}
            {room && <Room />}
          </StyledAgendaContainer>
        </StyledAgendaButton>
      )}
      {children && (
        <Fragment>
          {children}
          {room && <Room />}
        </Fragment>
      )}
    </StyledSection>
  )
}

AgendaSession.displayName = 'AgendaSession'
