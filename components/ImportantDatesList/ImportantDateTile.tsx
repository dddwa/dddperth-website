import React from 'react'
import { ImportantDate, Types } from 'config/types'
import {
  StyledAbbr,
  StyledDoneIcon,
  StyledImportantDate,
  StyledImportantDateContent,
  StyledImportantDateMonthDay,
  StyledImportantDateTime,
  StyledImportantDateTitle,
  StyledImportantDay,
} from './ImportantDate.styled'
import format from 'date-fns/format'

interface ImportantDateProps {
  importantDate: ImportantDate
  isFinished?: boolean
}

export const ImportantDateTile = ({ importantDate, isFinished }: ImportantDateProps) => (
  <StyledImportantDate dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledImportantDay>{format(importantDate.Date, 'EEEE')}</StyledImportantDay>
        <StyledImportantDateMonthDay>{format(importantDate.Date, 'MMM d ')}</StyledImportantDateMonthDay>
        <StyledImportantDateTime>{format(importantDate.Date, 'hh:mma')}</StyledImportantDateTime>
      </time>
      <StyledImportantDateTitle>{importantDate.Description}</StyledImportantDateTitle>
    </StyledImportantDateContent>
    {isFinished && <StyledDoneIcon />}
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
