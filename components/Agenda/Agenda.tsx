import '@reach/dialog/styles.css'
import React, { Fragment, useEffect, useState } from 'react'
import { Session, Sponsor } from '../../config/types'
import { SafeLink } from '../global/safeLink'
import { StyledCenteredParagraph, StyledSponsorLogo } from './Agenda.styled'
import { SessionDetails } from './SessionDetails'
import { StyledCloseButton, StyledDialogContent, StyledDialogOverlay } from './SessionDetails.styled'

export type onSelectCallback = (session: Session, sponsor: Sponsor) => void

interface AgendaProps {
  sessions: Session[]
  sessionsUrl: string
  acceptingFeedback: boolean
  feedbackLink?: string
  render: (sessions: Session[], onSelect: onSelectCallback) => React.ReactElement
}

export const Agenda: React.FC<AgendaProps> = props => {
  const [sessions, setSessions] = useState(props.sessions)
  const [isError, setIsError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedSession, setSelectedSession] = useState<Session | undefined>()
  const [sessionSponsor, setSessionSponsor] = useState<Sponsor | undefined>()

  const onSelectHandler = (session: Session, sponsor: Sponsor) => {
    setSelectedSession(session)
    setSessionSponsor(sponsor)
    setShowModal(true)
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

  return (
    <React.Fragment>
      {props.render(sessions, onSelectHandler)}

      <StyledDialogOverlay isOpen={showModal} onDismiss={() => setShowModal(false)}>
        <StyledDialogContent>
          <StyledCloseButton
            type="button"
            className="close-button"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            <span aria-hidden>×</span>
          </StyledCloseButton>
          <SessionDetails
            session={selectedSession}
            showPresenters={true}
            showBio={true}
            hideTags={false}
            hideLevelAndFormat={false}
          />

          {props.acceptingFeedback && (
            <StyledCenteredParagraph>
              <SafeLink className="btn btn-secondary" target="_blank" href={props.feedbackLink}>
                Give feedback
              </SafeLink>
            </StyledCenteredParagraph>
          )}

          {sessionSponsor && (
            <Fragment>
              <hr />
              <StyledCenteredParagraph>
                Sponsored by:
                <SafeLink href={sessionSponsor.url} target="_blank" title={sessionSponsor.name}>
                  <StyledSponsorLogo src={sessionSponsor.imageUrl} alt={sessionSponsor.name} />
                </SafeLink>
              </StyledCenteredParagraph>
            </Fragment>
          )}
        </StyledDialogContent>
      </StyledDialogOverlay>
    </React.Fragment>
  )
}

Agenda.displayName = 'Agenda'
