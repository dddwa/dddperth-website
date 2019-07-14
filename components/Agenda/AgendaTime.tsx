import { Moment } from 'moment'
import React, { Fragment } from 'react'
import { StyledAgendaTime } from './Agendatime.styled'

interface AgendaTimeProps {
  time: Moment
  endTime?: Moment
  format?: string
}

export const AgendaTime: React.FC<AgendaTimeProps> = ({ time, endTime, format = 'HH:mm' }) => (
  <StyledAgendaTime>
    <time dateTime={time.toISOString()}>{time.format(format)}</time>
    {endTime && (
      <Fragment>
        {' - '}
        <time dateTime={endTime.toISOString()}>{endTime.format(format)}</time>
      </Fragment>
    )}
  </StyledAgendaTime>
)
