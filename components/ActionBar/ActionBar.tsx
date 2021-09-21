import React from 'react'
import { ButtonAnchor } from 'components/global/Button/Button'
import { StyledActionBarContainer } from './ActionBar.styled'
import getConferenceActions from 'config/actions'
import { useConfig } from 'Context/Config'

export const ActionBar = () => {
  const { conference, dates } = useConfig()
  const [primaryAction, secondaryAction] = getConferenceActions(conference, dates)

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
