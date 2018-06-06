import * as React from 'react'
import { Panel, PanelGroup } from 'react-bootstrap'
import Select, { Option } from 'react-select'
import NonJumpingAffix from '../components/NonJumpingAffix'
import SessionDetails from '../components/sessionDetails'
import '../components/utils/arrayExtensions'
import { Session } from '../config/types'

interface VotingState {
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
  flagged: string[]
  shortlist: string[]
  votes: string[]
  show: string
}

interface VotingProps {
  anonymousVoting: boolean
  sessions: Session[]
  maxVotes: number
  minVotes: number
}

export default class Voting extends React.PureComponent<VotingProps, VotingState> {
  componentWillMount() {
    this.setState({
      flagged: this.readFromStorage('ddd-voting-session-flagged'),
      formatFilters: [],
      formats: (this.props.sessions as Session[])
        .map(s => s.Format)
        .unique()
        .sort(),
      levelFilters: [],
      levels: (this.props.sessions as Session[])
        .map(s => s.Level)
        .unique()
        .sort(),
      shortlist: this.readFromStorage('ddd-voting-session-shortlist'),
      show: 'all',
      tagFilters: [],
      tags: (this.props.sessions as Session[])
        .selectMany(s => s.Tags)
        .unique()
        .sort(),
      votes: this.readFromStorage('ddd-voting-session-votes'),
    })
  }

  toggleExpandAll() {
    this.setState({ expandAll: !this.state.expandAll })
  }

  show(whatToShow: string) {
    this.setState({ show: whatToShow })
  }

  isInShortlist(session: Session) {
    return this.state.shortlist.includes(session.Id)
  }

  toggleShortlist(session: Session) {
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
    this.setState(
      {
        votes: this.isVotedFor(session) ? this.state.votes.without(session.Id) : [...this.state.votes, session.Id],
      },
      () => this.writeToStorage('ddd-voting-session-votes', this.state.votes),
    )
  }

  writeToStorage(key: string, sessions: string[]) {
    if (!process && localStorage) {
      localStorage.setItem(key, JSON.stringify(sessions))
    }
  }

  readFromStorage(key: string) {
    if (!process && localStorage) {
      const data = localStorage.getItem(key)
      if (data != null) {
        return JSON.parse(data)
      }
    }
    return []
  }

  render() {
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

    const SpanIf: React.StatelessComponent<any> = ({ condition, className, children }) => (
      <React.Fragment>
        {condition && <span className={className}>{children}</span>}
        {!condition && children}
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <NonJumpingAffix>
          <Panel className="voting-control form-inline">
            <Panel.Heading>
              <h3>Vote</h3>
              <label>
                Ticket order #{' '}
                <em>
                  (Optional,{' '}
                  <span
                    className="fa fa-question-circle"
                    style={{ cursor: 'pointer', fontSize: '20px' }}
                    title="Your vote will have a higher weighting if you supply your EventBrite order # from your ticket confirmation email when getting a 2018 attendee ticket."
                    onClick={() =>
                      alert(
                        'Your vote will have a higher weighting if you supply your EventBrite order # from your ticket confirmation email when getting a 2018 attendee ticket.',
                      )
                    }
                  />)
                </em>: <input type="number" className="form-control input-sm" id="voteOrderNumber" />
              </label>{' '}
              <button
                className="btn btn-primary btn-sm"
                disabled={this.state.votes.length < this.props.minVotes}
                onClick={() => alert('todo...')}
              >
                Submit {this.state.votes.length}/{this.props.minVotes !== this.props.maxVotes
                  ? `(${this.props.minVotes}-${this.props.maxVotes})`
                  : this.props.minVotes}{' '}
                votes
              </button>
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
                <button
                  className="btn btn-sm agenda"
                  onClick={() => this.show('votes')}
                  disabled={this.state.show === 'votes'}
                >
                  My votes ({this.state.votes.length})
                </button>
              </div>
              {this.state.show === 'all' && (
                <React.Fragment>
                  <br />
                  <br />
                  <em>Filter by:</em>
                  <label className="filter">
                    Tags:{' '}
                    <Select
                      options={this.state.tags.map(t => ({ value: t, label: t }))}
                      clearable={true}
                      multi={true}
                      onChange={selected => {
                        this.setState({ tagFilters: (selected as Array<Option<string>>).map(t => t.value) })
                      }}
                      value={this.state.tagFilters}
                    />
                  </label>
                  <label className="filter">
                    Format:{' '}
                    <Select
                      options={this.state.formats.map(f => ({ value: f, label: f }))}
                      clearable={true}
                      multi={true}
                      onChange={selected => {
                        this.setState({ formatFilters: (selected as Array<Option<string>>).map(f => f.value) })
                      }}
                      value={this.state.formatFilters}
                    />
                  </label>
                  <label className="filter">
                    Level:{' '}
                    <Select
                      options={this.state.levels.map(l => ({ value: l, label: l }))}
                      clearable={true}
                      multi={true}
                      onChange={selected => {
                        this.setState({ levelFilters: (selected as Array<Option<string>>).map(l => l.value) })
                      }}
                      value={this.state.levelFilters}
                    />
                  </label>
                </React.Fragment>
              )}
            </Panel.Body>
          </Panel>
        </NonJumpingAffix>
        <h2>
          {this.state.show === 'all' ? 'All sessions' : this.state.show === 'shortlist' ? 'My shortlist' : 'My votes'}{' '}
          <small>{`(showing ${visibleSessions.length}${
            this.state.show === 'all' ? '/' + this.props.sessions.length : ''
          } session(s))`}</small>{' '}
          <button className="btn btn-sm btn-secondary" onClick={() => this.toggleExpandAll()}>
            {this.state.expandAll ? 'Collapse' : 'Expand'} all
          </button>
        </h2>
        {visibleSessions.length === 0 && (
          <p>
            <em>No sessions yet.</em>
          </p>
        )}
        <PanelGroup accordion={!this.state.expandAll} className="accordion" id="voting-interface">
          {visibleSessions.map((s, i) => (
            <Panel eventKey={i} key={i} expanded={this.state.expandAll || null}>
              <Panel.Heading>
                <Panel.Title toggle={!this.state.expandAll}>
                  <SpanIf condition={this.state.expandAll} className="title">
                    {this.isVotedFor(s) && (
                      <span className="fa fa-check" aria-label="Voted" role="status" title="Voted" />
                    )}
                    {this.isInShortlist(s) && (
                      <span className="fa fa-list-ol" aria-label="Shortlisted" role="status" title="Shortlisted" />
                    )}
                    {this.isFlagged(s) && (
                      <span className="fa fa-flag" aria-label="Flag" role="status" title="Flagged" />
                    )}
                    {s.Title}
                    <br />
                    {(s.Tags || []).map(tag => (
                      <React.Fragment key={tag}>
                        <span className="badge">{tag}</span>{' '}
                      </React.Fragment>
                    ))}
                    <br />
                    <br />
                    <button
                      onClick={e => {
                        this.toggleFlagged(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn flagged btn-sm"
                    >
                      {!this.isFlagged(s) ? 'Flag' : 'Un-flag'}
                    </button>{' '}
                    <button
                      onClick={e => {
                        this.toggleShortlist(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      {!this.isInShortlist(s) ? 'Shortlist' : 'Un-shortlist'}
                    </button>{' '}
                    <button
                      onClick={e => {
                        this.toggleVote(s)
                        e.stopPropagation()
                        e.preventDefault()
                      }}
                      className="btn btn-primary btn-sm"
                      disabled={this.state.votes.length >= this.props.maxVotes && !this.isVotedFor(s)}
                    >
                      {!this.isVotedFor(s) ? 'Vote' : 'Un-vote'}
                    </button>
                  </SpanIf>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <SessionDetails session={s} showPresenter={!this.props.anonymousVoting} />
              </Panel.Body>
            </Panel>
          ))}
        </PanelGroup>
      </React.Fragment>
    )
  }
}
