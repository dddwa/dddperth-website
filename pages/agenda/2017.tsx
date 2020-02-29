import React, { Fragment } from 'react'
import { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import withPageMetadata from '../../components/global/withPageMetadata'
import { agendaPage } from '../../components/Agenda/AgendaPage'
import { Session, SponsorType } from '../../config/types'
import From2017 from '../../config/2017'
import ResponsiveVideo from '../../components/responsiveVideo'
import { SafeLink } from '../../components/global/safeLink'
import Sponsors from '../../components/sponsors'
import moment from 'moment'
import { Agenda } from '../../components/Agenda/Agenda'
import { AgendaProvider } from '../../components/Agenda/AgendaContext'
import { From2019 } from '../../config/2019'
import {
  StyledAgendaRowList,
  StyledAgendaRow,
  StyledTrackHeader,
  StyledAddress,
} from '../../components/Agenda/Agenda.styled'
import { AgendaTime } from '../../components/Agenda/AgendaTime'
import { AgendaSession } from '../../components/Agenda/AgendaSession'
import { StyledAgendaPresenter } from '../../components/Agenda/AgendaSession.styled'

const agendaParams: AgendaPageParameters = {
  conferenceInstance: '2017',
  numTracks: 3,
  sessionsUrl: '/static/agenda/2017.json',
}

const Agenda2017: React.FC<AgendaPageProps & { sessions: Session[] }> = ({ sessions }) => {
  const date = moment.parseZone('2017-09-16T08:00+08:00')

  return (
    <Fragment>
      <Agenda
        sessions={sessions}
        sessionsUrl={agendaParams.sessionsUrl}
        acceptingFeedback={false}
        selectedSessionId={undefined}
        hideTags={true}
        hideLevel={true}
        render={(agendaSessions, _, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              sessions={agendaSessions}
              sponsors={From2019.Sponsors}
              rooms={['RR5', 'M6', 'RR4']}
            >
              <p>Tap on a session to see more details...</p>
              <StyledAgendaRowList>
                <li>Time</li>
                <li>RR5</li>
                <li>M6</li>
                <li>RR4</li>
              </StyledAgendaRowList>
              <StyledAgendaRow>
                <AgendaTime time={date.clone()} />
                <AgendaSession alwaysShowRoom fullWidth>
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
                <AgendaSession alwaysShowRoom fullWidth>
                  <StyledTrackHeader>Welcome and housekeeping</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minutes: 0 })} />
                <AgendaSession
                  sessionId="44f64f98-53ef-4344-93f6-9d852f845ed2"
                  renderPresenters={presenters => (
                    <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 9, minutes: 45 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Morning tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 10, minutes: 15 })} />
                <AgendaSession room={0} sessionId="684b7f57-fd87-4963-a7a3-b77715287347" />
                <AgendaSession room={1} sessionId="2be131c5-155d-4207-8e24-910bf50a6894" />
                <AgendaSession room={2} sessionId="c09518f6-58a0-4cbc-84ba-87b862d6f514" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minutes: 0 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minutes: 5 })} />
                <AgendaSession room={0} sessionId="6916c81d-28e4-4471-8368-26f4c80aea29" />
                <AgendaSession room={1} sessionId="74ad268f-38ad-4dc5-814a-f7a0437360d6" />
                <AgendaSession room={2} sessionId="d1bb10e3-c2af-4db7-93fc-dcbfe03d9b7b" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minutes: 50 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 11, minutes: 55 })} />
                <AgendaSession room={0} sessionId="6742a7ad-0e47-4704-86d0-22b038afe2c4" />
                <AgendaSession room={1} sessionId="20f26760-d2bf-400a-8a73-807502c11291" />
                <AgendaSession room={2} sessionId="7e482ec2-9657-40ea-a3dd-ba0c53f824c3" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minutes: 20 })} />
                <AgendaSession room={0} sessionId="8c7a2d53-bc00-436f-9150-3f7db76b3610" />
                <AgendaSession room={1} sessionId="20f26760-d2bf-400a-8a73-807502c11291" />
                <AgendaSession room={2} sessionId="7e482ec2-9657-40ea-a3dd-ba0c53f824c3" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 12, minutes: 40 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Lunch</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 13, minutes: 40 })} />
                <AgendaSession room={0} sessionId="286930b8-ab3d-4a33-9b3a-ba863032aa1d" />
                <AgendaSession room={1} sessionId="3a75a53c-3cb1-41dc-ba5a-b74efc8546ac" />
                <AgendaSession room={2} sessionId="83ce0668-9d21-41bb-802a-50a810abfa9a" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minutes: 5 })} />
                <AgendaSession room={0} sessionId="286930b8-ab3d-4a33-9b3a-ba863032aa1d" />
                <AgendaSession room={1} sessionId="2c375902-fe42-4009-96ca-1206ab4447a9" />
                <AgendaSession room={2} sessionId="83ce0668-9d21-41bb-802a-50a810abfa9a" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minutes: 25 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Changeover</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 14, minutes: 30 })} />
                <AgendaSession room={0} sessionId="36bc7011-11a7-4c33-bb84-e0e49da88b39" />
                <AgendaSession room={1} sessionId="de3f62ca-fd85-43a0-865c-fd17102588bb" />
                <AgendaSession room={2} sessionId="ff7521d0-7513-404a-a9e8-d506e6547e5d" />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 15, minutes: 15 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                </AgendaSession>
                <AgendaSession room={1} sessionId="f14fe883-7570-4459-b71e-4f6165ff99b0" />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Afternoon tea</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 15, minutes: 45 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Sponsor announcements and PRIZE DRAW!!!</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 16, minutes: 20 })} />
                <AgendaSession
                  sessionId="d06d45de-de42-44da-83eb-ea1d9d14b6cc"
                  renderPresenters={presenters => (
                    <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                  )}
                  fullWidth
                  isKeynote
                  alwaysShowRoom
                />
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 17, minutes: 5 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Thank yous and wrap up</StyledTrackHeader>
                </AgendaSession>
              </StyledAgendaRow>
              <StyledAgendaRow>
                <AgendaTime time={date.clone().set({ hour: 17, minutes: 10 })} />
                <AgendaSession fullWidth>
                  <StyledTrackHeader>Afterparty</StyledTrackHeader>
                  <StyledAddress>
                    @Liberty Cafe & Bar
                    <br />
                    21 Mounts Bay Rd, Perth
                  </StyledAddress>
                </AgendaSession>
              </StyledAgendaRow>
            </AgendaProvider>
          )
        }}
      />
      <h2>Handbook</h2>
      <p>
        <a className="btn btn-pdf" href={From2017.HandbookUrl}>
          Download 2017 handbook (PDF)
        </a>
      </p>
      <h2>Media</h2>
      <div className="text-center">
        <ResponsiveVideo src={From2017.YouTubeKeynoteEmbedUrl} />
        <ResponsiveVideo src={From2017.YouTubeLocknoteEmbedUrl} />
      </div>
      <p>
        <SafeLink href={From2017.YouTubePlaylistUrl} target="_blank">
          YouTube Playlist
        </SafeLink>{' '}
        |{' '}
        <SafeLink href={From2017.FlickrAlbumUrl} target="_blank">
          Flickr Album
        </SafeLink>
      </p>
      <Sponsors
        show={true}
        hideUpsell={true}
        sponsors={From2017.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
      />
    </Fragment>
  )
}
Agenda2017.displayName = 'Agenda2017'

export default withPageMetadata(agendaPage(Agenda2017, agendaParams))
