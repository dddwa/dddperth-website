import { Venue } from '../types'
import { Fragment } from 'react'
import React from 'react'
import { SafeLink } from '../../components/global/safeLink'

export const universityOfAdelaide: Venue = {
  Name: 'University of Adelaide, North Terrace Campus',
  Address: '259 North Terrace, Adelaide',
  Latitude: -34.91900042552125,
  Longitude: 138.60492092823333,
  Afterparty: 'TBD',
  AfterpartyAddress: 'TBD',
  Wifi: 'University of Adelaide has free wifi for all attendees.',
  Car: (
    <Fragment>
      The nearby Wilson Parking - Adelaide Central, Adelaide CBD, car park offers parking for{' '}
      <SafeLink
        href="https://www.wilsonparking.com.au/parking-locations/south-australia/adelaide-cbd/adelaide-central-car-park"
        target="_blank"
      >
        $14.00 for the day
      </SafeLink>{' '}
      if booked online.
    </Fragment>
  ),
  Train: (
    <Fragment>
      The Adelaide Railway Station is a short (less than 5 minute) walk down the road from Adelaide University. See{' '}
      <SafeLink href="http://www.adelaidemetro.com.au/" target="_blank">
        Adelaide Metro
      </SafeLink>{' '}
      for more details.
    </Fragment>
  ),
  Bus: (
    <Fragment>
      There are a number of Bus and Tram combinations that will get you right outside of the Adelaide University North
      Terrace Campus. Use the{' '}
      <SafeLink href="https://www.adelaidemetro.com.au/plan-a-trip/plan-my-journey" target="_blank">
        Adelaide Metro Journey Planner
      </SafeLink>{' '}
      to plan your trip in!
    </Fragment>
  ),
}
