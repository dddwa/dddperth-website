import React, { Fragment } from 'react'
import { Session } from '../../config/types'
import { StyledSessionInput, StyledSessionLabel } from './SessionInput.styled'

interface SessionInputProps {
  session: Session
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SessionInput: React.FC<SessionInputProps> = ({ session, checked, onChange }) => {
  const inputId = `input-session-${session.Id}`
  return (
    <Fragment>
      <StyledSessionInput
        id={inputId}
        name="sessionId"
        type="radio"
        onChange={onChange}
        value={session.Id}
        checked={checked}
        required
      />
      <StyledSessionLabel htmlFor={inputId}>
        {session.Title} - {session.Presenters.map(presenter => presenter.Name).join(', ')}
      </StyledSessionLabel>
    </Fragment>
  )
}
