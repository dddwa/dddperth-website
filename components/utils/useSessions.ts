import { Session } from 'config/types'
import { mapSessions } from './mapSession'

export async function fetchSessions(sessionsAPI: string) {
  const response = await fetch(sessionsAPI)
  if (!response.ok) {
    return false
  }

  let body = await response.json()
  if (body.length > 0 && body[0].SessionId) {
    // Map old session structure to new session structure
    body = mapSessions(body)
  }
  return body as Session[]
}
