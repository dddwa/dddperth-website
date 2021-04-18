import React from 'react'
import { StyledSkipAnchor } from './SkipToContent.styled'

interface SkipToContentProps {
  anchor?: string
}

export const SkipToContent: React.FC<SkipToContentProps> = ({ anchor = 'content' }) => (
  <StyledSkipAnchor href={`#${anchor}`}>Skip to content</StyledSkipAnchor>
)
