import Alert from '@reach/alert'
import { calcRem } from 'components/utils/styles/calcRem'
import styled, { Theme } from 'components/utils/styles/theme'

export type Kind = 'info' | 'success' | 'error' | 'warning'

interface StyledAlertProps {
  kind: Kind
}

function stylesFromKind(kind: StyledAlertProps['kind'], theme: Theme) {
  switch (kind) {
    case 'error':
      return {
        backgroundColor: theme.colors.alerts.error.background,
        borderColor: theme.colors.alerts.error.border,
        color: theme.colors.alerts.error.color,
      }
    case 'success':
      return {
        backgroundColor: theme.colors.alerts.success.background,
        borderColor: theme.colors.alerts.success.border,
        color: theme.colors.alerts.success.color,
      }
    case 'warning':
      return {
        backgroundColor: theme.colors.alerts.warning.background,
        borderColor: theme.colors.alerts.warning.border,
        color: theme.colors.alerts.warning.color,
      }
    default:
      return {
        backgroundColor: theme.colors.alerts.info.background,
        borderColor: theme.colors.alerts.info.border,
        color: theme.colors.alerts.info.color,
      }
  }
}

export const StyledAlert = styled(Alert, {
  shouldForwardProp: (prop) => prop !== 'kind',
})<StyledAlertProps>(({ kind, theme }) => ({
  padding: calcRem(15),
  margin: calcRem(0, 0, 20),
  border: '1px solid transparent',
  borderRadius: calcRem(4),
  ...stylesFromKind(kind, theme),
}))
