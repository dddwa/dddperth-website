import Link from 'next/link'
import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page pageMetadata={props.pageMetadata} title="Sponsorship" description="Sponsorship opportunities for DDD Perth.">
    <h1>Sponsorship</h1>

    <p>
      <a
        className="btn btn-mail"
        href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}
        title="Opens in your mail program of choice"
      >
        Explore sponsorship opportunities
      </a>
    </p>

    <p>
      {props.pageMetadata.conference.TagLine}. {props.pageMetadata.conference.Name} provides a unique opportunity to
      sponsors because we attract people that don't normally go to software conferences. This occurs as a natural result
      of our core principles:
    </p>
    <ul>
      <li>
        Making the ticket price as low as possible ({props.pageMetadata.conference.TicketPrice}); people don't need to
        request PD budget from their employer to attend and it's accessible to most people regardless of financial
        circumstance
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
    </ul>
    <p>
      <Link href="/about">
        <a className="btn btn-secondary">Find out more about {props.pageMetadata.conference.Name}</a>
      </Link>
    </p>

    <p>
      {props.pageMetadata.conference.Name} is a not-for-profit community event with a low ticket price for attendees
      (much lower than the per-person cost) and the only way we can run it is via generous corporate sponsorship. Thanks
      to all our sponsors new and old - we can't do this without you!
    </p>

    <p>
      In 2018 DDD Perth had 470 attendees from 510 sold tickets; this makes us the biggest software conference in
      Western Australia.
    </p>

    <p>
      We have a sponsorship prospectus that will be provided on request that explains detailed benefits and impact of
      sponsorship and the difference between the various levels; if you would like a copy{' '}
      <a className="maillink" href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}>
        please contact us
      </a>
      !
    </p>

    <p>
      <a
        className="btn btn-mail"
        href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}
        title="Opens in your mail program of choice"
      >
        Explore sponsorship opportunities
      </a>
    </p>
  </Page>
))
