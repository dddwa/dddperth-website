import styled from '@emotion/styled'
import { breakpoint } from '../../utils/styles/breakpoints'

export const StyledFooterCopyright = styled.p`
  font-size: 90%;
  text-align: center;

  ${breakpoint('lg')} {
    font-size: 85%;
  }
`
