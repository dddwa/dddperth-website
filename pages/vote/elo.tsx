import { GetServerSideProps } from 'next'
import { v4 as uuid } from 'uuid'
import { EloVote } from 'components/Voting/Elo'
import { EloSession } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useReducer, useState } from 'react'
import { getSessionId } from 'components/global/analytics'
import { logEvent, logException } from 'components/global/analytics'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import {
  LayoutVariant,
  StyledEloButtonContainer,
  StyledEloVoteFooter,
  StyledLayoutLabel,
  StyledVoteButton,
} from 'components/Voting/EloVote.styled'
import { PRIVACY_ACCEPTED, ELO_VOTING_SESSION_ID } from 'components/Voting//VoteConst'
import Cookies from 'js-cookie'

const LAYOUT_COOKIE = 'ddd-vote-layout'

type SessionPair = {
  SubmissionA: EloSession
  SubmissionB: EloSession
}

type EloProps = {
  sessions: SessionPair
  userDefinedLayout?: LayoutVariant
  votingSessionId: string
}

async function fetchPair(sessionId: string, sessionIdHeaderName = 'X-DDDPerth-VotingSessionId') {
  const resp = await fetch(process.env.NEXT_PUBLIC_ELO_PAIR, {
    headers: {
      [sessionIdHeaderName]: sessionId,
    },
  })
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
  } catch (e) {
    logException('Error submitting vote', e, { sessionId: body.VoterSessionId })
  }
}

export default function Elo({ sessions, votingSessionId, userDefinedLayout = 'stacked' }: EloProps): JSX.Element {
  const { conference } = useConfig()
  const [sessionPair, setSessionPair] = useState<SessionPair>(sessions)
  const [nextPair, setNextPair] = useState<SessionPair | undefined>(undefined)
  const [layoutVariant, setLayoutVariant] = useState<LayoutVariant>(userDefinedLayout)

  useEffect(() => {
    // the cookie is used for reloads, it is read in `getServerSideProps`
    Cookies.set(ELO_VOTING_SESSION_ID, votingSessionId, { expires: 1 /* 1 day */ })
  }, [votingSessionId])

  // this is effectively a "force update" to fetch another pair
  const [next, getNext] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    Cookies.set(LAYOUT_COOKIE, layoutVariant, { expires: conference.VotingOpenUntil })
    logEvent('voting', 'layout', { variant: layoutVariant })
  }, [layoutVariant, conference.VotingOpenUntil])

  useEffect(() => {
    async function getPair() {
      const data = await fetchPair(votingSessionId)
      setNextPair(data)
    }

    if (typeof nextPair === 'undefined') {
      getPair()
    }
  }, [next, nextPair, votingSessionId])

  async function sessionChoiceHandler(winningSession: EloSession, losingSession: EloSession, isDraw = false) {
    await postPair(winningSession.Id, losingSession.Id, isDraw)
    logEvent('voting', 'vote', {
      variant: layoutVariant,
      winningVote: winningSession.Id,
      losingSession: losingSession.Id,
      sessionA: sessionPair.SubmissionA.Id,
      sessionB: sessionPair.SubmissionB.Id,
      isDraw,
      votingSessionId,
    })

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
        layout={layoutVariant}
      />

      <StyledEloVoteFooter>
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
        <StyledLayoutLabel>
          <input
            type="checkbox"
            onChange={() => {
              setLayoutVariant((value) => (value === 'expanded' ? 'stacked' : 'expanded'))
            }}
          />
          Change layout? <span>{layoutVariant === 'stacked' ? 'Expand abstracts' : 'Stack talks'}</span>
        </StyledLayoutLabel>
      </StyledEloVoteFooter>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps<EloProps> = async (context) => {
  const { dates } = getCommonServerSideProps(context)
  const isPrivacyAccepted = Boolean(context.req.cookies[PRIVACY_ACCEPTED])
  const layoutCookie = context.req.cookies[LAYOUT_COOKIE]

  // if we don't have the cookie, initialise the value and it'll be passed to the frontend
  const votingSessionId = context.req.cookies[ELO_VOTING_SESSION_ID] ?? uuid()

  const validLayouts: LayoutVariant[] = ['expanded', 'stacked']
  const userDefinedLayout: LayoutVariant = [...(validLayouts as string[])].includes(layoutCookie)
    ? (layoutCookie as LayoutVariant)
    : 'stacked'

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

  const data = await fetchPair(votingSessionId)

  return {
    props: {
      sessions: data,
      userDefinedLayout,
      votingSessionId,
    },
  }
}
