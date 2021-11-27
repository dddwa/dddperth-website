import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { SafeLink } from 'components/global/safeLink'
import { Main } from 'layouts/main'
import { StyledPara } from 'components/global/text'
import { useConfig } from 'Context/Config'
import Conference from 'config/conference'

const VenuePage: NextPage = () => {
  const { conference } = useConfig()

  return (
    <Main title="Venue" description={`About the ${conference.Name} venue.`} showHero={true}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  if (Conference.HideVenue) {
    return { notFound: true }
  }
  return { props: {} }
}

export default VenuePage
