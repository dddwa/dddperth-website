import React from 'react'

interface EventbriteProps {
  eventId: string
}

export const Eventbrite = ({ eventId }: EventbriteProps) => (
  <iframe
    src={`//eventbrite.com.au/tickets-external?ref=etckt&eid=${eventId}`}
    style={{ border: 0 }}
    height="650"
    width="100%"
    scrolling="auto"
  />
)
