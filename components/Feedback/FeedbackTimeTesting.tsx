import { Moment } from 'moment'
import React from 'react'
import dateTimeProvider from '../utils/dateTimeProvider'
import { SessionGroup } from '../utils/useSessionGroups'

interface FeedbackTimeTestingProps {
  sessionGroups: SessionGroup[]
}

export const FeedbackTimeTesting: React.FC<FeedbackTimeTestingProps> = ({ sessionGroups }) => {
  function setDateTo(date: Moment) {
    dateTimeProvider.now = () => {
      return {
        Value: date.clone().add(1, 'minute'),
      }
    }
  }

  return (
    <ul>
      {sessionGroups.map(sessionGroup => (
        <li key={sessionGroup.timeStart.valueOf()}>
          <button type="button" onClick={() => setDateTo(sessionGroup.timeStart)}>
            Start: {sessionGroup.timeStart.format('h:mma')}
          </button>
          <button type="button" onClick={() => setDateTo(sessionGroup.timeEnd)}>
            End: {sessionGroup.timeEnd.format('h:mma')}
          </button>
        </li>
      ))}
    </ul>
  )
}
