import { Session } from 'config/types'
import { useEffect, useState } from 'react'

type EloProps = {
  sessions: [Session, Session]
}

async function fetchPair() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/eloPair`)
  const data = await resp.json()

  return data
}

export default function Elo({ sessions }: EloProps) {
  const [sessionPair, setSessionPair] = useState<[Session, Session]>(sessions)
  const [nextPair, setNextPair] = useState<[Session, Session] | []>([])

  useEffect(() => {
    async function getPair() {
      const data = await fetchPair()
      setNextPair(data)
    }

    if (nextPair.length === 0) {
      getPair()
    }
  }, [nextPair])

  function onChoiceClick(session?: Session) {
    if (session) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/eloVote`, {
        method: 'POST',
        body: JSON.stringify(session),
      })
    }

    if (nextPair.length === 2) {
      setSessionPair(nextPair)
      setNextPair([])
    }
  }

  return (
    <div>
      <h1>Elo vote</h1>
      <SessionChoice session={sessionPair[0]} onChoice={onChoiceClick} />
      <SessionChoice session={sessionPair[1]} onChoice={onChoiceClick} />

      <button
        type="button"
        onClick={() => {
          onChoiceClick()
        }}
      >
        Neither
      </button>
    </div>
  )
}

function SessionChoice({ session, onChoice }: { session: Session; onChoice: (session: Session) => void }) {
  function onVoteClick() {
    onChoice(session)
  }

  return (
    <div>
      <h3>{session.Title}</h3>
      <div>{session.Abstract}</div>
      <button type="button" onClick={onVoteClick}>
        Vote
      </button>
    </div>
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
