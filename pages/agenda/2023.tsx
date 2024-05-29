import React from 'react'
import AllAgendas from 'components/allAgendas'
import { Sponsors } from 'components/Sponsors/sponsors'
import { Conference2023 } from 'config/2023'
import { Session, SponsorType } from 'config/types'
import { Main } from 'layouts/agendaWide'
import { GetStaticProps, NextPage } from 'next'
import { formatInTimeZone } from 'date-fns-tz'
import dateTimeProvider from 'components/utils/dateTimeProvider'
import getConferenceDates from 'config/dates'
import { Agenda2023 } from 'components/2023agenda'
import data from 'public/static/agenda/2023.json'

interface AgendaPageProps {
  sessions?: Session[]
  sessionId?: string
}


const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, sessionId }) => {

  const [currentDate] = React.useState(dateTimeProvider.now())
  const dates = getConferenceDates(Conference2023, currentDate)

  return (
    <Main title="Agenda" description={Conference2023.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && Conference2023.Instance} Agenda</h1>

        {!dates.AgendaPublished && (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {formatInTimeZone(Conference2023.AgendaPublishedFrom, Conference2023.TimeZone, dates.DateDisplayFormat)}{' '}
            {formatInTimeZone(Conference2023.AgendaPublishedFrom, Conference2023.TimeZone, dates.TimeDisplayFormat)}. In the
            meantime, check out our previous agendas below.
          </p>
        )}
        {dates.AgendaPublished && (
          <Agenda2023
            date={Conference2023.Date}
            sessions={sessions}
            sponsors={Conference2023.Sponsors}
            acceptingFeedback={dates.AcceptingFeedback}
            feedbackLink={Conference2023.SessionFeedbackLink}
            selectedSessionId={sessionId}
          />
        )}
        {Conference2023.Handbook && (
          <React.Fragment>
            <h2>Handbook</h2>
            <p>
              <a className="btn btn-pdf" href={'/static/docs/' + Conference2023.Handbook}>
                Download handbook (PDF)
              </a>
            </p>
          </React.Fragment>
        )}
        <Sponsors
          show={!Conference2023.HideSponsors}
          hideUpsell={Conference2023.HideSponsorshipUpsell}
          sponsors={Conference2023.Sponsors.filter((s) => s.type === SponsorType.Gold || s.type === SponsorType.Platinum)}
        />
        <AllAgendas conference={Conference2023} conferenceInstance={Conference2023.Instance} dates={dates} />
      </div>
    </Main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sessions: data,
      sessionId: '',
    },
  }
}

export default AgendaPage
