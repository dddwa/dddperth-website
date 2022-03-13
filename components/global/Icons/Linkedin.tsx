import React from 'react'

interface LinkedinIconProps {
  title?: string
}

export const LinkedinIcon = ({ title = 'LinkedIn icon' }: LinkedinIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.003 36.003" role="img" focusable="false">
    <title>{title}</title>
    <path d="M9.351 36.003H.039V10.922h9.312zm0 0M36.002 36.003h-9.118v-11.1a4.242 4.242 0 00-1.944-3.974 2.961 2.961 0 00-2.785-.019l-.08 15.088h-9.541V10.922h9.549v1.019a10.049 10.049 0 0113.919 8.837zm0 0M4.673 9.356a4.678 4.678 0 114.674-4.678 4.681 4.681 0 01-4.674 4.678zm0 0" />
  </svg>
)
