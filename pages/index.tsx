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
            <p>The DDD Perth Committee has regretfully postponed the 2020 conference to 2021.</p>
            <p>
              The safety of all participants, from sponsors to speakers to attendees to volunteers, is our priority, and
              we will continue to find ways to connect and support the wider Perth community at this challenging time.
            </p>
            <p>
              If you have any concerns that you feel DDD Perth can help with, we encourage you to contact us via the
              website.
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
