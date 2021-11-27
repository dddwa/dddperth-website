import React from 'react'
import Head from 'next/head'
import * as analytics from 'components/global/analytics'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { useConfig } from 'Context/Config'

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

export const Meta: React.FC<MetaArgs> = ({
  pageTitle,
  pageDescription,
  pageImage = '/static/images/logo-2021.png',
}) => {
  const { conference, appConfig, dates } = useConfig()
  const { pathname } = useRouter()
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {
    setTitle(getTitle(pageTitle, conference.Date, conference.Name, !conference.HideDate && !dates.IsComplete))
  }, [pageTitle, dates.IsComplete, conference.HideDate, conference.Name, conference.Date])

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
      <meta property="og:image" content={pageImage} />
      <meta property="twitter:image" content={pageImage} />
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

      <link href="https://fonts.googleapis.com/css?family=Hind:400,500,700&display=swap" rel="stylesheet" />

      {appConfig.instrumentationKey && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        var appInsights=window.appInsights||function(a){
        function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
        }({
            instrumentationKey:"${appConfig.instrumentationKey}"
        });
        window.appInsights=appInsights;
      `,
          }}
        />
      )}
    </Head>
  )
}
