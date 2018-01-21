import * as ReactGA from 'react-ga';
import Conference from '../../config/conference';

export const init = () => {
  ReactGA.initialize(Conference.GoogleAnalyticsId);
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
}