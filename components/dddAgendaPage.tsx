import fetch from 'isomorphic-fetch'
import React from 'react'
import { Fragment } from 'react'
import { Modal } from 'react-bootstrap'
import Page from '../layouts/main'
import AllAgendas from './allAgendas'
import { SafeLink } from './global/safeLink'
import { WithPageMetadataProps } from './global/withPageMetadata'

interface DddSession {
  SessionId: string
  SessionTitle: string
  SessionAbstract: string
  RecommendedAudience?: string
  PresenterName: string
  PresenterTwitterAlias?: string
  PresenterWebsite?: string
  PresenterBio: string
}

export interface SessionCellProps {
  sessionId: string
  isKeynote?: boolean
  isLocknote?: boolean
  rowSpan?: number
}

export interface AgendaPageProps {
  SessionCell: React.StatelessComponent<SessionCellProps>
}
export interface AgendaPageParameters {
  sessionsUrl: string
  conferenceInstance: string
  numTracks: number
}
interface ExternalProps {
  sessions?: DddSession[]
}
interface AgendaState {
  sessions: DddSession[]
  isError: boolean
  isLoading: boolean
  showModal: boolean
  selectedSession: DddSession
}

const dddAgendaPage = <TOriginalProps extends {}>(
  WrappedComponent: React.ComponentType<TOriginalProps & AgendaPageProps>,
  externalProps: AgendaPageParameters,
) => {
  type ResultProps = TOriginalProps & ExternalProps & WithPageMetadataProps
  return class PageWithMetadata extends React.Component<ResultProps, AgendaState> {
    static displayName = `PageWithDDDAgenda(${WrappedComponent.displayName || WrappedComponent.name})`

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

    componentWillMount() {
      this.hideModal()

      if (this.props.sessions) {
        this.setState({
          isError: false,
          isLoading: false,
          sessions: this.props.sessions,
        })
      } else {
        this.setState({ isLoading: true, isError: false })
      }
    }

    componentDidMount() {
      if (!this.props.sessions) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this
        fetch(externalProps.sessionsUrl)
          .then(response => {
            if (response.status !== 200) {
              throw response.statusText
            }
            return response.json()
          })
          .then(body => that.setState({ sessions: body, isLoading: false }))
          .catch(error => {
            that.setState({ isError: true, isLoading: false })
            if (console) {
              // eslint-disable-next-line no-console
              console.error('Error loading sessions', error)
            }
          })
      }
    }

    selectSession(session: DddSession) {
      this.setState({
        selectedSession: session,
        showModal: true,
      })
    }

    hideModal() {
      this.setState({ showModal: false })
    }

    getSessionCell(): React.StatelessComponent<SessionCellProps> {
      const numTracks = externalProps.numTracks
      const getIsLoading = () => this.state.isLoading
      const getIsError = () => this.state.isError
      const getSession = (sessionId: string) =>
        this.state.sessions ? this.state.sessions.find(s => s.SessionId === sessionId) : null
      const onClick = this.selectSession
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this

      return props => {
        const isLoading = getIsLoading()
        const isError = getIsError()
        const session = getSession(props.sessionId)

        return (
          <td
            className={'session' + (props.isKeynote ? ' keynote' : props.isLocknote ? ' locknote' : '')}
            rowSpan={props.rowSpan ? props.rowSpan : null}
            colSpan={props.isKeynote || props.isLocknote ? numTracks : null}
            onClick={() => onClick.bind(that)(session)}
          >
            {isLoading !== false && (
              <Fragment>
                <strong>Loading...</strong>
                <br />
                <em>Loading...</em>
              </Fragment>
            )}
            {isError && (
              <Fragment>
                <br />
                <em>Error loading this session</em>
              </Fragment>
            )}
            {isLoading === false && isError === false && session && (
              <Fragment>
                <strong>
                  {props.isKeynote ? 'KEYNOTE - ' : props.isLocknote ? 'LOCKNOTE - ' : null}
                  {session.PresenterName}
                </strong>
                <br />
                <em>{session.SessionTitle}</em>
              </Fragment>
            )}
          </td>
        )
      }
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
            <p>Tap on a session to see more details...</p>

            <WrappedComponent {...this.props} SessionCell={this.getSessionCell()} />

            <AllAgendas
              conference={conference}
              dates={this.props.pageMetadata.dates}
              conferenceInstance={externalProps.conferenceInstance}
            />

            <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
              {this.state.selectedSession && (
                <Fragment>
                  <Modal.Header closeButton>
                    <Modal.Title>{this.state.selectedSession.SessionTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      {this.state.selectedSession.PresenterName}
                      {this.state.selectedSession.PresenterTwitterAlias && (
                        <Fragment>
                          {' | '}
                          {this.state.selectedSession.PresenterTwitterAlias.split(',')
                            .map(alias => alias.trim().replace(/^@/, ''))
                            .map(alias => (
                              <SafeLink
                                key={alias}
                                href={'https://twitter.com/' + alias}
                                target="_blank"
                                style={{ marginRight: '3px' }}
                              >
                                @{alias}
                              </SafeLink>
                            ))}
                        </Fragment>
                      )}
                      {this.state.selectedSession.PresenterWebsite && (
                        <Fragment>
                          {' | '}
                          {this.state.selectedSession.PresenterWebsite.split(',')
                            .map(website => website.trim())
                            .map(website => (
                              <SafeLink key={website} href={website} target="_blank" style={{ marginRight: '3px' }}>
                                {website}
                              </SafeLink>
                            ))}
                        </Fragment>
                      )}
                    </p>

                    <p className="preserve-whitespace">{this.state.selectedSession.SessionAbstract}</p>
                    {this.state.selectedSession.RecommendedAudience && (
                      <p>
                        <em>Audience:</em>{' '}
                        <small className="preserve-whitespace">{this.state.selectedSession.RecommendedAudience}</small>
                      </p>
                    )}

                    <h3>Bio</h3>
                    <p className="preserve-whitespace">{this.state.selectedSession.PresenterBio}</p>
                  </Modal.Body>
                </Fragment>
              )}
            </Modal>
          </div>
        </Page>
      )
    }
  }
}

export default dddAgendaPage
