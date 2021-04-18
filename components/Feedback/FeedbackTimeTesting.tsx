import React from 'react'
import { Alert } from 'components/global/Alert/Alert'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import { SessionGroup } from 'components/utils/useSessionGroups'
import { format } from 'date-fns'
interface FeedbackTimeTestingProps {
  sessionGroups: SessionGroup[]
}

export const FeedbackTimeTesting: React.FC<FeedbackTimeTestingProps> = ({ sessionGroups }) => (
  <Alert kind="warning">
    <p>Testing component. Times are start/end of session groups</p>
    <ul style={{ listStyle: 'none' }}>
      {sessionGroups.map((sessionGroup) => (
        <li key={sessionGroup.timeStart.valueOf()}>
          <button type="button" onClick={() => dateTimeProvider.setDateTo(sessionGroup.timeStart)}>
            Start: {format(sessionGroup.timeStart, 'h:mma')}
          </button>
          <button type="button" onClick={() => dateTimeProvider.setDateTo(sessionGroup.timeEnd)}>
            End: {format(sessionGroup.timeEnd, 'h:mma')}
          </button>
        </li>
      ))}
    </ul>
  </Alert>
)
