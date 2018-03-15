import { Moment } from "moment";
import * as React from "react";
import EventDetails from "../components/eventDetails";
import {withPageMetadata} from "../components/global/withPageMetadata";
import ImageStrip from "../components/imageStrip";
import ImportantDates from "../components/importantDates";
import Sponsors from "../components/sponsors";
import arrayShuffle from "../components/utils/arrayShuffle";
import { updateWithTime } from "../components/withCurrentDate";
import getConferenceActions from "../config/actions";
import Conference from "../config/conference";
import getConferenceDates from "../config/dates";
import Page from "../layouts/main";

interface IndexProps {
  imageStrip: string[];
  currentDate: Moment;
}

class Index extends React.Component<IndexProps> {

  static getInitialProps() {
    return {
      imageStrip: arrayShuffle(Conference.ImageStrip)
    };
  }

  render() {
    const dates = getConferenceDates(Conference);
    const actions = getConferenceActions(Conference, dates);
    return <Page isHome={true} title="Home">
      <EventDetails conference={Conference} dates={dates} primaryAction={actions[0]} />
      <ImportantDates conference={Conference} actions={actions} />
      <ImageStrip images={this.props.imageStrip} conferenceName={Conference.Name} />
      <Sponsors show={!Conference.HideSponsors} sponsors={Conference.Sponsors} />
    </Page>;
  }
}

export default withPageMetadata(updateWithTime(Index));
