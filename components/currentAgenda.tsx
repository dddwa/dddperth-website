import React, { Fragment, StatelessComponent } from 'react'
import Agenda, { AgendaProps } from './agenda'

const CurrentAgenda: StatelessComponent<AgendaProps> = ({ Conference, SessionCell }) => (
  <Fragment>
    <div style={{ overflow: 'auto' }}>
      <table className="agenda-row table">
        <thead>
          <tr>
            <th style={{ width: '4%' }} />
            <th style={{ width: '16%' }}>
              <strong className="room">Theatre</strong>
            </th>
            <th style={{ width: '16%' }}>
              <strong className="room">RR4</strong>
            </th>
            <th style={{ width: '16%' }}>
              <strong className="room">M3</strong>
            </th>
            <th style={{ width: '16%' }}>
              <strong className="room">M2</strong>
            </th>
            <th style={{ width: '16%' }}>
              <strong className="room">M1</strong>
            </th>
            <th style={{ width: '16%' }}>
              <strong className="room">M9</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="breadth-row">
            <td className="time">8:00</td>
            <td colSpan={6} className="breadth">
              Registration
              <br />
              <em>Perth Convention and Exhibition Centre</em>
              <br />
              21 Mounts Bay Rd, Perth
              <br />
              <small className="room">Riverside Foyer (Level 2)</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">8:45</td>
            <td colSpan={6} className="breadth">
              Welcome and housekeeping
              <br />
              <small className="room">Riverside Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">9:00</td>
            <td colSpan={6} className="breadth">
              Welcome to country
              <br />
              <small className="room">Riverside Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">9:10</td>
            <SessionCell
              isKeynote={true}
              sessionId="112b54cc-df00-40fd-ad5e-4b0714329821"
              sponsorName="BHP"
              room="Riverside Theatre"
            />
          </tr>

          <tr className="breadth-row">
            <td className="time">9:55</td>
            <td colSpan={6} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">10:05</td>
            <SessionCell sessionId="ae58057e-2cea-4300-bdb7-f51d57476179" />
            <SessionCell sessionId="8cd14aaa-89cb-4886-9649-ceb0cd4b27d1" />
            <SessionCell sessionId="385e78cf-b12a-466c-9fb8-e29c7fd627fb" />
            <SessionCell sessionId="c044309e-e859-4b5c-adad-7534a36284e0" />
            <SessionCell sessionId="b73abc43-7634-40d3-a38b-696bdb844cc0" />
            <SessionCell sessionId="cc740103-612c-4673-b293-97487787f093" />
          </tr>

          <tr className="breadth-row">
            <td className="time">10:25</td>
            <td colSpan={6} className="breadth">
              Morning tea
              <br />
              <small className="room">Riverside Foyer and South Foyer</small>
            </td>
          </tr>

          <tr>
            <td className="time">10:55</td>
            <SessionCell sessionId="f8967843-c437-4a90-9242-fac45c4ea1a6" />
            <SessionCell sessionId="cea40511-0eeb-4ac8-8c1e-098a966f7314" />
            <SessionCell sessionId="643434fc-64d5-49ba-a1d8-848a7570b6fa" />
            <SessionCell sessionId="df03352d-b177-420d-b66a-b1c174e3e0a3" />
            <SessionCell sessionId="b446c945-6210-4b56-bc78-772347060a5b" />
            <SessionCell sessionId="2fff2f0e-7f55-4a26-bf15-7537a6c3f700" />
          </tr>

          <tr className="breadth-row">
            <td className="time">11:40</td>
            <td colSpan={6} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">11:50</td>
            <SessionCell sessionId="7bb9859c-ed23-4569-b863-7b4c440b2b88" />
            <SessionCell sessionId="9c81bbdb-8898-4259-afac-0dc73ff363b5" />
            <SessionCell sessionId="24ad37da-2c0b-4f5c-afde-3266217e6d80" />
            <SessionCell sessionId="3c2badde-1534-494b-a084-8ca5857d648d" />
            <SessionCell sessionId="f3a57e6c-0325-4898-bffd-2d3040f5dee9" />
            <SessionCell sessionId="adbcf783-1ab2-456b-ba41-1041f139e3f2" />
          </tr>

          <tr className="breadth-row">
            <td className="time">12:10</td>
            <td colSpan={6} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">12:20</td>
            <SessionCell sessionId="9b7efb7a-64e0-41ac-9439-f65a662147da" />
            <SessionCell sessionId="6d6553c0-b678-434d-b94e-c46fe77c86eb" />
            <SessionCell sessionId="0bcae524-eb87-4080-b189-ab5c7d5ad5fa" />
            <SessionCell sessionId="5aba6e83-cfd9-4114-af80-f28de931d8c2" />
            <SessionCell sessionId="fd0518e0-a52c-44dd-84fb-61ce59c3cdb5" />
            <SessionCell sessionId="70537fd7-4e49-4100-97ee-ce79c71545d6" />
          </tr>

          <tr className="breadth-row">
            <td className="time">13:05</td>
            <td colSpan={6} className="breadth">
              Lunch
              <br />
              <small className="room">Riverside Foyer and South Foyer</small>
            </td>
          </tr>

          <tr>
            <td className="time">14:05</td>
            <SessionCell sessionId="a6eb8bb3-6086-4cb3-b024-d0a6c4dd3de3" />
            <SessionCell sessionId="a577e148-b1d7-42e1-a424-5d0db3107ae2" />
            <SessionCell sessionId="2fcea05c-96dc-4802-b8a9-14bcfee01a64" />
            <SessionCell sessionId="97792db7-0c73-4fee-91c3-00d7fe002540" />
            <SessionCell sessionId="fa861d2a-9597-4a98-8510-fc0dc0b400e6" />
            <SessionCell sessionId="83b6a640-935b-4e5e-b251-81c3d69c0129" />
          </tr>

          <tr className="breadth-row">
            <td className="time">14:25</td>
            <td colSpan={6} className="breadth">
              Changeover
            </td>
          </tr>

          <tr>
            <td className="time">14:35</td>
            <SessionCell sessionId="b2795175-d14d-4090-a62e-153d4534b916" />
            <SessionCell sessionId="80721e7b-b082-4b50-9a9d-136d3054b7b0" />
            <SessionCell sessionId="94a2f4b3-bd6e-4eb6-9917-baa3bcb3d41f" />
            <SessionCell sessionId="f548e402-d04d-4318-a8c6-d879b3f11d37" />
            <SessionCell sessionId="00311b92-6c21-47a8-b8d2-af325581d6f9" />
            <SessionCell sessionId="35e1174f-8d50-48db-a410-d53c3c8ddf73" />
          </tr>

          <tr className="breadth-row">
            <td className="time">15:20</td>
            <td colSpan={6} className="breadth">
              Afternoon tea
              <br />
              <small className="room">Riverside Foyer and South Foyer</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">15:50</td>
            <td colSpan={6} className="breadth">
              Prize Draw
              <br />
              <small className="room">Riverside Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">16:20</td>
            <SessionCell
              isLocknote={true}
              sessionId="4c019f6f-c312-4bb9-8024-3352f6034d6e"
              sponsorName="YOW! Perth"
              room="Riverside Theatre"
            />
          </tr>

          <tr className="breadth-row">
            <td className="time">17:05</td>
            <td colSpan={6} className="breadth">
              <strong>Thank yous and wrap up</strong>
              <br />
              <small className="room">Riverside Theatre</small>
            </td>
          </tr>

          <tr className="breadth-row">
            <td className="time">17:10</td>
            <td colSpan={6} className="breadth">
              <strong>Afterparty</strong>
              <br />
              <small className="room">Riverside Foyer and South Foyer</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Fragment>
)

export default Agenda(CurrentAgenda, { numTracks: 6 })
