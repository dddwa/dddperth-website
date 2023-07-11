import * as ReactGA from 'react-ga'

declare global {
  interface Window {
    appInsights: any
  }
}

export const init = (googleAnalyticsId: string) => {
  ReactGA.initialize(googleAnalyticsId)
}

export const getSessionId = () => {
  return window.appInsights && window.appInsights && window.appInsights.context && window.appInsights.context.user
    ? window.appInsights.context.user.id
    : null
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  if (window.appInsights) {
    window.appInsights.trackPageView()
  }
}

export const logEvent = (category: string, action: string, data: any, measurements?: any) => {
  if (category && action && logEvent) {
    if (window.appInsights && window.appInsights.trackEvent) {
      window.appInsights.trackEvent(
        category + ':' + action,
        {
          action,
          category,
          ...data,
        },
        measurements,
      )
    }
  }
}

export const logException = (description: string, exception: Error, data: any) => {
  if (description) {
    ReactGA.exception({ description, exception: exception.toString() })
    if (window.appInsights && window.appInsights.trackException) {
      window.appInsights.trackException(exception, 'unhandled', {
        description,
        ...data,
      })
    }
  }
}
