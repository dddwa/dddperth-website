import * as React from 'react'
import { Fragment, StatelessComponent } from 'react';
import Meta from '../components/global/meta';
import Nav from '../components/global/nav';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import * as analytics from '../components/global/analytics';
import * as PropTypes from 'prop-types';
import Conference from '../config/conference';
import Menu from '../config/menu';
import getConferenceDates from '../config/dates';

interface MainArgs {
  isHome? : boolean;
  title : string;
  description? : string;
  image? : string;
}

declare global {
  interface Window { GA_INITIALIZED: boolean; }
}

class Main extends React.Component<MainArgs> {

  static contextTypes = {
    pageUrl : PropTypes.string,
    pagePath : PropTypes.string
  }

  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      analytics.init(Conference.GoogleAnalyticsId);
      window.GA_INITIALIZED = true;
    }
    analytics.logPageView();
  }

  render() {
    const dates = getConferenceDates(Conference);
    return <Fragment>
      <Meta pageUrl={this.context.pageUrl} pageTitle={this.props.title} pageDescription={this.props.description} pageImage={this.props.image} conference={Conference} dates={dates} />
      <Nav pagePath={this.context.pagePath} menu={Menu.Top} />
      <Header isHome={this.props.isHome} conference={Conference} dates={dates} />
      { this.props.children }
      <Footer menu={Menu.Footer} socials={Conference.Socials} conference={Conference} />
    </Fragment>;
  }
}

export default Main;