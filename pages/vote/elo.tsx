import { GetServerSideProps } from 'next'
import { EloVote } from 'components/Voting/Elo'
import { EloSession } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useReducer, useState } from 'react'
import { getSessionId } from 'components/global/analytics'
import { logEvent, logException } from 'components/global/analytics'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { StyledEloButtonContainer, StyledEloLayoutSwitch, StyledVoteButton } from 'components/Voting/EloVote.styled'
import { PRIVACY_ACCEPTED } from 'components/Voting//VoteConst'
import { Button } from 'components/global/Button/Button'
import { Text } from 'components/global/text'

type SessionPair = {
  SubmissionA: EloSession
  SubmissionB: EloSession
}

type EloProps = {
  sessions: SessionPair
}

async function fetchPair() {
  const resp = await fetch(process.env.NEXT_PUBLIC_ELO_PAIR)
  const data = await resp.json()

  return data
}

async function postPair(winningSessionId: string, losingSessionId: string, isDraw: boolean) {
  const headers = {
    'Content-Type': 'application/json',
  }

  const body = {
    WinnerSessionId: winningSessionId,
    LoserSessionId: losingSessionId,
    IsDraw: isDraw,
    VoterSessionId: getSessionId(),
  }

  try {
    fetch(`${process.env.NEXT_PUBLIC_ELO_VOTE}`, {
      method: 'POST',
      redirect: 'follow',
      headers,
      body: JSON.stringify(body),
    })
    logEvent('voting', 'elo', { sessionId: body.VoterSessionId })
  } catch (e) {
    logException('Error submitting vote', e, { sessionId: body.VoterSessionId })
  }
}

export default function Elo({ sessions }: EloProps): JSX.Element {
  const { conference } = useConfig()

  const [sideBySide, setSideBySide] = useState(true)

  const [sessionPair, setSessionPair] = useState<SessionPair>(sessions)
  const [nextPair, setNextPair] = useState<SessionPair | undefined>(undefined)

  // this is effectively a "force update" to fetch another pair
  const [next, getNext] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    async function getPair() {
      const data = await fetchPair()
      setNextPair(data)
    }

    if (typeof nextPair === 'undefined') {
      getPair()
    }
  }, [next, nextPair])

  async function sessionChoiceHandler(winningSession: EloSession, losingSession: EloSession, isDraw = false) {
    await postPair(winningSession.Id, losingSession.Id, isDraw)

    if (typeof nextPair !== 'undefined') {
      setSessionPair(nextPair)
      setNextPair(undefined)
    } else {
      // nextPair was undefined (e.g. because it failed to fetch)
      // so force it to fetch another
      getNext()
    }
  }

  return (
    <Main title="Vote" description={`${conference.Name} voting page.`} showActionBar={false}>
      <EloVote
        key={sessionPair.SubmissionA.Id + sessionPair.SubmissionB.Id}
        sessionA={sessionPair.SubmissionA}
        sessionB={sessionPair.SubmissionB}
        onSessionChoice={sessionChoiceHandler}
        sideBySide={sideBySide}
      />

      <StyledEloButtonContainer>
        <StyledVoteButton
          kind="primary"
          position="left"
          onClick={(e) => {
            e.currentTarget.blur()
            window.scrollTo(0, 0)
            sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, false)
          }}
        >
          Option 1
        </StyledVoteButton>
        <StyledVoteButton
          kind="tertiary"
          position="centre"
          onClick={(e) => {
            e.currentTarget.blur()
            window.scrollTo(0, 0)
            sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, true)
          }}
        >
          It's a Draw!
        </StyledVoteButton>
        <StyledVoteButton
          kind="secondary"
          position="right"
          onClick={(e) => {
            e.currentTarget.blur()
            window.scrollTo(0, 0)
            sessionChoiceHandler(sessionPair.SubmissionB, sessionPair.SubmissionA, false)
          }}
        >
          Option 2
        </StyledVoteButton>
      </StyledEloButtonContainer>
      <StyledEloLayoutSwitch>
        <Text textAlign="center">
          {sideBySide ? 'Prefer a different layout? ' : ''}
          <Button kind="link" onClick={() => setSideBySide((s) => !s)}>
            {sideBySide ? 'Try a stacked layout' : 'Go back to side-by-side'}
          </Button>
        </Text>
      </StyledEloLayoutSwitch>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)
  const isPrivacyAccepted = Boolean(context.req.cookies[PRIVACY_ACCEPTED])

  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  if (!isPrivacyAccepted) {
    return {
      redirect: {
        destination: '/vote',
        permanent: false,
      },
    }
  }

  const data = await fetchPair()

  return {
    props: {
      sessions: data,
    },
  }
}
