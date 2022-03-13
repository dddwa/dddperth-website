import React, { Fragment } from 'react'
import { format, formatISO } from 'date-fns'
import { StyledAgendaTime } from './Agendatime.styled'

interface AgendaTimeProps {
  time: Date
  endTime?: Date
  dateFormat?: string
}

export const AgendaTime = ({ time, endTime, dateFormat = 'HH:mm' }: AgendaTimeProps) => (
  <StyledAgendaTime>
    <time dateTime={formatISO(time)}>{format(time, dateFormat)}</time>
    {endTime && (
      <Fragment>
        {' - '}
        <time dateTime={formatISO(endTime)}>{format(endTime, dateFormat)}</time>
      </Fragment>
    )}
  </StyledAgendaTime>
)
