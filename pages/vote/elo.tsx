import { Button } from 'components/global/Button/Button'
import { EloVote } from 'components/Voting/Elo'
import { EloSession, Session } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useState } from 'react'

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

  function sessionChoiceHandler(session?: Session) {
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/eloVote`, {
        method: 'POST',
        body: JSON.stringify(session),
      })
    }

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
            sessionChoiceHandler()
          }}
        >
          Neither
        </Button>
      </div>
    </Main>
  )
}

export async function getServerSideProps() {
  const data = await fetchPair()

  return {
    props: {
      sessions: data,
    },
  }
}
