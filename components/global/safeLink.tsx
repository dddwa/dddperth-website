import React from 'react'

export const SafeLink = (
  props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
) => (
  <a rel="noopener" {...props}>
    {props.children}
  </a>
)
