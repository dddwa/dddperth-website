import { EloSession } from 'config/types'
import {
  StyledEloVoteContainer,
  StyledEloChoice,
  StyledSessionTitle,
  StyledSessionAbstract,
  StyledEloTagList,
  StyledEloTag,
  LayoutVariant,
  StyledAbstractText,
} from './EloVote.styled'

type EloVoteProps = {
  sessionA: EloSession
  sessionB: EloSession
  layout: LayoutVariant
  onSessionChoice: (winningSession: EloSession, losingSession: EloSession) => void
}

export function EloVote({ sessionA, sessionB, layout, onSessionChoice }: EloVoteProps): JSX.Element {
  function sessionChoiceHandler(session: EloSession['Id']) {
    const winner = session === sessionA.Id ? sessionA : sessionB
    const loser = session === sessionA.Id ? sessionB : sessionA
    onSessionChoice(winner, loser)
  }

  return (
    <StyledEloVoteContainer variant={layout}>
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

function EloChoice({ session, variant = 'primary' }: EloChoiceProps) {
  return (
    <StyledEloChoice variant={variant}>
      <StyledSessionTitle>
        {variant == 'primary' ? 'Option 1' : 'Option 2'}: {session.Title}
      </StyledSessionTitle>
      {session.Tags.length > 0 ? (
        <StyledEloTagList>
          {session.Tags.map((tag) => (
            <StyledEloTag key={tag}>{tag}</StyledEloTag>
          ))}
        </StyledEloTagList>
      ) : null}
      <StyledSessionAbstract>
        <StyledAbstractText tag="div">{session.Abstract}</StyledAbstractText>
      </StyledSessionAbstract>
    </StyledEloChoice>
  )
}
