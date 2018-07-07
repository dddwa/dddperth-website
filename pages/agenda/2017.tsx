import * as React from 'react'
import { Fragment } from 'react'
import dddAgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2017 from '../../config/2017'
import { SponsorType } from '../../config/types'

class Agenda2017 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2017',
      numTracks: 3,
      sessionsUrl: '/static/agenda/2017.json',
    }
  }

  render() {
    const SessionCell = this.props.SessionCell
    return (
      <Fragment>
        <div style={{ overflow: 'auto' }}>
          <table className="agenda-row table">
            <thead>
              <tr>
                <th style={{ width: '4%' }} />
                <th style={{ width: '32%' }}>
                  <strong className="dark-green">Room 1</strong>
                  <br />
                  <em>RR5</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong className="light-green">Room 2</strong>
                  <br />
                  <em>M6</em>
                </th>
                <th style={{ width: '32%' }}>
                  <strong className="green">Room 3</strong>
                  <br />
                  <em>RR4</em>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:00</td>
                <td colSpan={3} className="breadth">
                  Registration
                  <br />
                  <em>Perth Convention and Exhibition Centre</em>
                  <br />
                  21 Mounts Bay Rd, Perth
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">8:45</td>
                <td colSpan={3} className="breadth">
                  Welcome and house-keeping
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <SessionCell isKeynote={true} sessionId="44f64f98-53ef-4344-93f6-9d852f845ed2" />
              </tr>

              <tr className="breadth-row">
                <td className="time">9:45</td>
                <td colSpan={3} className="breadth">
                  Morning tea
                </td>
              </tr>

              <tr>
                <td className="time">10:15</td>
                <SessionCell sessionId="684b7f57-fd87-4963-a7a3-b77715287347" />
                <SessionCell sessionId="2be131c5-155d-4207-8e24-910bf50a6894" />
                <SessionCell sessionId="c09518f6-58a0-4cbc-84ba-87b862d6f514" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:00</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">11:05</td>
                <SessionCell sessionId="6916c81d-28e4-4471-8368-26f4c80aea29" />
                <SessionCell sessionId="74ad268f-38ad-4dc5-814a-f7a0437360d6" />
                <SessionCell sessionId="d1bb10e3-c2af-4db7-93fc-dcbfe03d9b7b" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:50</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">11:55</td>
                <SessionCell sessionId="6742a7ad-0e47-4704-86d0-22b038afe2c4" />
                <SessionCell rowSpan={3} sessionId="20f26760-d2bf-400a-8a73-807502c11291" />
                <SessionCell rowSpan={3} sessionId="7e482ec2-9657-40ea-a3dd-ba0c53f824c3" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:15</td>
                <td className="breadth">Changeover</td>
              </tr>
              <tr>
                <td className="time">12:20</td>
                <SessionCell sessionId="8c7a2d53-bc00-436f-9150-3f7db76b3610" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:40</td>
                <td colSpan={3} className="breadth">
                  Lunch
                </td>
              </tr>

              <tr>
                <td className="time">13:40</td>
                <SessionCell rowSpan={3} sessionId="286930b8-ab3d-4a33-9b3a-ba863032aa1d" />
                <SessionCell sessionId="3a75a53c-3cb1-41dc-ba5a-b74efc8546ac" />
                <SessionCell rowSpan={3} sessionId="83ce0668-9d21-41bb-802a-50a810abfa9a" />
              </tr>
              <tr className="breadth-row">
                <td className="time">14:00</td>
                <td className="breadth">Changeover</td>
              </tr>
              <tr>
                <td className="time">14:05</td>
                <SessionCell sessionId="2c375902-fe42-4009-96ca-1206ab4447a9" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:25</td>
                <td colSpan={3} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">14:30</td>
                <SessionCell sessionId="36bc7011-11a7-4c33-bb84-e0e49da88b39" />
                <SessionCell sessionId="de3f62ca-fd85-43a0-865c-fd17102588bb" />
                <SessionCell sessionId="ff7521d0-7513-404a-a9e8-d506e6547e5d" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:15</td>
                <td colSpan={1} className="breadth">
                  Afternoon tea
                </td>
                <SessionCell sessionId="f14fe883-7570-4459-b71e-4f6165ff99b0" />
                <td colSpan={1} className="breadth">
                  Afternoon tea
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:45</td>
                <td colSpan={3} className="breadth">
                  Sponsor announcements and PRIZE DRAW!!!
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:20</td>
                <SessionCell isLocknote={true} sessionId="d06d45de-de42-44da-83eb-ea1d9d14b6cc" />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:05</td>
                <td colSpan={3} className="breadth">
                  <strong>Thank yous and wrap up</strong>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">17:10</td>
                <td colSpan={3} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <em>@Liberty Cafe & Bar</em>
                  <br />
                  21 Mounts Bay Rd, Perth
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
          <a href={From2017.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </a>{' '}
          |{' '}
          <a href={From2017.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </a>
        </p>
        <Sponsors
          show={true}
          sponsors={From2017.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
      </Fragment>
    )
  }
}

export default withPageMetadata(dddAgendaPage(Agenda2017, Agenda2017.getAgendaPageParams()))
