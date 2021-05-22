import Error from 'next/error'
import React from 'react'
import { FaqList } from 'components/FAQList/FaqList'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import getFaqs from 'config/faqs'
import { TicketPurchasingOptions, TicketsProvider } from 'config/types'
import { Tito } from 'components/Tickets/Tito'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { Eventbrite } from 'components/Tickets/Eventbrite'
import { StyledPara } from 'components/global/text'
import { getFlagClient } from 'services/featureFlag'

export const TicketPage: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference
  const dates = pageMetadata.dates
  const faqs = getFaqs(dates)

  if (
    !dates.RegistrationOpen &&
    pageMetadata.conference.TicketPurchasingOptions !== TicketPurchasingOptions.WaitListOpen
  ) {
    return <Error statusCode={404} />
  }

  return (
    <Main metadata={pageMetadata} title="Tickets" description={`Purchase tickets for ${conference.Name}`}>
      <h1>Tickets</h1>

      {pageMetadata.conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen && (
        <StyledPara>
          Tickets have sold out, but we are asking people to add themselves to the waitlist since it's likely we will
          release more tickets. Tickets will be released to the waitlist on a first-come, first-served basis so get your
          name in quick if you want to attend.
        </StyledPara>
      )}

      <FaqList faqs={faqs.filter((f) => f.Category === 'tickets')} />

      {conference.TicketsProviderId === TicketsProvider.Eventbrite && (
        <Eventbrite eventId={conference.TicketsProviderEventId} />
      )}
      {conference.TicketsProviderId === TicketsProvider.Tito && (
        <Tito accountId={conference.TicketsProviderAccountId} eventId={conference.TicketsProviderEventId} />
      )}
    </Main>
  )
}

TicketPage.getInitialProps = async ({ res }) => {
  const client = getFlagClient()
  const flagValue = await client.getValueAsync('ticketSalesOpen', false)

  console.log({ flagValue })

  if (
    !getConferenceDates(Conference, dateTimeProvider.now()).RegistrationOpen &&
    Conference.TicketPurchasingOptions !== TicketPurchasingOptions.WaitListOpen &&
    res
  ) {
    res.statusCode = 404
  }

  return {} as WithPageMetadataProps
}

TicketPage.displayName = 'TicketPage'

export default withPageMetadata(TicketPage)
