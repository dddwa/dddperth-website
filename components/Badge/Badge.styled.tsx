import { calcRem } from 'components/utils/styles/calcRem'
import styled, { Theme } from 'components/utils/styles/theme'
import { BadgeType } from './Badge'

function badgeColor(type: BadgeType, theme: Theme) {
  switch (type) {
    case 'primary':
      return theme.colors.primary
    case 'secondary':
      return theme.colors.secondary
    default:
      return theme.colors.tertiaryDark
  }
}

interface StyledBadgeProps {
  type: BadgeType
}

export const StyledBadge = styled('span')<StyledBadgeProps>(({ type, theme }) => ({
  display: 'inline-block',
  padding: calcRem(3, 7),
  backgroundColor: badgeColor(type, theme),
  borderRadius: calcRem(10),
  color: '#fff',
  fontSize: calcRem(12),
  fontWeight: theme.weights.bold,
  lineHeight: 1,
  textAlign: 'center',
  whiteSpace: 'nowrap',
}))
