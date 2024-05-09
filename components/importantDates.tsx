import React from 'react'
import { Action, Conference } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { ImportantDatesList } from 'components/ImportantDatesList/importantDatesList'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { calcRem } from 'components/utils/styles/calcRem'
import { theme } from 'components/utils/styles/theme'
import { workshops } from 'config/workshops'
import { SafeLink } from './global/safeLink'

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
      <h2>Workshops!</h2>
      <p>
        DDD runs a bunch of workshops to help you come up with some amazing talks to submit to our CFP and a great Bio
        to go with it.
      </p>
      {workshops.bookingLink && (
        <p>
          For more info or to book in click{' '}
          <SafeLink target="_blank" href={workshops.bookingLink}>
            here
          </SafeLink>
        </p>
      )}
      <ImportantDatesList conference={conference} currentDate={currentDate} importantDates={workshops.dates} />
    </div>

    <div style={{ marginTop: calcRem(theme.metrics.lg) }}>
      <h2>What now?</h2>
      {actions.map((a) => (
        <ActionButton action={a} key={a.Title} />
      ))}
    </div>
  </section>
)

export default ImportantDates
