import React from 'react'

interface InstagramIconProps {
  title?: string
}

export const InstagramIcon = ({ title = 'Instagram icon' }: InstagramIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.074 33.074" role="img" focusable="false">
    <title>{title}</title>
    <path d="M0 6.872V26.2a6.872 6.872 0 006.872 6.872H26.2a6.872 6.872 0 006.874-6.872V6.872A6.872 6.872 0 0026.2 0H6.872A6.872 6.872 0 000 6.872zm20.04 19.036A10.031 10.031 0 017.166 13.034a9.489 9.489 0 015.867-5.868 10.031 10.031 0 0112.875 12.875 9.488 9.488 0 01-5.868 5.867zm7.973-19.372a1.292 1.292 0 01-2.265.612.785.785 0 01-.067-.089 1.3 1.3 0 01-.052-1.374 1.285 1.285 0 011.755-.47 1.294 1.294 0 01.643 1.215.8.8 0 01-.014.106zm0 0" />
    <path d="M16.537 8.502a8.035 8.035 0 108.035 8.035 8.044 8.044 0 00-8.035-8.035zm0 0" />
  </svg>
)
