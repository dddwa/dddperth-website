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
        <p>{Conference.Name} will be held at {Conference.Venue} at <a href={"https://www.google.com.au/maps/place/"+encodeURIComponent(Conference.Venue + ", " + Conference.VenueAddress)} target="_blank">{Conference.VenueAddress}</a>.</p>
        <h2>Accomodation</h2>
        <p>To get a 10% discount from the best available rate for the nearby 4.5 star Adina Apartment Hotel you can use the special <a href="https://gc.synxis.com/rez.aspx?Chain=14687&amp;locale=en-US&amp;promo=PERTHCONV" target="_blank">booking link</a>. Adina Hotel can be contacted on +61 8 9217 8000 or <a href="mailto:perth@adinahotels.com.au">perth@adinahotels.com.au</a>.</p>
      </div>
      <section className="right-sidebar" id="travelinfo">
        <div className="container directions equal-heights">
          <div className="col">
            <div className="top">
              <i className="fa fa-car" aria-hidden="true"></i>
              <h3>Car</h3>
            </div>
            <div className="txt">
              <p>Although parking is available around the university we recommend that delegates travel by public transport.</p>
            </div>
          </div>
          <div className="col">
            <div className="top">
              <i className="fa fa-train" aria-hidden="true"></i>
              <h3>Train</h3>
            </div>
            <div className="txt">
              <p>The nearest train station is Caulfield and Monash University is a 2 minute walk from there. Four lines stop at the station: Cranbourne, Dandenong, Frankston and Pakenham.
  </p>
            </div>
          </div>
          <div className="col">
            <div className="top">
              <i className="fa fa-subway" aria-hidden="true"></i>
              <h3>Tram</h3>
            </div>
            <div className="txt">
              <p><a href="http://ptv.vic.gov.au/route/view/761" target="_blank">Tram route 3/3a</a> stops at the Caulfield station.</p>
            </div>
          </div>
          <div className="col">
            <div className="top">
              <i className="fa fa-car" aria-hidden="true"></i>
              <h3>Parking</h3>
            </div>
            <div className="txt">
              <p>Free parking is available in building J on level 4 and 5 only, by parking in the blue bays on the campus.</p>
            </div>
          </div>
        </div>
      </section>
    </Page>;
  }
}

export default withPageMetadata(VenuePage);
