import React from 'react'
import getVolunteerOpportunities from 'config/volunteerOpportunities'
import { Text } from 'components/global/text'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { VolunteerOpportunityList } from 'components/Volunteer/VolunteerOpportunityList'
import { VolunteerForm } from 'components/Volunteer/VolunteerForm'

const VolunteerPage: NextPage = () => {
  const { conference } = useConfig()

  return (
    <Main
      title="Work With Us"
      description={`Work with us to organise the ${conference.Name} conference.`}
      pageBanner="/static/images/volunteer-banner"
    >
      <h1>Work With Us</h1>
      <Text>
        {conference.Name} cannot happen each year without a committed group of volunteers. There is heaps to get done
        both in the lead-up to, and on the day of the event itself.
      </Text>
      <Text>
        Currently, Membership Applications are open, and applications will be accepted by committee from AGM (21
        February 2023) for a period of 3 months (until 21 May 2023).
      </Text>
      <Text>
        A member of DDD WA Inc is a year round volunteer who contributes to the organisation of the conference
        throughout the year. By contributing year round, our members work together to create the inclusive, affordable,
        accessible and open conference that {conference.Name} is known to be.
      </Text>
      <Text>
        Members are welcome from all parts of our community. There is a little more about each team below, where you can
        contribute. Please, have a read and if you are interested in joining our welcoming membership, fill out the
        application form below to apply.
      </Text>

      <h2>Membership Volunteer Opportunities</h2>
      {conference.NeedsVolunteers ? (
        <>
          <VolunteerOpportunityList opportunities={getVolunteerOpportunities()} />
          <VolunteerForm />
        </>
      ) : null}
    </Main>
  )
}

export default VolunteerPage
