import React from 'react'

interface FacebookIconProps {
  title?: string
}

export const FacebookIcon = ({ title = 'Facebook icon' }: FacebookIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.503 36.353" role="img" focusable="false">
    <title>{title}</title>
    <path d="M18.503 12.985h-6.657V9.74s-.373-3.086 1.785-3.086h4.385V0h-7.467S4.303-.027 4.303 6.248c0 1.348-.006 3.8-.016 6.737H.003v5.357h4.276c-.025 8.518-.055 18.011-.055 18.011h7.626V18.342h5.033z" />
  </svg>
)
