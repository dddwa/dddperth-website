import { breakpoint } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'

export const StyledPanel = styled('li')(({ theme }) => ({
  backgroundColor: theme.colors.lightGrey,
  padding: calcRem(13, 15),
  marginTop: calcRem(10),
  listStyle: 'none',

  '&:before': {
    content: 'normal',
  },

  a: {
    textDecoration: 'none',
  },

  ul: {
    margin: 0,
    padding: 0,
  },
}))

export const StyledIcon = styled('span')(({ theme }) => ({
  float: 'right',
  marginLeft: calcRem(10),
  padding: calcRem(7),
  fontSize: calcRem(18),
  backgroundColor: theme.colors.primary,
  color: '#fff',
  borderRadius: '50%',
}))

export const StyledTitle = styled('h4')(({ theme }) => ({
  margin: 0,
  color: theme.colors.body,
  fontSize: calcRem(16),
  fontWeight: theme.weights.bold,
  lineHeight: 1.5,
  textDecoration: 'none',
}))

export const StyledBadge = styled('li')(({ theme }) => ({
  display: 'inline-block',
  minWidth: calcRem(10),
  padding: calcRem(3, 7),
  marginRight: calcRem(5),
  backgroundColor: theme.colors.darkGrey,
  borderRadius: calcRem(10),
  color: '#fff',
  fontSize: calcRem(12),
  fontWeight: theme.weights.bold,
  lineHeight: 1,
  textAlign: 'center',

  '&:before': {
    content: 'normal',
  },
}))

export const StyledDetails = styled('details')({
  marginTop: calcRem(10),

  [breakpoint('xs')]: {
    marginTop: calcRem(-20),
  },
})

export const StyledSummary = styled('summary')(({ theme }) => ({
  cursor: 'pointer',
  fontWeight: theme.weights.bold,

  '&::-webkit-details-marker': {
    display: 'none',
  },
}))

export const StyledButtons = styled('div')(() => ({
  display: 'flex',
  paddingTop: calcRem(10),

  '& > *:not(:first-child)': {
    marginLeft: calcRem(4),
  },

  [breakpoint('xs')]: {
    justifyContent: 'flex-end',
  },
}))

export const StyledHeader = styled('header')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: calcRem(0, 0, 10),
  fontSize: calcRem(30),
  // competing styles
  backgroundColor: 'transparent',
  textAlign: 'start',
  color: theme.colors.body,
  zIndex: 'auto',
}))
