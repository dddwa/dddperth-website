import Error from 'next/error'
import React from 'react'
import { isNullOrUndefined } from 'util'
import { FaqList } from '../components/FAQList/FaqList'
import { StyledContainer } from '../components/global/Container/Container.styled'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import getFaqs from '../config/faqs'
import { SoldOutOptions, TicketsProvider } from '../config/types'
import Page from '../layouts/main'

class TicketPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    if (
      !getConferenceDates(Conference, dateTimeProvider.now()).RegistrationOpen &&
      Conference.IsSoldOut !== SoldOutOptions.WaitList &&
      res
    ) {
      res.statusCode = 404
    }
    return {}
  }

  componentDidMount() {
    const conference = this.props.pageMetadata.conference
    if (conference.TicketsProviderId === TicketsProvider.Tito) {
      if (!isNullOrUndefined(document) && document.getElementById('tito') === null) {
        // need to include this script <script src='https://js.tito.io/v1' async></script>
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://js.tito.io/v1'
        script.async = true
        document.body.appendChild(script)
      }
    }
  }

  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    const faqs = getFaqs(dates)
    if (!dates.RegistrationOpen && this.props.pageMetadata.conference.IsSoldOut !== SoldOutOptions.WaitList) {
      return <Error statusCode={404} />
    }

    let ticketFrame: any

    if (conference.TicketsProviderId === TicketsProvider.Eventbrite) {
      ticketFrame = (
        <iframe
          src={'//eventbrite.com.au/tickets-external?ref=etckt&eid=' + conference.TicketsProviderEventId}
          style={{ border: 0 }}
          height="650"
          width="100%"
          scrolling="auto"
        />
      )
    } else if (conference.TicketsProviderId === TicketsProvider.Tito) {
      ticketFrame = React.createElement('tito-widget', {
        event: `${conference.TicketsProviderAccountId}/${conference.TicketsProviderEventId}`,
      })
    }

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Tickets"
        description={`Purchase tickets for ${conference.Name}`}
      >
        <StyledContainer>
          <h1>Tickets</h1>
          {this.props.pageMetadata.conference.IsSoldOut === SoldOutOptions.WaitList && (
            <p className="alert alert-warning">
              Tickets have sold out, but we are asking people to add themselves to the waitlist since it's likely we
              will release more tickets. Tickets will be released to the waitlist on a first-come, first-served basis so
              get your name in quick if you want to attend.
            </p>
          )}
          <FaqList faqs={faqs.filter(f => f.Category === 'tickets')} />
          {ticketFrame}
        </StyledContainer>
      </Page>
    )
  }
}

export default withPageMetadata(TicketPage)
