import Link from 'next/link'
import React from 'react'
import { Action } from '../config/types'
import { ButtonAnchor } from './global/Button/Button'

interface ActionButtonProps {
  action: Action
}

export const ActionButton: React.FC<ActionButtonProps> = ({ action }) => (
  <Link href={action.Url}>
    <ButtonAnchor kind="primary">{action.Title}</ButtonAnchor>
  </Link>
)
ActionButton.displayName = 'ActionButton'
