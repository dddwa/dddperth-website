import styled from '@emotion/styled'
import { Button } from '../global/Button/Button'
import { breakpoint } from '../utils/styles/breakpoints'
import { calcRem } from '../utils/styles/calcRem'
import { zIndex } from '../utils/styles/zindex'

export const StyledTestingControl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zIndex.testingControl};
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: ${calcRem(4)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);

  ${breakpoint('xs')} {
    top: 40px;
    right: 40px;
    left: unset;
  }
`

export const StyledTestingHeading = styled.div`
  padding: ${calcRem(10, 15)};
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-top-left-radius: ${calcRem(3)};
  border-top-right-radius: ${calcRem(3)};
  color: #333;
`

export const StyledTestingPanel = styled.div`
  padding: ${calcRem(15)};
`

export const StyledButton = styled(Button)({
  width: '100%',
})
