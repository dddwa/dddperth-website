import React from 'react'
import { PageWithSidebar } from 'layouts/withSidebar'
import AllAgendas from 'components/allAgendas'
import { Text } from 'components/global/text'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'

const Agenda2020: NextPage = () => {
  const { conference, dates } = useConfig()

  return (
    <PageWithSidebar title="2020 Conference" description="DDDPerth Conference 2020">
      <h1>DDD Perth 2020</h1>
      <Text>
        DDD Perth 2020 did not happen. The safety of all participants, from sponsors to speakers to attendees to
        volunteers, is our priority and we felt we could better serve our community by postponing the event.
      </Text>

      <AllAgendas conference={conference} conferenceInstance="2020" dates={dates} />
    </PageWithSidebar>
  )
}

export default Agenda2020
