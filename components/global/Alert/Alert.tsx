import React, { ReactNode } from 'react'
import { Kind, StyledAlert } from './Alert.styled'

interface AlertProps {
  kind: Kind
  children: ReactNode
  type?: 'assertive' | 'polite'
}

export const Alert = (props: AlertProps) => <StyledAlert {...props} />
