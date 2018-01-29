import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Link from 'next/link'
import ImageStrip from '../components/imageStrip';
import arrayShuffle from '../components/utils/arrayShuffle';
import Conference from '../config/conference';
import Sponsors from '../components/sponsors';
import Dates from '../config/dates';
import SponsorData from '../config/sponsors';

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
    return <Page isHome={true} title="Home">

      <section className="countdown grey">
        <div className="container">
          <h2>Countdown to Next Event:</h2>
          <span id="clock"></span>
          <hr />
          <div className="next-event">
            <div className="row">
              <div className="col-xs-12">
                <p><span>Venue</span>{Conference.Venue}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4">
                <p><span>Date</span>{Dates.Display}</p>
              </div>
              <div className="col-xs-12 col-sm-3 col-md-4">
                <p><span>Cost</span>{Conference.TicketPrice}</p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <Link href="/about">
                  <a className="btn">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageStrip images={this.props.imageStrip} conferenceName={Conference.Name} />
      <Sponsors show={!Conference.HideSponsors} sponsors={SponsorData} />
    </Page>;
  }
}

export default withPageMetadata(Index);
