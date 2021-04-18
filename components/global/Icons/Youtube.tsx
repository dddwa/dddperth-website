import React from 'react'

interface YouTubeIconProps {
  title?: string
}

export const YouTubeIcon: React.FC<YouTubeIconProps> = ({ title = 'YouTube icon' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.781 32.754" role="img" focusable="false">
    <title>{title}</title>
    <path d="M45.817 5.125a5.861 5.861 0 00-4.123-4.123c-3.661-1-18.3-1-18.3-1s-14.643 0-18.3.964A5.979 5.979 0 00.963 5.125C0 8.782 0 16.377 0 16.377s0 7.63.963 11.252a5.862 5.862 0 004.124 4.123c3.7 1 18.3 1 18.3 1s14.643 0 18.3-.964a5.861 5.861 0 004.124-4.123c.963-3.661.963-11.252.963-11.252s.045-7.631-.957-11.288zM18.728 23.39V9.364L30.9 16.377zm0 0" />
  </svg>
)
