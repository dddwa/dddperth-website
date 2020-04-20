import React from 'react'
import EventDetails from '../components/eventDetails'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import ImageStrip from '../components/imageStrip'
import ImportantDates from '../components/importantDates'
import Keynotes from '../components/Keynotes'
import Sponsors from '../components/sponsors'
import arrayShuffle from '../components/utils/arrayShuffle'
import getConferenceActions from '../config/actions'
import { Main } from '../layouts/main'
import { NextPage } from 'next'

export const Index: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference
  const dates = pageMetadata.dates
  const actions = getConferenceActions(conference, dates)
  const imageStrip = React.useRef(arrayShuffle(conference.ImageStrip))

  return (
    <Main metadata={pageMetadata} title="Home" showHero={true}>
      <EventDetails conference={conference} dates={dates} primaryAction={actions[0]} />
      <ImportantDates conference={conference} actions={actions} currentDate={pageMetadata.currentDate} />
      <Keynotes conference={conference} />
      <ImageStrip images={imageStrip.current} />
      <div>
        <Sponsors
          show={!conference.HideSponsors}
          sponsors={conference.Sponsors}
          hideUpsell={conference.HideSponsorshipUpsell}
        />
      </div>
    </Main>
  )
}

export default withPageMetadata(Index)
