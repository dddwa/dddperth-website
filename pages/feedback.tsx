import { NextSFC } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import React, { Fragment, useReducer } from 'react'
import {
  StyledForm,
  StyledFormRow,
  StyledHeadingLabel,
  StyledLabel,
  StyledRatingInput,
  StyledSessionList,
  StyledSessionTimeframe,
  StyledSmall,
  StyledSubmitButton,
  StyledSummary,
  StyledTextArea,
  StyledTextInput,
} from '../components/Feedback/Feedback.styled'
import { postFeedback } from '../components/Feedback/FeedbackFetch'
import { FeedbackTimeTesting } from '../components/Feedback/FeedbackTimeTesting'
import { defaultFormState, formReducer } from '../components/Feedback/FormReducers'
import { SessionInput } from '../components/Feedback/SessionInput'
import { Alert } from '../components/global/Alert/Alert'
import { logException } from '../components/global/analytics'
import { StyledContainer } from '../components/global/Container/Container.styled'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import { getLocalStoredName, storageKey, StorageKeys } from '../components/utils/storageKey'
import { useDeviceId } from '../components/utils/useDeviceId'
import { useForm } from '../components/utils/useForm'
import { useSessionGroups } from '../components/utils/useSessionGroups'
import { fetchSessions, useSessions } from '../components/utils/useSessions'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface FeedbackFormState {
  name: string | undefined
  sessionId: string | undefined
  rating: string | undefined
  likes: string | undefined
  improvementIdeas: string | undefined
}

interface FeedbackMetadataProps extends WithPageMetadataProps {
  ssrSessions?: Session[]
}

const Feedback: NextSFC<FeedbackMetadataProps> = ({ pageMetadata, ssrSessions }) => {
  const conference = pageMetadata.conference
  const { deviceId } = useDeviceId(conference.Instance)
  const { sessions, isError, isLoaded } = useSessions(pageMetadata.appConfig.getAgendaUrl, ssrSessions)
  const { allSessionGroups, ...sessionGroups } = useSessionGroups(sessions)
  const [formState, dispatch] = useReducer(formReducer, defaultFormState)
  const hasPreviousSessions =
    sessions && sessionGroups.previousSessionGroup && sessionGroups.previousSessionGroup.sessions.length > 0
  const showForm = sessions && isLoaded && !isError && hasPreviousSessions

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
        formName: 'Session feedback',
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
      logException('Error when submitting session feedback', e, { deviceId })
      dispatch('error')
    }
  }

  const { handleChange, handleSubmit, values, resetForm } = useForm<FeedbackFormState>(formSubmitHandler, {
    improvementIdeas: '',
    likes: '',
    name: getLocalStoredName(conference.Instance),
    rating: '',
    sessionId: undefined,
  })

  return (
    <Page
      pageMetadata={pageMetadata}
      title="Feedback"
      hideBanner={true}
      description={`${conference.Name} ${conference.Instance} session feedback.`}
    >
      <StyledContainer>
        <h1>
          {conference.Name} {conference.Instance} session feedback
        </h1>
        <p>
          If you would like to leave feedback about the conference please use{' '}
          <Link href={conference.ConferenceFeedbackLink}>
            <a>the conference feedback page</a>
          </Link>
        </p>

        {isError && <Alert kind="error">Sorry, there was an error loading sessions. Please try again later</Alert>}
        {!isLoaded && <Alert kind="info">Loading sessions</Alert>}
        {!isError && !hasPreviousSessions && isLoaded && (
          <Alert kind="info">
            We would love your feedback, please come back after the first sessions have finished.
          </Alert>
        )}

        {pageMetadata.appConfig.testingMode && <FeedbackTimeTesting sessionGroups={allSessionGroups} />}

        {showForm && (
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
              <StyledHeadingLabel>Which talk do you want to provide feedback for?</StyledHeadingLabel>
              <StyledSessionList>
                {sessionGroups.previousSessionGroup.sessions.map(session => (
                  <li key={session.Id}>
                    <SessionInput session={session} checked={values.sessionId === session.Id} onChange={handleChange} />
                  </li>
                ))}
              </StyledSessionList>

              {sessionGroups.pastSessionGroups && sessionGroups.pastSessionGroups.length > 0 && (
                <details>
                  <StyledSummary>Previous sessions</StyledSummary>
                  <StyledSessionList>
                    {sessionGroups.pastSessionGroups.map(sessionGroup => (
                      <Fragment>
                        <StyledSessionTimeframe key={sessionGroup.timeStart.valueOf()}>
                          <time>{sessionGroup.timeStart.format('hh:mm')}</time>
                          {' - '}
                          <time>{sessionGroup.timeEnd.format('hh:mm')}</time>
                        </StyledSessionTimeframe>
                        {sessionGroup.sessions.map(session => (
                          <li key={session.Id}>
                            <SessionInput
                              session={session}
                              checked={values.sessionId === session.Id}
                              onChange={handleChange}
                            />
                          </li>
                        ))}
                      </Fragment>
                    ))}
                  </StyledSessionList>
                </details>
              )}
            </StyledFormRow>
            <StyledFormRow>
              <StyledHeadingLabel>How would you rate the talk?</StyledHeadingLabel>
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
              <StyledLabel htmlFor="input-likes">What did you like about the talk?</StyledLabel>
              <StyledTextArea id="input-likes" name="likes" value={values.likes} onChange={handleChange} required />
            </StyledFormRow>
            <StyledFormRow>
              <StyledLabel htmlFor="input-ideas">Do you have any ideas for improvement for the speaker?</StyledLabel>
              <StyledSmall>Please be respectful of the speaker - positivity over negativity is appreciated</StyledSmall>
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
        )}
      </StyledContainer>
    </Page>
  )
}

Feedback.getInitialProps = async ({ res, req }) => {
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

  if (req) {
    const sessions = await fetchSessions(process.env.GET_AGENDA_URL)
    return (sessions ? { ssrSessions: sessions } : {}) as FeedbackMetadataProps
  }

  return {} as FeedbackMetadataProps
}

export default withPageMetadata(Feedback)
