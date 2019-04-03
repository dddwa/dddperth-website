/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const StyledDetails = styled('details')(({ theme }) => ({
  marginBottom: calcRem(10),
  backgroundColor: theme.colors.lightGrey,

  '&[open] summary::after': {
    backgroundPosition: '-16px -61px',
  },
}))

export const StyledSummary = styled('summary')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  padding: calcRem(13, 15, 13),
  cursor: 'pointer',
  fontSize: theme.fonts.defaultSize,
  fontWeight: theme.weights.bold,
  listStyle: 'none',

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

  '&:focus': {
    outline: `3px solid ${theme.colors.linkFocusBg}`,
  },

  '&::-webkit-details-marker': {
    display: 'none',
  },
}))

export const StyledDetailsBody = styled('div')({
  padding: calcRem(10, 15),

  p: {
    margin: calcRem(10, 0),

    '&:first-child': {
      marginTop: 0,
    },

    [breakpoint('sm')]: {
      margin: calcRem(15, 0),
    },

    [breakpoint('md')]: {
      margin: calcRem(18, 0),
    },

    [breakpoint('lg')]: {
      margin: calcRem(23, 0),
    },

    [breakpoint('xl')]: {
      margin: calcRem(30, 0),
    },
  },
})
