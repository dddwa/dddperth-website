import React from 'react'
import { StyledButton, StyledLinkButton } from './Button.styled'

export type ButtonKinds = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'link'

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKinds
}

export const Button: React.FC<ButtonProps> = props => {
  const Component = props.kind !== 'link' ? StyledButton : StyledLinkButton
  return (
    <Component type="button" {...props}>
      {props.children}
    </Component>
  )
}
