import React from 'react'
import { ImportantDate, Types } from 'config/types'
import {
  StyledAbbr,
  StyledImportantDate,
  StyledImportantDateContent,
  StyledImportantDateMonthDay,
  StyledImportantDateTime,
  StyledImportantDateTitle,
  StyledImportantDay,
} from './ImportantDate.styled'
import { formatInTimeZone } from 'date-fns-tz'

interface ImportantDateProps {
  importantDate: ImportantDate
  isFinished?: boolean
  tz?: string
}

export const ImportantDateTile = ({ importantDate, isFinished, tz }: ImportantDateProps) => (
  <StyledImportantDate dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledImportantDay>{formatInTimeZone(importantDate.Date, tz, 'EEEE')}</StyledImportantDay>
        <StyledImportantDateMonthDay>{formatInTimeZone(importantDate.Date, tz, 'MMM d ')}</StyledImportantDateMonthDay>
        <StyledImportantDateTime>{formatInTimeZone(importantDate.Date, tz, 'hh:mma')}</StyledImportantDateTime>
      </time>
      <StyledImportantDateTitle>{importantDate.Description}</StyledImportantDateTitle>
    </StyledImportantDateContent>
  </StyledImportantDate>
)

interface ImportantDateTileTBAProps {
  description: string
  type?: Types
}

export const ImportantDateTileTBA = ({ description, type }: ImportantDateTileTBAProps) => (
  <StyledImportantDate dateType={type}>
    <StyledImportantDateContent>
      <StyledImportantDay>
        <StyledAbbr title="To Be Announced">TBA</StyledAbbr>
      </StyledImportantDay>
      <StyledImportantDateMonthDay aria-hidden>&nbsp;</StyledImportantDateMonthDay>
      <StyledImportantDateTime aria-hidden>&nbsp;</StyledImportantDateTime>
      <StyledImportantDateTitle>{description}</StyledImportantDateTitle>
    </StyledImportantDateContent>
  </StyledImportantDate>
)
