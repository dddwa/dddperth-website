import React from 'react'
import { ImportantDate, Types } from '../../config/types'
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

interface ImportantDateProps {
  importantDate: ImportantDate
  isFinished?: boolean
}

export const ImportantDateTile: React.FC<ImportantDateProps> = ({ importantDate, isFinished }) => (
  <StyledImportantDate dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledImportantDay>{importantDate.Date.format('dddd ')}</StyledImportantDay>
        <StyledImportantDateMonthDay>{importantDate.Date.format('MMM D ')}</StyledImportantDateMonthDay>
        <StyledImportantDateTime>{importantDate.Date.format('hh:mma')}</StyledImportantDateTime>
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

export const ImportantDateTileTBA: React.FC<ImportantDateTileTBAProps> = ({ description, type }) => (
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
