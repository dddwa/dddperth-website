import Error from 'next/error'
import * as React from 'react'
import FaqList from '../components/faqList'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import getFaqs from '../config/faqs'
import Page from '../layouts/main'

class TicketPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    if (!getConferenceDates(Conference, dateTimeProvider.now()).RegistrationOpen && res) {
      res.statusCode = 404
    }
    return {}
  }
  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    const faqs = getFaqs(dates)
    if (!dates.RegistrationOpen) {
      return <Error statusCode={404} />
    }

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Tickets"
        description={'Purchase tickets for ' + conference.Name}
      >
        <div className="container">
          <h1>Tickets</h1>
          <FaqList faqs={faqs.filter(f => f.Category === 'tickets')} />
          <iframe
            src={'//eventbrite.com.au/tickets-external?ref=etckt&eid=' + conference.EventbriteId}
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

export default withPageMetadata(TicketPage)
