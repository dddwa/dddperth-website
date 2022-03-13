import React from 'react'

interface EmailIconProps {
  className?: string
  title?: string
}

export const EmailIcon = ({ className, title = 'Email icon' }: EmailIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 32.754" role="img" focusable="false" className={className}>
    <title>{title}</title>
    <path d="M39.221 0H3.779A3.735 3.735 0 002.16.379l19.256 19.256 4.316-4.148L40.839.379A3.736 3.736 0 0039.221 0zM42.622 2.161L28.405 16.377l14.217 14.217a3.735 3.735 0 00.379-1.619v-25.2a3.736 3.736 0 00-.379-1.614zM.379 2.16A3.735 3.735 0 000 3.779v25.2a3.736 3.736 0 00.378 1.619L14.6 16.377z" />
    <path d="M26.624 18.158l-4.316 4.148a1.259 1.259 0 01-1.781 0l-4.148-4.148L2.16 32.374a3.735 3.735 0 001.62.379h35.441a3.736 3.736 0 001.619-.379z" />
  </svg>
)
