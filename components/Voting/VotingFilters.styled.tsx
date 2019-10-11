import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const StyledTagCloudList = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  padding: 0,
  margin: 0,
  listStyleType: 'none',
})

export const StyledTagCloudInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',

  '&:checked': {
    '& + label': {
      background: theme.colors.tertiary,
      color: '#fff',
    },
  },

  '&:focus': {
    '& + label': {
      borderColor: theme.colors.tertiary,
    },
  },
}))

export const StyledTagCloudLabel = styled('label')(({ theme }) => ({
  display: 'block',
  padding: calcRem(5),
  margin: calcRem(2),
  border: '2px solid transparent',
  cursor: 'pointer',
  fontSize: calcRem(14),

  '&:active': {
    backgroundColor: theme.colors.tertiary,
    color: '#fff',
  },
}))
