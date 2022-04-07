import { Button } from 'components/global/Button/Button'
import { EloSession } from 'config/types'
import { StyledEloVoteContainer } from './EloVote.styled'

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
        onChoice={() => {
          sessionChoiceHandler(sessionB.Id)
        }}
      />
    </StyledEloVoteContainer>
  )
}

type EloChoiceProps = {
  session: EloSession
  onChoice: (session: EloSession) => void
}

function EloChoice({ session, onChoice }: EloChoiceProps) {
  function onVoteClick() {
    onChoice(session)
  }

  return (
    <div>
      <h3>{session.Title}</h3>
      <div>{session.Abstract}</div>
      <Button kind="primary" type="button" onClick={onVoteClick}>
        Vote
      </Button>
    </div>
  )
}
