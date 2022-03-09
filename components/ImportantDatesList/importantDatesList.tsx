import React, { Fragment } from 'react'
import { Conference } from 'config/types'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { StyledImportantDateList } from './ImportantDate.styled'
import { ImportantDateTile, ImportantDateTileTBA } from './ImportantDateTile'
import { ImportantDateTileInline, ImportantDateTileInlineTBA } from './ImportantDateTileInline'
import { Text } from 'components/global/text'
import { isAfter, format, isBefore } from 'date-fns'

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
  const hasConferenceFinished = isAfter(currentDate.Value, conference.EndDate)

  return (
    <Fragment>
      {conference.ImportantDates[0].Date.getTimezoneOffset() !== currentDate.Value.getTimezoneOffset() && (
        <Text>
          <em>Note: All dates in {format(conference.ImportantDates[0].Date, 'XX')}.</em>
        </Text>
      )}

      <StyledImportantDateList layout={layout}>
        {/* Upcoming dates */}
        {conference.ImportantDates.filter(
          (importantDate) =>
            isAfter(importantDate.Date, currentDate.Value) ||
            (importantDate.Type === 'conference' && !hasConferenceFinished),
        ).map((importantDate) => {
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
          (importantDate) =>
            isBefore(importantDate.Date, currentDate.Value) &&
            (importantDate.Type !== 'conference' || hasConferenceFinished),
        ).map((importantDate) => {
          const Component = layout === 'calendar' ? ImportantDateTile : ImportantDateTileInline
          return <Component key={importantDate.Description} importantDate={importantDate} isFinished />
        })}
      </StyledImportantDateList>
    </Fragment>
  )
}
