import * as React from 'react'
import Page from '../layouts/main';
import * as url from '../components/utils/full-url';
import * as next from 'next';
import * as PropTypes from 'prop-types';

interface PageProps {
  pageUrl : string;
}

export default class IndexPage extends React.Component<PageProps> {
  static async getInitialProps(context : any) {
    const pageUrl : string = context.req
      ? url.getUrlFromNodeRequest(context.req)
      : url.getUrlFromWindow(window);

    return {pageUrl};
  }

  getChildContext() {
    return { pageUrl: this.props.pageUrl };
  }

  static childContextTypes = {
    pageUrl : PropTypes.string
  }

  render() {
    return (
      <Page isHome={true} title="Home">
        <h1>Hello world!</h1>
      </Page>
    );
  }
}

