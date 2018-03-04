import * as React from 'react'
import {Fragment} from 'react';
import Page from '../../layouts/main';
import {withPageMetadata} from '../../components/global/withPageMetadata';
import Conference from '../../config/conference';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { Modal } from 'react-bootstrap';

interface AgendaPageProps {
  sessions: Session[];
}

interface AgendaPageState {
  showModal : boolean;
  selectedSession: Session|null;
}

interface Session {
  SessionId : string;
  SessionTitle : string;
  SessionAbstract : string;
  RecommendedAudience? : string;
  PresenterName : string;
  PresenterTwitterAlias? : string;
  PresenterWebsite? : string;
  PresenterBio : string;
}

interface SessionCellProps {
  onClick : Function;
  session : Session;
  prefix? : string;
  colSpan? : number;
  rowSpan? : number;
  className? : string;
}

const SessionCell : React.StatelessComponent<SessionCellProps> = (props) =>
  <td className={"session " + props.className} rowSpan={props.rowSpan ? props.rowSpan : null} colSpan={props.colSpan ? props.colSpan : null} onClick={() => props.onClick(props.session.SessionId)}>
    <strong>{props.prefix ? `${props.prefix} - ` : null}{props.session.PresenterName}</strong>
    <br />
    <em>{props.session.SessionTitle}</em>
  </td>

class AgendaPage extends React.Component<AgendaPageProps, AgendaPageState> {
  static async getInitialProps() {
    const response = await fetch("https://dddperth.com/Session/Sessions/?year=2017");
    const body = await response.json();
    return {sessions: body};
  }

  componentWillMount() {
    this.hideModal();
  }

  selectSession(sessionId : string) {
    this.setState({
      showModal: true,
      selectedSession: this.props.sessions.find(s => s.SessionId === sessionId)
    });
  }

  hideModal() {
    this.setState({showModal : false});
  }

  render() {
    const get = (sessionId : string) => this.props.sessions.find(s => s.SessionId === sessionId);
    return <Page title="2017 Agenda" description="The agenda for DDD Perth 2017.">
      <div className="container">
        <h1>2017 Agenda</h1>
        <p>Tap on a session to see more details...</p>

        <table className="agenda-row table">
          <thead>
              <tr>
                  <th style={{width: "4%"}}></th>
                  <th style={{width: "32%"}}>
                      <strong className="dark-green">Room 1</strong><br/>
                      <em>RR5</em>
                  </th>
                  <th style={{width: "32%"}}>
                      <strong className="light-green">Room 2</strong><br/>
                      <em>M6</em>
                  </th>
                  <th style={{width: "32%"}}>
                      <strong className="green">Room 3</strong><br/>
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
                      <em>Perth Convention and Exhibition Centre</em><br />
                      21 Mounts Bay Rd, Perth
                  </td>
              </tr>


              <tr className="breadth-row">
                  <td className="time">8:45</td>
                  <td colSpan={3} className="breadth">
                      <strong>Welcome and house-keeping</strong><br />
                  </td>
              </tr>

              <tr className="breadth-row keynote">
                  <td className="time">9:00</td>
                  <SessionCell colSpan={3} className="breadth" session={get("44f64f98-53ef-4344-93f6-9d852f845ed2")} prefix="KEYNOTE" onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">9:45</td>
                  <td colSpan={3} className="breadth">
                      <strong>Morning tea</strong><br />
                  </td>
              </tr>

              <tr>
                  <td className="time">10:15</td>
                  <SessionCell session={get("684b7f57-fd87-4963-a7a3-b77715287347")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("2be131c5-155d-4207-8e24-910bf50a6894")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("c09518f6-58a0-4cbc-84ba-87b862d6f514")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">11:00</td>
                  <td colSpan={3} className="breadth">
                      Changeover
                  </td>
              </tr>

              <tr>
                  <td className="time">11:05</td>
                  <SessionCell session={get("6916c81d-28e4-4471-8368-26f4c80aea29")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("74ad268f-38ad-4dc5-814a-f7a0437360d6")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("d1bb10e3-c2af-4db7-93fc-dcbfe03d9b7b")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">11:50</td>
                  <td colSpan={3} className="breadth">
                      Changeover
                  </td>
              </tr>

              <tr>
                  <td className="time">11:55</td>
                  <SessionCell session={get("6742a7ad-0e47-4704-86d0-22b038afe2c4")} onClick={s => this.selectSession(s)} />
                  <SessionCell rowSpan={3} session={get("20f26760-d2bf-400a-8a73-807502c11291")} onClick={s => this.selectSession(s)} />
                  <SessionCell rowSpan={3} session={get("7e482ec2-9657-40ea-a3dd-ba0c53f824c3")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">12:15</td>
                  <td className="breadth">Changeover</td>
              </tr>
              <tr>
                  <td className="time">12:20</td>
                  <SessionCell session={get("8c7a2d53-bc00-436f-9150-3f7db76b3610")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">12:40</td>
                  <td colSpan={3} className="breadth">
                      Lunch
                  </td>
              </tr>

              <tr>
                  <td className="time">13:40</td>
                  <SessionCell rowSpan={3} session={get("286930b8-ab3d-4a33-9b3a-ba863032aa1d")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("3a75a53c-3cb1-41dc-ba5a-b74efc8546ac")} onClick={s => this.selectSession(s)} />
                  <SessionCell rowSpan={3} session={get("83ce0668-9d21-41bb-802a-50a810abfa9a")} onClick={s => this.selectSession(s)} />
              </tr>
              <tr className="breadth-row">
                  <td className="time">14:00</td>
                  <td className="breadth">Changeover</td>
              </tr>
              <tr>
                  <td className="time">14:05</td>
                  <SessionCell session={get("2c375902-fe42-4009-96ca-1206ab4447a9")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">14:25</td>
                  <td colSpan={3} className="breadth">
                      Changeover
                  </td>
              </tr>

              <tr>
                  <td className="time">14:30</td>
                  <SessionCell session={get("36bc7011-11a7-4c33-bb84-e0e49da88b39")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("de3f62ca-fd85-43a0-865c-fd17102588bb")} onClick={s => this.selectSession(s)} />
                  <SessionCell session={get("ff7521d0-7513-404a-a9e8-d506e6547e5d")} onClick={s => this.selectSession(s)} />
              </tr>

              <tr className="breadth-row">
                  <td className="time">15:15</td>
                  <td colSpan={1} className="breadth">
                      Afternoon tea
                  </td>
                  <SessionCell session={get("f14fe883-7570-4459-b71e-4f6165ff99b0")} onClick={s => this.selectSession(s)} />
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

              <tr className="breadth-row keynote">
                  <td className="time">16:20</td>
                  <SessionCell className="breadth" colSpan={3} session={get("d06d45de-de42-44da-83eb-ea1d9d14b6cc")} prefix="LOCKNOTE" onClick={s => this.selectSession(s)} />
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
                      <em>@Liberty Cafe & Bar</em><br />
                      21 Mounts Bay Rd, Perth
                  </td>
              </tr>
          </tbody>
        </table>

        <h2 className="text-center">All agendas</h2>
        <p className="text-center">{Conference.PreviousInstances.map((instance, i) => <Fragment key={instance}>{i !== 0 ? ' | ' : null}{instance === "2017" ? instance : <Link href={"/agenda/" + instance}><a>{instance}</a></Link>}</Fragment>)}</p>

        <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
          {this.state.selectedSession && <Fragment>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.selectedSession.SessionTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {this.state.selectedSession.PresenterName}
                {this.state.selectedSession.PresenterTwitterAlias && <Fragment>
                 {" | "}{this.state.selectedSession.PresenterTwitterAlias.split(",").map(alias => alias.trim().replace(/^@/, "")).map(alias =>
                    <a key={alias} href={"https://twitter.com/" + alias} target="_blank" style={{marginRight: "3px"}}>@{alias}</a>)}
                </Fragment>}
                {this.state.selectedSession.PresenterWebsite && <Fragment>
                  {" | "}{this.state.selectedSession.PresenterWebsite.split(",").map(website => website.trim()).map(website =>
                    <a key={website} href={website} target="_blank" style={{marginRight: "3px"}}>{website}</a>)}
                </Fragment>}
              </p>

              <p className="preserve-whitespace">{this.state.selectedSession.SessionAbstract}</p>
              {this.state.selectedSession.RecommendedAudience && <p><em>Audience:</em> <small className="preserve-whitespace">{this.state.selectedSession.RecommendedAudience}</small></p>}

              <h3>Bio</h3>
              <p className="preserve-whitespace">{this.state.selectedSession.PresenterBio}</p>
            </Modal.Body>
          </Fragment>}
        </Modal>
      </div>
    </Page>;
  }
}

export default withPageMetadata(AgendaPage);

