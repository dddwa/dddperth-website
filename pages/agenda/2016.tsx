import * as React from 'react';
import {Fragment} from 'react';
import {withPageMetadata} from '../../components/global/withPageMetadata';
import dddAgendaPage, { AgendaPageProps, AgendaPageParameters } from '../../components/dddAgendaPage';
import Sponsors from '../../components/sponsors';
import { SponsorType } from '../../config/types';
import From2016 from '../../config/2016';

class Agenda2016 extends React.Component<AgendaPageProps> {

  static getAgendaPageParams() : AgendaPageParameters {
    return {
      sessionsUrl: "https://dddperth.com/Session/Sessions/?year=2016",
      numTracks: 3,
      conferenceInstance: "2016"
    };
  }

  render() {
    const SessionCell = this.props.SessionCell;
    return <Fragment>
      <table className="agenda-row table">
      <thead>
          <tr>
              <th style={{width: "4%"}}></th>
              <th style={{width: "32%"}}>
                  <strong className="dark-green">Main Room</strong><br/>
                  <em>Caroline</em>
              </th>
              <th style={{width: "32%"}}>
                  <strong className="light-green">Side Room 1</strong><br/>
                  <em>Orelia</em>
              </th>
              <th style={{width: "32%"}}>
                  <strong className="green">Side Room 2</strong><br/>
                  <em>Georgiana</em>
              </th>
          </tr>
      </thead>
      <tbody>
          <tr className="breadth-row">
              <td className="time">8:30</td>
              <td colSpan={3} className="breadth">
                  Registration
                  <br />
                  <em>Mercure Perth</em><br />
                  10 Irwin St, Perth
              </td>
          </tr>


          <tr className="breadth-row">
              <td className="time">9:00</td>
              <td colSpan={3} className="breadth">
                  <strong>Welcome and house-keeping</strong><br />
              </td>
          </tr>

          <tr className="breadth-row keynote">
              <td className="time">9:15</td>
              <SessionCell isKeynote={true} sessionId="aa9f3fc0-8d47-404d-ba3e-2e5e058a00be" />
          </tr>

          <tr className="breadth-row">
              <td className="time">10:00</td>
              <td colSpan={3} className="breadth">
                  <strong>Changeover</strong><br />
              </td>
          </tr>

          <tr>
              <td className="time">10:05</td>
              <SessionCell sessionId="0cb4d75e-2183-4733-af35-2a01395b9315" />
              <SessionCell sessionId="14fe62d5-b37b-4cf3-8a3d-aa1ba116e83e" />
              <SessionCell sessionId="abedcd4e-b0a3-42df-9d5b-26e5d566b50e" />
          </tr>

          <tr className="breadth-row">
              <td className="time">10:50</td>
              <td colSpan={3} className="breadth">
                  Morning tea
              </td>
          </tr>

          <tr>
              <td className="time">11:10</td>
              <SessionCell sessionId="13178167-2124-44ce-a07e-c796449652e2" />
              <SessionCell sessionId="27557018-3caa-44fd-bd77-d6061d36b04d" />
              <SessionCell sessionId="f34f4325-bdba-4798-8f53-7a5d8a3bbf96" />
          </tr>

          <tr className="breadth-row">
              <td className="time">11:55</td>
              <td colSpan={3} className="breadth">
                  Changeover
              </td>
          </tr>

          <tr>
              <td className="time">12:00</td>
              <SessionCell sessionId="ec6e7098-4615-4cf3-88b5-fb92ff5a20b4" />
              <SessionCell sessionId="852827dd-a467-4c66-b2a6-a60b2dba34cc" />
              <SessionCell sessionId="453f9406-3c72-4009-92bd-4c0afe65e1e2" />
          </tr>

          <tr className="breadth-row">
              <td className="time">12:45</td>
              <td colSpan={2} className="breadth">
                  Lunch<br/>
                <em>Ground floor (downstairs)</em>
              </td>
              <SessionCell sessionId="ccbb469f-5406-48dc-8e70-d20a84dd2044" />
          </tr>

          <tr>
              <td className="time">13:45</td>
              <SessionCell sessionId="477cabb8-4ca8-4f72-8e64-1cd11f6b2602" />
              <SessionCell sessionId="ffc49099-c8d9-4262-9e00-82ea414dc083" />
              <SessionCell sessionId="8c3f3aaa-02a1-45ed-81f3-91233575c687" />
          </tr>

          <tr className="breadth-row">
              <td className="time">14:30</td>
              <td colSpan={3} className="breadth">
                  Changeover
              </td>
          </tr>

          <tr>
              <td className="time">14:35</td>
              <SessionCell sessionId="24a69d28-172d-4e77-90d3-190e221b7c60" />
              <SessionCell sessionId="1403740b-48d9-4674-9eed-e2af035831dc" />
              <SessionCell sessionId="174d8338-0201-4711-b1f7-f3a0cca60d29" />
          </tr>

          <tr className="breadth-row">
              <td className="time">15:20</td>
              <td colSpan={3} className="breadth">
                  Afternoon tea
              </td>
          </tr>

          <tr className="breadth-row">
              <td className="time">15:35</td>
              <td colSpan={3} className="breadth">
                  Sponsor announcements and PRIZE DRAW!!!
              </td>
          </tr>

          <tr className="breadth-row keynote">
              <td className="time">16:10</td>
              <SessionCell isLocknote={true} sessionId="82988c58-8d9c-4518-a4f7-94cf7739299d" />
          </tr>

          <tr className="breadth-row">
              <td className="time">16:55</td>
              <td colSpan={3} className="breadth">
                  <strong>Thank yous and wrap up</strong>
              </td>
          </tr>

          <tr className="breadth-row">
              <td className="time">17:00</td>
              <td colSpan={3} className="breadth">
                  <strong>Afterparty</strong>
                  <br />
                  <em>My Place Bar & Restaurant</em><br />
                  70 Pier Street, Perth
              </td>
          </tr>
      </tbody>
    </table>
    <h2>Handbook</h2>
    <p><a href={From2016.HandbookUrl} className="btn">Download 2016 handbook</a></p>
    <h2>Media</h2>
    <iframe width="560" height="315" src={From2016.YouTubeKeynoteEmbedUrl} frameBorder="0" allowFullScreen style={{display: "inline-block", marginRight: "20px"}}></iframe>
    <iframe width="560" height="315" src={From2016.YouTubeLocknoteEmbedUrl} frameBorder="0" allowFullScreen style={{display: "inline-block"}}></iframe>
    <p><a href={From2016.YouTubePlaylistUrl} target="_blank">YouTube Playlist</a> | <a href={From2016.FlickrAlbumUrl} target="_blank">Flickr Album</a></p>
    <Sponsors show={true} sponsors={From2016.Sponsors.filter(s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)} />
    </Fragment>;
  }
}

export default withPageMetadata(dddAgendaPage(Agenda2016, Agenda2016.getAgendaPageParams()));

