import React from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList } from 'components/global/text'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import { PageWithSidebar } from 'layouts/withSidebar'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <PageWithSidebar
    metadata={props.pageMetadata}
    title="Contact Us"
    description={`How to contact ${props.pageMetadata.conference.Name}.`}
  >
    <h1>Contact Us</h1>
    <StyledList>
      <li>
        <strong>General enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.ContactEmail}>
          {props.pageMetadata.conference.ContactEmail}
        </a>
      </li>
      <li>
        <strong>Sponsorship Enquiries:</strong>{' '}
        <a className="maillink" href={'mailto:' + props.pageMetadata.conference.SponsorshipEmail}>
          {props.pageMetadata.conference.SponsorshipEmail}
        </a>
      </li>
      {props.pageMetadata.conference.Socials.Twitter.Name && (
        <li>
          <strong>Twitter:</strong>{' '}
          <SafeLink href={'https://twitter.com/' + props.pageMetadata.conference.Socials.Twitter.Name} target="_blank">
            @{props.pageMetadata.conference.Socials.Twitter.Name}
          </SafeLink>
        </li>
      )}
      <li>
        <strong>Emergency contact:</strong>{' '}
        {props.pageMetadata.conference.EmergencyContactName +
          ' on ' +
          props.pageMetadata.conference.EmergencyContactPhoneNumber}
      </li>
    </StyledList>
    <h2>DDD WA Inc.</h2>
    <StyledList>
      <li>
        <strong>ABN:</strong> 61 201 381 758
      </li>
      <li>
        <strong>Postal Address:</strong> PO Box 7550, Perth WA 6000
      </li>
    </StyledList>
  </PageWithSidebar>
))
