import React, { Fragment } from 'react'
import * as analytics from '../components/global/analytics'
import { Footer } from '../components/global/Footer/footer'
import { Meta } from '../components/global/meta'
import { PageMetadata } from '../components/global/withPageMetadata'
import { TestingControl } from '../components/TestingControl/TestingControl'
import Menu from '../config/menu'
import { SkipToContent } from '../components/SkipToContent/SkipToContent'
import { Header } from '../components/global/Header/Header'
import { Nav } from '../components/global/Nav/Nav'
import { NavigationProvider } from '../components/global/Nav/Nav.context'

export interface MainProps {
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

export const Main: React.FC<MainProps> = props => {
  const { pageMetadata: metadata } = props

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      analytics.init(metadata.conference.GoogleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }, [metadata])

  return (
    <Fragment>
      <Meta
        pageUrl={metadata.pageUrl}
        pageTitle={props.title}
        instrumentationKey={metadata.appConfig.instrumentationKey}
        pageDescription={props.description}
        pageImage={props.image}
        conference={metadata.conference}
        dates={metadata.dates}
      />
      <SkipToContent />
      <NavigationProvider>
        <Header metadata={metadata} />
        <Nav menu={Menu(metadata.conference, metadata.dates).Top} />
      </NavigationProvider>
      <main id="content">{props.children}</main>
      <Footer
        menu={Menu(metadata.conference, metadata.dates).Footer}
        socials={metadata.conference.Socials}
        conference={metadata.conference}
      />
      {metadata.appConfig.testingMode && (
        <TestingControl currentDate={metadata.currentDate} conference={metadata.conference} />
      )}
    </Fragment>
  )
}
