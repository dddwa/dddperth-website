import React from 'react'

interface MediumIconProps {
  title?: string
}

export const MediumIcon: React.FC<MediumIconProps> = ({ title = 'Medium icon' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.176 34.972" role="img" focusable="false">
    <title>{title}</title>
    <path d="M40.651 4.11L44.176.738V0H31.965l-8.7 21.661L13.361 0H.558v.738l4.117 4.957a1.728 1.728 0 01.558 1.441v19.48a2.221 2.221 0 01-.595 1.933L0 34.17v.73h13.151v-.738l-4.638-5.613a2.29 2.29 0 01-.639-1.933V9.767l11.545 25.141h1.342l9.927-25.141v20.028c0 .528 0 .637-.346.983l-3.572 3.454v.74h17.325v-.738l-3.442-3.37a1.024 1.024 0 01-.394-.983V5.093a1.02 1.02 0 01.392-.983z" />
  </svg>
)
