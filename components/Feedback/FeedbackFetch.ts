import { logEvent, logException } from '../global/analytics'

interface PostFeedbackParams<T> {
  formName: string
  feedbackUrl: string
  values: T
  deviceId: string
}

export async function postFeedback<T>({ formName, feedbackUrl, values, deviceId }: PostFeedbackParams<T>) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const response = await fetch(feedbackUrl, {
      body: JSON.stringify({ ...values, deviceId }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      logException(
        `Error submitting ${formName}`,
        new Error(`Got ${response.status} ${response.statusText} when posting ${formName}.`),
        { deviceId },
      )
      reject()
    } else {
      logEvent('feedback', 'submit', { deviceId })
      resolve()
    }
  })
}
