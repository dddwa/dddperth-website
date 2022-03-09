import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { From2021 } from 'config/2021'
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
import { Session, SponsorType } from 'config/types'
import { Sponsors } from 'components/Sponsors/sponsors'
import ResponsiveVideo from 'components/responsiveVideo'
import { SafeLink } from 'components/global/safeLink'
import { StyledPara } from 'components/global/text'
import { ButtonAnchor } from 'components/global/Button/Button'
import { zonedTimeToUtc } from 'date-fns-tz'
import { set } from 'date-fns'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import AllAgendas from 'components/allAgendas'

import data from 'public/static/agenda/2021.json'

type AgendaProps = {
  sessions: Session[]
  date: string
  conferenceInstance: string
}

const Agenda2021: NextPage<AgendaProps> = ({ sessions, date, conferenceInstance }) => {
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
          render={(agendaSessions, _, onSelect) => {
            return (
              <AgendaProvider
                onSelect={onSelect}
                sessions={agendaSessions}
                sponsors={From2021.Sponsors}
                rooms={['Riverside Theatre', 'M6', 'M7', 'M8']}
              >
                <StyledPara>Tap on a session to see more details...</StyledPara>
                <StyledAgendaContainer>
                  <StyledAgendaRowList>
                    <li>Time</li>
                    <li>Riverside Theatre</li>
                    <li>M6</li>
                    <li>M7</li>
                    <li>M8</li>
                  </StyledAgendaRowList>
                  <StyledAgendaRow>
                    <AgendaTime time={dateUTC} />
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
                    <AgendaTime time={set(dateUTC, { hours: 8, minutes: 45 })} />
                    <AgendaSession room={0} alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 0 })} />
                    <AgendaSession room="Riverside Theatre" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome to Country</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 10 })} />
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
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 40 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 9, minutes: 50 })} />
                    <AgendaSession room={0} sessionId="616cf974-4922-4fe4-8b2a-23bff247f4ce" />
                    <AgendaSession room={1} sessionId="dec643ab-4886-4ac5-8f2c-452f945174ae" />
                    <AgendaSession room={2} sessionId="18c9f6a2-2655-4242-8535-cf61c1605cb9" />
                    <AgendaSession room={3} sessionId="c06c0dd2-224e-4137-abbd-6fe25177a7b0" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 10, minutes: 35 })} />
                    <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Morning tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 5 })} />
                    <AgendaSession room={0} sessionId="ea671390-b7db-4b36-80c9-07b28973142f" />
                    <AgendaSession room={1} sessionId="cf16b808-ac70-463a-90cc-512b68042962" />
                    <AgendaSession room={2} sessionId="97b4e034-985f-4cc7-bbe2-a1cb22d611a9" />
                    <AgendaSession room={3} sessionId="3560629c-36cd-4dd7-91cf-7d3f00dba047" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 11, minutes: 50 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 12 })} />
                    <AgendaSession room={0} sessionId="c04dc773-feaa-4c07-8aab-7e7598e58c48" />
                    <AgendaSession room={1} sessionId="443bd0ee-bef3-4fe7-aa95-8b08782e248e" />
                    <AgendaSession room={2} sessionId="1a67c372-f559-4713-8937-9d67646e23f7" />
                    <AgendaSession room={3} sessionId="798f295f-a38e-49cf-98ad-a3bf4b513b7a" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 20 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 12, minutes: 30 })} />
                    <AgendaSession room={0} sessionId="774715b2-dd53-48fc-a144-80df9325eea9" />
                    <AgendaSession room={1} sessionId="a1765cb1-a194-470d-8654-213e44afe5ba" />
                    <AgendaSession room={2} sessionId="b555388f-5f27-42cb-9a01-266bfcc69464" />
                    <AgendaSession room={3} sessionId="63183d8b-2e1e-4675-9316-5278a63f8ab7" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 13, minutes: 15 })} />
                    <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 15 })} />
                    <AgendaSession room={0} sessionId="0a75760c-a5f0-4ce2-b942-e3cff923182e" />
                    <AgendaSession room={1} sessionId="ca8d113d-38c6-4042-a006-03f2add9ead4" />
                    <AgendaSession room={2} sessionId="3cc93f61-ef21-4a8a-ac91-645c1bca3f16" />
                    <AgendaSession room={3} sessionId="270889cf-405a-4422-ac97-c4e9bc1f7d8c" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 35 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 14, minutes: 45 })} />
                    <AgendaSession room={0} sessionId="ed54a247-f530-4057-8000-04fd82d08be1" />
                    <AgendaSession room={1} sessionId="83cc08fb-f422-42b3-bb7b-300e75cd1728" />
                    <AgendaSession room={2} sessionId="cc7b2e63-3eca-4c0a-8205-117e5a53dfc5" />
                    <AgendaSession room={3} sessionId="620775e4-6179-4637-80c4-f59027d3c54b" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 15, minutes: 30 })} />
                    <AgendaSession room="Riverside Foyer and South Foyer" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 0 })} />
                    <AgendaSession room={0} alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Prize Draw</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(dateUTC, { hours: 16, minutes: 30 })} />
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
                    <AgendaTime time={set(dateUTC, { hours: 17, minutes: 0 })} />
                    <AgendaSession room={0} alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                </StyledAgendaContainer>
              </AgendaProvider>
            )
          }}
        />

        <h2>Handbook</h2>
        <StyledPara>
          <ButtonAnchor kind="primary" href={From2021.HandbookUrl}>
            Download 2021 handbook (PDF)
          </ButtonAnchor>
        </StyledPara>

        <h2>Media</h2>
        <StyledVideoContainer>
          <ResponsiveVideo src={From2021.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2021.YouTubeLocknoteEmbedUrl} />
        </StyledVideoContainer>

        <StyledPara>
          <SafeLink href={From2021.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2021.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </StyledPara>

        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2021.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />

        <AllAgendas conference={conference} dates={dates} conferenceInstance={conferenceInstance} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const dateUTC = zonedTimeToUtc('2021-08-14T08:00', '+08:00').toJSON()

  return {
    props: {
      sessions: data,
      date: dateUTC,
      conferenceInstance: '2021',
    },
  }
}

export default Agenda2021
