import moment from 'moment'
import Link from 'next/link'
import Router from 'next/router'
import React from 'react'
import uuid from 'uuid/v1'
import { logEvent, logException } from '../components/global/analytics'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Voting from '../components/voting'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface VoteProps extends WithPageMetadataProps {
  sessions?: Session[]
}

interface VoteState {
  sessions?: Session[]
  isLoading: boolean
  isError: boolean
  startTime: string
  voteId: string
}

class VotePage extends React.Component<VoteProps, VoteState> {
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
    this.setState({
      isError: false,
      isLoading: true,
      sessions: [],
    })
  }

  componentDidMount() {
    const that = this
    fetch(this.props.pageMetadata.appConfig.getSubmissionsUrl)
      .then(response => {
        if (!response.ok) {
          throw response.statusText
        }
        return response.json()
      })
      .then(body => {
        this.setSessions(body as Session[])
      })
      .catch(error => {
        logException('Error when getting sessions', error, {
          voteId: !!localStorage ? localStorage.getItem('ddd-voting-id') : null,
        })
        that.setState({ isError: true, isLoading: false })
        if (console) {
          // tslint:disable-next-line:no-console
          console.error('Error loading sessions', error)
        }
      })
  }

  setSessions(sessions: Session[]) {
    // if the client does not support local storage then just set session state
    if (!localStorage) {
      this.setState({
        isLoading: false,
        sessions,
      })
    } else {
      if (!localStorage.getItem('ddd-voting-start-time')) {
        localStorage.setItem('ddd-voting-start-time', moment().toISOString())
      }
      if (!localStorage.getItem('ddd-voting-id')) {
        const voteId = uuid()
        logEvent('voting', 'voteIdGenerated', { id: voteId, startTime: localStorage.getItem('ddd-voting-start-time') })
        localStorage.setItem('ddd-voting-id', voteId)
      } else {
        logEvent('voting', 'returnToVoting', { id: localStorage.getItem('ddd-voting-id') })
      }

      this.setState({
        startTime: localStorage.getItem('ddd-voting-start-time'),
        voteId: localStorage.getItem('ddd-voting-id'),
      })

      const orderings = localStorage.getItem('ddd-voting-session-order')

      // if previous ordering data has not been persisted in local storage
      if (orderings == null) {
        const ids = JSON.stringify(sessions.map(({ Id }) => Id)) // Randomizing will be done in backend API

        localStorage.setItem('ddd-voting-session-order', ids)

        this.setState({
          isLoading: false,
          sessions,
        })
      } else {
        // if previous ordering data has been persisted then apply this and override API response ordering
        const orderingsArray = JSON.parse(orderings)
        const ordered = orderingsArray
          .map(id => sessions.find(s => s.Id === id))
          .filter(s => s)
          .concat(sessions.filter(s => !orderingsArray.find(id => id === s.Id)))

        const ids = JSON.stringify(ordered.map(({ Id }) => Id))
        localStorage.setItem('ddd-voting-session-order', ids)

        this.setState({
          isLoading: false,
          sessions: ordered,
        })
      }
    }
  }

  render() {
    const minVotes = this.props.pageMetadata.conference.MinVotes
    const maxVotes = this.props.pageMetadata.conference.MaxVotes

    const isLoadingComplete = !(this.state.isLoading || this.state.isError)

    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Vote"
        hideBanner={true}
        description={this.props.pageMetadata.conference.Name + ' voting page.'}
      >
        <div className="container">
          <h1>Voting</h1>

          <div className="row">
            <div className="col-md-4">
              <p>
                One of the{' '}
                <Link href="/about">
                  <a>core tenets of {this.props.pageMetadata.conference.Name}</a>
                </Link>{' '}
                is that the agenda is democratically selected. Session voting is the main mechanism that we employ to
                achieve that. This means that you (collectively) have the power to decide on the agenda on the day.
              </p>

              {this.props.pageMetadata.conference.AnonymousVoting && (
                <p>
                  In order to remove unconscious bias we implement anonymous session voting. This means that you will
                  not see the details of the presenters and will need to vote based on the content (title, abstract,
                  tags).
                </p>
              )}

              <p>
                This year we have a combination of 20 minute and 45 minutes sessions (or sessions that are designated as
                being able to be both). You can optionally filter the sessions by tag, format and level to assist you to
                create a shortlist. You will be required to vote for{' '}
                <strong>
                  {minVotes !== maxVotes ? (
                    <span>
                      between {minVotes} and {maxVotes}
                    </span>
                  ) : (
                    <span>{minVotes}</span>
                  )}{' '}
                  sessions and you have until{' '}
                  {this.props.pageMetadata.conference.VotingOpenUntil.format(
                    this.props.pageMetadata.dates.TimeDisplayFormat +
                      ' ' +
                      this.props.pageMetadata.dates.DateDisplayFormat,
                  )}
                </strong>{' '}
                to submit your votes. <strong>Each person should only lodge one set of votes</strong>; we have a number
                of mechanisms in place to detect fraudulent votes.
              </p>
            </div>
            <div className="col-md-8" style={{ backgroundColor: '#f5f5f5', padding: '0 20px' }}>
              <h2 style={{ marginTop: '30px' }}>Getting the most out of voting</h2>
              <p>
                This year we had {isLoadingComplete && this.state.sessions ? this.state.sessions.length : '...'}{' '}
                sessions submitted! We've implemented the following features to assist you to manage voting across such
                a large number of sessions:
              </p>
              <ul>
                <li>
                  Any actions you take on this page (e.g. vote, shortlist) will be saved to this device/browser -{' '}
                  <strong>you can do the voting over a number of sittings</strong> and don't need to worry about trying
                  to complete it in one go
                </li>
                <li>
                  There is an ability to <em>flag</em> sessions with a visual indicator; you can use this in any way
                  that suits you e.g. mark sessions you've seen, mark sessions you aren't interested in, etc.
                </li>
                <li>
                  You can add/remove sessions to/from a shortlist and view that shortlist separately;{' '}
                  <strong>we recommend trying to come up with a shortlist first</strong> and then selecting your votes
                  from the shortlist after removing the sessions you are less interested in from the shortlist
                </li>
                <li>
                  When viewing all sessions you can filter by <em>tags</em>, <em>format</em> and <em>level</em>; this is{' '}
                  <strong>
                    useful if you don't have the time to review all{' '}
                    {isLoadingComplete && this.state.sessions ? this.state.sessions.length : '...'} sessions
                  </strong>{' '}
                  and instead want to narrow down on sessions that are likely to be of interest
                </li>
                <li>
                  We recommend you <strong>try to find a mix of talks</strong> that are a combination of super relevant
                  in your technical area, cover soft skills / leadership and/or are a bit more out there (to stretch
                  yourself), but it's totally up to you to vote for your perfect agenda!
                </li>
                <li>
                  We ideally want the people who are actually attending to be the ones that have the greatest influence
                  on the agenda and we also feel this is fairer to session submitters since it makes for a more level
                  playing field for social network reach; this year we've added an optional field for you to add in your
                  ticket # (from your confirmation email) if you've{' '}
                  <Link href="/tickets">
                    <a>purchased a ticket</a>
                  </Link>{' '}
                  which will <strong>give your vote a higher weighting</strong>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <p className="alert alert-warning">
            <strong>Please note:</strong> Our expectation of the community, <strong>and you as a voter</strong>, is that
            you will only vote once and you will vote for a set of talks that make up <em>your</em> perfect agenda
            regardless of your friends' talks.
            <br />
            <br />
            If you know who submitted any of the sessions we ask that you do not discuss it with anyone or post it on
            social media so we can retain a level playing field for all submitters through anonymity. We definitely want
            you to post and talk about the conference and encourage others to vote though so spread the word.
            <br />
            <br /> If we follow this approach as a community then we can be fair to all the submitters who have put
            time, effort and courage into crafting the amazing session proposals below. If you have any questions please{' '}
            <a href={'mailto:' + this.props.pageMetadata.conference.ContactEmail}>contact us</a>.
            <br />
            <br />
            Thanks!
            <br />
            &lt;3 DDD Perth team
          </p>

          {this.state.isLoading && <p>Loading sessions...</p>}
          {this.state.isError && (
            <p className="alert alert-danger">
              There was an error loading sessions; please refresh the page to try again.
            </p>
          )}

          {!this.state.isLoading && !this.state.isError && (
            <Voting
              sessions={this.state.sessions}
              startTime={this.state.startTime}
              voteId={this.state.voteId}
              minVotes={minVotes}
              maxVotes={maxVotes}
              anonymousVoting={this.props.pageMetadata.conference.AnonymousVoting}
              submitVoteUrl={this.props.pageMetadata.appConfig.submitVoteUrl}
            />
          )}
        </div>
      </Page>
    )
  }
}

export default withPageMetadata(VotePage)
