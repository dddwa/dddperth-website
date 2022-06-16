import React from 'react'
import { StyledPageBanner } from './PageBanner.styled'

interface PageBanner {
  banner_image?: string
}

export const PageBanner = (banner_image?: string): JSX.Element => {
  return <StyledPageBanner banner_image={banner_image} />
}
