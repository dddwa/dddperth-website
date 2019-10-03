import React, { Fragment, StatelessComponent } from 'react'
import Agenda, { AgendaProps } from './agenda'

const CurrentAgenda: StatelessComponent<AgendaProps> = ({ SessionCell }) => (
  <Fragment>
    <div style={{ overflow: 'auto' }}>
      <table className="agenda-row table">
        <thead>
          <tr>
            <th style={{ width: '4%' }} />
            <th style={{ width: '48%' }}>
              <strong className="room">Level 8 - Conference Room One</strong>
            </th>
            <th style={{ width: '48%' }}>
              <strong className="room">Level 2 - Conference Room Two</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="breadth-row">
            <td className="time">8:00</td>
            <td colSpan={2} className="breadth">
              Registration
              <br />
              <em>MOD., University of South Australia</em>
              <br />
              North Terrace, adjacent Morphett Street Bridge, Adelaide
              <br />
              <small className="room">Level 8 - Foyer</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">8:45</td>
            <td colSpan={2} className="breadth">
              Welcome and housekeeping
              <br />
              <small className="room">Level 8 - Conference Room One</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">9:00</td>
            <SessionCell isKeynote={true} sessionId="" sponsorName="" room="Level 8 - Conference Room One" />
          </tr>

          <tr className="breadth-row">
            <td className="time">9:45</td>
            <td colSpan={2} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">9:50</td>
            <SessionCell sessionId="1d921838-42aa-47ce-b599-3e2ef23ff96f" />
            <SessionCell sessionId="7b2871f4-fddd-45d6-9156-18ae984bad1f" />
          </tr>

          <tr className="breadth-row">
            <td className="time">10:35</td>
            <td colSpan={2} className="breadth">
              Morning tea
              <br />
              <small className="room">Level 8 - Foyer</small>
            </td>
          </tr>

          <tr>
            <td className="time">11:00</td>
            <SessionCell sessionId="02c5d1fa-29ee-4d04-b785-f3c66758d8d4" />
            <SessionCell sessionId="40dad6e1-e0bf-4766-aaa9-c10e72d80c16" />
          </tr>

          <tr className="breadth-row">
            <td className="time">11:45</td>
            <td colSpan={2} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">11:50</td>
            <SessionCell sessionId="8dd7db0c-0090-4fb1-a182-8b9758210dd5" />
            <SessionCell sessionId="421b767a-5145-49b5-8d0d-2735f11b2237" />
          </tr>

          <tr className="breadth-row">
            <td className="time">12:35</td>
            <td colSpan={2} className="breadth">
              Lunch
              <br />
              <small className="room">Level 8 - Foyer</small>
            </td>
          </tr>

          <tr>
            <td className="time">13:20</td>
            <SessionCell sessionId="3aef4b8a-2a4f-4cb8-9f6d-8cad761e659f" />
            <SessionCell sessionId="3c84952b-ed48-4607-acd4-2470a9ce9367" />
          </tr>

          <tr className="breadth-row">
            <td className="time">14:05</td>
            <td colSpan={2} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">14:10</td>
            <SessionCell sessionId="5c753bfe-95d3-40b1-899d-f27ef013236b" />
            <SessionCell sessionId="470a7ebe-643f-4112-be34-7cfeccd576dc" />
          </tr>

          <tr className="breadth-row">
            <td className="time">14:55</td>
            <td colSpan={2} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">15:00</td>
            <SessionCell sessionId="3717879a-1029-487e-a2a4-82d6cbb3153e" />
            <SessionCell sessionId="32f930bd-76b7-4f53-8536-e573fb2e2e9e" />
          </tr>

          <tr className="breadth-row">
            <td className="time">15:45</td>
            <td colSpan={2} className="breadth">
              Afternoon tea
              <br />
              <small className="room">Level 8 - Foyer</small>
            </td>
          </tr>

          <tr>
            <td className="time">16:10</td>
            <SessionCell sessionId="3bbde761-29c1-440e-8db3-2bbe3c8ee495" />
            <SessionCell sessionId="d8828115-c4e0-4a84-8149-33140121efbc" />
          </tr>

          <tr className="breadth-row">
            <td className="time">16:55</td>
            <td colSpan={2} className="breadth">
              Changeover
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">17:00</td>
            <SessionCell isLocknote={true} sessionId="" sponsorName="AWS" room="Level 8 - Conference Room One" />
          </tr>

          <tr className="breadth-row">
            <td className="time">17:45</td>
            <td colSpan={2} className="breadth">
              <strong>Prize Draw, Thank Yous, and Wrap Up</strong>
              <br />
              <small className="room">Level 8 - Conference Room One</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">18:15 - 19:30</td>
            <td colSpan={2} className="breadth">
              <strong>After Conference Social</strong>
              <br />
              <small className="room">TBA</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
)

export default Agenda(CurrentAgenda, { numTracks: 2 })
