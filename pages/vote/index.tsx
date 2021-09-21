import dateTimeProvider from 'components/utils/dateTimeProvider'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import { GetServerSideProps, NextPage } from 'next'
import { Main } from 'layouts/main'
import { Session } from 'config/types'
import React from 'react'
import { VoteContent } from 'components/Voting/Content'
import { useConfig } from 'Context/Config'

type VotePageProps = {
  sessions: Session[]
}

const VotePage: NextPage<VotePageProps> = ({ sessions }) => {
  const { conference, dates } = useConfig()

  return (
    <Main title="Vote" description={`${conference.Name} voting page.`}>
      <VoteContent conference={conference} dates={dates} submissionCount={sessions.length} />
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const dates = getConferenceDates(Conference, dateTimeProvider.now())
  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  const resp = await fetch(process.env.NEXT_PUBLIC_GET_SUBMISSIONS_URL)
  const sessions = await resp.json()

  if (!resp.ok) {
    return { props: { sessions: [] } }
  }

  return { props: { sessions } }
}

export default VotePage
