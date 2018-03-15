import * as React from 'react'
import { withPageMetadata } from '../components/global/withPageMetadata'
import Conference from '../config/conference'
import Page from '../layouts/withSidebar'

export default withPageMetadata(() => (
  <Page title="Contact Us" description={'How to contact ' + Conference.Name + '.'}>
    <h1>Contact Us</h1>
    <ul>
      <li>
        <strong>General enquiries:</strong> <a href={'mailto:' + Conference.ContactEmail}>{Conference.ContactEmail}</a>
      </li>
      <li>
        <strong>Sponsorship Enquiries:</strong>{' '}
        <a href={'mailto:' + Conference.SponsorshipEmail}>{Conference.SponsorshipEmail}</a>
      </li>
      {Conference.Socials.Twitter && (
        <li>
          <strong>Twitter:</strong>{' '}
          <a href={'https://twitter.com/' + Conference.Socials.Twitter} target="_blank">
            @{Conference.Socials.Twitter}
          </a>
        </li>
      )}
    </ul>
    <h2>DDD WA Inc.</h2>
    <ul>
      <li>
        <strong>ABN:</strong> 61 201 381 758
      </li>
      <li>
        <strong>Postal Address:</strong> PO Box 7550, Perth WA 6000
      </li>
    </ul>
  </Page>
))
