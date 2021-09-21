import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { SafeLink } from 'components/global/safeLink'
import ResponsiveVideo from 'components/responsiveVideo'
import { Sponsors } from 'components/Sponsors/sponsors'
import From2016 from 'config/2016'
import { SponsorType, Session } from 'config/types'
import { Agenda } from 'components/Agenda/Agenda'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import {
  StyledAgendaRowList,
  StyledAgendaRow,
  StyledTrackHeader,
  StyledAddress,
  StyledAgendaContainer,
  StyledVideoContainer,
} from 'components/Agenda/Agenda.styled'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { StyledAgendaPresenter } from 'components/Agenda/AgendaSession.styled'
import { StyledPara } from 'components/global/text'
import { ButtonAnchor } from 'components/global/Button/Button'
import { zonedTimeToUtc } from 'date-fns-tz'
import { set } from 'date-fns'
import { mapSessions } from 'components/utils/mapSession'
import { Main } from 'layouts/main'
import { useConfig } from 'Context/Config'
import AllAgendas from 'components/allAgendas'

import data from 'public/static/agenda/2016.json'

type AgendaProps = {
  sessions: Session[]
  date: string
  conferenceInstance: string
  numTracks: number
}

const Agenda2016: NextPage<AgendaProps> = ({ sessions, conferenceInstance, date, numTracks }) => {
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
                sponsors={From2016.Sponsors}
                rooms={['Main Room', 'Side Room 1', 'Side Room 2']}
              >
                <StyledPara>Tap on a session to see more details...</StyledPara>
                <StyledAgendaContainer>
                  <StyledAgendaRowList>
                    <li>Time</li>
                    <li>Main Room</li>
                    <li>Side Room 1</li>
                    <li>Side Room 2</li>
                  </StyledAgendaRowList>
                  <StyledAgendaRow>
                    <AgendaTime time={dateUTC} />
                    <AgendaSession alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Registration</StyledTrackHeader>
                      <StyledAddress>
                        Mercure Perth
                        <br />
                        10 Irwin St, Perth
                      </StyledAddress>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 0 })} />
                    <AgendaSession alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 15 })} />
                    <AgendaSession
                      sessionId="aa9f3fc0-8d47-404d-ba3e-2e5e058a00be"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 5 })} />
                    <AgendaSession room={0} sessionId="0cb4d75e-2183-4733-af35-2a01395b9315" />
                    <AgendaSession room={1} sessionId="14fe62d5-b37b-4cf3-8a3d-aa1ba116e83e" />
                    <AgendaSession room={2} sessionId="abedcd4e-b0a3-42df-9d5b-26e5d566b50e" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 50 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Morning tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 10 })} />
                    <AgendaSession room={0} sessionId="13178167-2124-44ce-a07e-c796449652e2" />
                    <AgendaSession room={1} sessionId="27557018-3caa-44fd-bd77-d6061d36b04d" />
                    <AgendaSession room={2} sessionId="f34f4325-bdba-4798-8f53-7a5d8a3bbf96" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 55 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 0 })} />
                    <AgendaSession room={0} sessionId="ec6e7098-4615-4cf3-88b5-fb92ff5a20b4" />
                    <AgendaSession room={1} sessionId="852827dd-a467-4c66-b2a6-a60b2dba34cc" />
                    <AgendaSession room={2} sessionId="453f9406-3c72-4009-92bd-4c0afe65e1e2" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 45 })} />
                    <AgendaSession room="Ground floor (downstairs)" alwaysShowRoom={true} fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 45 })} />
                    <AgendaSession
                      room={3}
                      sessionId="ccbb469f-5406-48dc-8e70-d20a84dd2044"
                      isKeynote={true}
                      fullWidth
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 45 })} />
                    <AgendaSession room={0} sessionId="477cabb8-4ca8-4f72-8e64-1cd11f6b2602" />
                    <AgendaSession room={1} sessionId="ffc49099-c8d9-4262-9e00-82ea414dc083" />
                    <AgendaSession room={2} sessionId="8c3f3aaa-02a1-45ed-81f3-91233575c687" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 30 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 35 })} />
                    <AgendaSession room={0} sessionId="24a69d28-172d-4e77-90d3-190e221b7c60" />
                    <AgendaSession room={1} sessionId="1403740b-48d9-4674-9eed-e2af035831dc" />
                    <AgendaSession room={2} sessionId="174d8338-0201-4711-b1f7-f3a0cca60d29" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 20 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 35 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Sponsor announcements and PRIZE DRAW!!!</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 10 })} />
                    <AgendaSession
                      sessionId="82988c58-8d9c-4518-a4f7-94cf7739299d"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 55 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 17, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Afterparty</StyledTrackHeader>
                      <StyledAddress>
                        My Place Bar & Restaurant
                        <br />
                        70 Pier Street, Perth
                      </StyledAddress>
                    </AgendaSession>
                  </StyledAgendaRow>
                </StyledAgendaContainer>
              </AgendaProvider>
            )
          }}
        />

        <h2>Handbook</h2>
        <StyledPara>
          <ButtonAnchor kind="primary" href={From2016.HandbookUrl}>
            Download 2015 Handbook (PDF)
          </ButtonAnchor>
        </StyledPara>

        <h2>Media</h2>
        <StyledVideoContainer>
          <ResponsiveVideo src={From2016.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2016.YouTubeLocknoteEmbedUrl} />
        </StyledVideoContainer>

        <StyledPara>
          <SafeLink href={From2016.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2016.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </StyledPara>

        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2016.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
        <AllAgendas conference={conference} dates={dates} conferenceInstance={conferenceInstance} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dateUTC = zonedTimeToUtc('2016-08-27T08:30', '+08:00').toJSON()

  return {
    props: {
      sessions: mapSessions(data),
      date: dateUTC,
      conferenceInstance: '2016',
      numTracks: 3,
    },
  }
}

export default Agenda2016
