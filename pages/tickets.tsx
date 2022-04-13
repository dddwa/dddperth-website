import Error from 'next/error'
import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import { FaqList } from 'components/FAQList/FaqList'
import Conference from 'config/conference'
import getFaqs from 'config/faqs'
import { TicketPurchasingOptions, TicketsProvider } from 'config/types'
import { Tito } from 'components/Tickets/Tito'
import { Main } from 'layouts/main'
import { Eventbrite } from 'components/Tickets/Eventbrite'
import { Text } from 'components/global/text'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'

const TicketPage: NextPage = () => {
  const { conference, dates } = useConfig()
  const faqs = getFaqs(dates)

  if (!dates.RegistrationOpen && conference.TicketPurchasingOptions !== TicketPurchasingOptions.WaitListOpen) {
    return <Error statusCode={404} />
  }

  return (
    <Main title="Tickets" description={`Purchase tickets for ${conference.Name}`}>
      <h1>Tickets</h1>

      {conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen && (
        <Text>
          Tickets have sold out, but we are asking people to add themselves to the waitlist since it's likely we will
          release more tickets. Tickets will be released to the waitlist on a first-come, first-served basis so get your
          name in quick if you want to attend.
        </Text>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)
  if (!dates.RegistrationOpen && Conference.TicketPurchasingOptions !== TicketPurchasingOptions.WaitListOpen) {
    return { notFound: true }
  }

  return { props: {} }
}

export default TicketPage
