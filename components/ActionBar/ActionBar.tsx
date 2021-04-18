import React from 'react'
import { ButtonAnchor } from 'components/global/Button/Button'
import { PageMetadata } from 'components/global/withPageMetadata'
import { StyledActionBarContainer } from './ActionBar.styled'
import getConferenceActions from 'config/actions'

interface ActionBarProps {
  metadata: PageMetadata
}

export const ActionBar: React.FC<ActionBarProps> = ({ metadata }) => {
  const [primaryAction, secondaryAction] = getConferenceActions(metadata.conference, metadata.dates)

  return (
    <StyledActionBarContainer>
      <p>DDD Perth is an inclusive conference for the Perth tech community.</p>
      <ul>
        {secondaryAction && (
          <li>
            <ButtonAnchor href={secondaryAction.Url} kind="secondary" size="lg">
              {secondaryAction.Title}
            </ButtonAnchor>
          </li>
        )}
        {primaryAction && (
          <li>
            <ButtonAnchor href={primaryAction.Url} kind="primary" size="lg">
              {primaryAction.Title}
            </ButtonAnchor>
          </li>
        )}
      </ul>
    </StyledActionBarContainer>
  )
}
