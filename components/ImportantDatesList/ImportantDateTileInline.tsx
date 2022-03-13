import React from 'react'
import { ImportantDate, Types } from 'config/types'
import {
  StyledAbbr,
  StyledDoneIconInline,
  StyledImportantDateContent,
  StyledImportantDateInline,
  StyledInlineDate,
  StyledInlineTimeDescription,
} from './ImportantDate.styled'
import { format } from 'date-fns'

interface ImportantDateTileInlineProps {
  importantDate: ImportantDate
  isFinished?: boolean
}

export const ImportantDateTileInline = ({ importantDate, isFinished }: ImportantDateTileInlineProps) => (
  <StyledImportantDateInline isFinished={isFinished} dateType={importantDate.Type}>
    <StyledImportantDateContent isFinished={isFinished}>
      <time dateTime={importantDate.Date.toISOString()}>
        <StyledInlineDate>{format(importantDate.Date, 'iiii MMM d')}</StyledInlineDate>
        <StyledInlineTimeDescription>
          {format(importantDate.Date, 'hh:mma')} - {importantDate.Description}
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
