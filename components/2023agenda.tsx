import React, { Fragment } from 'react'
import Conference from 'config/2023'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
  StyledAgendaContainer,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'

interface CurrentAgendaProps {
  date: Date
  sessions?: Session[]
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const Agenda2023 = ({
  date,
  sessions = [],
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}: CurrentAgendaProps) => {
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
      <span></span>

      <Agenda
        conference={Conference}
        sessions={sessions}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              getSession={(id) => sessions.find((session) => session.ExternalId === id)}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
              livestreams={Conference.Livestreams}
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
              <StyledAgendaContainer>
                <StyledAgendaRowList>
                  <li>Time</li>
                  {Conference.RoomNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </StyledAgendaRowList>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
                  <AgendaSession room="Registration" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Registration</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 0 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 15 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome to Country</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 25 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 30 })} />
                  <AgendaSession
                    sessionId="530801"
                    room={'Riverview'}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 0 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 30 })} />
                  <AgendaSession room={0} sessionId="507975" />
                  <AgendaSession room={1} sessionId="507977" />
                  <AgendaSession room={2} sessionId="494876" />
                  <AgendaSession room={3} sessionId="494314" />
                  <AgendaSession room={4} sessionId="497057" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 15 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 25 })} />
                  <AgendaSession room={0} sessionId="503672" />
                  <AgendaSession room={1} sessionId="501705" />
                  <AgendaSession room={2} sessionId="507918" />
                  <AgendaSession room={3} sessionId="505719" />
                  <AgendaSession room={4} sessionId="496926" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 10 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 20 })} />
                  <AgendaSession room={0} sessionId="501197" />
                  <AgendaSession room={1} sessionId="505543" />
                  <AgendaSession room={2} sessionId="501529" />
                  <AgendaSession room={3} sessionId="507492" />
                  <AgendaSession room={4} sessionId="504893" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 40 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Lunch</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 13, minutes: 30 })} />
                  <AgendaSession
                    sessionId="528193"
                    room={'Riverview'}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 0 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 15 })} />
                  <AgendaSession room={0} sessionId="494475" />
                  <AgendaSession room={1} sessionId="508126" />
                  <AgendaSession room={2} sessionId="508117" />
                  <AgendaSession room={3} sessionId="499846" />
                  <AgendaSession room={4} sessionId="503588" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 0 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 10 })} />
                  <AgendaSession room={0} sessionId="508194" />
                  <AgendaSession room={1} sessionId="508110" />
                  <AgendaSession room={2} sessionId="505457" />
                  <AgendaSession room={3} sessionId="508055" />
                  <AgendaSession room={4} sessionId="494781" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 55 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Afternoon Tea/Wrap up</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
              </StyledAgendaContainer>
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

Agenda2023.displayName = 'CurrentAgenda'
