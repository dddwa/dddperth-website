import React from 'react'

export const SafeLink: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = props => (
  <a rel="noopener" {...props}>
    {props.children}
  </a>
)
