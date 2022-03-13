import React from 'react'

interface ArrowUpIconProps {
  className?: string
  title?: string
}

export const ArrowUpIcon = ({ title = 'Arrow Up Icon', className }: ArrowUpIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 26.413 35.792"
    role="img"
    focusable="false"
  >
    <title>{title}</title>
    <path d="M26.198 12.686L13.727.216a.736.736 0 00-1.04 0L.217 12.686a.736.736 0 000 1.04l3.322 3.323a.735.735 0 001.04 0l5.347-5.348v23.356a.736.736 0 00.736.736h5.091a.736.736 0 00.736-.736V11.701l5.347 5.347a.757.757 0 001.04 0l3.323-3.323a.736.736 0 000-1.041z" />
  </svg>
)
