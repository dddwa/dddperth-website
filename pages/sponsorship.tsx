import Link from 'next/link'
import * as React from 'react'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import Page from '../layouts/withSidebar'

export default withPageMetadata(() => (
    <Page title="Sponsorship" description="Sponsorship opportunities for DDD Perth.">
        <h1>Sponsorship</h1>

        <p>
            <a className="btn" href={'mailto:' + Conference.SponsorshipEmail}>
                Contact us to explore sponsorship opportunities
            </a>
        </p>

        <p>
            {Conference.TagLine}. {Conference.Name} provides a unique opportunity to sponsors because we attract people
            that don't normally go to software conferences. This occurs as a natural result of our core principles:
        </p>
        <ul>
            <li>
                Making the ticket price as low as possible ($50); people don't need to request PD budget from their
                employer to attend and it's accessible to most people regardless of financial circumstance
            </li>
            <li>
                Running the event on a Saturday; people don't have to arrange time off work and contractors don't have
                to miss out on billable opportunities
            </li>
            <li>
                Allowing anyone to submit about any software industry related topic; gathers wide interest from extended
                networks within the community
            </li>
            <li>Having a democratically chosen agenda; generates excitement and interest from the wider community</li>
            <li>
                Focussing on creating a safe and inclusive environment where everyone is welcome; encourages a diverse
                set of attendees and attracts repeat visitors and an expanding presence year on year via a growing
                network
            </li>
        </ul>
        <p>
            <Link href="/about">
                <a className="btn btn-secondary">Find out more about {Conference.Name}</a>
            </Link>
        </p>

        <p>
            {Conference.Name} is a not-for-profit community event with a low ticket price for attendees (much lower than
            the per-person cost) and the only way we can run it is via generous corporate sponsorship. Thanks to all our
            sponsors new and old - we can't do this without you!
        </p>

        <p>
            In 2017 DDD Perth had 330 attendees from 360 sold tickets; this makes us the biggest software conference in
            Western Australia.
        </p>

        <p>
            We have a sponsorship prospectus that will be provided on request that explains detailed benefits and impact
            of sponsorship and the difference between the various levels; if you would like a copy{' '}
            <a href={'mailto:' + Conference.SponsorshipEmail}>please contact us</a>!
        </p>

        <p>
            <a className="btn" href={'mailto:' + Conference.SponsorshipEmail}>
                Contact us to explore sponsorship opportunities
            </a>
        </p>
    </Page>
))
