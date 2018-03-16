import dateTimeProvider from 'components/utils/dateTimeProvider'
import Error from 'next/error'
import * as React from 'react'
import FaqList from '../components/faqList'
import { withPageMetadata } from '../components/global/withPageMetadata'
import { withCurrentDate, WithCurrentDateProps } from '../components/withCurrentDate'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import getFaqs from '../config/faqs'
import Page from '../layouts/main'

class TicketPage extends React.Component<WithCurrentDateProps> {
  static getInitialProps({ res }) {
    if (!getConferenceDates(Conference, dateTimeProvider.now()).RegistrationOpen && res) {
      res.statusCode = 404
    }
    return {}
  }
  render() {
    const dates = getConferenceDates(Conference, this.props.currentDate)
    const faqs = getFaqs(dates)
    if (!dates.RegistrationOpen) {
      return <Error statusCode={404} />
    }

    return (
      <Page title="Tickets" description={'Purchase tickets for ' + Conference.Name}>
        <div className="container">
          <h1>Tickets</h1>
          <FaqList faqs={faqs.filter(f => f.Category === 'tickets')} />
          <iframe
            src={'//eventbrite.com.au/tickets-external?ref=etckt&eid=' + Conference.EventbriteId}
            style={{ border: 0 }}
            height="480"
            width="100%"
            scrolling="auto"
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(withCurrentDate(TicketPage))
