import React, { ReactNode } from 'react'
import { StyledBadge } from './Badge.styled'

export type BadgeType = 'primary' | 'secondary' | 'info'

interface BadgeProps {
  type: BadgeType
  children: ReactNode
}

export const Badge = ({ type, children }: BadgeProps) => <StyledBadge type={type}>{children}</StyledBadge>
