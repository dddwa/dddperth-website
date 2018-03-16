import * as React from 'react'
import { Fragment } from 'react'
import { Conference } from '../config/types'
import { CurrentDate } from './utils/dateTimeProvider'
import isPast from './utils/isPast'

export interface ImportantDatesListProps {
  conference: Conference
  currentDate: CurrentDate
}

export default ({ conference, currentDate }: ImportantDatesListProps) => (
  <Fragment>
    {conference.ImportantDates.map(importantDate => {
      return (
        <div
          key={importantDate.Description}
          className={
            'imp-date content' + (isPast(importantDate.Date, currentDate) ? ' done' : '') + ' ' + importantDate.Type
          }
        >
          {isPast(importantDate.Date, currentDate) && <span className="ico-done" />}
          <h3>
            {importantDate.Date.format('dddd')}{' '}
            <strong>
              {importantDate.Date.format('MMM')} {importantDate.Date.format('D')}
            </strong>
          </h3>
          <p>
            <strong>{importantDate.Date.format('hh:mma')}</strong>
            {importantDate.Description}
          </p>
        </div>
      )
    })}
    {conference.HideDate && (
      <div className="imp-date content conference">
        <h3>
          TBA <strong>&nbsp;</strong>
        </h3>
        <p>
          <strong>&nbsp;</strong>
          Conference day
        </p>
      </div>
    )}
  </Fragment>
)
