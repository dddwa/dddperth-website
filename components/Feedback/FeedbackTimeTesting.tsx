import React from 'react'
import { Alert } from '../global/Alert/Alert'
import dateTimeProvider from '../utils/dateTimeProvider'
import { SessionGroup } from '../utils/useSessionGroups'
interface FeedbackTimeTestingProps {
  sessionGroups: SessionGroup[]
}

export const FeedbackTimeTesting: React.FC<FeedbackTimeTestingProps> = ({ sessionGroups }) => (
  <Alert kind="warning">
    <p>Testing component. Times are start/end of session groups</p>
    <ul>
      {sessionGroups.map(sessionGroup => (
        <li key={sessionGroup.timeStart.valueOf()}>
          <button type="button" onClick={() => dateTimeProvider.setDateTo(sessionGroup.timeStart)}>
            Start: {sessionGroup.timeStart.format('h:mma')}
          </button>
          <button type="button" onClick={() => dateTimeProvider.setDateTo(sessionGroup.timeEnd)}>
            End: {sessionGroup.timeEnd.format('h:mma')}
          </button>
        </li>
      ))}
    </ul>
  </Alert>
)
