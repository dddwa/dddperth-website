import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'

export const StyledSessionLabel = styled('label')(({ theme }) => ({
  display: 'block',
  padding: calcRem(10),
  cursor: 'pointer',
  border: '2px solid transparent',

  '&:hover': {
    borderColor: theme.colors.darkGrey,
  },
}))

export const StyledSessionInput = styled('input')(({ theme }) => ({
  position: 'absolute',
  opacity: 0,

  '&:focus + label': {
    borderColor: theme.colors.primary,
  },

  '&:checked + label': {
    borderColor: theme.colors.secondary,
    fontWeight: theme.weights.semiBold,
  },
}))
