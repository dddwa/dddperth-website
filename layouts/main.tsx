import * as React from 'react'
import Meta from '../components/global/meta';
import Header from '../components/global/header';
import Footer from '../components/global/footer';
import { Fragment, StatelessComponent } from 'react';
import * as analytics from '../components/global/analytics';

interface MainArgs {
  isHome? : boolean;
}

declare global {
  interface Window { GA_INITIALIZED: boolean; }
}

class Main extends React.Component<MainArgs, any> {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      analytics.init();
      window.GA_INITIALIZED = true;
    }
    analytics.logPageView();
  }

  render() {
    return <Fragment>
      <Meta />
      <Header isHome={this.props.isHome} />
      { this.props.children }
      <Footer />
    </Fragment>;
  }
}

export default Main;