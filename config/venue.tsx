import { Fragment } from 'react'
import React from 'react'
import { SafeLink } from '../components/global/safeLink'
import { Venue } from './types'

// tslint:disable:object-literal-sort-keys
const venue: Venue = {
  Name: 'MOD., University of South Australia',
  Address: 'North Terrace, adjacent Morphett Street Bridge, Adelaide',
  Latitude: -34.9215197,
  Longitude: 138.5925674,
  Afterparty: null,
  AfterpartyAddress: null,
  Wifi: 'MOD has free wifi for all attendees.',
  Car: (
    <Fragment>
      The nearby Adelaide Convention Centre carpark offers an early bird deal for{' '}
      <SafeLink
        href="https://www.adelaidecc.com.au/content/uploads/2018/12/ACC-Public-Car-Parking-Rates-2018-2019.pdf"
        target="_blank"
      >
        $16.00 for the day
      </SafeLink>{' '}
      if you enter between 5:30am-9:30am and exit between 2:30pm-6:30pm.
    </Fragment>
  ),
  Train: (
    <Fragment>
      The Adelaide Railway Station is a short (less than 5 minute) walk down the road from the University campus. See{' '}
      <SafeLink href="http://www.adelaidemetro.com.au/" target="_blank">
        Adelaide Metro
      </SafeLink>{' '}
      for more details.
    </Fragment>
  ),
  Bus: (
    <Fragment>
      There are a number of Bus and Tram combinations that will get you right outside of the University campus. Use the{' '}
      <SafeLink href="https://www.adelaidemetro.com.au/planner/" target="_blank">
        Adelaide Metro Journey Planner
      </SafeLink>{' '}
      to plan your trip in!
    </Fragment>
  ),
}

export default venue
