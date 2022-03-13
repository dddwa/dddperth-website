import { Button } from 'components/global/Button/Button'
import { EloSession } from 'config/types'
import { StyledEloVoteContainer } from './EloVote.styled'

type EloVoteProps = {
  sessionA: EloSession
  sessionB: EloSession
  onSessionChoice: (session: EloSession) => void
}

export function EloVote({ sessionA, sessionB, onSessionChoice }: EloVoteProps): JSX.Element {
  function sessionChoiceHandler(session) {
    onSessionChoice(session)
  }

  return (
    <StyledEloVoteContainer>
      <EloChoice session={sessionA} onChoice={sessionChoiceHandler} />
      <EloChoice session={sessionB} onChoice={sessionChoiceHandler} />
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
