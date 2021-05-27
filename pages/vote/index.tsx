import withPageMetadata, { WithPageMetadataProps } from 'components/global/withPageMetadata'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import { NextPage } from 'next'
import Router from 'next/router'
import { Main } from 'layouts/main'
import { Session } from 'config/types'
import React from 'react'
import { VoteContent } from 'components/Voting/Content'

const VotePage: NextPage<WithPageMetadataProps> = ({ pageMetadata }) => {
  const { conference } = pageMetadata
  const [sessions, setSessions] = React.useState<Session[]>([])

  React.useEffect(() => {
    async function fetchSessions() {
      try {
        const resp = await fetch(pageMetadata.appConfig.getSubmissionsUrl)
        if (!resp.ok) {
          throw resp.statusText
        }

        const data: Session[] = await resp.json()

        setSessions(data)
      } catch (err) {
        // oh no... doesn't really matter let's help the page not crash hey
      }
    }

    fetchSessions()
  }, [pageMetadata.appConfig.getSubmissionsUrl, conference])

  return (
    <Main metadata={pageMetadata} title="Vote" description={`${conference.Name} voting page.`}>
      <VoteContent conference={conference} dates={pageMetadata.dates} submissionCount={sessions.length} />
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
  return {} as WithPageMetadataProps
}

export default withPageMetadata(VotePage)
