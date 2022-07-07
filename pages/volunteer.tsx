import React from 'react'
import getVolunteerOpportunities from 'config/volunteerOpportunities'
import { Text } from 'components/global/text'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { VolunteerOpportunityList } from 'components/Volunteer/VolunteerOpportunityList'
import { VolunteerForm } from 'components/Volunteer/VolunteerForm';

const VolunteerPage: NextPage = () => {
  const { conference } = useConfig()

  return (
    <Main title="Work With Us" description={`Work with us to organise the ${conference.Name} conference.`} pageBanner="/static/images/volunteer-banner">
      <h1>Work With Us</h1>
      <Text>
        {conference.Name} cannot happen each year without a committed group of volunteers. There is heaps
        to get done both in the lead-up to, and on the day of the event itself.
      </Text>
      <Text>
        If you would like to be part of the community that makes {conference.Name} happen, check out our
        current open volunteer opportunities below - and sign up! On the form below, you can nominate your
        interest in more than one role as well, if you're up to it.
      </Text>

      <h2>Volunteer Opportunities</h2>
      <VolunteerOpportunityList opportunities={getVolunteerOpportunities()} />
      <VolunteerForm />
    </Main >
  )
}

export default VolunteerPage
