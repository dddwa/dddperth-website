import React from 'react'
import Link from 'next/link'
import { ButtonAnchor } from 'components/global/Button/Button'
import { StyledActionBarContainer } from './ActionBar.styled'
import getConferenceActions from 'config/actions'
import { useConfig } from 'Context/Config'

export const ActionBar = (): JSX.Element => {
  const { conference, dates } = useConfig()
  const [primaryAction, secondaryAction] = getConferenceActions(conference, dates)

  return (
    <StyledActionBarContainer>
      <p>DDD Perth is an inclusive conference for the Perth tech community.</p>
      <ul>
        {secondaryAction && (
          <li>
            <Link href={secondaryAction.Url} passHref>
              <ButtonAnchor kind="secondary" size="lg">
                {secondaryAction.Title}
              </ButtonAnchor>
            </Link>
          </li>
        )}
        {primaryAction && (
          <li>
            <Link href={primaryAction.Url} passHref>
              <ButtonAnchor kind="primary" size="lg">
                {primaryAction.Title}
              </ButtonAnchor>
            </Link>
          </li>
        )}
      </ul>
    </StyledActionBarContainer>
  )
}
