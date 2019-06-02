import moment from 'moment'
import React, { Fragment } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { Panel, PanelGroup } from 'react-bootstrap'
import ReactResponsiveSelect from 'react-responsive-select/dist/ReactResponsiveSelect'
import { getSessionId, logException } from '../components/global/analytics'
import { SessionPanel } from '../components/Voting/sessionPanel'
import TagCloud from '../components/tagCloud'
import '../components/utils/arrayExtensions'
import { Session, TicketNumberWhileVoting, TicketsProvider } from '../config/types'
import { logEvent } from './global/analytics'
import { StyledVotingPanel } from './Voting/Voting.styled'

type SessionId = Session['Id']
type Views = 'all' | 'shortlist' | 'votes'

interface VotingState {
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
  flagged: string[]
  shortlist: SessionId[]
  votes: SessionId[]
  show: Views
  ticketNumber: string
  submitInProgress: boolean
  submitError: boolean
  submitted: boolean
}

interface VotingProps {
  conferenceName: string
  ticketsProvider: TicketsProvider
  anonymousVoting: boolean
  preferentialVoting: boolean
  ticketNumberHandling: TicketNumberWhileVoting
  sessions: Session[]
  submitVoteUrl: string
  maxVotes: number
  minVotes: number
  startTime: string
  voteId: string
}

const reorder = (list: SessionId[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default class Voting extends React.PureComponent<VotingProps, VotingState> {
  componentWillMount() {
    this.setState({
      flagged: [],
      formatFilters: [],
      formats: this.props.sessions
        .map(s => s.Format)
        .unique()
        .sort(),
      levelFilters: [],
      levels: this.props.sessions
        .map(s => s.Level)
        .unique()
        .sort(),
      shortlist: [],
      show: 'all',
      submitError: false,
      submitInProgress: false,
      submitted: false,
      tagFilters: [],
      tags: this.props.sessions
        .selectMany(s => s.Tags)
        .unique()
        .sort(),
      votes: [],
    })
  }

  componentDidMount() {
    this.setState({
      flagged: this.readFromStorage('ddd-voting-session-flagged'),
      shortlist: this.readFromStorage('ddd-voting-session-shortlist'),
      submitted: this.readFromStorage('ddd-voting-submitted') === 'true',
      votes: this.readFromStorage('ddd-voting-session-votes'),
    })
  }

  toggleExpandAll() {
    this.setState({ expandAll: !this.state.expandAll })
  }

  show(whatToShow: Views) {
    this.setState({ show: whatToShow })
  }

  isInShortlist(session: Session) {
    return this.state.shortlist.includes(session.Id)
  }

  toggleShortlist(session: Session) {
    logEvent('voting', this.isInShortlist(session) ? 'unshortlist' : 'shortlist', {
      id: this.props.voteId,
      sessionId: session.Id,
    })
    this.setState(
      {
        shortlist: this.isInShortlist(session)
          ? this.state.shortlist.without(session.Id)
          : [...this.state.shortlist, session.Id],
      },
      () => this.writeToStorage('ddd-voting-session-shortlist', this.state.shortlist),
    )
  }

  isFlagged(session: Session) {
    return this.state.flagged.includes(session.Id)
  }

  toggleFlagged(session: Session) {
    logEvent('voting', this.isFlagged(session) ? 'unflag' : 'flag', { sessionId: session.Id, id: this.props.voteId })
    this.setState(
      {
        flagged: this.isFlagged(session) ? this.state.flagged.without(session.Id) : [...this.state.flagged, session.Id],
      },
      () => this.writeToStorage('ddd-voting-session-flagged', this.state.flagged),
    )
  }

  isVotedFor(session: Session) {
    return this.state.votes.includes(session.Id)
  }

  toggleVote(session: Session) {
    logEvent('voting', this.isVotedFor(session) ? 'unvote' : 'vote', { sessionId: session.Id, id: this.props.voteId })
    this.setState(
      {
        votes: this.isVotedFor(session) ? this.state.votes.without(session.Id) : [...this.state.votes, session.Id],
      },
      () => this.writeToStorage('ddd-voting-session-votes', this.state.votes),
    )
  }

  writeToStorage(key: string, value: string | string[]) {
    if (localStorage) {
      if (value instanceof String) {
        localStorage.setItem(key, value as string)
      }
      localStorage.setItem(key, JSON.stringify(value))
    }
  }

  readFromStorage(key: string) {
    if (localStorage) {
      const data = localStorage.getItem(key)
      if (data != null) {
        return JSON.parse(data)
      }
    }
    return []
  }

  onDragEnd(result: DropResult) {
    this.setState({
      votes: reorder(this.state.votes, result.source.index, result.destination.index),
    })
  }

  async submit() {
    const vote = {
      Id: this.props.voteId,
      Indices: this.state.votes.map(id => this.props.sessions.indexOf(this.props.sessions.find(s => s.Id === id)) + 1),
      SessionIds: this.state.votes,
      TicketNumber: this.state.ticketNumber,
      VoterSessionId: getSessionId(),
      VotingStartTime: this.props.startTime,
    }
    const headers: any = { 'Content-Type': 'application/json' }
    this.setState({ submitInProgress: true, submitError: false })
    try {
      const response = await fetch(this.props.submitVoteUrl, {
        body: JSON.stringify(vote),
        headers,
        method: 'POST',
      })

      if (!response.ok) {
        logException(
          'Error when submitting vote',
          new Error(`Got ${response.status} ${response.statusText} when posting vote.`),
          { voteId: this.props.voteId },
        )
        this.setState({ submitInProgress: false, submitError: true })
      } else {
        logEvent(
          'voting',
          'submit',
          { startTime: this.props.startTime, id: this.props.voteId },
          { votingDurationInMins: moment().diff(moment.parseZone(this.props.startTime), 'minutes') },
        )
        this.setState({ submitInProgress: false, submitted: true }, () =>
          this.writeToStorage('ddd-voting-submitted', 'true'),
        )
      }
    } catch (e) {
      logException('Error when submitting vote', e, { voteId: this.props.voteId })
      this.setState({ submitInProgress: false, submitError: true })
    }
  }

  render() {
    const isVoting = this.state.show === 'votes'
    const visibleSessions = (this.props.sessions || [])
      .filter(
        s =>
          this.state.show !== 'all' ||
          (this.state.tagFilters.length === 0 || this.state.tagFilters.some(t => s.Tags.includes(t))),
      )
      .filter(
        s =>
          this.state.show !== 'all' ||
          (this.state.levelFilters.length === 0 || this.state.levelFilters.some(l => s.Level === l)),
      )
      .filter(
        s =>
          this.state.show !== 'all' ||
          (this.state.formatFilters.length === 0 || this.state.formatFilters.some(f => s.Format === f)),
      )
      .filter(s => this.state.show !== 'shortlist' || this.isInShortlist(s))
      .filter(s => this.state.show !== 'votes' || this.isVotedFor(s))
      .sort((a, b) => {
        if (!isVoting) {
          return 0
        }

        const aIndex = this.state.votes.indexOf(a.Id)
        const bIndex = this.state.votes.indexOf(b.Id)
        if (aIndex > bIndex) {
          return 1
        } else if (aIndex < bIndex) {
          return -1
        } else {
          return 0
        }
      })

    const SpanIf: React.StatelessComponent<any> = ({ condition, className, children }) => (
      <React.Fragment>
        {condition && <span className={className}>{children}</span>}
        {!condition && children}
      </React.Fragment>
    )

    const option = text => (
      <div>
        <span className="fa fa-check-circle-o selected-marker" />
        <span className="fa fa-circle-o not-selected-marker" />
        <span> {text}</span>
      </div>
    )

    return (
      <React.Fragment>
        <StyledVotingPanel>
          <Panel className="voting-control form-inline">
            <Panel.Heading>
              {this.state.submitted && (
                <p className="alert alert-success">
                  You've submitted your vote for this year :) Thanks! &lt;3 {this.props.conferenceName} team
                </p>
              )}
              {!this.state.submitted && (
                <React.Fragment>
                  <h3>Vote</h3>
                  <div className="submit-block">
                    {this.props.ticketNumberHandling !== TicketNumberWhileVoting.None && (
                      <label>
                        Ticket {this.props.ticketsProvider === TicketsProvider.Eventbrite && 'order'} #{' '}
                        <em>
                          {' '}
                          {this.props.ticketNumberHandling === TicketNumberWhileVoting.Optional && (
                            <span
                              className="fa fa-question-circle"
                              style={{ cursor: 'pointer', fontSize: '20px' }}
                              title="Your vote will have a higher weighting if you optionally supply your ticket # from your ticket confirmation email when getting an attendee ticket."
                              onClick={() =>
                                alert(
                                  'Your vote will have a higher weighting if you optionally supply your ticket # from your ticket confirmation email when getting an attendee ticket.',
                                )
                              }
                            />
                          )}
                          {this.props.ticketNumberHandling === TicketNumberWhileVoting.Required && (
                            <span
                              className="fa fa-question-circle"
                              style={{ cursor: 'pointer', fontSize: '20px' }}
                              title="To submit a vote you must supply your ticket # from your ticket confirmation email when getting an attendee ticket."
                              onClick={() =>
                                alert(
                                  'To submit a vote you must supply your ticket # from your ticket confirmation email when getting an attendee ticket.',
                                )
                              }
                            />
                          )}
                        </em>
                        :{' '}
                        <input
                          type="text"
                          className="form-control input-sm"
                          onChange={e => this.setState({ ticketNumber: e.target.value })}
                          value={this.state.ticketNumber}
                          placeholder={
                            this.props.ticketNumberHandling === TicketNumberWhileVoting.Optional
                              ? 'Optional'
                              : 'Required to submit'
                          }
                        />
                      </label>
                    )}{' '}
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={
                        this.state.votes.length < this.props.minVotes ||
                        this.state.submitInProgress ||
                        (this.props.ticketNumberHandling === TicketNumberWhileVoting.Required &&
                          !this.state.ticketNumber)
                      }
                      onClick={() => this.submit()}
                    >
                      {this.state.submitInProgress ? (
                        'Submitting...'
                      ) : (
                        <React.Fragment>
                          Submit <span className="remove-when-small">votes</span> ({this.state.votes.length}/
                          {this.props.minVotes !== this.props.maxVotes
                            ? `${Math.max(this.props.minVotes, this.state.votes.length)}${
                                this.state.votes.length < this.props.maxVotes ? '+' : ''
                              }`
                            : this.props.minVotes}
                          )
                        </React.Fragment>
                      )}
                    </button>
                  </div>
                  <div style={{ clear: 'both' }} />
                </React.Fragment>
              )}
              {this.state.submitError && (
                <React.Fragment>
                  <br />
                  <span className="alert alert-danger" style={{ padding: '2px' }}>
                    There was a problem submitting your votes; please try again or refresh the page and try again.{' '}
                    {this.props.ticketNumberHandling === TicketNumberWhileVoting.Required && (
                      <>
                        If you just purchased your ticket you may need to wait up to 10 minutes for it to be recognised
                        by the voting validation service.
                      </>
                    )}
                  </span>
                </React.Fragment>
              )}
            </Panel.Heading>
            <Panel.Body>
              <em>View:</em>{' '}
              <div className="btn-group" role="group">
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('all')}
                  disabled={this.state.show === 'all'}
                >
                  All sessions ({this.props.sessions.length})
                </button>{' '}
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('shortlist')}
                  disabled={this.state.show === 'shortlist'}
                >
                  My shortlist ({this.state.shortlist.length})
                </button>{' '}
                <button className="btn btn-sm agenda" onClick={() => this.show('votes')} disabled={isVoting}>
                  My votes ({this.state.votes.length})
                </button>
              </div>
            </Panel.Body>
          </Panel>
        </StyledVotingPanel>
        <h2>
          {this.state.show === 'all' ? 'All sessions' : this.state.show === 'shortlist' ? 'My shortlist' : 'My votes'}{' '}
          <small>{`(showing ${visibleSessions.length}${
            this.state.show === 'all' ? '/' + this.props.sessions.length : ''
          } session(s))`}</small>{' '}
          {visibleSessions.length !== 0 && (
            <button type="button" className="btn btn-sm btn-secondary" onClick={() => this.toggleExpandAll()}>
              {this.state.expandAll ? 'Hide all session details' : 'Show all session details'}
            </button>
          )}
        </h2>
        {isVoting && this.props.preferentialVoting && (
          <p>
            <strong>You now need to order your votes based on your preference.</strong> We are using a{' '}
            <a href="https://en.wikipedia.org/wiki/Preferential_voting" target="_blank">
              preferential voting system
            </a>{' '}
            to maximise the impact of your votes.
          </p>
        )}
        {visibleSessions.length === 0 && (
          <p>
            <em>No sessions yet.</em>
          </p>
        )}
        {this.state.show === 'votes' && <p>This year we're doing preferential voting.</p>}

        {this.state.show === 'all' && (
            <div className="filters">
              <em>Filter by:</em>{' '}
              <fieldset className="tag-cloud">
                <ul>
                  {this.state.tags.map(tag => (
                    <li key={tag}>
                      <input
                        type="checkbox"
                        value={tag}
                        id={tag}
                        name={tag}
                        onChange={selected => {
                          const newFilter = Array.from(document.querySelectorAll('.tag-cloud input:checked'))
                            .map(o => o.value)
                            .filter(o => o !== null)
                          if (newFilter.length > 0) {
                            logEvent('voting', 'tagFilter', { filter: newFilter.join(',') })
                          }
                          this.setState({ tagFilters: newFilter })
                        }}
                      />
                      <label htmlFor={tag}>{tag}</label>
                    </li>
                  ))}
                </ul>
              </fieldset>
              <ReactResponsiveSelect
                name="levelsFilter"
                prefix="Level:"
                options={[{ value: null, text: 'All', markup: option('All') }].concat(
                  this.state.levels.map(l => ({ value: l, text: l, markup: option(l) })),
                )}
                multiselect={true}
                caretIcon={<span className="fa fa-caret-down" />}
                onChange={selected => {
                  const newFilter = selected.options.map(o => o.value).filter(o => o !== null)
                  if (newFilter.length > 0) {
                    logEvent('voting', 'levelFilter', { filter: newFilter.join(',') })
                  }
                  this.setState({ levelFilters: newFilter })
                }}
                selectedValues={this.state.levelFilters.length > 0 ? this.state.levelFilters : undefined}
              />
            </div>
        )}

        <DragDropContext
          onDragEnd={(result: DropResult) => {
            this.onDragEnd(result)
          }}
        >
          <Droppable droppableId="voteDroppable">
            {provider => (
              <div ref={provider.innerRef} {...provider.droppableProps}>
                <PanelGroup accordion={!this.state.expandAll} className="accordion" id="voting-interface">
                  <ul className="talk-list">
                    {visibleSessions.map((s, i) => {
                      const sessionPanelDetails = {
                        anonymousVoting: this.state.anonymousVoting,
                        expandAll: this.state.expandAll,
                        votes: this.state.votes,
                        maxVotes: this.state.maxVotes,
                        isVotedFor: this.isVotedFor(s),
                        isInShortlist: this.isInShortlist(s),
                        submitted: this.state.submitted,
                        s: s,
                        i: i,
                        toggleVote: () => this.toggleVote(s),
                        toggleShortlist: () => this.toggleShortlist(s),
                      }
                      return (
                        <Draggable
                          key={s.Id}
                          draggableId={s.Id}
                          index={i}
                          isDragDisabled={!isVoting || !this.props.preferentialVoting}
                        >
                          {dragProvider => (
                            <div
                              {...dragProvider.draggableProps}
                              {...dragProvider.dragHandleProps}
                              ref={dragProvider.innerRef}
                            >
                              <SessionPanel {...sessionPanelDetails} />
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                  </ul>
                </PanelGroup>
                {provider.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </React.Fragment>
    )
  }
}
