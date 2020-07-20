import styled from '@emotion/styled'
import { breakpoint } from '../../utils/styles/breakpoints'
import { calcRem } from '../../utils/styles/calcRem'

/* @deprecated */
export const StyledContainer = styled.div`
  padding-left: ${calcRem(15)};
  padding-right: ${calcRem(15)};
  margin-right: auto;
  margin-left: auto;

  ${breakpoint('sm')} {
    & {
      width: 750px;
    }
  }

  ${breakpoint('md')} {
    & {
      width: 970px;
    }
  }

  ${breakpoint('lg')} {
    & {
      width: 1170px;
    }
  }
`
