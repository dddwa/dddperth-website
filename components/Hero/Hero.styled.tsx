import styled from '../utils/styles/theme'
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'

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
