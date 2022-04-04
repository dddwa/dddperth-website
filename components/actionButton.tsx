import Link from 'next/link'
import React from 'react'
import { Action } from 'config/types'
import { ButtonAnchor } from 'components/global/Button/Button'

interface ActionButtonProps {
  action: Action
}

export const ActionButton = ({ action }: ActionButtonProps) => (
  <Link href={action.Url} passHref>
    <ButtonAnchor kind="primary">{action.Title}</ButtonAnchor>
  </Link>
)
ActionButton.displayName = 'ActionButton'
