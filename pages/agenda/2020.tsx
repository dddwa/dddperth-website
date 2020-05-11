import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../../components/global/withPageMetadata'
import Page from '../../layouts/withSidebar'
import AllAgendas from '../../components/allAgendas'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <Page pageMetadata={props.pageMetadata} title="2020 Conference" description="DDDPerth Conference 2020">
    <h1>DDD Perth 2020</h1>
    <p>The DDD Perth Committee has regretfully postponed the 2020 conference to 2021.</p>
    <p>
      The safety of all participants, from sponsors to speakers to attendees to volunteers, is our priority, and we will
      continue to find ways to connect and support the wider Perth community at this challenging time.
    </p>
    <p>
      If you have any concerns that you feel DDD Perth can help with, we encourage you to contact us via the website.
    </p>
    <p>
      The Australian Department of Health recommends that everyone should practise good hygiene to protect against
      infections.
    </p>

    <AllAgendas
      conference={props.pageMetadata.conference}
      conferenceInstance={'2020'}
      dates={props.pageMetadata.dates}
    />
  </Page>
))
