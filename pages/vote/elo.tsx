import { GetServerSideProps } from 'next'
import { EloVote } from 'components/Voting/Elo'
import { EloSession } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useState } from 'react'
import { getSessionId } from 'components/global/analytics'
import { logEvent, logException } from 'components/global/analytics'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { StyledDrawButton } from 'components/Voting/EloVote.styled'
import { PRIVACY_ACCEPTED } from 'components/Voting//VoteConst'

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
  const [sessionPair, setSessionPair] = useState<SessionPair>(sessions)
  const [nextPair, setNextPair] = useState<SessionPair | undefined>(undefined)

  useEffect(() => {
    async function getPair() {
      const data = await fetchPair()
      setNextPair(data)
    }

    if (typeof nextPair === 'undefined') {
      getPair()
    }
  }, [nextPair])

  async function sessionChoiceHandler(winningSession: EloSession, losingSession: EloSession, isDraw = false) {
    await postPair(winningSession.Id, losingSession.Id, isDraw)

    if (typeof nextPair !== 'undefined') {
      setSessionPair(nextPair)
      setNextPair(undefined)
    }
  }

  return (
    <Main title="Vote" description={`${conference.Name} voting page.`}>
      <EloVote
        sessionA={sessionPair.SubmissionA}
        sessionB={sessionPair.SubmissionB}
        onSessionChoice={sessionChoiceHandler}
      />

      <StyledDrawButton
        kind="link"
        type="button"
        onClick={() => {
          sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, true)
        }}
      >
        It's a Draw!
      </StyledDrawButton>
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
