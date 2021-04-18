import { Button } from 'components/global/Button/Button'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from 'components/utils/styles/theme'

export const StyledForm = styled('form')(({ theme }) => ({
  marginBottom: calcRem(30),
  backgroundColor: theme.colors.lightGrey,
}))

export const StyledFormRow = styled('div')({
  marginBottom: calcRem(30),
})

export const StyledSessionList = styled('ul')({
  marginBottom: calcRem(30),
})

export const StyledSessionTimeframe = styled('li')(({ theme }) => ({
  marginTop: calcRem(10),
  fontWeight: theme.weights.semiBold,
}))

export const StyledTextInput = styled('input')(({ theme }) => ({
  // competing with Bootstrap - don't judge me
  padding: `${calcRem(20)} !important`,
  fontSize: calcRem(20),
  color: theme.colors.body,
  fontWeight: theme.weights.regular,
}))

export const StyledLabel = styled('label')(({ theme }) => ({
  display: 'block',
  margin: 0,
  fontSize: calcRem(20),
  fontWeight: theme.weights.semiBold,
}))

export const StyledHeadingLabel = StyledLabel.withComponent('h3')

export const StyledSmall = styled('small')({
  display: 'block',
  margin: calcRem(0, 0, 10),
  fontSize: '85%',
})

export const StyledRatingInput = styled('input')(({ theme }) => ({
  opacity: 0,

  '& + label': {
    padding: calcRem(4),
    margin: 0,
    marginTop: calcRem(10),
    border: '2px solid transparent',
    cursor: 'pointer',
    fontSize: calcRem(40),
    lineHeight: 1,
  },

  '&:checked + label': {
    borderColor: theme.colors.secondary,
  },
}))

export const StyledTextArea = styled('textarea')(({ theme }) => ({
  padding: calcRem(10),
  color: theme.colors.body,
}))
export const StyledSubmitButton = styled(Button)({
  display: 'block',
  width: '100%',
  cursor: 'pointer',
})

export const StyledSummary = styled('summary')({
  cursor: 'pointer',
  fontSize: calcRem(20),
})
