import React from 'react'

interface TwitterIconProps {
  title?: string
}

export const TwitterIcon: React.FC<TwitterIconProps> = ({ title = 'Twitter icon' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.219 33.66" role="img">
    <title>{title}</title>
    <path d="M40.219 4.1l-3.629-.475.947-3.536-4.252 1.139a8.839 8.839 0 00-13.333 7.609v1.146a21.18 21.18 0 01-15.5-8.031L3.461.708l-.9 1.307a8.925 8.925 0 00-.9 1.657 8.8 8.8 0 00-.384 5.655A8.947 8.947 0 002.762 12.4l-1.4.336.275 1.146a8.854 8.854 0 005.833 6.359l-1.378 1.613.9.765a8.825 8.825 0 004.758 2.071A17.8 17.8 0 010 29.093l.506.352a23.646 23.646 0 0030.194-2.71 23.49 23.49 0 006.925-16.719V8.837a8.932 8.932 0 00-.086-1.237zm0 0" />
  </svg>
)
