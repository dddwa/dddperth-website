import Head from 'next/head'
import React from 'react'
import * as analytics from 'components/global/analytics'
import { Conference, Dates } from 'config/types'

interface MetaArgs {
  instrumentationKey: string | null
  pageUrl: string
  pageTitle: string
  pageDescription?: string
  pageImage?: string
  conference: Conference
  dates: Dates
  googleAnalyticsId: string
}

declare global {
  interface Window {
    GA_INITIALIZED: boolean
  }
}

const getTitle = (title: string, conference: Conference, dates: Dates) =>
  `${title !== 'Home' ? title + ' - ' : ''}${conference.Name}${
    !conference.HideDate && !dates.IsComplete ? ` | ${conference.Date.format('Do MMMM YYYY')}` : ''
  }`

export const Meta: React.FC<MetaArgs> = ({
  pageUrl,
  pageTitle,
  instrumentationKey,
  pageDescription,
  pageImage,
  conference,
  dates,
  googleAnalyticsId,
}) => {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      analytics.init(googleAnalyticsId)
      window.GA_INITIALIZED = true
    }
    analytics.logPageView()
  }, [googleAnalyticsId])

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content={conference.Name} />
      <title>{getTitle(pageTitle, conference, dates)}</title>
      <meta property="og:title" content={getTitle(pageTitle, conference, dates)} />
      <meta name="twitter:title" content={getTitle(pageTitle, conference, dates).substring(0, 70)} />
      <meta name="description" content={pageDescription || conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={conference.Organiser.Name} />
      <meta property="og:image" content={pageImage || '/static/images/logo-2019.png'} />
      <meta property="twitter:image" content={pageImage || '/static/images/logo-2019.png'} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={conference.Name} />
      <meta name="twitter:creator" content={conference.Organiser.Name} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={conference.Name} />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:url" content={pageUrl} />
      <link rel="preconnect" href="https://www.google-analytics.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link rel="preconnect" href="https://az416426.vo.msecnd.net"></link>

      <link href="https://fonts.googleapis.com/css?family=Hind:400,500,700&display=swap" rel="stylesheet" />

      {instrumentationKey && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
        var appInsights=window.appInsights||function(a){
        function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
        }({
            instrumentationKey:"${instrumentationKey}"
        });
        window.appInsights=appInsights;
      `,
          }}
        />
      )}
    </Head>
  )
}
