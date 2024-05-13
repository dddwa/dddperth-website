import React, { Fragment, useReducer } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
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
} from 'components/Feedback/Feedback.styled'
import { postFeedback } from 'components/Feedback/FeedbackFetch'
import { FeedbackTimeTesting } from 'components/Feedback/FeedbackTimeTesting'
import { defaultFormState, formReducer } from 'components/Feedback/FormReducers'
import { SessionInput } from 'components/Feedback/SessionInput'
import { Alert } from 'components/global/Alert/Alert'
import { logException } from 'components/global/analytics'
import { StyledContainer } from 'components/global/Container/Container.styled'
import { getLocalStoredName, storageKey, StorageKeys } from 'components/utils/storageKey'
import { useDeviceId } from 'components/utils/useDeviceId'
import { useForm } from 'components/utils/useForm'
import { useSessionGroups } from 'components/utils/useSessionGroups'
import { fetchSessions } from 'components/utils/useSessions'
import { Session } from 'config/types'
import { Main } from 'layouts/main'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'

interface FeedbackFormState {
  name: string | undefined
  sessionId: string | undefined
  rating: string | undefined
  likes: string | undefined
  improvementIdeas: string | undefined
}

interface FeedbackProps {
  sessions: Session[]
}

const Feedback: NextPage<FeedbackProps> = ({ sessions }) => {
  const { conference, appConfig } = useConfig()
  const { deviceId } = useDeviceId(conference.Instance)
  const { allSessionGroups, ...sessionGroups } = useSessionGroups(sessions, conference)
  const [formState, dispatch] = useReducer(formReducer, defaultFormState)
  const hasPreviousSessions =
    sessions && sessionGroups.previousSessionGroup && sessionGroups.previousSessionGroup.sessions.length > 0
  const showForm = sessions && hasPreviousSessions

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
        feedbackUrl: appConfig.feedbackUrl,
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
    <Main title="Feedback" description={`${conference.Name} ${conference.Instance} session feedback.`}>
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

        {sessions.length === 0 && (
          <Alert kind="error">Sorry, there was an error loading sessions. Please try again later</Alert>
        )}
        {sessions.length > 0 && !hasPreviousSessions && (
          <Alert kind="info">
            We would love your feedback, please come back after the first sessions have finished.
          </Alert>
        )}

        {appConfig.testingMode() && <FeedbackTimeTesting sessionGroups={allSessionGroups} />}

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
                {sessionGroups.previousSessionGroup.sessions.flat().map((session) => (
                  <li key={session.Id}>
                    <SessionInput session={session} checked={values.sessionId === session.Id} onChange={handleChange} />
                  </li>
                ))}
              </StyledSessionList>

              {sessionGroups.pastSessionGroups && sessionGroups.pastSessionGroups.length > 0 && (
                <details>
                  <StyledSummary>Previous sessions</StyledSummary>
                  <StyledSessionList>
                    {sessionGroups.pastSessionGroups.map((sessionGroup) => (
                      <Fragment>
                        <StyledSessionTimeframe key={sessionGroup.timeStart.valueOf()}>
                          <time dateTime={sessionGroup.timeStart.toISOString()}>
                            {format(sessionGroup.timeStart, 'hh:mm')}
                          </time>
                          {' - '}
                          <time dateTime={sessionGroup.timeEnd.toISOString()}>
                            {format(sessionGroup.timeEnd, 'hh:mm')}
                          </time>
                        </StyledSessionTimeframe>
                        {sessionGroup.sessions.flat().map((session) => (
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
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.AcceptingFeedback) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)

  return {
    props: {
      sessions: sessions ? sessions : [],
    },
  }
}

export default Feedback
