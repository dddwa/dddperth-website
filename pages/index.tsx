import * as React from 'react'
import EventDetails from '../components/eventDetails'
import { withPageMetadata } from '../components/global/withPageMetadata'
import ImageStrip from '../components/imageStrip'
import ImportantDates from '../components/importantDates'
import Sponsors from '../components/sponsors'
import arrayShuffle from '../components/utils/arrayShuffle'
import { withCurrentDate, WithCurrentDateProps } from '../components/withCurrentDate'
import getConferenceActions from '../config/actions'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/main'

interface IndexProps {
  imageStrip: string[]
}

class Index extends React.Component<IndexProps & WithCurrentDateProps> {
  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip),
    }
  }

  render() {
    const dates = getConferenceDates(Conference, this.props.currentDate)
    const actions = getConferenceActions(Conference, dates)
    return (
      <Page isHome={true} title="Home">
        <EventDetails conference={Conference} dates={dates} primaryAction={actions[0]} />
        <ImportantDates conference={Conference} actions={actions} currentDate={this.props.currentDate} />
        <ImageStrip images={this.props.imageStrip} conferenceName={Conference.Name} />
        <Sponsors show={!Conference.HideSponsors} sponsors={Conference.Sponsors} />
      </Page>
    )
  }
}

export default withPageMetadata(withCurrentDate(Index))
