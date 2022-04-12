import React from 'react'
import AllAgendas from 'components/allAgendas'
import { CurrentAgenda } from 'components/currentAgenda'
import { Sponsors } from 'components/Sponsors/sponsors'
import { fetchSessions } from 'components/utils/useSessions'
import Conference from 'config/conference'
import { Session, SponsorType } from 'config/types'
import { Main } from 'layouts/main'
import { format } from 'date-fns'
import { GetServerSideProps, NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'

interface AgendaPageProps {
  sessions?: Session[]
  sessionId?: string
}

const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, sessionId }) => {
  const { conference, dates } = useConfig()

  return (
    <Main title="Agenda" description={conference.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

        {!dates.AgendaPublished && (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {format(conference.AgendaPublishedFrom, dates.DateDisplayFormat)}{' '}
            {format(conference.AgendaPublishedFrom, dates.TimeDisplayFormat)}. In the meantime, check out our previous
            agendas below.
          </p>
        )}
        {dates.AgendaPublished && (
          <CurrentAgenda
            date={Conference.Date}
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
  const { dates } = getCommonServerSideProps(context)

  if (!dates.VotingFinished) {
    return { redirect: { destination: `/agenda/${Conference.PreviousInstance}`, permanent: false } }
  }

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
