import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Page from '../layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page
    pageMetadata={props.pageMetadata}
    title="Contact Us"
    description={'How to contact ' + props.pageMetadata.conference.Name + '.'}
  >
    <h1>Contact Us</h1>
    <ul>
      <li>
        <strong>General enquiries:</strong>{' '}
        <a href={'mailto:' + props.pageMetadata.conference.ContactEmail}>
          {props.pageMetadata.conference.ContactEmail}
        </a>
      </li>
      <li>
        <strong>Sponsorship Enquiries:</strong>{' '}
        <a href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}>
          {props.pageMetadata.conference.SponsorshipEmail}
        </a>
      </li>
      {props.pageMetadata.conference.Socials.Twitter && (
        <li>
          <strong>Twitter:</strong>{' '}
          <a href={'https://twitter.com/' + props.pageMetadata.conference.Socials.Twitter} target="_blank">
            @{props.pageMetadata.conference.Socials.Twitter}
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
