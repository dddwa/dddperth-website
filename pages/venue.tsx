import GoogleMapReact from 'google-map-react'
import Error from 'next/error'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import { Main } from '../layouts/main'

class VenuePage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    if (Conference.HideVenue && res) {
      res.statusCode = 404
    }
    return {}
  }
  handleGoogleMapApi(google: any) {
    google.map.setMapTypeId(google.maps.MapTypeId.SATELLITE)
  }
  render() {
    const conference = this.props.pageMetadata.conference

    if (conference.HideVenue) {
      return <Error statusCode={404} />
    }
    return (
      <Main metadata={this.props.pageMetadata} title="Venue" description={`About the ${conference.Name} venue.`}>
        <div className="container">
          <h1>Venue</h1>
          <p>
            {conference.Name} will be held at {conference.Venue.Name} at{' '}
            <SafeLink
              href={
                'https://www.google.com.au/maps/place/' +
                encodeURIComponent(conference.Venue.Name + ', ' + conference.Venue.Address)
              }
              target="_blank"
            >
              {conference.Venue.Address}
            </SafeLink>
            .
          </p>
        </div>
        <div id="map" aria-hidden>
          <div id="map-view">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyACDtKFE3lyOOmHpMeUoJsYqaVY2fcaa9o',
              }}
              options={{
                mapTypeControl: false,
                minZoomOverride: false,
                panControl: false,
                scrollwheel: false,
                zoomControl: false,
              }}
              center={{
                lat: conference.Venue.Latitude,
                lng: conference.Venue.Longitude,
              }}
              zoom={17}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={this.handleGoogleMapApi.bind(this)}
            />
          </div>
          <div id="map-overlay">
            <h2>{conference.Venue.Name}</h2>
            <h3>{conference.Venue.Address}</h3>
          </div>
        </div>
        <section className="right-sidebar" id="travelinfo">
          <div className="container directions equal-heights">
            {conference.Venue.Car && (
              <div className="col">
                <div className="top">
                  <i className="fa fa-car" aria-hidden="true" />
                  <h3>Car</h3>
                </div>
                <div className="txt">
                  <p>{conference.Venue.Car}</p>
                </div>
              </div>
            )}
            {conference.Venue.Train && (
              <div className="col">
                <div className="top">
                  <i className="fa fa-train" aria-hidden="true" />
                  <h3>Train</h3>
                </div>
                <div className="txt">
                  <p>{conference.Venue.Train}</p>
                </div>
              </div>
            )}
            {conference.Venue.Tram && (
              <div className="col">
                <div className="top">
                  <i className="fa fa-subway" aria-hidden="true" />
                  <h3>Tram</h3>
                </div>
                <div className="txt">
                  <p>{conference.Venue.Tram}</p>
                </div>
              </div>
            )}
            {conference.Venue.Bus && (
              <div className="col">
                <div className="top">
                  <i className="fa fa-bus" aria-hidden="true" />
                  <h3>Bus</h3>
                </div>
                <div className="txt">
                  <p>{conference.Venue.Bus}</p>
                </div>
              </div>
            )}
            {conference.Venue.Accommodation && (
              <div className="col">
                <div className="top">
                  <i className="fa fa-building" aria-hidden="true" />
                  <h3>Accommodation</h3>
                </div>
                <div className="txt">
                  <p>{conference.Venue.Accommodation}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </Main>
    )
  }
}

export default withPageMetadata(VenuePage)
