import Error from 'next/error'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import { Main } from '../layouts/main'
import { NextPage } from 'next'
import { StyledPara } from '../components/global/text'

const VenuePage: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference

  if (conference.HideVenue) {
    return <Error statusCode={404} />
  }

  return (
    <Main metadata={pageMetadata} title="Venue" description={`About the ${conference.Name} venue.`} showHero={true}>
      <h1>Venue</h1>
      <StyledPara>
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
      </StyledPara>

      <section>
        {conference.Venue.Car && (
          <React.Fragment>
            <h3>Car</h3>
            <StyledPara>{conference.Venue.Car}</StyledPara>
          </React.Fragment>
        )}
        {conference.Venue.Train && (
          <React.Fragment>
            <h3>Train</h3>
            <StyledPara>{conference.Venue.Train}</StyledPara>
          </React.Fragment>
        )}
        {conference.Venue.Tram && (
          <React.Fragment>
            <h3>Tram</h3>
            <StyledPara>{conference.Venue.Tram}</StyledPara>
          </React.Fragment>
        )}
        {conference.Venue.Bus && (
          <React.Fragment>
            <h3>Bus</h3>
            <StyledPara>{conference.Venue.Bus}</StyledPara>
          </React.Fragment>
        )}
        {conference.Venue.Accommodation && (
          <React.Fragment>
            <h3>Accommodation</h3>
            <StyledPara>{conference.Venue.Accommodation}</StyledPara>
          </React.Fragment>
        )}
      </section>
    </Main>
  )
}

VenuePage.getInitialProps = ({ res }) => {
  if (Conference.HideVenue && res) {
    res.statusCode = 404
  }
  return {} as WithPageMetadataProps
}

export default withPageMetadata(VenuePage)
