import styled from '@emotion/styled'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

interface StyledPageBanner {
  banner_image?: string
}

export const StyledPageBanner = styled('section')<StyledPageBanner>(({ theme, banner_image = "" }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  padding: calcRem(100, theme.metrics.md),
  marginBottom: theme.metrics.md,
  backgroundImage: `url(${banner_image}_w640.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [breakpoint('sm')]: {
    backgroundImage: `url(${banner_image}_w768.jpg)`,
  },

  [breakpoint('md')]: {
    backgroundImage: `url(${banner_image}_w1024.jpg)`,
  },

  [breakpoint('lg')]: {
    backgroundImage: `url(${banner_image}_w1280.jpg)`,
  },

  [breakpoint('xl')]: {
    backgroundImage: `url(${banner_image}_w1920.jpg)`,
  },
}))
StyledPageBanner.displayName = 'StyledHero'

export const StyledConferenceDetails = styled('p')(({ theme }) => ({
  display: 'block',
  width: '80%',
  maxWidth: calcRem(1000),
  color: theme.colors.white,
  fontSize: '7vmin',
  fontWeight: theme.weights.bold,
  lineHeight: 1,
  textAlign: 'right',

  time: {
    display: 'block',
  },

  span: {
    display: 'inline-block',
    width: '70%',
  },

  [breakpoint('md')]: {
    width: '56%',
  },
}))
StyledConferenceDetails.displayName = 'StyledConferenceDetails'

export const StyledCredit = styled('p')(({ theme }) => ({
  position: 'absolute',
  right: calcRem(20),
  bottom: calcRem(20),
  color: theme.colors.white,
  fontWeight: 400,
  fontSize: calcRem(10),

  a: {
    color: theme.colors.white,
  },
}))
StyledCredit.displayName = 'StyledCredit'
