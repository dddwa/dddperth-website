import styled from '@emotion/styled'
import { Button } from 'components/global/Button/Button'
import { Text } from 'components/global/text'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledLandingContainer = styled('div')(() => ({
  inlineSize: '100%',
  maxInlineSize: calcRem(456),
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
}))

export const StyledHeader = styled(Text)(({ theme }) => ({
  marginBlockEnd: calcRem(theme.metrics.xxl),
  color: theme.colors.primary,
  fontSize: calcRem(30),
  fontWeight: theme.weights.bold,
  lineHeight: theme.fonts.lineHeight,
  textAlign: 'center',
}))

export const StyledIntro = styled(Text)(({ theme }) => ({
  fontSize: calcRem(theme.fonts.sizeLg),
  fontWeight: theme.weights.bold,
  lineHeight: theme.fonts.lineHeight,
}))

export const StyledButton = styled(Button)({
  display: 'block',
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
})
