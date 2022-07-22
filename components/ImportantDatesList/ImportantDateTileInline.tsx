import React from 'react'
import { ImportantDate, Types } from 'config/types'
import {
  StyledAbbr,
  StyledImportantDateContent,
  StyledImportantDateInline,
  StyledInlineDate,
  StyledInlineTimeDescription,
} from './ImportantDate.styled'
import { formatInTimeZone } from 'date-fns-tz'

interface ImportantDateTileInlineProps {
  importantDate: ImportantDate
  isFinished?: boolean
  tz?: string
}

export const ImportantDateTileInline = ({ importantDate, isFinished, tz }: ImportantDateTileInlineProps) => (
  <StyledImportantDateInline isFinished={isFinished} dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledInlineDate>{formatInTimeZone(importantDate.Date, tz, 'iiii MMM d')}</StyledInlineDate>
        <StyledInlineTimeDescription>
          {formatInTimeZone(importantDate.Date, tz, 'hh:mma')} - {importantDate.Description}
        </StyledInlineTimeDescription>
      </time>
    </StyledImportantDateContent>
  </StyledImportantDateInline>
)

interface ImportantDateTileInlineTBAProps {
  description: string
  type?: Types
}

export const ImportantDateTileInlineTBA = ({ description, type }: ImportantDateTileInlineTBAProps) => (
  <StyledImportantDateInline dateType={type}>
    <StyledImportantDateContent>
      <StyledInlineDate>
        <StyledAbbr title="To Be Announced">TBA</StyledAbbr>
      </StyledInlineDate>
      <StyledInlineTimeDescription>{description}</StyledInlineTimeDescription>
    </StyledImportantDateContent>
  </StyledImportantDateInline>
)
