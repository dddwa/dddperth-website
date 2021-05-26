import Router from 'next/router'
import React from 'react'
import uuid from 'uuid/v1'
import { logEvent, logException } from 'components/global/analytics'
import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import Voting from 'components/voting'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import { Conference as Conf, Session } from 'config/types'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { VoteContent } from 'components/Voting/Content'
import { Alert } from 'components/global/Alert/Alert'

interface VoteProps extends WithPageMetadataProps {
  sessions?: Session[]
}

enum StorageKeys {
  VOTING_ID = 'ddd-voting-id',
  VOTING_START_TIME = 'ddd-voting-start-time',
  VOTING_SESSION_ORDER = 'ddd-voting-session-order',
}

const storageKey = (conference: Conf, key: StorageKeys) => `${key}-${conference.Instance}`

const VotePage: NextPage<VoteProps> = ({ pageMetadata }) => {
  const conference = pageMetadata.conference
  const [pageState, setPageState] = React.useState<'loading' | 'error' | 'ready'>('loading')
  const [sessions, setSessions] = React.useState<Session[]>([])
  const [startTime, setStartTime] = React.useState<string | undefined>()
  const [voteId, setVoteId] = React.useState<string | null>()

  React.useEffect(() => {
    async function fetchSessions() {
      try {
        const sessionOrderKey = storageKey(conference, StorageKeys.VOTING_SESSION_ORDER)
        const resp = await fetch(pageMetadata.appConfig.getSubmissionsUrl)
        if (!resp.ok) {
          throw resp.statusText
        }

        let data: Session[] = await resp.json()

        if (localStorage) {
          const sessionOrder: string[] = JSON.parse(localStorage.getItem(sessionOrderKey))

          if (sessionOrder) {
            data = sessionOrder
              .map((sessionId) => data.find((session) => session.Id === sessionId))
              .filter((s) => s)
              .concat(data.filter((session) => !sessionOrder.find((id) => id === session.Id)))
          } else {
            const sessionIdOrder = JSON.stringify(data.map(({ Id }) => Id)) // Randomizing handled by GetSubmissions API
            localStorage.setItem(sessionOrderKey, sessionIdOrder)
          }
        }

        setSessions(data)
      } catch (err) {
        setPageState('error')
        logException('Error when getting sessions', err, {
          voteId: localStorage ? localStorage.getItem(storageKey(conference, StorageKeys.VOTING_ID)) : null,
        })
      }
    }

    fetchSessions()
  }, [pageMetadata.appConfig.getSubmissionsUrl, conference])

  React.useEffect(() => {
    if (sessions.length <= 0 || !localStorage) {
      return
    }

    const votingStartTimeStorageKey = storageKey(conference, StorageKeys.VOTING_START_TIME)
    const votingIdStorageKey = storageKey(conference, StorageKeys.VOTING_ID)
    const startTime = new Date().toISOString()
    let voteId = localStorage.getItem(votingIdStorageKey)

    if (!localStorage.getItem(votingStartTimeStorageKey)) {
      localStorage.setItem(votingStartTimeStorageKey, startTime)
    }

    if (!voteId) {
      voteId = uuid()
      logEvent('voting', 'voteIdGenerated', {
        id: voteId,
        startTime: localStorage.getItem(votingStartTimeStorageKey),
      })
      localStorage.setItem(votingIdStorageKey, voteId)
    } else {
      logEvent('voting', 'returnToVoting', {
        id: voteId,
      })
    }

    setStartTime(startTime)
    setVoteId(voteId)
    setPageState('ready')
  }, [sessions, conference])

  return (
    <Main metadata={pageMetadata} title="Vote" description={`${conference.Name} voting page.`}>
      <VoteContent conference={conference} dates={pageMetadata.dates} submissionCount={sessions.length} />

      {pageState === 'loading' && (
        <Alert kind="info">
          <p>Loading sessions...</p>
        </Alert>
      )}
      {pageState === 'error' && (
        <Alert kind="error">
          <p>There was an error loading sessions; please refresh the page to try again.</p>
        </Alert>
      )}

      {pageState === 'ready' && (
        <Voting
          sessions={sessions}
          startTime={startTime}
          voteId={voteId}
          minVotes={conference.MinVotes}
          maxVotes={conference.MaxVotes}
          anonymousVoting={conference.AnonymousVoting}
          submitVoteUrl={pageMetadata.appConfig.submitVoteUrl}
          conferenceInstance={conference.Instance}
          conferenceName={conference.Name}
          ticketsProvider={conference.TicketsProviderId}
          preferentialVoting={conference.PreferentialVoting}
          ticketNumberHandling={conference.TicketNumberWhileVoting}
          waitingListCanVoteWithEmail={conference.WaitingListCanVoteWithEmail}
        />
      )}
    </Main>
  )
}

VotePage.getInitialProps = ({ res }) => {
  const dates = getConferenceDates(Conference, dateTimeProvider.now())
  if (!dates.VotingOpen) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
      res.finished = true
    } else {
      Router.replace('/')
    }
  }
  return {} as VoteProps
}

export default withPageMetadata(VotePage)
