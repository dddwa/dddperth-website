import React from 'react'
import { ImportantDatesList } from 'components/ImportantDatesList/importantDatesList'
import getConferenceActions from 'config/actions'
import { TemplateProps, Template } from './template'
import { StyledSidebarContainer, StyledEventDetailsSummary } from './Layouts.styled'
import { useConfig } from 'Context/Config'
import { useRouter } from 'next/router'

export const PageWithSidebar = ({ children, title, description, image }: TemplateProps): JSX.Element => {
  const { conference, dates, currentDate } = useConfig()
  const { pathname } = useRouter()

  return (
    <Template title={title} description={description} image={image}>
      <StyledSidebarContainer>
        <main id="content">{children}</main>
        <aside>
          <StyledEventDetailsSummary
            primaryAction={getConferenceActions(conference, dates).filter((a) => a.Url !== pathname)[0]}
          />
          <h2>Important Dates</h2>
          <ImportantDatesList layout="inline" conference={conference} currentDate={currentDate} />
        </aside>
      </StyledSidebarContainer>
    </Template>
  )
}
