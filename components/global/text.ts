// tslint:disable: object-literal-sort-keys
import { calcRem } from '../utils/styles/calcRem'
import styled from '../utils/styles/theme'

export const StyledList = styled('ul')(({ theme }) => ({
  paddingLeft: calcRem(14),

  li: {
    paddingLeft: calcRem(4),
    listStyleImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='${theme.colors.primary.replace(
      '#',
      '%23',
    )}' d='M0 0h6v6H0z'/%3E%3C/svg%3E")`,
    listStyleType: 'none',
  },
}))

export const StyledOrderedList = StyledList.withComponent('ol')
