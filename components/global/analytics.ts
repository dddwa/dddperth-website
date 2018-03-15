import * as ReactGA from 'react-ga'

declare global {
    interface Window {
        appInsights: any
    }
}

export const init = (googleAnalyticsId: string) => {
    ReactGA.initialize(googleAnalyticsId)
}

export const logPageView = () => {
    ReactGA.set({
        page: window.location.pathname,
    })
    ReactGA.pageview(window.location.pathname)
    if (window.appInsights) {
        window.appInsights.trackPageView()
    }
}

export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({
            action,
            category,
        })
        if (window.appInsights) {
            window.appInsights.trackEvent(category + ':' + action, {
                action,
                category,
            })
        }
    }
}

export const logException = (description = '', fatal = false) => {
    if (description) {
        ReactGA.exception({
            description,
            fatal,
        })
        if (window.appInsights) {
            window.appInsights.trackEvent('Exception:' + description, {
                description,
                fatal,
            })
        }
    }
}
