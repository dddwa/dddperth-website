import React from 'react'
import { ButtonAnchor } from '../global/Button/Button'
import { PageMetadata } from '../global/withPageMetadata'
import getConferenceDates from '../../config/dates'
import dateTimeProvider from '../utils/dateTimeProvider'
import { StyledActionBarContainer } from './ActionBar.styled'

interface ActionBarProps {
  metadata: PageMetadata
}

export const ActionBar: React.FC<ActionBarProps> = ({ metadata }) => {
  const { AcceptingPresentations } = getConferenceDates(metadata.conference, dateTimeProvider.now())

  return (
    <StyledActionBarContainer>
      <div>
        <p>DDD Perth is an inclusive conference for the Perth tech community.</p>
        {AcceptingPresentations && (
          <ButtonAnchor href="/cfp" kind="secondary" size="lg">
            Submit talk
          </ButtonAnchor>
        )}
        <ButtonAnchor href="/tickets" kind="primary" size="lg">
          Buy Tickets
        </ButtonAnchor>
      </div>
    </StyledActionBarContainer>
  )
}
