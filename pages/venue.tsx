import * as React from 'react'
import Page from '../layouts/main';
import {withPageMetadata} from '../components/global/withPageMetadata';
import Conference from '../config/conference';
import Error from 'next/error';

class VenuePage extends React.Component {
  static getInitialProps({ res }) {
    if (Conference.HideVenue && res) {
      res.statusCode = 404;
    }
    return {};
  }
  render() {
    if (Conference.HideVenue) {
      return <Error statusCode={404} />;
    }
    return <Page title="Venue" description="About the DDD Perth venue.">
      <div className="container">
        <h1>Venue</h1>
        <p>{Conference.Name} will be held at {Conference.Venue.Name} at <a href={"https://www.google.com.au/maps/place/"+encodeURIComponent(Conference.Venue.Name + ", " + Conference.Venue.Address)} target="_blank">{Conference.Venue.Address}</a>.</p>
      </div>
      <section className="right-sidebar" id="travelinfo">
        <div className="container directions equal-heights">
          {Conference.Venue.Car &&
            <div className="col">
              <div className="top">
                <i className="fa fa-car" aria-hidden="true"></i>
                <h3>Car</h3>
              </div>
              <div className="txt">
                <p>{Conference.Venue.Car}</p>
              </div>
            </div>
          }
          {Conference.Venue.Train &&
            <div className="col">
              <div className="top">
                <i className="fa fa-train" aria-hidden="true"></i>
                <h3>Train</h3>
              </div>
              <div className="txt">
                <p>{Conference.Venue.Train}</p>
              </div>
            </div>
          }
          {Conference.Venue.Tram &&
            <div className="col">
              <div className="top">
                <i className="fa fa-subway" aria-hidden="true"></i>
                <h3>Tram</h3>
              </div>
              <div className="txt">
                <p>{Conference.Venue.Tram}</p>
              </div>
            </div>
          }
          {Conference.Venue.Bus &&
            <div className="col">
              <div className="top">
                <i className="fa fa-bus" aria-hidden="true"></i>
                <h3>Bus</h3>
              </div>
              <div className="txt">
                <p>{Conference.Venue.Bus}</p>
              </div>
            </div>
          }
          {Conference.Venue.Accommodation &&
            <div className="col">
              <div className="top">
                <i className="fa fa-building" aria-hidden="true"></i>
                <h3>Accommodation</h3>
              </div>
              <div className="txt">
                <p>{Conference.Venue.Accommodation}</p>
              </div>
            </div>
          }
        </div>
      </section>
    </Page>;
  }
}

export default withPageMetadata(VenuePage);
