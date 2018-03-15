import * as React from 'react'
import { Fragment } from 'react'
import dddAgendaPage, { AgendaPageParameters, AgendaPageProps } from '../../components/dddAgendaPage'
import { withPageMetadata } from '../../components/global/withPageMetadata'
import Sponsors from '../../components/sponsors'
import From2015 from '../../config/2015'
import { SponsorType } from '../../config/types'

class Agenda2015 extends React.Component<AgendaPageProps> {
    static getAgendaPageParams(): AgendaPageParameters {
        return {
            conferenceInstance: '2015',
            numTracks: 2,
            sessionsUrl: 'https://dddperth.com/Session/Sessions/?year=2015',
        }
    }

    render() {
        const SessionCell = this.props.SessionCell
        return (
            <Fragment>
                <table className="agenda-row table">
                    <thead>
                        <tr>
                            <th
                                style={{
                                    width: '10%',
                                }}
                            />
                            <th
                                style={{
                                    width: '45%',
                                }}
                            >
                                <strong className="dark-green">Main Room</strong>
                            </th>
                            <th
                                style={{
                                    width: '45%',
                                }}
                            >
                                <strong className="light-green">Side Room</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="breadth-row">
                            <td className="time">8:30</td>
                            <td colSpan={2} className="breadth">
                                Registration
                                <br />
                                <em>Burswood on Swan</em>
                                <br />
                                1 Camfield Drive, Burswood
                            </td>
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">9:00</td>
                            <td colSpan={2} className="breadth">
                                <strong>Welcome and house-keeping</strong>
                                <br />
                            </td>
                        </tr>

                        <tr className="breadth-row keynote">
                            <td className="time">9:15</td>
                            <SessionCell isKeynote={true} sessionId="599fc187-2f4a-49d0-8531-2634467fb8f0" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">10:00</td>
                            <td colSpan={2} className="breadth">
                                <strong>Morning tea</strong>
                                <br />
                            </td>
                        </tr>

                        <tr>
                            <td className="time">10:20</td>
                            <SessionCell sessionId="1d419392-76d0-44e3-904c-a5bec3cfc551" />
                            <SessionCell sessionId="799ef773-81c2-4c58-b942-64a1152cbf2e" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">11:05</td>
                            <td colSpan={2} className="breadth">
                                Changeover
                            </td>
                        </tr>

                        <tr>
                            <td className="time">11:10</td>
                            <SessionCell sessionId="fc7289f8-575d-4d65-992b-51d1ee218334" />
                            <SessionCell sessionId="3a6d6a60-74b5-4dea-93b5-985f91f340f3" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">11:55</td>
                            <td colSpan={2} className="breadth">
                                Lunch
                            </td>
                        </tr>

                        <tr>
                            <td className="time">12:55</td>
                            <SessionCell sessionId="3cce7ebd-b91e-40e5-aa86-4dc9830a7e84" />
                            <SessionCell sessionId="5a2911ec-207d-45ca-a6fa-11892bb92bbd" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">13:40</td>
                            <td colSpan={2} className="breadth">
                                Changeover
                            </td>
                        </tr>

                        <tr>
                            <td className="time">13:45</td>
                            <SessionCell sessionId="674f1340-94a4-43b2-b8ec-0a93f7b80060" />
                            <SessionCell sessionId="44d4e2ec-108c-4142-a7ce-4bf75480f30d" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">14:30</td>
                            <td colSpan={2} className="breadth">
                                Afternoon tea
                            </td>
                        </tr>

                        <tr>
                            <td className="time">14:50</td>
                            <SessionCell sessionId="d07b5bd2-32f9-4e61-8232-5bcf3572d111" />
                            <SessionCell sessionId="2e79c7bf-0a42-4fa2-b9c2-96963648377f" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">15:35</td>
                            <td colSpan={2} className="breadth">
                                Sponsor announcements and PRIZE DRAW!!!
                            </td>
                        </tr>

                        <tr className="breadth-row keynote">
                            <td className="time">16:15</td>
                            <SessionCell isLocknote={true} sessionId="4ccb057b-c3d1-472a-8ad9-83b9f1e17c14" />
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">16:50</td>
                            <td colSpan={2} className="breadth">
                                <strong>Afterparty</strong>
                                <br />
                                <em>Including thankyous</em>
                            </td>
                        </tr>

                        <tr className="breadth-row">
                            <td className="time">19:00</td>
                            <td colSpan={2} className="breadth">
                                Event finish
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h2>Handbook</h2>
                <p>
                    <a href={From2015.HandbookUrl} className="btn">
                        Download 2015 handbook
                    </a>
                </p>
                <h2>Media</h2>
                <p>
                    <img src="/static/images/2015.jpg" alt="Picture from 2015 conference registration" />
                </p>
                <p>
                    <a href={From2015.FlickrAlbumUrl} target="_blank">
                        Flickr Album
                    </a>
                </p>
                <Sponsors
                    show={true}
                    sponsors={From2015.Sponsors.filter(
                        s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum,
                    )}
                />
            </Fragment>
        )
    }
}

export default withPageMetadata(dddAgendaPage(Agenda2015, Agenda2015.getAgendaPageParams()))
