import React from 'react'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import { PageWithSidebar } from 'layouts/withSidebar'
import AllAgendas from 'components/allAgendas'
import { StyledPara } from 'components/global/text'

export default withPageMetadata((props: WithPageMetadataProps) => (
  <PageWithSidebar metadata={props.pageMetadata} title="2020 Conference" description="DDDPerth Conference 2020">
    <h1>DDD Perth 2020</h1>
    <StyledPara>The DDD Perth Committee has regretfully postponed the 2020 conference to 2021.</StyledPara>
    <StyledPara>
      The safety of all participants, from sponsors to speakers to attendees to volunteers, is our priority, and we will
      continue to find ways to connect and support the wider Perth community at this challenging time.
    </StyledPara>
    <StyledPara>
      If you have any concerns that you feel DDD Perth can help with, we encourage you to contact us via the website.
    </StyledPara>
    <StyledPara>
      The Australian Department of Health recommends that everyone should practise good hygiene to protect against
      infections.
    </StyledPara>

    <AllAgendas
      conference={props.pageMetadata.conference}
      conferenceInstance={'2020'}
      dates={props.pageMetadata.dates}
    />
  </PageWithSidebar>
))
