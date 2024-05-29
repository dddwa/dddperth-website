import React from 'react'
import { Action, Conference } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { ImportantDatesList } from 'components/ImportantDatesList/importantDatesList'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { calcRem } from 'components/utils/styles/calcRem'
import { theme } from 'components/utils/styles/theme'

export interface ImportantDatesProps {
  conference: Conference
  actions: Action[]
  currentDate: CurrentDate
}

const ImportantDates = ({ conference, actions, currentDate }: ImportantDatesProps): JSX.Element => (
  <section>
    <h2>Important Dates</h2>

    <ImportantDatesList conference={conference} currentDate={currentDate} />

    <div style={{ marginTop: calcRem(theme.metrics.lg) }}>
      <h2>What now?</h2>
      {actions.map((a) => (
        <ActionButton action={a} key={a.Title} />
      ))}
    </div>
  </section>
)

export default ImportantDates
