import { Fragment } from 'react'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import { Venue } from './types'

// tslint:disable:object-literal-sort-keys
const venue: Venue = {
  Name: 'Perth Convention and Exhibition Centre',
  Address: '21 Mounts Bay Rd, Perth',
  Latitude: -31.9565004,
  Longitude: 115.853,
  Afterparty: null,
  AfterpartyAddress: null,
  Wifi: 'PCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour.',
  Accommodation: (
    <Fragment>
      To get a 10% discount from the best available rate for the nearby 4.5 star Adina Apartment Hotel you can use the
      special{' '}
      <SafeLink href="https://gc.synxis.com/rez.aspx?Chain=14687&amp;locale=en-US&amp;promo=PERTHCONV" target="_blank">
        booking link
      </SafeLink>
      . Adina Hotel can be contacted on +61 8 9217 8000 or{' '}
      <a className="maillink" href="mailto:perth@adinahotels.com.au">
        perth@adinahotels.com.au
      </a>
      .
    </Fragment>
  ),
  Car: (
    <Fragment>
      PCEC has parking underneath it for{' '}
      <SafeLink href="https://www.cityofperthparking.com.au/convention-centre" target="_blank">
        $16.80 for the day
      </SafeLink>
      .
    </Fragment>
  ),
  Train: (
    <Fragment>
      PCEC is adjoining the Elizabeth Quay Train Station and is a 5 minute walk from it. See{' '}
      <SafeLink href="http://transperth.wa.gov.au/" target="_blank">
        Transperth
      </SafeLink>{' '}
      for more details.
    </Fragment>
  ),
  Bus: (
    <Fragment>
      PCEC is easy to get to via any bus that goes to the Esplanade Busport, which is adjoining the PCEC. See{' '}
      <SafeLink href="http://transperth.wa.gov.au/" target="_blank">
        Transperth
      </SafeLink>{' '}
      for more details.
    </Fragment>
  ),
}

export default venue
