import { Moment } from 'moment'
import React, { Fragment } from 'react'
import { Session, Sponsor } from '../config/types'
import { Agenda } from './Agenda/Agenda'
import { StyledAddress, StyledAgendaRow, StyledAgendaRowList, StyledTrackHeader } from './Agenda/Agenda.styled'
import { AgendaSession } from './Agenda/AgendaSession'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'
import { AgendaTime } from './Agenda/AgendaTime'

interface CurrentAgendaProps {
  date: Moment
  sessions?: Session[]
  sessionsUrl: string
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
}

const getSessionsById = (sessions: Session[]) => (id: string) => sessions.find(session => session.Id === id)
const getSponsorById = (sponsors: Sponsor[]) => (id: string) => sponsors.find(sponsor => sponsor.id === id)

export const CurrentAgenda: React.FC<CurrentAgendaProps> = ({
  date,
  sessions = [],
  sessionsUrl,
  sponsors,
  acceptingFeedback,
  feedbackLink,
}) => {
  return (
    <Fragment>
      <p>Tap on a session to see more details&hellip;</p>

      <Agenda
        sessions={sessions}
        sessionsUrl={sessionsUrl}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        render={(agendaSessions, onSelect) => {
          const getSessions = getSessionsById(agendaSessions)
          const getSponsor = getSponsorById(sponsors)

          return (
            <Fragment>
              <StyledAgendaRowList>
                <li>Time</li>
                <li>Theatre</li>
                <li>RR5</li>
                <li>M6</li>
                <li>M7</li>
                <li>M8</li>
                <li>M9</li>
              </StyledAgendaRowList>
              <StyledAgendaRow>
                <AgendaTime time={date.clone()} />
                <AgendaSession room="Riverside Foyer (Level 2)" fullWidth>
                  <StyledTrackHeader>Registration</StyledTrackHeader>
                  <StyledAddress>
                    Perth Convention and Exhibition Centre
                    <br />
                    21 Mounts Bay Rd, Perth
                  </StyledAddress>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ minutes: 45 })} />
                <AgendaSession room="Riverside Theatre" fullWidth>
                  <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set('hour', 9)} />
                <AgendaSession room="Riverside Theatre" fullWidth>
                  <StyledTrackHeader>Welcome to country</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minutes: 10 })} />
                <AgendaSession
                  session={getSessions('112b54cc-df00-40fd-ad5e-4b0714329821')}
                  sponsor={getSponsor('bhp')}
                  room="Riverside Theatre"
                  renderPresenters={presenters => (
                    <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                  )}
                  onSelect={onSelect}
                  fullWidth
                  isKeynote
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minutes: 55 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 10, minutes: 5 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('ae58057e-2cea-4300-bdb7-f51d57476179')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('8cd14aaa-89cb-4886-9649-ceb0cd4b27d1')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('385e78cf-b12a-466c-9fb8-e29c7fd627fb')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('c044309e-e859-4b5c-adad-7534a36284e0')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('b73abc43-7634-40d3-a38b-696bdb844cc0')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('cc740103-612c-4673-b293-97487787f093')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 10, minute: 25 })} />
                <AgendaSession room="Riverside Theatre" fullWidth>
                  <StyledTrackHeader>Morning tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 10, minute: 55 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('f8967843-c437-4a90-9242-fac45c4ea1a6')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('cea40511-0eeb-4ac8-8c1e-098a966f7314')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('643434fc-64d5-49ba-a1d8-848a7570b6fa')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('df03352d-b177-420d-b66a-b1c174e3e0a3')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('b446c945-6210-4b56-bc78-772347060a5b')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('2fff2f0e-7f55-4a26-bf15-7537a6c3f700')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minute: 40 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minute: 50 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('7bb9859c-ed23-4569-b863-7b4c440b2b88')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('9c81bbdb-8898-4259-afac-0dc73ff363b5')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('24ad37da-2c0b-4f5c-afde-3266217e6d80')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('3c2badde-1534-494b-a084-8ca5857d648d')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('f3a57e6c-0325-4898-bffd-2d3040f5dee9')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('adbcf783-1ab2-456b-ba41-1041f139e3f2')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minute: 10 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minute: 20 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('9b7efb7a-64e0-41ac-9439-f65a662147da')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('6d6553c0-b678-434d-b94e-c46fe77c86eb')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('0bcae524-eb87-4080-b189-ab5c7d5ad5fa')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('5aba6e83-cfd9-4114-af80-f28de931d8c2')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('fd0518e0-a52c-44dd-84fb-61ce59c3cdb5')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('70537fd7-4e49-4100-97ee-ce79c71545d6')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 13, minute: 5 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" fullWidth>
                  <StyledTrackHeader>Lunch</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 5 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('a6eb8bb3-6086-4cb3-b024-d0a6c4dd3de3')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('a577e148-b1d7-42e1-a424-5d0db3107ae2')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('2fcea05c-96dc-4802-b8a9-14bcfee01a64')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('97792db7-0c73-4fee-91c3-00d7fe002540')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('fa861d2a-9597-4a98-8510-fc0dc0b400e6')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('83b6a640-935b-4e5e-b251-81c3d69c0129')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 25 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minute: 35 })} />
                <AgendaSession
                  room="Theatre"
                  session={getSessions('b2795175-d14d-4090-a62e-153d4534b916')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="RR5"
                  session={getSessions('80721e7b-b082-4b50-9a9d-136d3054b7b0')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M6"
                  session={getSessions('94a2f4b3-bd6e-4eb6-9917-baa3bcb3d41f')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M7"
                  session={getSessions('f548e402-d04d-4318-a8c6-d879b3f11d37')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M8"
                  session={getSessions('00311b92-6c21-47a8-b8d2-af325581d6f9')}
                  onSelect={onSelect}
                />
                <AgendaSession
                  room="M9"
                  session={getSessions('35e1174f-8d50-48db-a410-d53c3c8ddf73')}
                  onSelect={onSelect}
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 15, minute: 20 })} />
                <AgendaSession room="Riverside Foyer and South Foyer" fullWidth>
                  <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 15, minute: 50 })} />
                <AgendaSession room="Riverside Theatre" fullWidth>
                  <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 16, minute: 20 })} />
                <AgendaSession
                  session={getSessions('4c019f6f-c312-4bb9-8024-3352f6034d6e')}
                  sponsor={getSponsor('yow')}
                  room="Riverside Theatre"
                  renderPresenters={presenters => <StyledAgendaPresenter>Locknote: {presenters}</StyledAgendaPresenter>}
                  onSelect={onSelect}
                  fullWidth
                  isKeynote
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 17, minute: 5 })} />
                <AgendaSession room="Riverside Theatre" fullWidth>
                  <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime
                  time={date.clone().set({ hour: 17, minute: 10 })}
                  endTime={date.clone().set({ hour: 19, minute: 0 })}
                />
                <AgendaSession room="Riverside Foyer and South Foyer" fullWidth>
                  <StyledTrackHeader>Afterparty</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
            </Fragment>
          )
        }}
      />
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
