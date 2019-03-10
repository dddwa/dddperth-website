import fetch from 'isomorphic-fetch'
import React from 'react'
import { Session, Sponsor } from '../config/types'
import Page from '../layouts/main'
import Agenda, { AgendaProps } from './agenda'
import AllAgendas from './allAgendas'

import { WithPageMetadataProps } from './global/withPageMetadata'

export interface SessionCellProps {
  sessionId: string
  isKeynote?: boolean
  isLocknote?: boolean
  isLunchnote?: boolean
  rowSpan?: number
  sponsorName?: string
  room?: string
}

export interface AgendaPageProps {
  SessionCell: React.StatelessComponent<SessionCellProps>
}
export interface AgendaPageParameters {
  sessionsUrl: string
  conferenceInstance: string
  numTracks: number
  sponsors: Sponsor[]
}
interface ExternalProps {
  sessions?: Session[]
}
interface AgendaState {
  sessions: Session[]
  isError: boolean
  isLoading: boolean
  showModal: boolean
  selectedSession: Session
}

const agendaPage = <TOriginalProps extends {}>(
  WrappedComponent: React.ComponentType<TOriginalProps & AgendaPageProps>,
  externalProps: AgendaPageParameters,
) => {
  type ResultProps = TOriginalProps & ExternalProps & WithPageMetadataProps
  return class PageWithAgenda extends React.Component<ResultProps, AgendaState> {
    static displayName = `PageWithAgenda(${WrappedComponent.displayName || WrappedComponent.name})`
    static AgendaContents = Agenda(WrappedComponent, externalProps)

    static async getInitialProps({ req }) {
      if (req) {
        const secure = (req.connection as any).encrypted || req.headers['x-forwarded-proto'] === 'https'
        const url = externalProps.sessionsUrl.startsWith('/')
          ? 'http' + (secure ? 's' : '') + '://' + req.headers.host + externalProps.sessionsUrl
          : externalProps.sessionsUrl
        const response = await fetch(url)

        if (response.status !== 200) {
          return {}
        }

        const body = await response.json()
        return { sessions: body }
      }

      return {}
    }

    constructor(props: ResultProps) {
      super(props)
    }

    render() {
      const conference = this.props.pageMetadata.conference
      return (
        <Page
          title={`${externalProps.conferenceInstance} Agenda`}
          description={`The agenda for ${conference.Name} ${externalProps.conferenceInstance}.`}
          pageMetadata={this.props.pageMetadata}
        >
          <div className="container">
            <h1>{externalProps.conferenceInstance} Agenda</h1>

            <PageWithAgenda.AgendaContents
              sessions={this.props.sessions}
              previousConferenceInstances={this.props.pageMetadata.conference.PreviousInstances}
              sessionsUrl={externalProps.sessionsUrl}
              sponsors={externalProps.sponsors}
            />

            <AllAgendas
              conference={conference}
              dates={this.props.pageMetadata.dates}
              conferenceInstance={externalProps.conferenceInstance}
            />
          </div>
        </Page>
      )
    }
  }
}

export default agendaPage
