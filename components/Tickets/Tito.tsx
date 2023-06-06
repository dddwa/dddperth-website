import React, { Fragment } from 'react'
import Script from 'next/script'
import { useConfig } from 'Context/Config'

interface TitoProps {
  accountId: string
  eventId: string
}

export const Tito = ({ accountId, eventId }: TitoProps) => {
  const { appConfig } = useConfig()

  return (
    <Fragment>
      <Script
        id="tito-script"
        src={`https://js.tito.io/v2${appConfig.testingMode() ? '/with/development_mode' : ''}`}
        async
      />
      {React.createElement('tito-widget', {
        event: `${accountId}/${eventId}`,
      })}
    </Fragment>
  )
}
