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
  StyledMultiSessionSlot,
  StyledTrackHeader,
  StyledUpNext,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'
import { AgendaForDisplay } from './Agenda/gridSmartUtils'

interface DynamicAgendaProps {
  agenda: AgendaForDisplay
  sessions?: Session[]
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const DynamicAgenda = ({
  agenda,
  sessions = [],
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}: DynamicAgendaProps) => {
  const { slots, rooms } = agenda
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
          return (
            <AgendaProvider
              getSession={(id) => sessions.find((session) => session.ExternalId === id)}
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={rooms.map((room) => room.name)}
              getLivestream={(roomId) =>
                (typeof roomId === 'number' ? rooms[roomId] : rooms.find((r) => r.name === roomId))?.livestreamUrl
              }
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaRow>
                    <AgendaTime time={nextSessionGroup.timeStart} />
                    {nextSessionGroup.sessions.map((session, index) =>
                      Array.isArray(session) ? (
                        <Fragment key={index}>
                          {session.map((sess) => (
                            <AgendaSession
                              key={sess.Id}
                              sessionId={sess.ExternalId}
                              fullWidth={nextSessionGroup.sessions.length === 1}
                              room={index}
                              alwaysShowRoom={true}
                            />
                          ))}
                        </Fragment>
                      ) : (
                        <AgendaSession
                          key={session.Id}
                          sessionId={session.ExternalId}
                          fullWidth={nextSessionGroup.sessions.length === 1}
                          room={index}
                          alwaysShowRoom={true}
                        />
                      ),
                    )}
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
                return (
                  <StyledAgendaRow key={slotIndex}>
                    <AgendaTime time={new Date(slot.startTime)} />
                    {slot.type === 'sessions' ? (
                      rooms.map((room, roomIndex) => {
                        const roomsForTheConference = agenda.rooms.length
                        const roomsForThisSession = Object.keys(slot.sessionsByRoom).length

                        const sessionsInRoom = slot.sessionsByRoom[room.name]
                        if (!sessionsInRoom) {
                          return null
                        }
                        const hasMoreThanOne = sessionsInRoom.length > 1
                        const Wrapper = hasMoreThanOne ? StyledMultiSessionSlot : Fragment
                        return (
                          <Wrapper key={roomIndex}>
                            {sessionsInRoom.map((session) => {
                              return (
                                <AgendaSession
                                  fullWidth={roomsForThisSession === 1}
                                  alwaysShowRoom={roomsForThisSession !== roomsForTheConference}
                                  isKeynote={session.isKeynote || session.isLocknote}
                                  sponsorId={session.sponsorId}
                                  sessionId={session.sessionId}
                                  key={session.sessionId}
                                  room={session.roomName}
                                  renderPresenters={
                                    session.isKeynote || session.isLocknote
                                      ? (presenters) => (
                                          <StyledAgendaPresenter isKeynote>
                                            {session.isLocknote ? 'Locknote: ' : 'Keynote: '}
                                            {presenters}
                                          </StyledAgendaPresenter>
                                        )
                                      : undefined
                                  }
                                />
                              )
                            })}
                          </Wrapper>
                        )
                      })
                    ) : (
                      <AgendaSession
                        fullWidth
                        alwaysShowRoom
                        room={slot.service.roomName}
                        sponsorId={slot.service.sponsorId}
                      >
                        <StyledTrackHeader>{slot.service.title}</StyledTrackHeader>
                        {slot.service.description && <StyledAddress>{slot.service.description}</StyledAddress>}
                      </AgendaSession>
                    )}
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

DynamicAgenda.displayName = 'DynamicAgenda'
