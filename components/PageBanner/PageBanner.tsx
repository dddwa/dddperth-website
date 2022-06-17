import React from 'react'
import { StyledPageBanner } from './PageBanner.styled'

interface PageBanner {
  bannerImage?: string
}

export const PageBanner = (bannerImage?: string): JSX.Element => {
  return <StyledPageBanner bannerImage={bannerImage} />
}
