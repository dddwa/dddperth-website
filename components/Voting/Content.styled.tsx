import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from 'components/utils/styles/theme'

export const StyledHeader = styled('div')(({ theme }) => ({
  display: 'grid',
  gridColumn: '1 / -1',
  gridTemplateColumns: 'minmax(1rem, 1fr) minmax(10px, 60ch) minmax(10px, 60ch) 1fr minmax(1rem, 1fr)',
  paddingBlockStart: calcRem(70),
  paddingBlockEnd: calcRem(theme.metrics.xl),
  marginBlockStart: calcRem(-theme.metrics.xl),
  marginBlockEnd: calcRem(60),
  gap: '1rem',
  backgroundColor: theme.colors.dddpink,
}))

export const StyledColumnLayout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: calcRem(theme.metrics.xxl),
  scrollMarginBlockStart: '2rem',

  p: {
    marginBlockEnd: calcRem(theme.metrics.lg),
  },
}))

export const StyledHeaderContent = styled('div')({
  gridColumn: '2 / -2',
  gridRow: 1,
  zIndex: 2,

  [breakpoint('md')]: {
    gridColumn: 2,
  },
})

export const StyledHeaderIllustration = styled('div')({
  display: 'none',
  gridRow: 1,
  zIndex: 1,
  transform: 'translateY(4vh)',

  [breakpoint('md')]: {
    display: 'flex',
    flexDirection: 'column',
    gridColumn: '3 / -1',
    justifyContent: 'flex-end',
  },
})

export const SyledIllustrationContainer = styled('div')({
  alignSelf: 'flex-end',
})

export const Heading = styled('h1')(({ theme }) => ({
  color: theme.colors.white,
  fontSize: calcRem(75),
  textTransform: 'uppercase',
}))

export const HeadingBody = styled('h2')(({ theme }) => ({
  color: theme.colors.black,
  fontSize: calcRem(65),
  lineHeight: 1,
  textTransform: 'uppercase',
}))

export const Text = styled('p')(({ theme }) => ({
  marginBlockEnd: calcRem(theme.metrics.lg),
  color: theme.colors.white,
  fontSize: calcRem(theme.fonts.sizeLg),
  fontWeight: theme.weights.medium,

  a: {
    color: theme.colors.white,

    '&:hover, &:focus': {
      color: theme.colors.white,
    },
  },
}))

export const SpeakerBubble = styled('figure')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  left: '1vw',
  top: 0,
  flex: 'none',
  justifyContent: 'centre',
  alignItems: 'center',
  blockSize: calcRem(250),
  inlineSize: calcRem(250),
  padding: calcRem(50),
  backgroundColor: theme.colors.black,
  borderRadius: '50%',
  color: theme.colors.white,
  overflow: 'hidden',
  zIndex: 2,

  [breakpoint('xl')]: {
    left: 'unset',
    right: 'calc(10% + 300px)',
    top: '20%',
    blockSize: calcRem(325),
    inlineSize: calcRem(325),
    padding: calcRem(60),
  },
}))

export const SpeakerBubbleTitle = styled('blockquote')(({ theme }) => ({
  fontSize: calcRem(36),
  fontWeight: theme.weights.medium,
  lineHeight: 1.1,
  marginBlockEnd: 'auto',

  [breakpoint('xl')]: {
    fontSize: calcRem(45),
  },
}))

export const SpeakerCaption = styled('figcaption')(({ theme }) => ({
  fontSize: calcRem(14),
  fontWeight: theme.weights.medium,
  textTransform: 'uppercase',

  [breakpoint('xl')]: {
    fontSize: calcRem(theme.fonts.defaultSize),
  },
}))

export const ButtonStack = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: calcRem(theme.metrics.lg),
}))

export const MoreInfoButton = styled('a')(({ theme }) => ({
  padding: calcRem(theme.metrics.md),
  color: theme.colors.white,
  background: 'transparent',
  border: `1px solid ${theme.colors.white}`,
  textDecoration: 'none',
  textTransform: 'uppercase',

  '&:hover, &:focus': {
    backgroundColor: theme.colors.white,
    color: theme.colors.dddpink,
  },
}))

export const StartVoteButton = styled('a')(({ theme }) => ({
  padding: calcRem(theme.metrics.md),
  color: theme.colors.black,
  background: '#F6E337',
  border: `1px solid #F6E337`,
  textDecoration: 'none',
  cursor: 'pointer',
  textTransform: 'uppercase',

  '&:hover, &:focus': {
    backgroundColor: theme.colors.black,
    color: '#F6E337',
  },
}))
