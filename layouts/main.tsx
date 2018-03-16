import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Fragment } from 'react'
import * as analytics from '../components/global/analytics'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import Meta from '../components/global/meta'
import Nav from '../components/global/nav'
import TestingControl from '../components/testingControl'
import { withCurrentDate, WithCurrentDateProps } from '../components/withCurrentDate'
import Conference from '../config/conference'
import getConferenceDates from '../config/dates'
import Menu from '../config/menu'

export interface MainArgs {
  isHome?: boolean
  hideBanner?: boolean
  title: string
  description?: string
  image?: string
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

class Main extends React.Component<MainArgs & WithCurrentDateProps> {
  static contextTypes = {
    instrumentationKey: PropTypes.string,
    pagePath: PropTypes.string,
    pageUrl: PropTypes.string,
    testingMode: PropTypes.bool,
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      analytics.init(Conference.GoogleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }

  render() {
    const dates = getConferenceDates(Conference, this.props.currentDate)
    return (
      <Fragment>
        <Meta
          pageUrl={this.context.pageUrl}
          pageTitle={this.props.title}
          instrumentationKey={this.context.instrumentationKey}
          pageDescription={this.props.description}
          pageImage={this.props.image}
          conference={Conference}
          dates={dates}
        />
        <Nav pagePath={this.context.pagePath} menu={Menu(dates).Top} />
        <Header isHome={this.props.isHome} hideBanner={this.props.hideBanner} conference={Conference} dates={dates} />
        {this.props.children}
        <Footer menu={Menu(dates).Footer} socials={Conference.Socials} conference={Conference} />
        {this.context.testingMode && <TestingControl currentDate={this.props.currentDate} />}
      </Fragment>
    )
  }
}

export default withCurrentDate(Main)
