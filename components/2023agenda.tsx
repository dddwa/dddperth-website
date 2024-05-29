import React, { Fragment } from 'react'
import { Conference2023 } from 'config/2023'
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
            action={{ Title: 'Conference Feedback', Url: Conference2023.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference2023.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}
      <span></span>

      <Agenda
        conference={Conference2023}
        sessions={sessions}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference2023.RoomNames}
              livestreams={Conference2023.Livestreams}
            >
              {Conference2023.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
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
                  {Conference2023.RoomNames.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </StyledAgendaRowList>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
                  <AgendaSession room="Ingkarni Wardii Atrium" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Registration</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
                  <AgendaSession room="Horace Lamb Lecture Theatre" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 0 })} />
                  <AgendaSession
                    sessionId="ac97fc33-c609-42d1-8f49-ccdd2709cc07"
                    room={'Horace Lamb Lecture Theatre'}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 45 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 9, minutes: 55 })} />
                  <AgendaSession room={0} sessionId="1488a444-27cc-4391-980c-5c346df1c041" />
                  <AgendaSession room={1} sessionId="35c9aa76-2734-4492-89d6-2c04df8ef5d4" />
                  <AgendaSession room={2} sessionId="cfd2052b-16a4-4742-83ba-faeb325925f8" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 10, minutes: 40 })} />
                  <AgendaSession room="Ingkarni Wardii Atrium" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 10 })} />
                  <AgendaSession room={0} sessionId="1ba234a9-553e-485b-8b6d-66abaec063e9" />
                  <AgendaSession room={1} sessionId="177a8bf4-955b-44b8-be5a-0e1c31d1cb2c" />
                  <AgendaSession room={2} sessionId="7848dfdc-6389-4535-a763-03a82d199964" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 11, minutes: 55 })} />
                  <AgendaSession alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 5 })} />
                  <AgendaSession room={0} sessionId="f66e64f8-f731-45dd-8b3e-2844888eb9da" />
                  <AgendaSession room={1} sessionId="42a0d186-0e2f-443c-92f2-dd7ff0d677e9" />
                  <AgendaSession room={2} sessionId="19c02d9c-493a-4d75-b8a7-99c9115391bd" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 12, minutes: 50 })} />
                  <AgendaSession room="Ingkarni Wardii Atrium" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Lunch</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 13, minutes: 40 })} />
                  <AgendaSession room={0} sessionId="5c24d137-ae0f-44ab-a955-4570bb6e815f" />
                  <AgendaSession room={1} sessionId="1dba78ad-5e27-43a9-a709-6b0735eb4a78" />
                  <AgendaSession room={2} sessionId="77ac6e36-be53-4b9a-80bf-07cd2ea8a645" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 25 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 14, minutes: 35 })} />
                  <AgendaSession room={0} sessionId="16e8e87c-199c-430a-b5a6-b5a5997f79cf" />
                  <AgendaSession room={1} sessionId="781dd4d7-46f8-4e14-a4d4-5591aa0aefac" />
                  <AgendaSession room={2} sessionId="9dbd8adb-e2e7-4946-8046-4e4b3fadef80" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 20 })} />
                  <AgendaSession room="Ingkarni Wardii Atrium" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 15, minutes: 50 })} />
                  <AgendaSession room={0} sessionId="b864988e-252c-4afc-b846-3826d87d4112" />
                  <AgendaSession room={1} sessionId="b8f734bd-d625-43a3-aaa1-959e8bdea594" />
                  <AgendaSession room={2} sessionId="7cba8b73-494d-48ed-820e-c7201bb520d4" />
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 35 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                </StyledAgendaRow>
                <StyledAgendaRow>
                  <AgendaTime time={set(date, { hours: 16, minutes: 45 })} />
                  <AgendaSession room="Horace Lamb Lecture Theatre" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Prize Draw, Thank Yous, and Wrap Up</StyledTrackHeader>
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
