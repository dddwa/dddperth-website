import React, { Fragment } from 'react'
import { TitoStyledWrapper } from './Tito.styled'
import { useScript } from 'use-script'

interface TitoProps {
  accountId: string
  eventId: string
}

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace TitoWidget {
  // eslint-disable-next-line @typescript-eslint/camelcase
  let build_widgets: boolean
  function buildWidgets(): void
}

export const Tito: React.FC<TitoProps> = ({ accountId, eventId }) => {
  const { error, loading } = useScript({ src: 'https://js.tito.io/v1', async: true })

  React.useEffect(() => {
    if (!loading && typeof TitoWidget !== 'undefined') {
      TitoWidget.buildWidgets()
    }
  }, [loading])

  if (loading || error) {
    return null
  }

  return (
    <Fragment>
      <TitoStyledWrapper>
        {React.createElement('tito-widget', {
          event: `${accountId}/${eventId}`,
        })}
      </TitoStyledWrapper>
    </Fragment>
  )
}
