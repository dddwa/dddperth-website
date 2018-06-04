import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react'
import { Panel, PanelGroup } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import NonJumpingAffix from '../components/NonJumpingAffix'
import SessionDetails from '../components/sessionDetails'
import '../components/utils/arrayExtensions'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface VoteState {
  sessions?: Session[]
  isLoading: boolean
  isError: boolean
  expandAll: boolean
  tagFilters: string[]
  tags: string[]
  levelFilters: string[]
  levels: string[]
  formatFilters: string[]
  formats: string[]
  seen: string[]
  shortlist: string[]
  votes: string[]
  show: string
}

class VotePage extends React.Component<WithPageMetadataProps, VoteState> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.VotingOpen) {
      if (res) {
        res.writeHead(302, {
          Location: '/',
        })
        res.end()
        res.finished = true
      } else {
        Router.replace('/')
      }
    }
    return {}
  }

  componentWillMount() {
    const that = this
    this.setState({
      formatFilters: [],
      formats: [],
      isError: false,
      isLoading: true,
      levelFilters: [],
      levels: [],
      seen: [],
      shortlist: [],
      show: 'all',
      tagFilters: [],
      tags: [],
      votes: [],
    })
    fetch('/static/tmp.json')
      .then(response => {
        if (response.status !== 200) {
          throw response.statusText
        }
        return response.json()
      })
      .then(body =>
        that.setState({
          formats: (body as Session[])
            .map(s => s.Format)
            .unique()
            .sort(),
          isLoading: false,
          levels: (body as Session[])
            .map(s => s.Level)
            .unique()
            .sort(),
          sessions: body as Session[],
          tags: (body as Session[])
            .selectMany(s => s.Tags)
            .unique()
            .sort(),
        }),
      )
      .catch(error => {
        that.setState({ isError: true, isLoading: false })
        if (console) {
          // tslint:disable-next-line:no-console
          console.error('Error loading sessions', error)
        }
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
    this.setState({
      shortlist: this.isInShortlist(session)
        ? this.state.shortlist.without(session.Id)
        : [...this.state.shortlist, session.Id],
    })
  }

  isSeen(session: Session) {
    return this.state.seen.includes(session.Id)
  }

  toggleSeen(session: Session) {
    this.setState({
      seen: this.isSeen(session) ? this.state.seen.without(session.Id) : [...this.state.seen, session.Id],
    })
  }

  isVotedFor(session: Session) {
    return this.state.votes.includes(session.Id)
  }

  toggleVote(session: Session) {
    this.setState({
      votes: this.isVotedFor(session) ? this.state.votes.without(session.Id) : [...this.state.votes, session.Id],
    })
  }

  render() {
    const visibleSessions = (this.state.sessions || [])
      .filter(s => this.state.tagFilters.length === 0 || this.state.tagFilters.some(t => s.Tags.includes(t)))
      .filter(s => this.state.levelFilters.length === 0 || this.state.levelFilters.some(l => s.Level === l))
      .filter(s => this.state.formatFilters.length === 0 || this.state.formatFilters.some(f => s.Format === f))
      .filter(s => this.state.show !== 'shortlist' || this.isInShortlist(s))
      .filter(s => this.state.show !== 'votes' || this.isVotedFor(s))

    const SpanIf: React.StatelessComponent<any> = ({ condition, className, children }) => (
      <React.Fragment>
        {condition && <span className={className}>{children}</span>}
        {!condition && children}
      </React.Fragment>
    )

    const minVotes = this.props.pageMetadata.conference.MinVotes
    const maxVotes = this.props.pageMetadata.conference.MaxVotes

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Vote"
        hideBanner={true}
        description={this.props.pageMetadata.conference.Name + ' voting page.'}
      >
        <div className="container">
          <h1>Voting</h1>

          <p>
            One of the{' '}
            <Link href="/about">
              <a>core tenets of {this.props.pageMetadata.conference.Name}</a>
            </Link>{' '}
            is that the agenda is democratically selected. Session voting is the core mechanism that we employ to
            achieve that. This means that you (collectively) have the power to decide on the agenda on the day.
          </p>

          {this.props.pageMetadata.conference.AnonymousVoting && (
            <p>
              In order to remove unconscious bias we implement anonymous session voting. This means that you will not
              see the details of the presenters and will need to vote based on the content (title, abstract, tags).
            </p>
          )}

          <p>
            This year we have a combination of 20 minute and 45 minutes sessions (or sessions that are designated as
            being able to be both). You can optionally filter the sessions by tag, format and level to assist you to
            create a shortlist. You will be required to vote for{' '}
            {minVotes !== maxVotes ? (
              <span>
                between {minVotes} and {maxVotes}
              </span>
            ) : (
              <span>{minVotes}</span>
            )}{' '}
            sessions.
          </p>

          {this.state.sessions && (
            <NonJumpingAffix>
              <Panel className="voting-control">
                <Panel.Heading>
                  <strong>Lodge votes</strong> - {this.state.votes.length}/{this.props.pageMetadata.conference
                    .MinVotes !== maxVotes
                    ? `(${minVotes}-${maxVotes})`
                    : minVotes}{' '}
                  votes cast{' '}
                  <button className="btn btn-primary btn-sm" disabled={this.state.votes.length < minVotes}>
                    Submit votes
                  </button>
                </Panel.Heading>
                <Panel.Body>
                  <em>Filter by:</em>
                  <label className="filter">
                    Tags:{' '}
                    <Typeahead
                      multiple
                      options={this.state.tags}
                      clearButton
                      onChange={selected => {
                        this.setState({ tagFilters: selected })
                      }}
                      selected={this.state.tagFilters}
                    />
                  </label>
                  <label className="filter">
                    Format:{' '}
                    <Typeahead
                      multiple
                      options={this.state.formats}
                      clearButton
                      onChange={selected => {
                        this.setState({ formatFilters: selected })
                      }}
                      selected={this.state.formatFilters}
                    />
                  </label>
                  <label className="filter">
                    Level:{' '}
                    <Typeahead
                      multiple
                      options={this.state.levels}
                      clearButton
                      onChange={selected => {
                        this.setState({ levelFilters: selected })
                      }}
                      selected={this.state.levelFilters}
                    />
                  </label>
                  <br />
                  <em>View:</em>{' '}
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-sm agenda"
                      onClick={() => this.show('all')}
                      disabled={this.state.show === 'all'}
                    >
                      All sessions
                    </button>{' '}
                    <button
                      className="btn btn-sm agenda"
                      onClick={() => this.show('shortlist')}
                      disabled={this.state.show === 'shortlist'}
                    >
                      My shortlist
                    </button>{' '}
                    <button
                      className="btn btn-sm agenda"
                      onClick={() => this.show('votes')}
                      disabled={this.state.show === 'votes'}
                    >
                      My votes
                    </button>
                  </div>
                </Panel.Body>
              </Panel>
            </NonJumpingAffix>
          )}

          <h2>
            {this.state.show === 'all' ? 'All sessions' : this.state.show === 'shortlist' ? 'My shortlist' : 'My votes'}{' '}
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
                      {this.isSeen(s) && <span className="fa fa-eye" aria-label="Seen" role="status" title="Seen" />}
                      {this.isInShortlist(s) && (
                        <span className="fa fa-list-ol" aria-label="Shortlisted" role="status" title="Shortlisted" />
                      )}
                      {this.isVotedFor(s) && (
                        <span className="fa fa-check" aria-label="Voted" role="status" title="Voted" />
                      )}
                      {s.Title}
                      <br />
                      <button
                        onClick={e => {
                          this.toggleSeen(s)
                          e.stopPropagation()
                          e.preventDefault()
                        }}
                        className="btn seen btn-sm"
                      >
                        {!this.isSeen(s) ? 'Seen' : 'Un-seen'}
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
                        disabled={this.state.votes.length >= maxVotes && !this.isVotedFor(s)}
                      >
                        {!this.isVotedFor(s) ? 'Vote' : 'Un-vote'}
                      </button>
                    </SpanIf>
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                  <SessionDetails session={s} showPresenter={!this.props.pageMetadata.conference.AnonymousVoting} />
                </Panel.Body>
              </Panel>
            ))}
          </PanelGroup>
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(VotePage)
