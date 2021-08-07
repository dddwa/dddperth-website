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

interface CurrentAgendaProps {
  date: Date
  sessions?: Session[]
  sessionsUrl: string
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const CurrentAgenda: React.FC<CurrentAgendaProps> = ({
  date,
  sessions = [],
  sessionsUrl,
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}) => {
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
        sessionsUrl={sessionsUrl}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
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
                <li>Riverside Theatre</li>
                <li>M6</li>
                <li>M7</li>
                <li>M8</li>
              </StyledAgendaRowList>
              <StyledAgendaRow>
                <AgendaTime time={date} />
                <AgendaSession room="Riverside Foyer (Level 2)" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Registration</StyledTrackHeader>
                  <StyledAddress>
                    Perth Convention and Exhibition Centre
                    <br />
                    21 Mounts Bay Rd, Perth
                  </StyledAddress>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
                <AgendaSession room={0} alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9, minutes: 0 })} />
                <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Welcome to Country</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9, minutes: 10 })} />
                <AgendaSession
                  sessionId="46cde2ca-8b44-4ff5-9b82-ad3c41a2b329"
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
                <AgendaTime time={set(date, { hours: 9, minutes: 40 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 9, minutes: 50 })} />
                <AgendaSession room={0} sessionId="616cf974-4922-4fe4-8b2a-23bff247f4ce" />
                <AgendaSession room={1} sessionId="dec643ab-4886-4ac5-8f2c-452f945174ae" />
                <AgendaSession room={2} sessionId="18c9f6a2-2655-4242-8535-cf61c1605cb9" />
                <AgendaSession room={3} sessionId="c06c0dd2-224e-4137-abbd-6fe25177a7b0" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 10, minutes: 35 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Morning tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 11, minutes: 5 })} />
                <AgendaSession room={0} sessionId="ea671390-b7db-4b36-80c9-07b28973142f" />
                <AgendaSession room={1} sessionId="cf16b808-ac70-463a-90cc-512b68042962" />
                <AgendaSession room={2} sessionId="97b4e034-985f-4cc7-bbe2-a1cb22d611a9" />
                <AgendaSession room={3} sessionId="3560629c-36cd-4dd7-91cf-7d3f00dba047" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 11, minutes: 50 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 12 })} />
                <AgendaSession room={0} sessionId="c04dc773-feaa-4c07-8aab-7e7598e58c48" />
                <AgendaSession room={1} sessionId="443bd0ee-bef3-4fe7-aa95-8b08782e248e" />
                <AgendaSession room={2} sessionId="1a67c372-f559-4713-8937-9d67646e23f7" />
                <AgendaSession room={3} sessionId="798f295f-a38e-49cf-98ad-a3bf4b513b7a" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 12, minutes: 20 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 12, minutes: 30 })} />
                <AgendaSession room={0} sessionId="774715b2-dd53-48fc-a144-80df9325eea9" />
                <AgendaSession room={1} sessionId="a1765cb1-a194-470d-8654-213e44afe5ba" />
                <AgendaSession room={2} sessionId="b555388f-5f27-42cb-9a01-266bfcc69464" />
                <AgendaSession room={3} sessionId="63183d8b-2e1e-4675-9316-5278a63f8ab7" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 13, minutes: 15 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Lunch</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 15 })} />
                <AgendaSession room={0} sessionId="0a75760c-a5f0-4ce2-b942-e3cff923182e" />
                <AgendaSession room={1} sessionId="ca8d113d-38c6-4042-a006-03f2add9ead4" />
                <AgendaSession room={2} sessionId="3cc93f61-ef21-4a8a-ac91-645c1bca3f16" />
                <AgendaSession room={3} sessionId="270889cf-405a-4422-ac97-c4e9bc1f7d8c" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 35 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 14, minutes: 45 })} />
                <AgendaSession room={0} sessionId="ed54a247-f530-4057-8000-04fd82d08be1" />
                <AgendaSession room={1} sessionId="83cc08fb-f422-42b3-bb7b-300e75cd1728" />
                <AgendaSession room={2} sessionId="cc7b2e63-3eca-4c0a-8205-117e5a53dfc5" />
                <AgendaSession room={3} sessionId="620775e4-6179-4637-80c4-f59027d3c54b" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 15, minutes: 30 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 16, minutes: 0 })} />
                <AgendaSession room={0} alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 16, minutes: 30 })} />
                <AgendaSession
                  sessionId="0b404590-9503-42ac-9e66-bf49adc4496f"
                  room={0}
                  renderPresenters={(presenters) => (
                    <StyledAgendaPresenter>Locknote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={set(date, { hours: 17, minutes: 0 })} />
                <AgendaSession room={0} alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
            </AgendaProvider>
          )
        }}
      />
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
