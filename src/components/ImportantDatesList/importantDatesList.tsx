import React, { Fragment } from 'react'
import { Conference } from '../../config/types'
import { CurrentDate } from '../utils/dateTimeProvider'
import isPast from '../utils/isPast'
import { StyledImportantDateList } from './ImportantDate.styled'
import { ImportantDateTile, ImportantDateTileTBA } from './ImportantDateTile'
import { ImportantDateTileInline, ImportantDateTileInlineTBA } from './ImportantDateTileInline'

export type ImportantDateListLayouts = 'inline' | 'calendar'

export interface ImportantDatesListProps {
  conference: Conference
  currentDate: CurrentDate
  layout?: ImportantDateListLayouts
}

export const ImportantDatesList: React.FC<ImportantDatesListProps> = ({
  conference,
  currentDate,
  layout = 'calendar',
}) => {
  const hasConferenceFinished = isPast(conference.EndDate, currentDate)

  return (
    <Fragment>
      {conference.ImportantDates[0].Date.utcOffset() !== currentDate.Value.utcOffset() && (
        <p>
          <em>Note: All dates in {conference.ImportantDates[0].Date.format('ZZ')}.</em>
        </p>
      )}

      <StyledImportantDateList layout={layout}>
        {/* Upcoming dates */}
        {conference.ImportantDates.filter(
          importantDate =>
            !isPast(importantDate.Date, currentDate) || (importantDate.Type === 'conference' && !hasConferenceFinished),
        ).map(importantDate => {
          const Component = layout === 'calendar' ? ImportantDateTile : ImportantDateTileInline
          return <Component key={importantDate.Description} importantDate={importantDate} />
        })}
        {conference.HideDate &&
          (layout === 'calendar' ? (
            <ImportantDateTileTBA description="Conference day" type="conference" />
          ) : (
            <ImportantDateTileInlineTBA description="Conference day" type="conference" />
          ))}
        {/* Past dates */}
        {conference.ImportantDates.filter(
          importantDate =>
            isPast(importantDate.Date, currentDate) && (importantDate.Type !== 'conference' || hasConferenceFinished),
        ).map(importantDate => {
          const Component = layout === 'calendar' ? ImportantDateTile : ImportantDateTileInline
          return <Component key={importantDate.Description} importantDate={importantDate} isFinished />
        })}
      </StyledImportantDateList>
    </Fragment>
  )
}
