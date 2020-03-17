import React from 'react'
import { StyledButton, StyledLinkButton, StyledButtonAnchor } from './Button.styled'

export type ButtonKinds = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'link'
export type Size = 'small' | 'normal' | 'lg'

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKinds
  size?: Size
}

export const Button: React.FC<ButtonProps> = props => {
  const Component = props.kind !== 'link' ? StyledButton : StyledLinkButton
  return (
    <Component type="button" {...props}>
      {props.children}
    </Component>
  )
}

interface ButtonAnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  kind: ButtonKinds
  size?: Size
}

export const ButtonAnchor: React.FC<ButtonAnchorProps> = ({
  children,
  kind = 'secondary',
  size = 'normal',
  ...props
}) => (
  <StyledButtonAnchor kind={kind} size={size} {...props}>
    {children}
  </StyledButtonAnchor>
)
