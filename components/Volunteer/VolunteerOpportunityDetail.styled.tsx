import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'

export const StyledDetails = styled('details')(({ theme }) => ({
  marginBottom: calcRem(10),
  backgroundColor: theme.colors.lightGrey,

  '&[open] summary span::after': {
    backgroundPosition: '-16px -61px',
  },
}))

export const StyledRoleTitle = styled('summary')(({ theme }) => ({
  // Fixes a Safari issue with Summary/FlexBox
  span: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: calcRem(13, 15, 13),
    cursor: 'pointer',
    fontSize: theme.fonts.defaultSize,
    fontWeight: theme.weights.bold,

    '&::after': {
      display: 'block',
      width: 16,
      height: 16,
      flexGrow: 0,
      flexShrink: 0,
      marginLeft: calcRem(10),
      content: "''",
      backgroundImage: "url('/static/images/sprite.png')",
      backgroundPosition: '-68px -61px',
    },
  },

  listStyle: 'none',

  '&:focus': {
    outline: `3px solid ${theme.colors.linkFocusBg}`,
  },

  '&::-webkit-details-marker': {
    display: 'none',
  },
}))

export const StyledDescriptionBody = styled('div')(({ theme }) => ({
  padding: calcRem(theme.metrics.md),

  p: {
    marginBottom: calcRem(theme.metrics.md),
  },

  '& > *:last-child': {
    marginBottom: 0,
  },
}))

export const StyledSignUpButtonContainer = styled('div')({
  textAlign: 'end',
})
