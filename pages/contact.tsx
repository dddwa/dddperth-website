import React from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'

const ContactPage: NextPage = () => {
  const { conference } = useConfig()

  return (
    <PageWithSidebar title="Contact Us" description={`How to contact ${conference.Name}.`}>
      <h1>Contact Us</h1>
      <StyledList>
        <li>
          <strong>General enquiries:</strong>{' '}
          <a className="maillink" href={'mailto:' + conference.ContactEmail}>
            {conference.ContactEmail}
          </a>
        </li>
        <li>
          <strong>Sponsorship Enquiries:</strong>{' '}
          <a className="maillink" href={'mailto:' + conference.SponsorshipEmail}>
            {conference.SponsorshipEmail}
          </a>
        </li>
        {conference.Socials.Twitter.Name && (
          <li>
            <strong>Twitter:</strong>{' '}
            <SafeLink href={'https://twitter.com/' + conference.Socials.Twitter.Name} target="_blank">
              @{conference.Socials.Twitter.Name}
            </SafeLink>
          </li>
        )}
        <li>
          <strong>Emergency contact:</strong>{' '}
          {conference.EmergencyContactName + ' on ' + conference.EmergencyContactPhoneNumber}
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
  )
}

export default ContactPage
