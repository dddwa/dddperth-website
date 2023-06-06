import React, { Fragment } from 'react'
import Script from 'next/script'

interface TitoProps {
  accountId: string
  eventId: string
}

export const Tito = ({ accountId, eventId }: TitoProps) => {
  return (
    <Fragment>
      <Script
        id="tito-script"
        src={`https://js.tito.io/v2${process.env.NODE_ENV === 'production' ? '' : '/with/development_mode'}`}
        async
      />
      {React.createElement('tito-widget', {
        event: `${accountId}/${eventId}`,
      })}
    </Fragment>
  )
}
