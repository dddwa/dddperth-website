import styled from '@emotion/styled'
import { Button } from 'components/global/Button/Button'
import { Text } from 'components/global/text'
import { srOnly } from 'components/utils/styles/accessibility'
import { breakpoint, breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export type LayoutVariant = 'stacked' | 'expanded'

type StyledEloVoteContainerProps = {
  variant: LayoutVariant
}

export const StyledEloVoteContainer = styled('div')<StyledEloVoteContainerProps>(
  ({ theme }) => ({
    gridColumn: '1 / -1',
    display: 'grid',
    gap: theme.metrics.md,
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'minmax(0, 1fr)',
    maxInlineSize: calcRem(965),
    paddingInlineStart: calcRem(theme.metrics.sm),
    paddingInlineEnd: calcRem(theme.metrics.sm),
    marginInlineStart: 'auto',
    marginInlineEnd: 'auto',
    maxBlockSize: '65vh',
  }),
  ({ variant }) => ({
    [breakpointMax('md')]: {
      blockSize: '100%',
      maxBlockSize: variant === 'stacked' ? '75vh' : undefined,
      gridTemplateColumns: 'unset',
      gridTemplateRows: variant === 'stacked' ? 'repeat(2, minmax(0, 1fr))' : 'auto',
      overflowY: 'auto',
    },
  }),
)

type StyledEloChoiceProps = {
  variant?: 'primary' | 'secondary'
}

export const StyledEloChoice = styled('div')<StyledEloChoiceProps>(({ theme, variant = 'primary' }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: calcRem(theme.metrics.md),
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

export const StyledSessionAbstract = styled('div')(() => ({
  flex: 1,
  overflow: 'hidden',
  overflowY: 'auto',
}))

export const StyledAbstractText = styled(Text)(() => ({
  whiteSpace: 'pre-wrap',
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
    boxShadow: `0 0 0 ${calcRem(theme.metrics.xs)} ${theme.colors.dddorange}`,
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

export const StyledEloVoteFooter = styled('div')(() => ({
  textAlign: 'center',
}))

export const StyledLayoutLabel = styled('label')(({ theme }) => ({
  display: 'block',
  marginBlockStart: calcRem(theme.metrics.sm),
  textAlign: 'center',

  input: srOnly,

  span: {
    color: theme.colors.dddorange,
    textDecoration: 'underline',
  },

  [breakpoint('md')]: {
    display: 'none',
  },
}))
