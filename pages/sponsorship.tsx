import React from 'react'
import { StyledList, Text } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { ButtonAnchor } from 'components/global/Button/Button'
import { EmailIcon } from 'components/global/Icons/Email'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'

const Sponsorship: NextPage = () => {
  const { conference } = useConfig()

  return (
    <PageWithSidebar title="Sponsorship" description="Sponsorship opportunities for DDD Adelaide.">
      <h1>Sponsorship</h1>

      <Text>
        <ButtonAnchor kind="primary" href={`mailto:${conference.SponsorshipEmail}`}>
          <span>Explore sponsorship opportunities</span>
          <EmailIcon />
        </ButtonAnchor>
      </Text>

      <Text>
        {conference.TagLine}. {conference.Name} provides a unique opportunity to sponsors because we attract people that
        don't normally go to software conferences. This occurs as a natural result of our core principles:
      </Text>
      <StyledList>
        <li>
          Making the ticket price as low as possible ({conference.TicketPrice}); people don't need to request PD budget
          from their employer to attend and it's accessible to most people regardless of financial circumstance
        </li>
        <li>
          Running the event on a Saturday; people don't have to arrange time off work and contractors don't have to miss
          out on billable opportunities
        </li>
        <li>
          Allowing anyone to submit about any software industry related topic; gathers wide interest from extended
          networks within the community
        </li>
        <li>Having a democratically chosen agenda; generates excitement and interest from the wider community</li>
        <li>
          Focussing on creating a safe and inclusive environment where everyone is welcome; encourages a diverse set of
          attendees and attracts repeat visitors and an expanding presence year on year via a growing network
        </li>
      </StyledList>
      <Text>
        <ButtonAnchor kind="secondary" href="/code-of-conduct">
          Read DDD Adelaide Code of Conduct
        </ButtonAnchor>
      </Text>

      <Text>
        <ButtonAnchor kind="secondary" href="/about">
          Find out more about {conference.Name}
        </ButtonAnchor>
      </Text>

      <Text>
        {conference.Name} is a not-for-profit community event with a low ticket price for attendees (much lower than the
        per-person cost) and the only way we can run it is via generous corporate sponsorship. Thanks to all our
        sponsors new and old - we can't do this without you!
      </Text>

      <Text>
        We have a sponsorship prospectus that will be provided on request that explains detailed benefits and impact of
        sponsorship and the difference between the various levels; if you would like a copy{' '}
        <a href={'mailto:' + conference.SponsorshipEmail}>please contact us</a>!
      </Text>

      <Text>
        <ButtonAnchor kind="primary" href={`mailto:${conference.SponsorshipEmail}`}>
          <span>Explore sponsorship opportunities</span>
          <EmailIcon />
        </ButtonAnchor>
      </Text>
    </PageWithSidebar>
  )
}

export default Sponsorship
