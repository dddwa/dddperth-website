import styled from '@emotion/styled'
import { Button } from 'components/global/Button/Button'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledEloVoteContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(2, minmax(${calcRem(80)}, 1fr))`,
  gridTemplateRows: '100%',
  gridColumn: '1 / -1',
  gap: theme.metrics.md,
  inlineSize: '100%',
  maxInlineSize: calcRem(965),
  maxBlockSize: '60vh',
  paddingInlineStart: calcRem(theme.metrics.sm),
  paddingInlineEnd: calcRem(theme.metrics.sm),
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',

  [breakpoint('md')]: {
    gap: theme.metrics.lg,
  },
}))

type StyledEloChoiceProps = {
  variant?: 'primary' | 'secondary'
}

export const StyledEloChoice = styled('div')<StyledEloChoiceProps>(({ theme, variant = 'primary' }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: calcRem(theme.metrics.lg),
  paddingInlineStart: calcRem(12),
  paddingInlineEnd: calcRem(12),
  backgroundColor: 'rgba(86, 88, 91, 0.1)',
  borderRadius: calcRem(5),
  borderBlockStartWidth: 8,
  borderBlockStartStyle: 'solid',
  borderColor: variant === 'primary' ? theme.colors.primary : theme.colors.secondary,

  [breakpoint('md')]: {
    padding: calcRem(theme.metrics.lg),
  },
}))

export const StyledSessionTitle = styled('h3')(({ theme }) => ({
  display: '-webkit-box',
  marginBlockEnd: theme.metrics.md,
  color: '#333',
  fontSize: calcRem(20),
  lineHeight: 1.1,
  fontWeight: theme.weights.bold,
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}))

export const StyledSessionAbstract = styled('div')(({ theme }) => ({
  flex: 1,
  marginBlockEnd: calcRem(theme.metrics.md),
  overflow: 'hidden',
  overflowY: 'auto',
}))

type StyledVoteButtonProps = {
  kind: 'primary' | 'secondary'
}

export const StyledVoteButton = styled(Button)<StyledVoteButtonProps>(({ theme, kind }) => ({
  alignSelf: 'center',
  textTransform: 'uppercase',
  borderRadius: calcRem(4),
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.15)',
  backgroundColor: kind === 'primary' ? theme.colors.primary : theme.colors.secondary,
  color: theme.colors.white,

  '&:hover, &:focus': {
    backgroundColor: kind === 'primary' ? theme.colors.primaryDark : theme.colors.secondaryDark,
  },

  '&:focus': {
    boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.dddpink}`,
  },
}))

export const StyledDrawButton = styled(Button)(({ theme }) => ({
  color: '#007CBB',
  fontSize: theme.fonts.defaultSize,
  fontWeight: theme.weights.bold,
}))

export const StyledEloTagList = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  gap: calcRem(theme.metrics.xs),
  marginBlockEnd: calcRem(theme.metrics.md),
}))

export const StyledEloTag = styled('li')(({ theme }) => ({
  padding: calcRem(theme.metrics.xs, theme.metrics.md),
  fontSize: theme.fonts.sizeSm,
  lineHeight: 1,
  backgroundColor: theme.colors.inverse,
  borderRadius: 9999,
  color: theme.colors.white,
}))
