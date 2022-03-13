import React, { Fragment } from 'react'
import { TitoStyledWrapper } from './Tito.styled'
import Script from 'next/script'

interface TitoProps {
  accountId: string
  eventId: string
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace TitoWidget {
  let build_widgets: boolean
  function buildWidgets(): void
}

export const Tito = ({ accountId, eventId }: TitoProps) => {
  function titoOnLoadHandler() {
    if (typeof TitoWidget !== 'undefined') {
      TitoWidget.buildWidgets()
    }
  }

  return (
    <Fragment>
      <Script id="tito-script" src="https://js.tito.io/v1" strategy="afterInteractive" onLoad={titoOnLoadHandler} />
      <TitoStyledWrapper>
        {React.createElement('tito-widget', {
          event: `${accountId}/${eventId}`,
        })}
      </TitoStyledWrapper>
    </Fragment>
  )
}
