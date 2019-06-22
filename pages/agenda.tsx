import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import React from 'react'
import AllAgendas from '../components/allAgendas'
import CurrentAgenda from '../components/currentAgenda'
import { SafeLink } from '../components/global/safeLink'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface AgendaPageProps extends WithPageMetadataProps {
  sessions?: Session[]
}

class AgendaPage extends React.Component<AgendaPageProps> {
  static async getInitialProps({ req, res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.VotingFinished) {
      if (res) {
        res.writeHead(302, {
          Location: '/agenda/' + Conference.PreviousInstance,
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/agenda/' + Conference.PreviousInstance)
      }
    }

    if (req) {
      const response = await fetch(process.env.GET_AGENDA_URL)
      if (!response.ok) {
        return {}
      }

      const body = await response.json()
      return { sessions: body as Session[] }
    }

    return {}
  }
  render() {
    const conference = this.props.pageMetadata.conference
    const dates = this.props.pageMetadata.dates

    const AfterSessionDetails = (s: Session) => {
      return dates.AcceptingFeedback ? (
        <>
          <p className="text-center">
            <SafeLink className="btn btn-secondary" target="_blank" href={conference.SessionFeedbackLink}>
              Give feedback
            </SafeLink>
          </p>
        </>
      ) : null
    }

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Agenda"
        hideBanner={true}
        description={conference.Name + ' agenda.'}
      >
        <div className="container">
          <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

          {!dates.AgendaPublished && (
            <p>
              The agenda has not yet been finalised; please come back on{' '}
              {conference.AgendaPublishedFrom.format(dates.DateDisplayFormat)}{' '}
              {conference.AgendaPublishedFrom.format(dates.TimeDisplayFormat)}. In the meantime, check out our previous
              agendas below.
            </p>
          )}
          {dates.AgendaPublished && (
            <CurrentAgenda
              sessions={this.props.sessions}
              previousConferenceInstances={this.props.pageMetadata.conference.PreviousInstances}
              sessionsUrl={this.props.pageMetadata.appConfig.getAgendaUrl}
              sponsors={this.props.pageMetadata.conference.Sponsors}
              afterSessionDetails={AfterSessionDetails}
            />
          )}
          {conference.Handbook && (
            <>
              <h2>Handbook</h2>
              <p>
                <a className="btn btn-pdf" href={'/static/docs/' + conference.Handbook}>
                  Download handbook (PDF)
                </a>
              </p>
            </>
          )}
          <AllAgendas
            conference={this.props.pageMetadata.conference}
            conferenceInstance={this.props.pageMetadata.conference.Instance}
            dates={this.props.pageMetadata.dates}
          />
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(AgendaPage)
