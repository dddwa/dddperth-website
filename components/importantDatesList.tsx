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
    {conference.ImportantDates.filter(
      importantDate =>
        !isPast(importantDate.Date, currentDate) ||
        (importantDate.Type === 'conference' && !isPast(conference.EndDate, currentDate)),
    ).map(importantDate => {
      return (
        <div key={importantDate.Description} className={'imp-date content' + ' ' + importantDate.Type}>
          <h3>
            {importantDate.Date.format('dddd')}{' '}
            <strong>
              {importantDate.Date.format('MMM')} {importantDate.Date.format('D')}
            </strong>
          </h3>
          <p>
            <strong>
              {importantDate.Date.format('hh:mma')}
              <small>
                {importantDate.Date.zone() !== currentDate.Value.zone() && ' (' + importantDate.Date.format('ZZ') + ')'}
              </small>
            </strong>
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
    {conference.ImportantDates.filter(
      importantDate =>
        isPast(importantDate.Date, currentDate) &&
        (importantDate.Type !== 'conference' || isPast(conference.EndDate, currentDate)),
    ).map(importantDate => {
      return (
        <div key={importantDate.Description} className={'imp-date content done' + ' ' + importantDate.Type}>
          <span className="ico-done" />
          <h3>
            {importantDate.Date.format('dddd')}{' '}
            <strong>
              {importantDate.Date.format('MMM')} {importantDate.Date.format('D')}
            </strong>
          </h3>
          <p>
            <strong>
              {importantDate.Date.format('hh:mma')}
              <small>
                {importantDate.Date.zone() !== currentDate.Value.zone() && ' (' + importantDate.Date.format('ZZ') + ')'}
              </small>
            </strong>
            {importantDate.Description}
          </p>
        </div>
      )
    })}
  </Fragment>
)
