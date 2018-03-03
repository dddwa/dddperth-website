import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import ImageStrip from '../components/imageStrip';
import arrayShuffle from '../components/utils/arrayShuffle';
import Conference from '../config/conference';
import Sponsors from '../components/sponsors';
import SponsorData from '../config/sponsors';
import EventDetails from '../components/eventDetails';
import ImportantDates from '../components/importantDates';
import getConferenceDates from '../config/dates';

interface IndexProps {
  imageStrip : string[];
}

class Index extends React.Component<IndexProps> {

  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip)
    };
  }

  render() {
    const dates = getConferenceDates(Conference);
    return <Page isHome={true} title="Home">
      <EventDetails conference={Conference} dates={dates} />
      <ImportantDates conference={Conference} dates={dates} />
      <ImageStrip images={this.props.imageStrip} conferenceName={Conference.Name} />
      <Sponsors show={!Conference.HideSponsors} sponsors={SponsorData} />
    </Page>;
  }
}

export default withPageMetadata(Index);
