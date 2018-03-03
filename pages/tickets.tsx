import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Error from 'next/error';
import Conference from '../config/conference';
import getConferenceDates from '../config/dates';

class TicketPage extends React.Component {
  static getInitialProps({ res }) {
    if (!getConferenceDates(Conference).RegistrationOpen && res) {
      res.statusCode = 404;
    }
    return {};
  }
  render() {
    if (!getConferenceDates(Conference).RegistrationOpen) {
      return <Error statusCode={404} />;
    }

    return <Page title="Tickets" description={"Purchase tickets for " + Conference.Name}>
      <div className="container">
        <h1>Tickets</h1>
        <iframe src={"//eventbrite.com.au/tickets-external?ref=etckt&eid=" + Conference.EventbriteId} style={{border: 0}} height="480" width="100%" scrolling="auto"></iframe>
      </div>
    </Page>;
  }
}

export default withPageMetadata(TicketPage);
