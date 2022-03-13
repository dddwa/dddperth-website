import React from 'react'
import { Action, TicketPurchasingOptions } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { StyledList } from 'components/global/text'
import { useRouter } from 'next/router'
import { useConfig } from 'Context/Config'

export interface EventDetailsSummaryProps {
  primaryAction: Action
  className?: string
}

export const EventDetailsSummary = ({ primaryAction, className }: EventDetailsSummaryProps) => {
  const { conference, dates } = useConfig()
  const { pathname } = useRouter()

  return (
    <div className={className}>
      <h2>
        <small style={{ display: 'block' }}>{!dates.IsComplete ? 'Next event' : 'Previous event'}</small>{' '}
        <time>{dates.Display}</time>
      </h2>
      <StyledList>
        {conference.TicketPurchasingOptions === TicketPurchasingOptions.SoldOut && (
          <li>
            <strong>SOLD OUT</strong>
          </li>
        )}
        {conference.TicketPurchasingOptions === TicketPurchasingOptions.WaitListOpen && (
          <li>
            <strong>WAITLIST OPEN</strong>
          </li>
        )}
        {conference.SellingPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
        <li>Only {conference.TicketPrice}</li>
      </StyledList>
      {pathname !== primaryAction.Url && (
        <div style={{ textAlign: 'center' }}>
          <ActionButton action={primaryAction} />
        </div>
      )}
    </div>
  )
}
