import { EloSession } from 'config/types'
import {
  StyledVoteButton,
  StyledEloVoteContainer,
  StyledEloChoice,
  StyledSessionTitle,
  StyledSessionAbstract,
} from './EloVote.styled'

type EloVoteProps = {
  sessionA: EloSession
  sessionB: EloSession
  onSessionChoice: (winningSession: EloSession, losingSession: EloSession) => void
}

export function EloVote({ sessionA, sessionB, onSessionChoice }: EloVoteProps): JSX.Element {
  function sessionChoiceHandler(session: EloSession['Id']) {
    const winner = session === sessionA.Id ? sessionA : sessionB
    const loser = session === sessionA.Id ? sessionB : sessionA
    onSessionChoice(winner, loser)
  }

  return (
    <StyledEloVoteContainer>
      <EloChoice
        session={sessionA}
        onChoice={() => {
          sessionChoiceHandler(sessionA.Id)
        }}
      />
      <EloChoice
        session={sessionB}
        variant="secondary"
        onChoice={() => {
          sessionChoiceHandler(sessionB.Id)
        }}
      />
    </StyledEloVoteContainer>
  )
}

type EloChoiceProps = {
  session: EloSession
  variant?: 'primary' | 'secondary'
  onChoice: (session: EloSession) => void
}

function EloChoice({ session, variant = 'primary', onChoice }: EloChoiceProps) {
  function onVoteClick() {
    onChoice(session)
  }

  return (
    <StyledEloChoice variant={variant}>
      <StyledSessionTitle>{session.Title}</StyledSessionTitle>
      <StyledSessionAbstract>{session.Abstract}</StyledSessionAbstract>
      <StyledVoteButton kind={variant} type="button" onClick={onVoteClick}>
        Pick Me
      </StyledVoteButton>
    </StyledEloChoice>
  )
}
