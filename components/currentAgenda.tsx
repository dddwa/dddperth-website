import React, { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledMultiSessionSlot,
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

export const CurrentAgenda = ({
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
                  <AgendaTime time={set(date, { hours: 7, minutes: 45 })} />
                  <AgendaSession room="Riverside Foyer (Level 2)" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Registration</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 40 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 55 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome to Country</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 10 })} />
                  <AgendaSession
                    sessionId="337380"
                    room={0}
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
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 10 })} />
                  <AgendaSession room={0} sessionId="344274" />
                  <AgendaSession room={1} sessionId="343408" />
                  <AgendaSession room={2} sessionId="344367" />
                  <AgendaSession room={3} sessionId="344044" />
                  <AgendaSession room={4} sessionId="344101" />
                  <AgendaSession room={5} sessionId="343942" />
                  <AgendaSession room={6} sessionId="342543" />
                  <AgendaSession room={7} sessionId="334148" />
                  <AgendaSession room={8} sessionId="344023" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 55 })} />
                  <AgendaSession room="Northern, Theatre and Southern Foyers" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 25 })} />
                  <AgendaSession room={0} sessionId="333791" />
                  <AgendaSession room={1} sessionId="344494" />
                  <AgendaSession room={2} sessionId="338797" />
                  <AgendaSession room={3} sessionId="344002" />
                  <AgendaSession room={4} sessionId="344418" />
                  <AgendaSession room={5} sessionId="343628" />
                  <AgendaSession room={6} sessionId="338125" />
                  <AgendaSession room={7} sessionId="343620" />
                  <AgendaSession room={8} sessionId="339320" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 10 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 20 })} />
                  <AgendaSession room={0} sessionId="333736" />
                  <AgendaSession room={1} sessionId="343939" />
                  <AgendaSession room={2} sessionId="340959" />
                  <AgendaSession room={3} sessionId="344464" />
                  <AgendaSession room={4} sessionId="343953" />
                  <AgendaSession room={5} sessionId="341816" />
                  <AgendaSession room={6} sessionId="344501" />
                  <AgendaSession room={7} sessionId="344419" />
                  <AgendaSession room={8} sessionId="342452" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 40 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 50 })} />
                  <AgendaSession room={0} sessionId="337322" />
                  <AgendaSession room={1} sessionId="344493" />
                  <AgendaSession room={2} sessionId="343385" />
                  <AgendaSession room={3} sessionId="343105" />
                  <AgendaSession room={4} sessionId="336320" />
                  <AgendaSession room={5} sessionId="343968" />
                  <AgendaSession room={6} sessionId="339597" />
                  <AgendaSession room={7} sessionId="344431" />
                  <AgendaSession room={8} sessionId="341472" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 13, minutes: 35 })} />
                  <AgendaSession room="Northern, Theatre and Southern Foyers" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Lunch</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 35 })} />
                  <AgendaSession room={0} sessionId="379497" alwaysShowRoom />
                  <AgendaSession room={7} sessionId="379496" alwaysShowRoom />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 5 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 15 })} />
                  <AgendaSession room={0} sessionId="343399" />
                  <AgendaSession room={1} sessionId="343561" />
                  <AgendaSession room={2} sessionId="341315" />
                  <AgendaSession room={3} sessionId="340848" />
                  <AgendaSession room={4} sessionId="343948" />
                  <AgendaSession room={5} sessionId="339017" />
                  <AgendaSession room={6} sessionId="343697" />
                  <StyledMultiSessionSlot>
                    <AgendaSession room={7} sessionId="343793" />
                    <AgendaSession room={7} sessionId="344491" />
                  </StyledMultiSessionSlot>
                  <AgendaSession room={8} sessionId="344427" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 35 })} />
                  <AgendaSession room="Northern, Theatre and Southern Foyers" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Coffee Break</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 5 })} />
                  <AgendaSession
                    sessionId="383016"
                    room={0}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 55 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 17, minutes: 25 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Closing</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime
                    time={set(date, { hours: 17, minutes: 35 })}
                    endTime={set(date, { hours: 19, minutes: 30 })}
                  />
                  <AgendaSession room="Riverside Foyer" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>DDD Afters</StyledTrackHeader>
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

CurrentAgenda.displayName = 'CurrentAgenda'
