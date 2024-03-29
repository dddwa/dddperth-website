import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { SafeLink } from 'components/global/safeLink'
import { Main } from 'layouts/main'
import { Text } from 'components/global/text'
import { useConfig } from 'Context/Config'
import { format } from 'date-fns'
import Conference from 'config/conference'

const VenuePage: NextPage = () => {
  const { conference } = useConfig()

  return (
    <Main title="Venue" description={`About the ${conference.Name} venue.`} showHero={true}>
      <h1>Venue</h1>

      {conference.Venue ? (
        <>
          <Text>
            {conference.Name} {format(conference.Date, 'y')} will be held at {conference.Venue.Name} at{' '}
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
          </Text>

          <section>
            <>
              <h3>Transport</h3>
              <Text>
                <SafeLink href="https://optusstadium.com.au/getting-here/non-major-event-days">
                  Optus Statium - Getting there
                </SafeLink>
              </Text>

              <h3>Parking</h3>
              <Text>
                <SafeLink href="/static/optus-parking.pdf">Parking info</SafeLink>
              </Text>
              <Text>
                There is also parking information on the{' '}
                <SafeLink href="https://optusstadium.com.au/getting-here/non-major-event-days">
                  Optus Statium - Getting there
                </SafeLink>{' '}
                page
              </Text>
            </>
            {conference.Venue.Car && (
              <React.Fragment>
                <h3>Car</h3>
                <Text>{conference.Venue.Car}</Text>
              </React.Fragment>
            )}
            {conference.Venue.Train && (
              <React.Fragment>
                <h3>Train</h3>
                <Text>{conference.Venue.Train}</Text>
              </React.Fragment>
            )}
            {conference.Venue.Tram && (
              <React.Fragment>
                <h3>Tram</h3>
                <Text>{conference.Venue.Tram}</Text>
              </React.Fragment>
            )}
            {conference.Venue.Bus && (
              <React.Fragment>
                <h3>Bus</h3>
                <Text>{conference.Venue.Bus}</Text>
              </React.Fragment>
            )}
            {conference.Venue.Accommodation && (
              <React.Fragment>
                <h3>Accommodation</h3>
                <Text>{conference.Venue.Accommodation}</Text>
              </React.Fragment>
            )}
          </section>
        </>
      ) : (
        <Text>
          {conference.Name} {format(conference.Date, 'y')} venue is yet to be announced, stay tuned for more info!
        </Text>
      )}
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
