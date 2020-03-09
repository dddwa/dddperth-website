import Link from 'next/link'
import Router from 'next/router'
import React, { useReducer } from 'react'
import {
  StyledForm,
  StyledFormRow,
  StyledHeadingLabel,
  StyledLabel,
  StyledRatingInput,
  StyledSmall,
  StyledSubmitButton,
  StyledTextArea,
  StyledTextInput,
} from '../components/Feedback/Feedback.styled'
import { postFeedback } from '../components/Feedback/FeedbackFetch'
import { defaultFormState, formReducer } from '../components/Feedback/FormReducers'
import { Alert } from '../components/global/Alert/Alert'
import { logException } from '../components/global/analytics'
import { StyledContainer } from '../components/global/Container/Container.styled'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import { getLocalStoredName, storageKey, StorageKeys } from '../components/utils/storageKey'
import { useDeviceId } from '../components/utils/useDeviceId'
import { useForm } from '../components/utils/useForm'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Main } from '../layouts/main'
import { NextPage } from 'next'

interface FeedbackFormState {
  name: string | undefined
  rating: string | undefined
  likes: string | undefined
  improvementIdeas: string | undefined
  isConferenceFeedback: boolean
}

const ConferenceFeedback: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference
  const { deviceId } = useDeviceId(conference.Instance)
  const [formState, dispatch] = useReducer(formReducer, defaultFormState)

  const formSubmitHandler = async () => {
    dispatch('submitting')
    try {
      localStorage.setItem(storageKey<StorageKeys>(conference.Instance, StorageKeys.FEEDBACK_GIVER), values.name)
    } catch (err) {
      // well, we tried
    }

    try {
      await postFeedback<FeedbackFormState>({
        deviceId,
        feedbackUrl: pageMetadata.appConfig.feedbackUrl,
        values,
        formName: 'Conference feedback',
      })
        .then(() => {
          dispatch('submitted')
          resetForm()
          setTimeout(() => dispatch('reset'), 3000 /* 3 seconds */)
        })
        .catch(() => {
          dispatch('error')
        })
    } catch (e) {
      logException('Error when submitting conference feedback', e, { deviceId })
      dispatch('error')
    }
  }

  const { handleChange, handleSubmit, values, resetForm } = useForm<FeedbackFormState>(formSubmitHandler, {
    improvementIdeas: '',
    likes: '',
    name: getLocalStoredName(conference.Instance),
    rating: '',
    isConferenceFeedback: true,
  })

  return (
    <Main
      pageMetadata={pageMetadata}
      title="Conference Feedback"
      description={`${conference.Name} ${conference.Instance} feedback`}
    >
      <StyledContainer>
        <h1>
          {conference.Name} {conference.Instance} feedback
        </h1>
        <p>
          If you would like to leave feedback for a session please use{' '}
          <Link href={conference.SessionFeedbackLink}>
            <a>the session feedback page</a>
          </Link>
        </p>

        <StyledForm onSubmit={handleSubmit}>
          <StyledFormRow>
            <StyledLabel htmlFor="input-name">Your name</StyledLabel>
            <StyledSmall>Please use your full name in case you're a winner during the prize draw.</StyledSmall>
            <StyledTextInput
              id="input-name"
              name="name"
              type="text"
              onChange={handleChange}
              required
              value={values.name}
            />
          </StyledFormRow>
          <StyledFormRow>
            <StyledHeadingLabel>How would you rate the conference?</StyledHeadingLabel>
            <StyledRatingInput
              type="radio"
              name="rating"
              value="-1"
              id="negative"
              checked={values.rating === '-1'}
              onChange={handleChange}
              required
            />
            <label htmlFor="negative" aria-label="Poor">
              😞
            </label>
            <StyledRatingInput
              type="radio"
              name="rating"
              value="0"
              id="neutral"
              checked={values.rating === '0'}
              onChange={handleChange}
              required
            />
            <label htmlFor="neutral" aria-label="Average">
              🙂
            </label>
            <StyledRatingInput
              type="radio"
              name="rating"
              value="1"
              id="positive"
              checked={values.rating === '1'}
              onChange={handleChange}
              required
            />
            <label htmlFor="positive" aria-label="Great">
              😃
            </label>
          </StyledFormRow>
          <StyledFormRow>
            <StyledLabel htmlFor="input-likes">What did you like about the conference?</StyledLabel>
            <StyledTextArea id="input-likes" name="likes" value={values.likes} onChange={handleChange} required />
          </StyledFormRow>
          <StyledFormRow>
            <StyledLabel htmlFor="input-ideas">Do you have any ideas for improvement for the conference?</StyledLabel>
            <StyledTextArea
              id="input-ideas"
              name="improvementIdeas"
              value={values.improvementIdeas}
              onChange={handleChange}
              required
            />
          </StyledFormRow>
          {formState.hasSubmitted && (
            <Alert kind="success" type="assertive">
              Feedback received. Thank you
            </Alert>
          )}
          <StyledSubmitButton kind="primary" type="submit" disabled={formState.submitInProgress}>
            Submit feedback
          </StyledSubmitButton>
        </StyledForm>
      </StyledContainer>
    </Main>
  )
}

ConferenceFeedback.getInitialProps = async ({ res }) => {
  const dates = getConferenceDates(Conference, dateTimeProvider.now())
  if (!dates.AcceptingFeedback) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
      res.finished = true
    } else {
      Router.replace('/')
    }
  }

  return {} as WithPageMetadataProps
}

export default withPageMetadata(ConferenceFeedback)
