import { Button } from 'components/global/Button/Button'
import { EloVote } from 'components/Voting/Elo'
import { EloSession } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useState } from 'react'
import { getSessionId } from 'components/global/analytics'
import getConferenceDates from 'config/dates'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import Conference from 'config/conference'
import { logEvent, logException } from 'components/global/analytics'

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

      <div>
        <Button
          kind="tertiary"
          type="button"
          onClick={() => {
            sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, true)
          }}
        >
          Neither
        </Button>
      </div>
    </Main>
  )
}

export async function getServerSideProps() {
  const dates = getConferenceDates(Conference, dateTimeProvider.now())
  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  const data = await fetchPair()

  return {
    props: {
      sessions: data,
    },
  }
}
