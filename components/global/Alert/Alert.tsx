import React, { ReactNode } from 'react'
import { Kind, StyledAlert } from './Alert.styled'

interface AlertProps {
  kind: Kind
  children: ReactNode
  type?: 'assertive' | 'polite'
}

export const Alert: React.FC<AlertProps> = props => <StyledAlert {...props} />
