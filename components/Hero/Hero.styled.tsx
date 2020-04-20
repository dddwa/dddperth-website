import styled from '../utils/styles/theme'
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'

export const StyledHero = styled('section')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  paddingTop: '70%',
  marginBottom: theme.metrics.md,
  backgroundImage: `url(/hero/hero_w640.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [breakpoint('sm')]: {
    paddingTop: '50%',
    backgroundImage: `url(/hero/hero_w768.jpg)`,
  },

  [breakpoint('md')]: {
    backgroundImage: `url(/hero/hero_w1024.jpg)`,
  },

  [breakpoint('lg')]: {
    paddingTop: '40%',
    backgroundImage: `url(/hero/hero_w1280.jpg)`,
  },

  [breakpoint('xl')]: {
    paddingTop: calcRem(500),
    backgroundImage: `url(/hero/hero_w1920.jpg)`,
  },
}))

export const StyledCredit = styled('p')(({ theme }) => ({
  position: 'absolute',
  right: calcRem(20),
  bottom: calcRem(20),
  color: theme.colors.white,
  fontWeight: 400,
  fontSize: calcRem(14),

  a: {
    color: theme.colors.white,
  },
}))
