import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import { PageWithSidebar } from 'layouts/withSidebar'
import AllAgendas from 'components/allAgendas'
import { StyledPara } from 'components/global/text'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <PageWithSidebar metadata={props.pageMetadata} title="2020 Conference" description="DDDPerth Conference 2020">
    <h1>DDD Perth 2020</h1>
    <StyledPara>
      DDD Perth 2020 did not happen. The safety of all participants, from sponsors to speakers to attendees to
      volunteers, is our priority and we felt we could better serve our community by postponing the event.
    </StyledPara>

    <AllAgendas
      conference={props.pageMetadata.conference}
      conferenceInstance={'2020'}
      dates={props.pageMetadata.dates}
    />
  </PageWithSidebar>
))
