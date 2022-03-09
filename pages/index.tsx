import React from 'react'
import ImportantDates from 'components/importantDates'
import Keynotes from 'components/Keynotes'
import { Sponsors } from 'components/Sponsors/sponsors'
import getConferenceActions from 'config/actions'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { Text } from 'components/global/text'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'

export const Index: NextPage = () => {
  const { conference, dates, currentDate } = useConfig()
  const actions = getConferenceActions(conference, dates)

  return (
    <Main title="Home" showHero={true}>
      <section>
        <h2>
          {conference.Name} {format(conference.Date, 'y')}
        </h2>
        <Text>
          {conference.Name} is Perth's largest community run conference for the tech community. Our goal is to create an
          approachable event that appeals to the whole community, especially people that don't normally get to attend or
          speak at conferences. The conference is run on a Saturday, and strives to be inclusive of everyone in the
          Perth tech community.
        </Text>
        <Text>
          In 2021, we are committed to hosting our conference for you. We hope it's in person, but if it's not, we'll be
          bringing you the same amazing speakers online.
        </Text>
        <Text>
          Check out the agenda and talks from previous years, or hear more about how we do what we do on our blog.
        </Text>
        <Text>We hope to see you in 2021!</Text>
      </section>
      <ImportantDates conference={conference} actions={actions} currentDate={currentDate} />
      <Keynotes conference={conference} />
      <Sponsors
        show={!conference.HideSponsors}
        sponsors={conference.Sponsors}
        hideUpsell={conference.HideSponsorshipUpsell}
      />
    </Main>
  )
}

export default Index
