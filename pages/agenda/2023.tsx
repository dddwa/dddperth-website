import React from 'react'
import AllAgendas from 'components/allAgendas'
import { Sponsors } from 'components/Sponsors/sponsors'
import { fetchSessions } from 'components/utils/useSessions'
import conference from 'config/2023'
import { Session, SponsorType } from 'config/types'
import { Main } from 'layouts/agendaWide'
import { GetServerSideProps, NextPage } from 'next'
import { formatInTimeZone } from 'date-fns-tz'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import getConferenceDates from 'config/dates'
import { Agenda2023 } from 'components/2023agenda'

interface AgendaPageProps {
  sessions?: Session[]
  sessionId?: string
}

const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, sessionId }) => {
  const [currentDate] = React.useState(dateTimeProvider.now())
  const dates = getConferenceDates(conference, currentDate)

  return (
    <Main title="Agenda" description={conference.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

        {!dates.AgendaPublished && (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.DateDisplayFormat)}{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.TimeDisplayFormat)}. In the
            meantime, check out our previous agendas below.
          </p>
        )}
        {dates.AgendaPublished && (
          <Agenda2023
            date={conference.Date}
            sessions={sessions}
            sponsors={conference.Sponsors}
            acceptingFeedback={dates.AcceptingFeedback}
            feedbackLink={conference.SessionFeedbackLink}
            selectedSessionId={sessionId}
          />
        )}
        {conference.Handbook && (
          <React.Fragment>
            <h2>Handbook</h2>
            <p>
              <a className="btn btn-pdf" href={'/static/docs/' + conference.Handbook}>
                Download handbook (PDF)
              </a>
            </p>
          </React.Fragment>
        )}
        <Sponsors
          show={!conference.HideSponsors}
          hideUpsell={conference.HideSponsorshipUpsell}
          sponsors={conference.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
        <AllAgendas conference={conference} conferenceInstance={conference.Instance} dates={dates} />
      </div>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const { dates } = getCommonServerSideProps(context)

  // if (!dates.VotingFinished) {
  //   return { redirect: { destination: `/agenda/${Conference.PreviousInstance}`, permanent: false } }
  // }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)
  const sessionId = context.query.sessionId

  return {
    props: {
      ...(sessions ? { sessions } : {}),
      ...(sessionId ? { sessionId } : {}),
    },
  }
}

export default AgendaPage
