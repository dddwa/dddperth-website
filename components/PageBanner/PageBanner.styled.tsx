import styled from '@emotion/styled'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

interface StyledPageBanner {
  bannerImage?: string
}

export const StyledPageBanner = styled('section')<StyledPageBanner>(({ theme, bannerImage = '' }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  padding: calcRem(100, theme.metrics.md),
  marginBottom: theme.metrics.md,
  backgroundImage: `url(${bannerImage}_w640.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [breakpoint('sm')]: {
    backgroundImage: `url(${bannerImage}_w768.jpg)`,
  },

  [breakpoint('md')]: {
    backgroundImage: `url(${bannerImage}_w1024.jpg)`,
  },

  [breakpoint('lg')]: {
    backgroundImage: `url(${bannerImage}_w1280.jpg)`,
  },

  [breakpoint('xl')]: {
    backgroundImage: `url(${bannerImage}_w1920.jpg)`,
  },
}))
StyledPageBanner.displayName = 'StyledHero'
