import styled from '@emotion/styled'
import { Button } from 'components/global/Button/Button'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledEloVoteContainer = styled('div')<{ sideBySide: boolean }>(({ theme, sideBySide }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${sideBySide ? 2 : 1}, minmax(${calcRem(80)}, 1fr))`,
  gridColumn: '1 / -1',
  gap: theme.metrics.md,
  inlineSize: '100%',
  maxInlineSize: calcRem(965),
  paddingInlineStart: calcRem(theme.metrics.sm),
  paddingInlineEnd: calcRem(theme.metrics.sm),
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
  overflowY: 'auto',
  maxBlockSize: '65vh',

  [breakpoint('md')]: {
    gap: theme.metrics.lg,
  },
  [breakpoint('sm')]: {
    gridTemplateColumns: `repeat(2, minmax(${calcRem(80)}, 1fr))`,
    maxBlockSize: 'none',
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
  fontSize: calcRem(18),
  lineHeight: 1.2,
  fontWeight: theme.weights.bold,
  WebkitLineClamp: 5,
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
  kind: 'primary' | 'secondary' | 'tertiary'
  position: 'left' | 'centre' | 'right'
}

export const StyledEloButtonContainer = styled('div')(() => ({
  display: 'flex',
  flexFlow: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const StyledVoteButton = styled(Button)<StyledVoteButtonProps>(({ theme, kind, position }) => ({
  alignSelf: 'center',
  borderRadius:
    position == 'left'
      ? `${calcRem(4)} 0 0 ${calcRem(4)}`
      : position === 'right'
      ? `0 ${calcRem(4)} ${calcRem(4)} 0`
      : 0,
  boxShadow: '2px 2px 0 0 rgba(0, 0, 0, 0.15)',
  backgroundColor: theme.colors[kind],
  color: theme.colors.white,

  '&:hover, &:focus': {
    backgroundColor: theme.colors[kind + 'Dark'],
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

export const StyledEloLayoutSwitch = styled('div')({
  [breakpoint('sm')]: {
    display: 'none',
  },
})
