import styled from '@emotion/styled'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledHero = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  padding: calcRem(80, theme.metrics.md),
  marginBottom: theme.metrics.md,
  backgroundImage: `url(/hero/hero_w640.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [breakpoint('sm')]: {
    backgroundImage: `url(/hero/hero_w768.jpg)`,
  },

  [breakpoint('md')]: {
    backgroundImage: `url(/hero/hero_w1024.jpg)`,
  },

  [breakpoint('lg')]: {
    backgroundImage: `url(/hero/hero_w1280.jpg)`,
  },

  [breakpoint('xl')]: {
    backgroundImage: `url(/hero/hero_w1920.jpg)`,
  },
}))
StyledHero.displayName = 'StyledHero'

export const StyledConferenceDetails = styled('p')(({ theme }) => ({
  display: 'block',
  width: '80%',
  maxWidth: calcRem(1000),
  padding: 20,
  backgroundColor: 'rgba(240,240,240, 0.9)',
  color: theme.colors.secondaryDark,
  fontSize: '7vmin',
  fontWeight: theme.weights.bold,
  lineHeight: 1,
  textAlign: 'right',

  time: {
    display: 'block',
  },

  span: {
    display: 'inline-block',
    width: '80%',
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
