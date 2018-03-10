import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as url from '../utils/full-url';
import { Fragment } from 'react';

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface InjectedProps {}
interface ExternalProps {
  pageUrl : string,
  pagePath : string,
  instrumentationKey : string
}

declare global {
  interface Window { instrumentationKey: string; }
}

export const withPageMetadata = <TOriginalProps extends {}>(WrappedComponent: React.ComponentType<TOriginalProps & InjectedProps>) => {
  type ResultProps = TOriginalProps & ExternalProps;
  return class PageWithMetadata extends React.Component<ResultProps> {
    static displayName = `PageWithMetadata(${WrappedComponent.displayName || WrappedComponent.name})`;

    private pageUrl : string | null = null;
    private pagePath : string | null = null;
    private instrumentationKey : string | null = null;

    constructor(props: ResultProps) {
        super(props);
    }

    static async getInitialProps(context : any) {

      const wrappedInitialPropsMethod = (WrappedComponent as any).getInitialProps;
      const wrappedInitialProps = wrappedInitialPropsMethod ? await wrappedInitialPropsMethod(context) : {};

      const pageUrl = context.req ? url.getUrlFromNodeRequest(context.req) : null;
      const pagePath = context.req ? context.pathname : null;
      const instrumentationKey = process && process.env.APPINSIGHTS_INSTRUMENTATIONKEY ? process.env.APPINSIGHTS_INSTRUMENTATIONKEY : null;

      return {pageUrl, pagePath, instrumentationKey, ...wrappedInitialProps};
    }

    componentWillMount() {

      if (this.props.instrumentationKey) {
        this.instrumentationKey = this.props.instrumentationKey;
      }

      this.pageUrl = this.props.pageUrl || url.getUrlFromWindow(window);
      this.pagePath = this.props.pagePath || window.location.pathname;
    }

    static childContextTypes = {
      pageUrl : PropTypes.string,
      pagePath : PropTypes.string,
      instrumentationKey : PropTypes.string,
      ...((WrappedComponent as any).childContextTypes || {})
    }

    getChildContext() {
      return { pageUrl: this.pageUrl, pagePath: this.pagePath, instrumentationKey: this.instrumentationKey };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}