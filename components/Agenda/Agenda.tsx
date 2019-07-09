import React, { useEffect, useState } from 'react'
import { Session } from '../../config/types'

export type onSelectCallback = (id: string) => void

interface AgendaProps {
  sessions: Session[]
  sessionsUrl: string
  render: (sessions: Session[], onSelect: onSelectCallback) => React.ReactElement
}

export const Agenda: React.FC<AgendaProps> = props => {
  const [sessions, setSessions] = useState(props.sessions)
  const [isError, setIsError] = useState(false)

  const onSelectHandler = (id: string) => {
    // tslint:disable-next-line: no-console
    console.log(id)
  }

  useEffect(() => {
    if (sessions.length === 0) {
      fetch(props.sessionsUrl)
        .then(response => {
          if (!response.ok) {
            throw response.statusText
          }
          return response.json()
        })
        .then(body => {
          setSessions(body)
          setIsError(false)
        })
        .catch(error => {
          setIsError(true)
          if (console) {
            // tslint:disable-next-line: no-console
            console.error('Error loading sessions', error)
          }
        })
    }
  }, [])

  if (isError) {
    return <div className="alert alert-danger">Error loading sessions</div>
  }

  return <React.Fragment>{props.render(sessions, onSelectHandler)}</React.Fragment>
}

Agenda.displayName = 'Agenda'
