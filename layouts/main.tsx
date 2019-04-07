import React, { Fragment } from 'react'
import * as analytics from '../components/global/analytics'
import Footer from '../components/global/footer'
import Header from '../components/global/header'
import Meta from '../components/global/meta'
import { Nav } from '../components/global/nav'
import { PageMetadata } from '../components/global/withPageMetadata'
import TestingControl from '../components/testingControl'
import Menu from '../config/menu'

export interface MainProps {
  isHome?: boolean
  hideBanner?: boolean
  title: string
  description?: string
  image?: string
  pageMetadata: PageMetadata
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

class Main extends React.Component<MainProps> {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      analytics.init(this.props.pageMetadata.conference.GoogleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }

  render() {
    const metadata = this.props.pageMetadata

    return (
      <Fragment>
        <Meta
          pageUrl={metadata.pageUrl}
          pageTitle={this.props.title}
          instrumentationKey={metadata.appConfig.instrumentationKey}
          pageDescription={this.props.description}
          pageImage={this.props.image}
          conference={metadata.conference}
          dates={metadata.dates}
        />
        <div>
          <a className="skip-to-content" href="#content">
            Skip to content
          </a>
          <Nav pagePath={metadata.pagePath} menu={Menu(metadata.conference, metadata.dates).Top} />
          <Header
            isHome={this.props.isHome}
            hideBanner={this.props.hideBanner}
            conference={metadata.conference}
            dates={metadata.dates}
          />
          <div id="content">{this.props.children}</div>
          <Footer
            menu={Menu(metadata.conference, metadata.dates).Footer}
            socials={metadata.conference.Socials}
            conference={metadata.conference}
          />
          {metadata.appConfig.testingMode && (
            <TestingControl currentDate={metadata.currentDate} conference={metadata.conference} />
          )}
        </div>
      </Fragment>
    )
  }
}

export default Main
