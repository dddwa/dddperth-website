import React, { Fragment } from 'react'
import { Conference } from 'config/types'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { StyledImportantDateList } from './ImportantDate.styled'
import { ImportantDateTile, ImportantDateTileTBA } from './ImportantDateTile'
import { ImportantDateTileInline, ImportantDateTileInlineTBA } from './ImportantDateTileInline'
import { Text } from 'components/global/text'
import { isAfter, isBefore } from 'date-fns'
import { getTimezoneOffset } from 'date-fns-tz'

export type ImportantDateListLayouts = 'inline' | 'calendar'

export interface ImportantDatesListProps {
  conference: Conference
  currentDate: CurrentDate
  layout?: ImportantDateListLayouts
}

export const ImportantDatesList = ({ conference, currentDate, layout = 'calendar' }: ImportantDatesListProps) => {
  const hasConferenceFinished = isAfter(currentDate.Value, conference.EndDate)

  return (
    <Fragment>
      {-(getTimezoneOffset(conference.TimeZone) / 60000) !== currentDate.Value.getTimezoneOffset() && (
        <Text>
          <em>Note: All dates in {conference.TimeZone} time.</em>
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
          return <Component key={importantDate.Description} importantDate={importantDate} tz={conference.TimeZone} />
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
          return (
            <Component
              key={importantDate.Description}
              importantDate={importantDate}
              isFinished
              tz={conference.TimeZone}
            />
          )
        })}
      </StyledImportantDateList>
    </Fragment>
  )
}
