import * as React from 'react'
import EventDetails from '../components/eventDetails'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import ImageStrip from '../components/imageStrip'
import ImportantDates from '../components/importantDates'
import Sponsors from '../components/sponsors'
import arrayShuffle from '../components/utils/arrayShuffle'
import getConferenceActions from '../config/actions'
import Conference from '../config/conference'
import Page from '../layouts/main'

interface IndexProps {
  imageStrip: string[]
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
    const actions = getConferenceActions(this.props.pageMetadata.conference, dates)
    return (
      <Page pageMetadata={this.props.pageMetadata} isHome={true} title="Home">
        <EventDetails conference={conference} dates={dates} primaryAction={actions[0]} />
        <ImportantDates conference={conference} actions={actions} currentDate={this.props.pageMetadata.currentDate} />
        <ImageStrip images={this.props.imageStrip} conferenceName={conference.Name} />
        <Sponsors show={!conference.HideSponsors} sponsors={conference.Sponsors} />
      </Page>
    )
  }
}

export default withPageMetadata(Index)
