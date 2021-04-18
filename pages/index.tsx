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
        <h2>DDD Perth 2021</h2>
        <StyledPara>
          DDD Perth is Perth's largest community run conference for the tech community. Our goal is to create an
          approachable event that appeals to the whole community, especially people that don't normally get to attend or
          speak at conferences.
        </StyledPara>
        <StyledPara>
          The conference is run on a Saturday, and strives to be inclusive of everyone in the Perth tech community.
          Check out the agenda and talks from previous years, or hear more about how we do what we do on our blog.
        </StyledPara>
        <StyledPara>We hope to see you in 2021!</StyledPara>
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
