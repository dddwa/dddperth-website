import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { zonedTimeToUtc } from 'date-fns-tz'
import { set } from 'date-fns'
import { Sponsors } from 'components/Sponsors/sponsors'
import From2018 from 'config/2018'
import { SponsorType, Session } from 'config/types'
import ResponsiveVideo from 'components/responsiveVideo'
import { SafeLink } from 'components/global/safeLink'
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
import { Text } from 'components/global/text'
import { ButtonAnchor } from 'components/global/Button/Button'
import { Main } from 'layouts/main'
import { useConfig } from 'Context/Config'
import AllAgendas from 'components/allAgendas'

import data from 'public/static/agenda/2018.json'
import Conference from 'config/conference'

type AgendaProps = {
  sessions: Session[]
  date: string
  conferenceInstance: string
  numTracks: number
}

const Agenda2018: NextPage<AgendaProps> = ({ sessions, date, conferenceInstance, numTracks }) => {
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
          conference={{ ...Conference, ...(From2018 as any) }}
          acceptingFeedback={false}
          selectedSessionId={undefined}
          render={(agendaSessions, _, onSelect) => {
            return (
              <AgendaProvider
                onSelect={onSelect}
                sessions={agendaSessions}
                sponsors={From2018.Sponsors}
                rooms={['RR4', 'M3', 'M2', 'M1']}
              >
                <Text>Tap on a session to see more details...</Text>
                <StyledAgendaContainer>
                  <StyledAgendaRowList>
                    <li>Time</li>
                    <li>RR4</li>
                    <li>M3</li>
                    <li>M2</li>
                    <li>M1</li>
                  </StyledAgendaRowList>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={dateUTC} />
                    <AgendaSession room="Upstairs foyer (Level 3)" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Registration</StyledTrackHeader>
                      <StyledAddress>
                        Perth Convention and Exhibition Centre
                        <br />
                        21 Mounts Bay Rd, Perth
                      </StyledAddress>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { minutes: 45 })} />
                    <AgendaSession room="VGW Ballroom 2" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 9 })} />
                    <AgendaSession room="VGW Ballroom 2" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome to country</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 10 })} />
                    <AgendaSession
                      sessionId="c79f149d-4e7b-4202-ba30-13cbb1df1b33"
                      sponsorId="yow-perth-keynote"
                      room="VGW Ballroom 2"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 55 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 5 })} />
                    <AgendaSession room={0} sessionId="68927257-08c3-41f7-9810-5d290c373405" />
                    <AgendaSession room={1} sessionId="318d8f95-54e8-486b-8119-94bb91924f64" />
                    <AgendaSession room={2} sessionId="ab660bb2-d12a-4627-9c2a-b92900e87bca" />
                    <AgendaSession room={3} sessionId="77fea600-238f-4523-baf8-f51b5db5d666" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 50 })} />
                    <AgendaSession room="Upstairs foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Morning tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 20 })} />
                    <AgendaSession room={0} sessionId="24bc1c06-ec0d-4ba0-8d3e-a995d2118f46" />
                    <AgendaSession room={1} sessionId="0f383402-2fee-4728-a6bf-fbe74ba2671e" />
                    <AgendaSession room={2} sessionId="0d35dfb9-c75f-48a4-bd73-18fe07f6a04b" />
                    <AgendaSession room={3} sessionId="88344a80-a3e8-484a-93b6-e6a4f80af84f" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 40 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 50 })} />
                    <AgendaSession room={0} sessionId="6cf90233-65d8-4bdd-868f-9d13683aac78" />
                    <AgendaSession room={1} sessionId="96326393-7372-46d0-a07c-3006b97517cf" />
                    <AgendaSession room={2} sessionId="ee60b006-8662-4d8c-8a60-4ee4ad2018f7" />
                    <AgendaSession room={3} sessionId="a45d6be4-668d-4c01-8522-34c43580baab" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 10 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 20 })} />
                    <AgendaSession room={0} sessionId="5588dee1-39a1-47a9-bc04-376ff1578930" />
                    <AgendaSession room={1} sessionId="dd4a2717-47ed-426f-a97d-5bb4f9c1fef3" />
                    <AgendaSession room={2} sessionId="a9c48983-c3c9-4ceb-b21b-6b1d116a6882" />
                    <AgendaSession room={3} sessionId="c0f29a8d-0c21-43d6-aeb1-c34054e6541f" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 5 })} />
                    <AgendaSession room="Upstairs foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 15 })} />
                    <AgendaSession
                      sessionId="26c62196-0d96-4e52-b4ba-7896ddf2ff04"
                      sponsorId="bankwest"
                      room="VGW Ballroom 2"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Lunchnote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 45 })} />
                    <AgendaSession room="Upstairs foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Lunch (continued)</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 5 })} />
                    <AgendaSession room={0} sessionId="3a0236e4-c8fa-4cc9-ab48-fc0371a6b990" />
                    <AgendaSession room={1} sessionId="2f2a3626-5ec3-4085-baca-941910c09467" />
                    <AgendaSession room={2} sessionId="9ac2e311-7559-436c-8ee8-6f0aed17a431" />
                    <AgendaSession room={3} sessionId="9a72d1fa-6563-4de2-bb3c-27d13d7e0d64" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 25 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 35 })} />
                    <AgendaSession room={0} sessionId="f7fc010d-8c47-4b86-b1e9-1221b63e0281" />
                    <AgendaSession room={1} sessionId="2234f8f6-6e13-4998-ba37-baf53ae44d9d" />
                    <AgendaSession room={2} sessionId="4f463f9b-bf28-446a-9558-c6ac59697cc9" />
                    <AgendaSession room={3} sessionId="fd830fb5-8e7b-4527-bc79-f7ddf693232f" />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 20 })} />
                    <AgendaSession room="Upstairs foyer" fullWidth>
                      <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 50 })} />
                    <AgendaSession room="VGW Ballroom 2" fullWidth>
                      <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 20 })} />
                    <AgendaSession
                      sessionId="264b7669-8127-41a3-9f6b-87511a879cf1"
                      sponsorId="yow-perth-keynote"
                      room="VGW Ballroom 2"
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 17, minutes: 5 })} />
                    <AgendaSession room="VGW Ballroom 2" fullWidth>
                      <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={numTracks}>
                    <AgendaTime time={set(dateUTC, { hours: 17, minutes: 10 })} />
                    <AgendaSession room="Upstairs foyer" fullWidth>
                      <StyledTrackHeader>Afterparty</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                </StyledAgendaContainer>
              </AgendaProvider>
            )
          }}
        />

        <h2>Handbook</h2>
        <Text>
          <ButtonAnchor kind="primary" href={From2018.HandbookUrl}>
            Download 2018 handbook (PDF)
          </ButtonAnchor>
        </Text>

        <h2>Media</h2>
        <StyledVideoContainer>
          <ResponsiveVideo src={From2018.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2018.YouTubeLunchnoteEmbedUrl} />
          <ResponsiveVideo src={From2018.YouTubeLocknoteEmbedUrl} />
        </StyledVideoContainer>

        <Text>
          <SafeLink href={From2018.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2018.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </Text>
        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2018.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />

        <AllAgendas conference={conference} dates={dates} conferenceInstance={conferenceInstance} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dateUTC = zonedTimeToUtc('2018-08-04T08:00', '+08:00').toJSON()

  return {
    props: {
      sessions: data,
      date: dateUTC,
      conferenceInstance: '2018',
      numTracks: 4,
    },
  }
}

export default Agenda2018
