import React from 'react'
import { TitoStyledWrapper } from './Tito.styled'

interface TitoProps {
  accountId: string
  eventId: string
}

export const Tito: React.FC<TitoProps> = ({ accountId, eventId }) => (
  <TitoStyledWrapper>
    {React.createElement('tito-widget', {
      event: `${accountId}/${eventId}`,
    })}
  </TitoStyledWrapper>
)
