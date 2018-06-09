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
  return window.appInsights ? window.appInsights.context.user.id : null
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
  if (window.appInsights) {
    window.appInsights.trackPageView()
  }
}

export const logEvent = (category = '', action = '', data: any, measurements?: any) => {
  if (category && action) {
    ReactGA.event({ category, action })
    if (window.appInsights) {
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

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
    if (window.appInsights) {
      window.appInsights.trackEvent('Exception:' + description, {
        description,
        fatal,
      })
    }
  }
}
