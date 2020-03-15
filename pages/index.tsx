import React from 'react'
import EventDetails from '../components/eventDetails'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import ImageStrip from '../components/imageStrip'
import ImportantDates from '../components/importantDates'
import Keynotes from '../components/Keynotes'
import Sponsors from '../components/sponsors'
import arrayShuffle from '../components/utils/arrayShuffle'
import getConferenceActions from '../config/actions'
import Conference from '../config/conference'
import { Image } from '../config/types'
import Page from '../layouts/main'
import { Alert } from '../components/global/Alert/Alert'
import { SafeLink } from '../components/global/safeLink'

interface IndexProps {
  imageStrip: Image[]
}

class Index extends React.Component<IndexProps & WithPageMetadataProps> {
  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip),
    }
  }

  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates
    const actions = getConferenceActions(conference, dates)
    return (
      <Page pageMetadata={this.props.pageMetadata} isHome={true} title="Home">
        <div className="container">
          <Alert kind="info">
            <h2>Website Statement</h2>
            <p>
              <time dateTime="2020-03-15">15th March 2020</time>
            </p>
            <p>
              DDD Perth is currently scheduled for <time dateTime="2020-08-01">August 1, 2020</time>.
            </p>
            <p>
              The committee responsible for running DDD Perth is actively and continuously monitoring the COVID-19 virus
              outbreak in line with Australian Government public health advice and the World Health Organization (WHO).
              All committee meetings are being held remotely.
            </p>
            <p>
              As of <time dateTime="2020-03-15">March 15</time>, the conference is over four months away, which is
              simultaneously a long way away and very close, considering today's rapidly evolving situation.
            </p>
            <p>
              We are aware of the current ban on events over 500 people and will adopt a cautious approach towards
              confirming the event. The safety of all participants, from sponsors to speakers to attendees to
              volunteers, is our priority.
            </p>
            <p>
              It is our opinion that we should confirm our event date before tickets open and as such will decide
              whether to postpone the event before <time dateTime="2020-04-30">April 30, 2020</time>.
            </p>
            <p>
              Our sponsors are aware of our current position, and we thank them for their continued support of our
              conference and community events.
            </p>
            <p>
              As our planning progresses, we will continue to monitor and adapt the conference based on the situation.
              You can read the latest on our website at any time, or contact us via the website should you have any
              concerns.
            </p>
            <p>
              The Australian Department of Health recommends that everyone should practise good hygiene to protect
              against infections.
            </p>
            <p>
              You can find more information at
              <br />
              <SafeLink
                href="https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert"
                target="_blank"
              >
                https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert
              </SafeLink>
              <br />
              <SafeLink
                href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                target="_blank"
              >
                https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public
              </SafeLink>
              <br />
              The Coronavirus Health Information Line in Australia operates 24 hours a day, seven days a week:{' '}
              <a href="tel:1800020080">1800 020 080</a>
            </p>
          </Alert>
        </div>
        <EventDetails conference={conference} dates={dates} primaryAction={actions[0]} />
        <ImportantDates conference={conference} actions={actions} currentDate={this.props.pageMetadata.currentDate} />
        <Keynotes conference={conference} />
        <ImageStrip images={this.props.imageStrip} />
        <div className="container">
          <Sponsors
            show={!conference.HideSponsors}
            sponsors={conference.Sponsors}
            hideUpsell={conference.HideSponsorshipUpsell}
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(Index)
