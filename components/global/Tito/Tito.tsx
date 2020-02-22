import React from 'react'
import { TitoStyledWrapper } from './Tito.styled'
import Conference from '../../../config/conference'

export const Tito: React.FC = () => (
  <TitoStyledWrapper>
    {React.createElement('tito-widget', {
      event: `${Conference.TicketsProviderAccountId}/${Conference.TicketsProviderEventId}`,
    })}
  </TitoStyledWrapper>
)
