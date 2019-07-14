import React, { ReactNode } from 'react'
import { StyledBadge } from './Badge.styled'

export type BadgeType = 'primary' | 'secondary' | 'info'

interface BadgeProps {
  type: BadgeType
  children: ReactNode
}

export const Badge: React.FC<BadgeProps> = ({ type, children }) => <StyledBadge type={type}>{children}</StyledBadge>
