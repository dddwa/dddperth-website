import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { SafeLink } from 'components/global/safeLink'
import { Sponsors } from 'components/Sponsors/sponsors'
import From2015 from 'config/2015'
import { SponsorType, Session } from 'config/types'
import {
  StyledAgendaRowList,
  StyledAgendaRow,
  StyledTrackHeader,
  StyledAddress,
  StyledAgendaContainer,
} from 'components/Agenda/Agenda.styled'
import { Agenda } from 'components/Agenda/Agenda'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { StyledAgendaPresenter } from 'components/Agenda/AgendaSession.styled'
import { Text } from 'components/global/text'
import { ButtonAnchor } from 'components/global/Button/Button'
import { zonedTimeToUtc } from 'date-fns-tz'
import { set } from 'date-fns'
import { mapSessions } from 'components/utils/mapSession'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import AllAgendas from 'components/allAgendas'
import Conference from 'config/conference'

import data from 'public/static/agenda/2015.json'

type AgendaProps = {
  sessions: Session[]
  date: string
  conferenceInstance: string
  numTracks: number
}

const Agenda2015: NextPage<AgendaProps> = ({ sessions, conferenceInstance, date, numTracks }) => {
  const { conference, dates } = useConfig()
  const dateUTC = new Date(date)

  return (
    <Main
      title={`${conferenceInstance} Agenda`}
      description={`The agenda for ${conference.Name} ${conferenceInstance}.`}
    >
      <div className="container">
        <h1>{conferenceInstance} Agenda</h1>
        <Agenda
          conference={{ ...Conference, ...(From2015 as any) }}
          sessions={sessions}
          acceptingFeedback={false}
          selectedSessionId={undefined}
          hideLevel={true}
          hideTags={true}
          render={(agendaSessions, _, onSelect) => {
            return (
              <AgendaProvider
                onSelect={onSelect}
                sessions={agendaSessions}
                sponsors={From2015.Sponsors}
                rooms={['Main Room', 'Side Room']}
              >
                <Text>Tap on a session to see more details...</Text>
                <StyledAgendaContainer>
                  <StyledAgendaRowList>
                    <li>Time</li>
                    <li>Main Room</li>
                    <li>Side Room</li>
                  </StyledAgendaRowList>
                  <StyledAgendaRow>
                    <AgendaTime time={dateUTC} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Registration</StyledTrackHeader>
                      <StyledAddress>
                        Burswood on Swan
                        <br />1 Camfield Drive, Burswood
                      </StyledAddress>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 15 })} />
                    <AgendaSession
                      sessionId="599fc187-2f4a-49d0-8531-2634467fb8f0"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Morning tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 20 })} />
                    <AgendaSession room={0} sessionId="1d419392-76d0-44e3-904c-a5bec3cfc551" />
                    <AgendaSession room={1} sessionId="799ef773-81c2-4c58-b942-64a1152cbf2e" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 5 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 10 })} />
                    <AgendaSession room={0} sessionId="fc7289f8-575d-4d65-992b-51d1ee218334" />
                    <AgendaSession room={1} sessionId="3a6d6a60-74b5-4dea-93b5-985f91f340f3" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 55 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 55 })} />
                    <AgendaSession room={0} sessionId="3cce7ebd-b91e-40e5-aa86-4dc9830a7e84" />
                    <AgendaSession room={1} sessionId="5a2911ec-207d-45ca-a6fa-11892bb92bbd" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 40 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 45 })} />
                    <AgendaSession room={0} sessionId="674f1340-94a4-43b2-b8ec-0a93f7b80060" />
                    <AgendaSession room={1} sessionId="44d4e2ec-108c-4142-a7ce-4bf75480f30d" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 30 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 50 })} />
                    <AgendaSession room={0} sessionId="d07b5bd2-32f9-4e61-8232-5bcf3572d111" />
                    <AgendaSession room={1} sessionId="2e79c7bf-0a42-4fa2-b9c2-96963648377f" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 35 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Sponsor announcements and PRIZE DRAW!!!</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 15 })} />
                    <AgendaSession
                      sessionId="4ccb057b-c3d1-472a-8ad9-83b9f1e17c14"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 50 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>
                        Afterparty
                        <br />
                        Including thankyous
                      </StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 19, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Event finish</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                </StyledAgendaContainer>
              </AgendaProvider>
            )
          }}
        />

        <h2>Handbook</h2>
        <Text>
          <ButtonAnchor kind="primary" href={From2015.HandbookUrl}>
            Download 2015 Handbook (PDF)
          </ButtonAnchor>
        </Text>
        <h2>Media</h2>
        <Text>
          <img src="/static/images/2015.jpg" alt="Picture from 2015 conference registration" loading="lazy" />
        </Text>
        <Text>
          <SafeLink href={From2015.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </Text>
        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2015.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
        <AllAgendas conference={conference} dates={dates} conferenceInstance={conferenceInstance} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dateUTC = zonedTimeToUtc('2015-08-29T08:30', '+08:00').toJSON()

  return {
    props: {
      sessions: mapSessions(data),
      date: dateUTC,
      conferenceInstance: '2015',
      numTracks: 2,
    },
  }
}

export default Agenda2015
