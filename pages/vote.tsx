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
