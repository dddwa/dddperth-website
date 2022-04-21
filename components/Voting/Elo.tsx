import { Text } from 'components/global/text'
import { EloSession } from 'config/types'
import { useMemo } from 'react'
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
        key={sessionA.Id}
        session={sessionA}
        onChoice={() => {
          sessionChoiceHandler(sessionA.Id)
        }}
      />
      <EloChoice
        key={sessionB.Id}
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

  const abstract = session.Abstract
  const paragraphs = useMemo(() => abstract.split('\n').filter((para) => !!para), [abstract])

  return (
    <StyledEloChoice variant={variant}>
      <StyledSessionTitle>{session.Title}</StyledSessionTitle>
      <StyledSessionAbstract>
        {paragraphs.map((para) => (
          <Text key={para}>{para}</Text>
        ))}
      </StyledSessionAbstract>
      <StyledVoteButton kind={variant} type="button" onClick={onVoteClick}>
        Pick Me
      </StyledVoteButton>
    </StyledEloChoice>
  )
}
