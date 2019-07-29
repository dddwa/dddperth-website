import React from 'react'
import { Kind, StyledAlert } from './Alert.styled'

interface AlertProps {
  kind: Kind
  type?: 'assertive' | 'polite'
}

export const Alert: React.FC<AlertProps> = props => <StyledAlert {...props} />
