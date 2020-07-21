import React, { Fragment } from 'react'
import { Footer } from 'components/global/Footer/footer'
import { Meta } from 'components/global/meta'
import { PageMetadata } from 'components/global/withPageMetadata'
import { SkipToContent } from 'components/SkipToContent/SkipToContent'
import { NavigationProvider } from 'components/global/Nav/Nav.context'
import { TestingControl } from 'components/TestingControl/TestingControl'
import { Header } from 'components/global/Header/Header'
import { Nav } from 'components/global/Nav/Nav'
import Menu from 'config/menu'
import { ActionBar } from 'components/ActionBar/ActionBar'
import { Hero } from 'components/Hero/hero'

export interface TemplateProps {
  metadata: PageMetadata
  title: string
  description?: string
  image?: string
  showHero?: boolean
}

export const Template: React.FC<TemplateProps> = ({ metadata, children, title, description, image, showHero }) => {
  const menu = Menu(metadata.conference, metadata.dates)

  return (
    <Fragment>
      <Meta
        pageUrl={metadata.pageUrl}
        pageTitle={title}
        instrumentationKey={metadata.appConfig.instrumentationKey}
        pageDescription={description}
        pageImage={image}
        conference={metadata.conference}
        dates={metadata.dates}
        googleAnalyticsId={metadata.conference.GoogleAnalyticsId}
      />
      <SkipToContent />
      <NavigationProvider>
        <Header metadata={metadata} />
        <Nav menu={menu.Top} />
      </NavigationProvider>
      <ActionBar metadata={metadata} />
      {showHero && <Hero conference={metadata.conference} dates={metadata.dates} />}
      {children}
      <Footer socials={metadata.conference.Socials} conference={metadata.conference} />
      {metadata.appConfig.testingMode && (
        <TestingControl currentDate={metadata.currentDate} conference={metadata.conference} />
      )}
    </Fragment>
  )
}
