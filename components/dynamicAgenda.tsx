import React, { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAddress,
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'

type AgendaJson = typeof import('public/static/agenda/2021_gridsmart.json')
type Room = Pick<AgendaJson[0]['rooms'][0], 'id' | 'name'>
type Slot = Pick<AgendaJson[0]['timeSlots'][0], 'rooms' | 'slotStart'>

interface DynamicAgendaProps {
  date: Date
  sessions?: Session[]
  sponsors: Sponsor[]
  rooms: Room[]
  slots: Slot[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const DynamicAgenda = ({
  date,
  sessions = [],
  rooms = [],
  slots = [],
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}: DynamicAgendaProps) => {
  return (
    <Fragment>
      <p>Select a session to see more details&hellip;</p>

      {acceptingFeedback && (
        <StyledFeedbackActions>
          <ActionButton
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}

      <Agenda
        sessions={sessions}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          const roomIndexes = rooms.map((_, index) => index)
          return (
            <AgendaProvider
              getSession={(id) => sessions.find((session) => session.ExternalId === id)}
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={rooms.map((room) => room.name)}
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaRow>
                    <AgendaTime time={nextSessionGroup.timeStart} />
                    {nextSessionGroup.sessions.map((session, index) => (
                      <AgendaSession
                        key={session.Id}
                        sessionId={session.Id}
                        fullWidth={nextSessionGroup.sessions.length === 1}
                        room={index}
                        alwaysShowRoom={true}
                      />
                    ))}
                  </StyledAgendaRow>
                </StyledUpNext>
              )}

              <StyledAgendaRowList>
                <li>Time</li>
                {rooms.map((room) => (
                  <li key={room.name}>{room.name}</li>
                ))}
              </StyledAgendaRowList>
              {slots.map((slot, slotIndex) => {
                const [hours, minutes] = slot.slotStart.split(':').map((n) => Number.parseInt(n, 10))
                return (
                  <StyledAgendaRow key={slotIndex}>
                    <AgendaTime time={set(date, { hours, minutes })} />
                    {roomIndexes.map((index) => {
                      const sessionInRoom = slot.rooms.find((r) => r.index === index)
                      if (!sessionInRoom) {
                        return null
                      }

                      const sessionizeSession = sessionInRoom.session
                      const isServiceSession = sessionizeSession.isServiceSession
                      const isChangeover =
                        sessionizeSession.isServiceSession && sessionizeSession.title === 'Changeover'
                      const isKeynoteOrLocknote = sessionizeSession.isPlenumSession && !isServiceSession
                      const isLocknote = isKeynoteOrLocknote && slotIndex > 10 // dodgy, but any "keynote" after a certain point is the locknote

                      return (
                        <AgendaSession
                          fullWidth={isServiceSession || isKeynoteOrLocknote}
                          alwaysShowRoom={isServiceSession || isKeynoteOrLocknote}
                          isKeynote={isKeynoteOrLocknote}
                          key={sessionizeSession.id}
                          sessionId={isServiceSession ? undefined : sessionizeSession.id}
                          room={isChangeover ? undefined : sessionizeSession.room}
                          renderPresenters={
                            isKeynoteOrLocknote
                              ? (presenters) => (
                                  <StyledAgendaPresenter isKeynote>
                                    {isLocknote ? 'Locknote' : 'Keynote: '}
                                    {presenters}
                                  </StyledAgendaPresenter>
                                )
                              : undefined
                          }
                        >
                          {isServiceSession && <StyledTrackHeader>{sessionizeSession.title}</StyledTrackHeader>}
                          {isServiceSession && sessionizeSession.description && (
                            <StyledAddress>{sessionizeSession.description}</StyledAddress>
                          )}
                        </AgendaSession>
                      )
                    })}
                  </StyledAgendaRow>
                )
              })}
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

DynamicAgenda.displayName = 'CurrentAgenda'
