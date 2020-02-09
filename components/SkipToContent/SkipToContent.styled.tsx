import styled from '../utils/styles/theme'
import { calcRem } from '../utils/styles/calcRem'
export const StyledSkipAnchor = styled('a')(({ theme }) => ({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  border: 0,
  clip: 'rect(0 0 0 0)',

  '&:focus': {
    position: 'fixed',
    width: 'auto',
    height: 'auto',
    top: 6,
    left: 6,
    padding: calcRem(8),
    zIndex: 1,
    background: theme.colors.black,
    clip: 'auto',
  },
}))
