import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import ImportantDates from 'components/importantDates'
import Keynotes from 'components/Keynotes'
import { Sponsors } from 'components/Sponsors/sponsors'
import getConferenceActions from 'config/actions'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { StyledPara } from 'components/global/text'

export const Index: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference
  const dates = pageMetadata.dates
  const actions = getConferenceActions(conference, dates)

  return (
    <Main metadata={pageMetadata} title="Home" showHero={true}>
      <section>
        <h2>DDD Perth 2020</h2>
        <StyledPara>The DDD Perth Committee has regretfully postponed the 2020 conference to 2021.</StyledPara>
        <StyledPara>
          The safety of all participants, from sponsors to speakers to attendees to volunteers, is our priority, and we
          will continue to find ways to connect and support the wider Perth community at this challenging time.
        </StyledPara>
        <StyledPara>
          If you have any concerns that you feel DDD Perth can help with, we encourage you to contact us via the
          website.
        </StyledPara>
        <StyledPara>
          The Australian Department of Health recommends that everyone should practise good hygiene to protect against
          infections.
        </StyledPara>
      </section>
      <ImportantDates conference={conference} actions={actions} currentDate={pageMetadata.currentDate} />
      <Keynotes conference={conference} />
      <Sponsors
        show={!conference.HideSponsors}
        sponsors={conference.Sponsors}
        hideUpsell={conference.HideSponsorshipUpsell}
      />
    </Main>
  )
}

export default withPageMetadata(Index)
