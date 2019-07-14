import fetch from 'isomorphic-fetch'
import Router from 'next/router'
import React from 'react'
import authentication from 'react-azure-adb2c'
import AllAgendas from '../components/allAgendas'
import { CurrentAgenda } from '../components/currentAgenda'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import Sponsors from '../components/sponsors'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session, SponsorType } from '../config/types'
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

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Agenda"
        hideBanner={true}
        description={conference.Name + ' agenda.'}
      >
        <div className="container">
          <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

          <button onClick={() => authentication.run()}>Login</button>
          {authentication.getAccessToken()}

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
              date={Conference.Date}
              sessions={this.props.sessions}
              sessionsUrl={this.props.pageMetadata.appConfig.getAgendaUrl}
              sponsors={this.props.pageMetadata.conference.Sponsors}
              acceptingFeedback={dates.AcceptingFeedback}
              feedbackLink={conference.SessionFeedbackLink}
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
            show={!this.props.pageMetadata.conference.HideSponsors}
            hideUpsell={this.props.pageMetadata.conference.HideSponsorshipUpsell}
            sponsors={this.props.pageMetadata.conference.Sponsors.filter(
              s => s.type === SponsorType.Gold || s.type === SponsorType.Platinum,
            )}
          />
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
