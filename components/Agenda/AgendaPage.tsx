import { Session } from '../../config/types'
import { WithPageMetadataProps } from '../global/withPageMetadata'
import AllAgendas from '../allAgendas'
import { Main } from '../../layouts/main'
import React from 'react'
import { NextPage } from 'next'
import { mapSessions } from '../utils/mapSession'

export interface AgendaPageParameters {
  conferenceInstance: string
  sessionsUrl: string
  numTracks: number
}

interface AgendaState {
  sessions: Session[]
}

type PageWithAgendaProps = AgendaState & WithPageMetadataProps

export const agendaPage = (
  WrappedComponent: React.ComponentType<{ sessions: Session[] }>,
  externalProps: AgendaPageParameters,
) => {
  const PageWithAgenda: NextPage<PageWithAgendaProps> = ({ pageMetadata, sessions }) => {
    const conference = pageMetadata.conference
    const dates = pageMetadata.dates

    return (
      <Main
        title={`${externalProps.conferenceInstance} Agenda`}
        description={`The agenda for ${conference.Name} ${externalProps.conferenceInstance}.`}
        pageMetadata={pageMetadata}
      >
        <div className="container">
          <h1>{externalProps.conferenceInstance} Agenda</h1>

          <WrappedComponent sessions={sessions} />

          <AllAgendas conference={conference} dates={dates} conferenceInstance={externalProps.conferenceInstance} />
        </div>
      </Main>
    )
  }

  PageWithAgenda.getInitialProps = async ({ req }) => {
    if (req) {
      const secure = (req.connection as any).encrypted || req.headers['x-forwarded-proto'] === 'https'
      const url = externalProps.sessionsUrl.startsWith('/')
        ? 'http' + (secure ? 's' : '') + '://' + req.headers.host + externalProps.sessionsUrl
        : externalProps.sessionsUrl
      const response = await fetch(url)

      if (response.status !== 200) {
        return {} as PageWithAgendaProps
      }

      let body = await response.json()

      if (body[0].SessionId) {
        // Old session structure mapped to new session structure
        body = mapSessions(body)
      }

      return { sessions: body } as PageWithAgendaProps
    }

    return {} as PageWithAgendaProps
  }

  return PageWithAgenda
}
