/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:object-literal-key-quotes */
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const Panel = styled('li')(({ theme }) => ({
  backgroundColor: theme.colors.lightGrey,
  marginTop: calcRem(10),
  padding: calcRem(13, 15),
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

export const Icon = styled('span')(({ theme }) => ({
  fontSize: '18px',
  float: 'right',
  backgroundColor: theme.colors.primary,
  color: '#fff',
  borderRadius: '50%',
  padding: '7px',
  marginLeft: '10px',
}))

export const Title = styled('h4')(({ theme }) => ({
  color: theme.colors.body,
  textDecoration: 'none',
  fontWeight: '700',
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 10px',
}))

export const Badge = styled('li')(({ theme }) => ({
  display: 'inline-block',
  minWidth: '10px',
  padding: '3px 7px',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '1',
  marginRight: '5px',
  color: '#fff',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  backgroundColor: theme.colors.darkGrey,
  borderRadius: '10px',

  '&:before': {
    content: 'normal',
  },
}))

export const Details = styled('details')(() => ({
  summary: {
    cursor: 'pointer',
    marginTop: '-20px',
    fontWeight: '700',
  },
}))

export const Buttons = styled('div')(() => ({
  textAlign: 'right',
  paddingTop: '10px',
}))

// export const Icon = styled('span')(({ theme }) => ({

// }))

// export const Icon = styled('span')(({ theme }) => ({

// }))
