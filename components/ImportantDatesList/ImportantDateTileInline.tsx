import React from 'react'
import { ImportantDate, Types } from '../../config/types'
import {
  StyledAbbr,
  StyledDoneIconInline,
  StyledImportantDateContent,
  StyledImportantDateInline,
  StyledInlineDate,
  StyledInlineTimeDescription,
} from './ImportantDate.styled'

interface ImportantDateTileInlineProps {
  importantDate: ImportantDate
  isFinished?: boolean
}

export const ImportantDateTileInline: React.FC<ImportantDateTileInlineProps> = ({ importantDate, isFinished }) => (
  <StyledImportantDateInline dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledInlineDate>{importantDate.Date.format('dddd MMM D')}</StyledInlineDate>
        <StyledInlineTimeDescription>
          {importantDate.Date.format('hh:mma')} - {importantDate.Description}
        </StyledInlineTimeDescription>
      </time>
    </StyledImportantDateContent>
    {isFinished && <StyledDoneIconInline />}
  </StyledImportantDateInline>
)

interface ImportantDateTileInlineTBAProps {
  description: string
  type?: Types
}

export const ImportantDateTileInlineTBA: React.FC<ImportantDateTileInlineTBAProps> = ({ description, type }) => (
  <StyledImportantDateInline dateType={type}>
    <StyledImportantDateContent>
      <StyledInlineDate>
        <StyledAbbr title="To Be Announced">TBA</StyledAbbr>
      </StyledInlineDate>
      <StyledInlineTimeDescription>{description}</StyledInlineTimeDescription>
    </StyledImportantDateContent>
  </StyledImportantDateInline>
)
