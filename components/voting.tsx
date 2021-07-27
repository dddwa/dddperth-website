import React from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import { getSessionId, logException } from 'components/global/analytics'
import 'components/utils/arrayExtensions'
import { SessionPanel } from 'components/Voting/sessionPanel'
import { Session, TicketNumberWhileVoting, TicketsProvider } from 'config/types'
import { logEvent } from 'components/global/analytics'
import { StyledVotingPanel, StyledVoteHeader } from 'components/Voting/Voting.styled'
import { VotingFilters } from 'components/Voting/VotingFilters'
import { differenceInMinutes } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'

type SessionId = Session['Id']
type Views = 'all' | 'shortlist' | 'votes'

enum StorageKeys {
  SHORTLIST = 'voting-session-shortlist',
  SUBMITTED = 'voting-submitted',
  VOTES = 'voting-session-votes',
}

interface VotingState {
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
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
  conferenceInstance: string
  ticketsProvider: TicketsProvider
  anonymousVoting: boolean
  preferentialVoting: boolean
  ticketNumberHandling: TicketNumberWhileVoting
  waitingListCanVoteWithEmail: boolean
  sessions: Session[]
  submitVoteUrl: string
  maxVotes: number
  minVotes: number
  startTime: string
  voteId: string
}

const storageKey = (votingProps: VotingProps, key: StorageKeys) => `${key}-${votingProps.conferenceInstance}`

const reorder = (list: SessionId[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const VotingWithOptionalTicketMessage =
  'Your vote will have a higher weighting if you optionally supply your ticket # from your ticket confirmation email when getting an attendee ticket.'
export default class Voting extends React.PureComponent<VotingProps, VotingState> {
  componentDidMount() {
    this.setState({
      formatFilters: [],
      formats: this.props.sessions
        .map((s) => s.Format)
        .unique()
        .sort(),
      levelFilters: [],
      levels: this.props.sessions
        .map((s) => s.Level)
        .unique()
        .sort(),
      show: 'all',
      submitError: false,
      submitInProgress: false,
      tagFilters: [],
      tags: this.props.sessions
        .selectMany((s) => s.Tags)
        .unique()
        .sort(),
      shortlist: this.readFromStorage(storageKey(this.props, StorageKeys.SHORTLIST)),
      submitted: this.readFromStorage(storageKey(this.props, StorageKeys.SUBMITTED)) === 'true',
      votes: this.readFromStorage(storageKey(this.props, StorageKeys.VOTES)),
    })
    this.votingTopRef = React.createRef()
  }

  votingTopRef: any

  toggleExpandAll() {
    this.setState({ expandAll: !this.state.expandAll })
  }

  show(whatToShow: Views) {
    this.setState({ show: whatToShow })
    this.scrollToTop()
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
      () => this.writeToStorage(storageKey(this.props, StorageKeys.SHORTLIST), this.state.shortlist),
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
      () => this.writeToStorage(storageKey(this.props, StorageKeys.VOTES), this.state.votes),
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
    this.setState(
      {
        votes: reorder(this.state.votes, result.source.index, result.destination.index),
      },
      () => this.writeToStorage(storageKey(this.props, StorageKeys.VOTES), this.state.votes),
    )
  }

  scrollToTop() {
    if (this.votingTopRef.current) {
      window.scrollTo(0, this.votingTopRef.current.offsetTop)
    }
    return false
  }

  async submit() {
    const vote = {
      Id: this.props.voteId,
      Indices: this.state.votes.map(
        (id) => this.props.sessions.indexOf(this.props.sessions.find((s) => s.Id === id)) + 1,
      ),
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
          { votingDurationInMins: differenceInMinutes(new Date(), zonedTimeToUtc(this.props.startTime, '+08:00')) },
        )
        this.setState({ submitInProgress: false, submitted: true }, () =>
          this.writeToStorage(storageKey(this.props, StorageKeys.SUBMITTED), 'true'),
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
        (s) =>
          this.state.show !== 'all' ||
          this.state.tagFilters.length === 0 ||
          this.state.tagFilters.some((t) => s.Tags.includes(t)),
      )
      .filter(
        (s) =>
          this.state.show !== 'all' ||
          this.state.levelFilters.length === 0 ||
          this.state.levelFilters.some((l) => s.Level === l),
      )
      .filter(
        (s) =>
          this.state.show !== 'all' ||
          this.state.formatFilters.length === 0 ||
          this.state.formatFilters.some((f) => s.Format === f),
      )
      .filter((s) => this.state.show !== 'shortlist' || this.isInShortlist(s))
      .filter((s) => this.state.show !== 'votes' || this.isVotedFor(s))
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

    return (
      <React.Fragment>
        <div id="top" ref={this.votingTopRef} />
        <StyledVotingPanel>
          <div
            className="voting-control form-inline"
            style={{
              backgroundColor: '#fff',
              borderRadius: 4,
              border: '1px solid #ddd',
            }}
          >
            <StyledVoteHeader>
              {this.state.submitted && (
                <p className="alert alert-success">
                  You've submitted your vote for this year :) Thanks! &lt;3 {this.props.conferenceName} team
                </p>
              )}
              {!this.state.submitted && (
                <React.Fragment>
                  <h3>Vote</h3>
                  <a href="#top">Top of page</a>
                </React.Fragment>
              )}
            </StyledVoteHeader>
            <div
              style={{
                padding: 15,
              }}
            >
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
                  Shortlist ({this.state.shortlist.length})
                </button>{' '}
                <button className="btn btn-sm agenda" onClick={() => this.show('votes')} disabled={isVoting}>
                  View/submit votes ({this.state.votes.length}/
                  {this.props.minVotes !== this.props.maxVotes
                    ? `${Math.max(this.props.minVotes, this.state.votes.length)}${
                        this.state.votes.length < this.props.maxVotes ? '+' : ''
                      }`
                    : this.props.minVotes}
                  )
                </button>
              </div>
            </div>
          </div>
        </StyledVotingPanel>
        <h2>
          {this.state.show === 'all'
            ? 'All sessions'
            : this.state.show === 'shortlist'
            ? 'My shortlist'
            : 'View and submit votes'}{' '}
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
          <p className="alert alert-warning">
            <strong>You now need to order your votes based on your preference.</strong> We are using a{' '}
            <a href="https://en.wikipedia.org/wiki/Preferential_voting" target="_blank">
              preferential voting system
            </a>{' '}
            to maximise the impact of your votes - this means your vote places a higher weighting to the talks that
            appear higher in your list. You can change the order by dragging and dropping the talks.
          </p>
        )}
        {visibleSessions.length === 0 && (
          <p>
            <em>No sessions yet.</em>
          </p>
        )}

        {this.state.show === 'all' && (
          <VotingFilters
            tags={this.state.tags}
            levels={this.state.levels}
            onTagFilter={(tags) => {
              this.setState({ tagFilters: tags })
            }}
            onLevelsFilter={(levels) => {
              this.setState({ levelFilters: levels })
            }}
          />
        )}

        <DragDropContext
          onDragEnd={(result: DropResult) => {
            this.onDragEnd(result)
          }}
        >
          <Droppable droppableId="voteDroppable">
            {(provider) => (
              <div ref={provider.innerRef} {...provider.droppableProps}>
                <div id="voting-interface">
                  <ul className="talk-list">
                    {visibleSessions.map((s, i) => {
                      return (
                        <Draggable
                          key={s.Id}
                          draggableId={s.Id}
                          index={i}
                          isDragDisabled={!isVoting || !this.props.preferentialVoting}
                        >
                          {(dragProvider) => (
                            <div
                              {...dragProvider.draggableProps}
                              {...dragProvider.dragHandleProps}
                              ref={dragProvider.innerRef}
                            >
                              <SessionPanel
                                anonymousVoting={this.props.anonymousVoting}
                                expandAll={this.state.expandAll}
                                hideVotingButtons={this.state.submitted}
                                index={i}
                                preferentialVoting={this.props.preferentialVoting}
                                isVoting={isVoting}
                                isInShortlist={this.isInShortlist(s)}
                                isVotedFor={this.isVotedFor(s)}
                                isVotingDisabled={
                                  this.state.votes.length >= this.props.maxVotes || this.state.submitted
                                }
                                session={s}
                                toggleShortlist={() => this.toggleShortlist(s)}
                                toggleVote={() => this.toggleVote(s)}
                              />
                            </div>
                          )}
                        </Draggable>
                      )
                    })}
                  </ul>
                </div>
                {provider.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {isVoting && !this.state.submitted && (
          <div className="submit-block inline-form">
            <h3>Submit votes</h3>
            {this.props.ticketsProvider === TicketsProvider.Tito && (
              <p>
                To submit a vote you{' '}
                {this.props.ticketNumberHandling === TicketNumberWhileVoting.Required ? 'will need' : 'can use'} your
                ticket number, which you can get from the email you were sent from Tito:
                <br />
                <img
                  src="/static/images/voting-tito-ticket-number.jpg"
                  alt="Ticket email showing ticket number placement"
                />
              </p>
            )}
            {this.props.ticketNumberHandling !== TicketNumberWhileVoting.None && (
              <label>
                Ticket {this.props.ticketsProvider === TicketsProvider.Eventbrite && 'order'} #{' '}
                {this.props.waitingListCanVoteWithEmail && 'or your waiting list email'}
                <em>
                  {' '}
                  <span
                    className="fa fa-question-circle"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                    title={
                      this.props.ticketNumberHandling === TicketNumberWhileVoting.Optional
                        ? VotingWithOptionalTicketMessage
                        : `To submit a vote you must supply ${
                            this.props.waitingListCanVoteWithEmail ? 'either' : ''
                          } your ticket # from your ticket confirmation email when getting an attendee ticket${
                            this.props.waitingListCanVoteWithEmail
                              ? ' or your email address that you registered with the waiting list.'
                              : ''
                          }.`
                    }
                    onClick={() =>
                      alert(
                        this.props.ticketNumberHandling === TicketNumberWhileVoting.Optional
                          ? VotingWithOptionalTicketMessage
                          : `To submit a vote you must supply ${
                              this.props.waitingListCanVoteWithEmail ? 'either' : ''
                            } your ticket # from your ticket confirmation email when getting an attendee ticket${
                              this.props.waitingListCanVoteWithEmail
                                ? ' or your email address that you registered with the waiting list.'
                                : ''
                            }.`,
                      )
                    }
                  />
                </em>
                :{' '}
                <input
                  type="text"
                  className="form-control input-sm"
                  onChange={(e) => this.setState({ ticketNumber: e.target.value })}
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
                (this.props.ticketNumberHandling === TicketNumberWhileVoting.Required && !this.state.ticketNumber)
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
            {this.state.submitError && (
              <React.Fragment>
                <br />
                <span className="alert alert-danger" style={{ padding: '2px' }}>
                  There was a problem submitting your votes; please try again or refresh the page and try again.{' '}
                  {this.props.ticketNumberHandling === TicketNumberWhileVoting.Required && (
                    <>
                      If you just purchased your ticket you may need to wait up to 10 minutes for it to be recognised by
                      the voting validation service.
                    </>
                  )}
                </span>
              </React.Fragment>
            )}
            <p>&nbsp;</p>
          </div>
        )}
      </React.Fragment>
    )
  }
}
