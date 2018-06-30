import fetch from 'isomorphic-fetch'
import React from 'react'
import { Fragment } from 'react'
import { Modal } from 'react-bootstrap'
import { Session } from '../config/types'
import SessionDetails from './sessionDetails'

export interface SessionCellProps {
  sessionId: string
  isKeynote?: boolean
  isLocknote?: boolean
  isLunchnote?: boolean
  rowSpan?: number
}

export interface AgendaProps {
  SessionCell: React.StatelessComponent<SessionCellProps>
}
export interface AgendaParameters {
  numTracks: number
}
interface ExternalProps {
  previousConferenceInstances: string[]
  sessionsUrl: string
  sessions?: Session[]
}
interface AgendaState {
  sessions: Session[]
  isError: boolean
  isLoading: boolean
  showModal: boolean
  selectedSession: Session
}

const agenda = (WrappedComponent: React.ComponentType<AgendaProps>, externalProps: AgendaParameters) => {
  type ResultProps = ExternalProps
  return class Agenda extends React.Component<ResultProps, AgendaState> {
    static displayName = `Agenda(${WrappedComponent.displayName || WrappedComponent.name})`

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
        const that = this
        fetch(this.props.sessionsUrl)
          .then(response => {
            if (!response.ok) {
              throw response.statusText
            }
            return response.json()
          })
          .then(body => that.setState({ sessions: body, isLoading: false }))
          .catch(error => {
            that.setState({ isError: true, isLoading: false })
            if (console) {
              // tslint:disable-next-line:no-console
              console.error('Error loading sessions', error)
            }
          })
      }
    }

    selectSession(session: Session) {
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
        this.state.sessions ? this.state.sessions.find(s => s.Id === sessionId) : null
      const onClick = this.selectSession
      const that = this

      return props => {
        const isLoading = getIsLoading()
        const isError = getIsError()
        const session = getSession(props.sessionId)

        return (
          <td
            className={
              'session' +
              (!props.isKeynote && !props.isLocknote && !props.isLunchnote ? ` session-${numTracks}` : '') +
              (props.isKeynote ? ' keynote' : props.isLocknote ? ' locknote' : props.isLunchnote ? ' lunchnote' : '')
            }
            rowSpan={props.rowSpan ? props.rowSpan : null}
            colSpan={props.isKeynote || props.isLocknote || props.isLunchnote ? numTracks : null}
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
            {isLoading === false &&
              isError === false &&
              session && (
                <Fragment>
                  <strong>
                    {props.isKeynote
                      ? 'KEYNOTE - '
                      : props.isLocknote
                        ? 'LOCKNOTE - '
                        : props.isLunchnote
                          ? 'LUNCHNOTE - '
                          : null}
                    {session.Presenters.map(p => p.Name).join(', ')}
                  </strong>
                  <br />
                  <em>{session.Title}</em>
                </Fragment>
              )}
          </td>
        )
      }
    }

    render() {
      return (
        <Fragment>
          <p>Tap on a session to see more details...</p>

          <WrappedComponent {...this.props} SessionCell={this.getSessionCell()} />

          <Modal show={this.state.showModal} onHide={() => this.hideModal()}>
            {this.state.selectedSession && (
              <Fragment>
                <Modal.Header closeButton>
                  <Modal.Title>{this.state.selectedSession.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SessionDetails
                    session={this.state.selectedSession}
                    showPresenter={true}
                    hideTags={false}
                    showBio={true}
                    hideLevelAndFormat={false}
                  />
                </Modal.Body>
              </Fragment>
            )}
          </Modal>
        </Fragment>
      )
    }
  }
}

export default agenda
