import Link from 'next/link'
import Router from 'next/router'
import * as React from 'react'
import withPageMetadata, { WithPageMetadataProps } from '../components/global/withPageMetadata'
import dateTimeProvider from '../components/utils/dateTimeProvider'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Page from '../layouts/withSidebar'

class FeedbackPage extends React.Component<WithPageMetadataProps> {
  static getInitialProps({ res }) {
    const dates = getConferenceDates(Conference, dateTimeProvider.now())
    if (!dates.AcceptingFeedback) {
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
  render() {
    const conference = this.props.pageMetadata.conference
    return (
      <Page
        pageMetadata={this.props.pageMetadata}
        title="Feedback"
        hideBanner={true}
        description={conference.Name + ' feedback.'}
      >
        <h1>Feedback</h1>

        <p>
          Feedback is a critical part of how we improve as a conference and a big focus of the{' '}
          {conference.Organiser.Name} committee is continuous improvement of the conference year-on-year. As a
          conference with a purpose of giving opportunities to speakers that wouldn't normally get to present, including
          people that are new or relatively inexperienced in speaking, it's also extremely important that we give a safe
          way for our speakers to get tangible feedback about their presentations so they can improve.
        </p>
        <p>
          In order to be eligible for our amazing prize draw you must complete feedback about the conference itself as
          well as at least 4 of the sessions you see during the day. Please make sure that you:
        </p>
        <ul>
          <li>
            Include your full name when giving feedback so that we can differentiate you from others in the prize draw
            (don't worry, we anonymise the feedback when passing it on to organisers or speakers)
          </li>
          <li>
            Be sure to be consistent in how you write your name across feedback instances so we know it's the same you
            each time
          </li>
          <li>
            Be respectful and give feedback that is constructive and meets our{' '}
            <Link href="/code-of-conduct">
              <a>code of conduct</a>
            </Link>
          </li>
          <p className="text-center">
            <a href={conference.ConferenceFeedbackLink} target="_blank" className="btn btn-primary">
              Give conference feedback
            </a>{' '}
            <a href={conference.SessionFeedbackLink} target="_blank" className="btn btn-secondary">
              Give session feedback
            </a>
          </p>
        </ul>
      </Page>
    )
  }
}

export default withPageMetadata(FeedbackPage)
