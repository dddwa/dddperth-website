import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react'
import { Panel, PanelGroup } from 'react-bootstrap'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import SessionDetails from '../components/sessionDetails'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import { Session } from '../config/types'
import Page from '../layouts/main'

interface VoteState {
  sessions?: Session[]
  isLoading: boolean
  isError: boolean
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
    this.setState({ isLoading: true, isError: false })
    fetch('/static/tmp.json')
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
          // tslint:disable-next-line:no-console
          console.error('Error loading sessions', error)
        }
      })
  }

  render() {
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
            {this.props.pageMetadata.conference.MinVotes !== this.props.pageMetadata.conference.MaxVotes ? (
              <span>
                between {this.props.pageMetadata.conference.MinVotes} and {this.props.pageMetadata.conference.MaxVotes}
              </span>
            ) : (
              <span>{this.props.pageMetadata.conference.MinVotes}</span>
            )}{' '}
            sessions.
          </p>

          <PanelGroup accordion className="accordion" id="vote-accordion">
            {(this.state.sessions || []).map((s, i) => (
              <Panel eventKey={i} key={i}>
                <Panel.Heading>
                  <Panel.Title toggle>{s.Title}</Panel.Title>
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
