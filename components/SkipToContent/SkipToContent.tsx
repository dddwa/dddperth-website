import React from 'react'
import { StyledSkipAnchor } from './SkipToContent.styled'

interface SkipToContentProps {
  anchor?: string
}

export const SkipToContent = ({ anchor = 'content' }: SkipToContentProps) => (
  <StyledSkipAnchor href={`#${anchor}`}>Skip to content</StyledSkipAnchor>
)
