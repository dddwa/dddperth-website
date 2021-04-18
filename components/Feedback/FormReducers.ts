interface FormState {
  submitInProgress: boolean
  hasSubmitted: boolean
  submitError: boolean
  lastSubmit?: Date
}

export const defaultFormState: FormState = {
  hasSubmitted: false,
  lastSubmit: undefined,
  submitError: false,
  submitInProgress: false,
}

export function formReducer(state: FormState, action: 'submitting' | 'submitted' | 'error' | 'reset') {
  switch (action) {
    case 'submitted':
      return {
        hasSubmitted: true,
        lastSubmit: new Date(),
        submitError: false,
        submitInProgress: false,
      }
    case 'submitting':
      return {
        submitInProgress: true,
        ...state,
      }
    case 'error':
      return {
        hasSubmitted: false,
        lastSubmit: undefined,
        submitError: true,
        submitInProgress: false,
      }
    case 'reset':
      return {
        hasSubmitted: false,
        lastSubmit: undefined,
        submitError: false,
        submitInProgress: false,
      }
    default:
      return state
  }
}
