import React from 'react'
import AllAgendas from 'components/allAgendas'
import { CurrentAgenda } from 'components/currentAgenda'
import { Sponsors } from 'components/Sponsors/sponsors'
import { fetchSessions } from 'components/utils/useSessions'
import Conference from 'config/conference'
import { Session, SponsorType } from 'config/types'
import { Main } from 'layouts/agendaWide'
import { GetServerSideProps, NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { formatInTimeZone } from 'date-fns-tz'
import { DynamicAgenda } from 'components/dynamicAgenda'
import { AgendaForDisplay, mapGridSmartToAgendaDisplay } from 'components/Agenda/gridSmartUtils'
import { with2022Overrides } from './agenda/2022'

const USE_DYNAMIC_AGENDA = true

interface AgendaPageProps {
  agenda?: AgendaForDisplay
  sessions?: Session[]
  sessionId?: string
}

const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, agenda, sessionId }) => {
  const { conference, dates } = useConfig()

  return (
    <Main title="Agenda" description={conference.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

        {!dates.AgendaPublished ? (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.DateDisplayFormat)}{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.TimeDisplayFormat)}. In the
            meantime, check out our previous agendas below.
          </p>
        ) : USE_DYNAMIC_AGENDA ? (
          <DynamicAgenda
            agenda={agenda}
            sessions={sessions}
            sponsors={conference.Sponsors}
            acceptingFeedback={dates.AcceptingFeedback}
            feedbackLink={conference.SessionFeedbackLink}
            selectedSessionId={sessionId}
          />
        ) : (
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

export const getServerSideProps: GetServerSideProps<AgendaPageProps> = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.VotingFinished) {
    return { redirect: { destination: `/agenda/${Conference.PreviousInstance}`, permanent: false } }
  }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)

  let agenda: false | AgendaForDisplay = false
  try {
    const resp = await fetch(process.env.NEXT_PUBLIC_GET_AGENDA_SCHEDULE_URL)
    if (resp.ok) {
      const json = await resp.json()
      const parsed = JSON.parse(json)
      agenda = mapGridSmartToAgendaDisplay(parsed)
      agenda = with2022Overrides(agenda)
    }
  } catch (e) {
    // no agenda, so we'll show the "wait for agenda" screen
  }

  const sessionId = context.query.sessionId as string

  return {
    props: {
      ...(sessions ? { sessions } : {}),
      ...(sessionId ? { sessionId } : {}),
      ...(agenda ? { agenda } : {}),
    },
  }
}

export default AgendaPage
