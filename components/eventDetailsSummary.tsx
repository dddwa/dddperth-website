import React from 'react'
import { Action, Conference, Dates, TicketPurchasingOptions } from '../config/types'
import ActionButton from './actionButton'
import { StyledList } from './global/text'
import { useRouter } from 'next/router'

export interface EventDetailsSummaryProps {
  conference: Conference
  primaryAction: Action
  dates: Dates
}

export const EventDetailsSummary: React.FC<EventDetailsSummaryProps> = ({ conference, primaryAction, dates }) => {
  const { pathname } = useRouter()

  return (
    <div className="event-details">
      <h2>
        <span>{!dates.IsComplete ? 'Next event' : 'Previous event'}</span> <time>{dates.Display}</time>
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
      {pathname !== primaryAction.Url && <ActionButton action={primaryAction} />}
    </div>
  )
}

export default EventDetailsSummary
