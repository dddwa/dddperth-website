import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { zIndex } from 'components/utils/styles/zindex'

export const StyledHeader = styled('header')(({ theme }) => ({
  position: 'sticky',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  top: 0,
  backgroundColor: theme.colors.white,
  border: 0,
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
  zIndex: zIndex.stickyHeader,
}))

export const StyledAnchor = styled('a')({
  display: 'flex',
  margin: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  cursor: 'pointer',
  outline: 0,

  svg: {
    width: calcRem(144),
    height: calcRem(28),
  },

  [breakpoint('sm')]: {
    svg: {
      width: calcRem(176),
      height: calcRem(35),
    },
  },
})
