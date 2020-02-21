import React, { Fragment } from 'react'
import AgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/agendaPage'
import { SafeLink } from '../../components/global/safeLink'
import withPageMetadata from '../../components/global/withPageMetadata'
import ResponsiveVideo from '../../components/responsiveVideo'
import Sponsors from '../../components/sponsors'
import From2018 from '../../config/2018'
import { SponsorType } from '../../config/types'

class Agenda2018 extends React.Component<AgendaPageProps> {
  static getAgendaPageParams(): AgendaPageParameters {
    return {
      conferenceInstance: '2018',
      numTracks: 4,
      sessionsUrl: '/static/agenda/2018_archive.json',
      sponsors: [],
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
                <th style={{ width: '24%' }}>
                  <strong className="room">RR4</strong>
                </th>
                <th style={{ width: '24%' }}>
                  <strong className="room">M3</strong>
                </th>
                <th style={{ width: '24%' }}>
                  <strong className="room">M2</strong>
                </th>
                <th style={{ width: '24%' }}>
                  <strong className="room">M1</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="breadth-row">
                <td className="time">8:00</td>
                <td colSpan={4} className="breadth">
                  Registration
                  <br />
                  <em>Perth Convention and Exhibition Centre</em>
                  <br />
                  21 Mounts Bay Rd, Perth
                  <br />
                  <small className="room">Upstairs foyer (Level 3)</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">8:45</td>
                <td colSpan={4} className="breadth">
                  Welcome and housekeeping
                  <br />
                  <small className="room">VGW Ballroom 2</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:00</td>
                <td colSpan={4} className="breadth">
                  Welcome to country
                  <br />
                  <small className="room">VGW Ballroom 2</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">9:10</td>
                <SessionCell
                  isKeynote={true}
                  sessionId="c79f149d-4e7b-4202-ba30-13cbb1df1b33"
                  sponsorName="YOW! Perth"
                  room="VGW Ballroom 2"
                />
              </tr>

              <tr className="breadth-row">
                <td className="time">9:55</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">10:05</td>
                <SessionCell sessionId="68927257-08c3-41f7-9810-5d290c373405" />
                <SessionCell sessionId="318d8f95-54e8-486b-8119-94bb91924f64" />
                <SessionCell sessionId="ab660bb2-d12a-4627-9c2a-b92900e87bca" />
                <SessionCell sessionId="77fea600-238f-4523-baf8-f51b5db5d666" />
              </tr>

              <tr className="breadth-row">
                <td className="time">10:50</td>
                <td colSpan={4} className="breadth">
                  Morning tea
                  <br />
                  <small className="room">Upstairs foyer</small>
                </td>
              </tr>

              <tr>
                <td className="time">11:20</td>
                <SessionCell sessionId="24bc1c06-ec0d-4ba0-8d3e-a995d2118f46" />
                <SessionCell sessionId="0f383402-2fee-4728-a6bf-fbe74ba2671e" />
                <SessionCell sessionId="0d35dfb9-c75f-48a4-bd73-18fe07f6a04b" />
                <SessionCell sessionId="88344a80-a3e8-484a-93b6-e6a4f80af84f" />
              </tr>

              <tr className="breadth-row">
                <td className="time">11:40</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">11:50</td>
                <SessionCell sessionId="6cf90233-65d8-4bdd-868f-9d13683aac78" />
                <SessionCell sessionId="96326393-7372-46d0-a07c-3006b97517cf" />
                <SessionCell sessionId="ee60b006-8662-4d8c-8a60-4ee4ad2018f7" />
                <SessionCell sessionId="a45d6be4-668d-4c01-8522-34c43580baab" />
              </tr>

              <tr className="breadth-row">
                <td className="time">12:10</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">12:20</td>
                <SessionCell sessionId="5588dee1-39a1-47a9-bc04-376ff1578930" />
                <SessionCell sessionId="dd4a2717-47ed-426f-a97d-5bb4f9c1fef3" />
                <SessionCell sessionId="a9c48983-c3c9-4ceb-b21b-6b1d116a6882" />
                <SessionCell sessionId="c0f29a8d-0c21-43d6-aeb1-c34054e6541f" />
              </tr>

              <tr className="breadth-row">
                <td className="time">13:05</td>
                <td colSpan={4} className="breadth">
                  Lunch
                  <br />
                  <small className="room">Upstairs foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">13:15</td>
                <SessionCell
                  isLunchnote={true}
                  sessionId="26c62196-0d96-4e52-b4ba-7896ddf2ff04"
                  sponsorName="Bankwest"
                  room="VGW Ballroom 2"
                />
              </tr>

              <tr className="breadth-row">
                <td className="time">13:45</td>
                <td colSpan={4} className="breadth">
                  Lunch (continued)
                  <br />
                  <small className="room">Upstairs foyer</small>
                </td>
              </tr>

              <tr>
                <td className="time">14:05</td>
                <SessionCell sessionId="3a0236e4-c8fa-4cc9-ab48-fc0371a6b990" />
                <SessionCell sessionId="2f2a3626-5ec3-4085-baca-941910c09467" />
                <SessionCell sessionId="9ac2e311-7559-436c-8ee8-6f0aed17a431" />
                <SessionCell sessionId="9a72d1fa-6563-4de2-bb3c-27d13d7e0d64" />
              </tr>

              <tr className="breadth-row">
                <td className="time">14:25</td>
                <td colSpan={4} className="breadth">
                  Changeover
                </td>
              </tr>

              <tr>
                <td className="time">14:35</td>
                <SessionCell sessionId="f7fc010d-8c47-4b86-b1e9-1221b63e0281" />
                <SessionCell sessionId="2234f8f6-6e13-4998-ba37-baf53ae44d9d" />
                <SessionCell sessionId="4f463f9b-bf28-446a-9558-c6ac59697cc9" />
                <SessionCell sessionId="fd830fb5-8e7b-4527-bc79-f7ddf693232f" />
              </tr>

              <tr className="breadth-row">
                <td className="time">15:20</td>
                <td colSpan={4} className="breadth">
                  Afternoon tea
                  <br />
                  <small className="room">Upstairs foyer</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">15:50</td>
                <td colSpan={4} className="breadth">
                  Prize Draw
                  <br />
                  <small className="room">VGW Ballroom 2</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">16:20</td>
                <SessionCell
                  isLocknote={true}
                  sessionId="264b7669-8127-41a3-9f6b-87511a879cf1"
                  sponsorName="YOW! Perth"
                  room="VGW Ballroom 2"
                />
              </tr>

              <tr className="breadth-row">
                <td className="time">17:05</td>
                <td colSpan={4} className="breadth">
                  <strong>Thank yous and wrap up</strong>
                  <br />
                  <small className="room">VGW Ballroom 2</small>
                </td>
              </tr>

              <tr className="breadth-row">
                <td className="time">17:10</td>
                <td colSpan={4} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <small className="room">Upstairs foyer</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>Handbook</h2>
        <p>
          <a className="btn btn-pdf" href={From2018.HandbookUrl}>
            Download 2018 handbook (PDF)
          </a>
        </p>
        <h2>Media</h2>

        <div className="text-center">
          <ResponsiveVideo src={From2018.YouTubeKeynoteEmbedUrl} />
          <ResponsiveVideo src={From2018.YouTubeLocknoteEmbedUrl} />
        </div>
        <br />
        <div>
          <ResponsiveVideo src={From2018.YouTubeLunchnoteEmbedUrl} />
        </div>
        <p>
          <SafeLink href={From2018.YouTubePlaylistUrl} target="_blank">
            YouTube Playlist
          </SafeLink>{' '}
          |{' '}
          <SafeLink href={From2018.FlickrAlbumUrl} target="_blank">
            Flickr Album
          </SafeLink>
        </p>
        <Sponsors
          show={true}
          hideUpsell={true}
          sponsors={From2018.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
      </Fragment>
    )
  }
}

export default withPageMetadata(AgendaPage<AgendaPageProps>(Agenda2018, Agenda2018.getAgendaPageParams()))
