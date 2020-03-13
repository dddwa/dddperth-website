import React from 'react'
import EventDetailsSummary from '../components/eventDetailsSummary'
import { ImportantDatesList } from '../components/ImportantDatesList/importantDatesList'
import getConferenceActions from '../config/actions'
import { TemplateProps, Template } from './template'
import { StyledSidebarContainer } from './Layouts.styled'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface PageWithSidebarProps extends TemplateProps {}

export const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ children, metadata, title, description, image }) => {
  return (
    <Template title={title} description={description} image={image} metadata={metadata}>
      <StyledSidebarContainer>
        <main id="content">{children}</main>
        <aside>
          <EventDetailsSummary
            conference={metadata.conference}
            dates={metadata.dates}
            primaryAction={
              getConferenceActions(metadata.conference, metadata.dates).filter(a => a.Url !== metadata.pagePath)[0]
            }
          />
          <h2>Important Dates</h2>
          <ImportantDatesList layout="inline" conference={metadata.conference} currentDate={metadata.currentDate} />
        </aside>
      </StyledSidebarContainer>
    </Template>
  )
}
