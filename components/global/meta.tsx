import React from 'react'
import Head from 'next/head'
import * as analytics from 'components/global/analytics'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { useConfig } from 'Context/Config'
import getConferenceDates from 'config/dates'
import dateTimeProvider from 'components/utils/dateTimeProvider'

interface MetaArgs {
  pageTitle: string
  pageDescription?: string
  pageImage?: string
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

const getTitle = (title: string, date: Date, name: string, showDate: boolean) =>
  `${title !== 'Home' ? title + ' - ' : ''}${name}${showDate ? ` | ${format(date, 'do MMMM yyyy')}` : ''}`

export const Meta = ({ pageTitle, pageDescription, pageImage }: MetaArgs) => {
  const { conference, appConfig, dates } = useConfig()
  const { pathname } = useRouter()
  const conferenceDates = getConferenceDates(conference, dateTimeProvider.now())
  const ogImage =
    pageImage || conference.Instance !== '2022' || conferenceDates.IsComplete
      ? '/static/images/logo.png'
      : '/static/images/logo-2022-og.jpg'

  const title = React.useMemo(
    () => getTitle(pageTitle, conference.Date, conference.Name, !conference.HideDate && !dates.IsComplete),
    [pageTitle, dates.IsComplete, conference.HideDate, conference.Name, conference.Date],
  )

  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      analytics.init(conference.GoogleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }, [conference.GoogleAnalyticsId])

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={conference.Name} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title.substring(0, 70)} />
      <meta name="description" content={pageDescription || conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={conference.Organiser.Name} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={conference.Name} />
      <meta name="twitter:creator" content={conference.Organiser.Name} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={conference.Name} />
      <link rel="canonical" href={`${appConfig.baseUrl}${pathname}`} />
      <meta property="og:url" content={`${appConfig.baseUrl}${pathname}`} />
      <link rel="preconnect" href="https://www.google-analytics.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link rel="preconnect" href="https://az416426.vo.msecnd.net"></link>
    </Head>
  )
}
