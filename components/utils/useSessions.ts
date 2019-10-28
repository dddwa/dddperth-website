import fetch from 'isomorphic-fetch'
import React from 'react'
import { Session } from '../../config/types'

interface SessionState {
  sessions?: Session[]
  isError: boolean
  isLoaded: boolean
}

interface SessionAction {
  type: 'loaded' | 'error'
  sessions?: Session[]
}

function useSessionReducer(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case 'loaded':
      return {
        isError: false,
        isLoaded: true,
        sessions: action.sessions,
      }
    case 'error':
      return {
        isError: true,
        isLoaded: true,
      }
    default:
      return {
        ...state,
        isLoaded: false,
      }
  }
}

export function useSessions(sessionsAPI: string, sessions: Session[] = []) {
  const [state, dispatch] = React.useReducer(useSessionReducer, {
    isError: false,
    isLoaded: sessions.length > 0,
    sessions,
  })

  React.useEffect(() => {
    if (state.sessions.length === 0) {
      fetch(sessionsAPI)
        .then(response => {
          if (!response.ok) {
            throw response.statusText
          }
          return response.json()
        })
        .then(body => {
          dispatch({ type: 'loaded', sessions: body })
        })
        .catch(error => {
          dispatch({ type: 'error' })
          if (console) {
            // eslint-disable-next-line no-console
            console.error('Error loading sessions', error)
          }
        })
    }
    // TODO: Review the deps array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isError: state.isError,
    isLoaded: state.isLoaded,
    sessions: state.sessions,
  }
}

export async function fetchSessions(sessionsAPI: string) {
  const response = await fetch(sessionsAPI)
  if (!response.ok) {
    return false
  }

  const body = await response.json()
  return body as Session[]
}
