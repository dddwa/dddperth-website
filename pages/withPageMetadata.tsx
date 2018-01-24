import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as url from '../components/utils/full-url';
import { Fragment } from 'react';

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface InjectedProps {}
interface ExternalProps {
  pageUrl : string
}

export const withPageMetadata = <TOriginalProps extends {}>(WrappedComponent: React.ComponentType<TOriginalProps & InjectedProps>) => {
  type ResultProps = TOriginalProps & ExternalProps;
  return class PageWithMetadata extends React.Component<ResultProps> {
    static displayName = `PageWithMetadata(${WrappedComponent.displayName || WrappedComponent.name})`;

    private pageUrl : string | null;

    constructor(props: ResultProps) {
        super(props);
    }

    static async getInitialProps(context : any) {

      const wrappedInitialPropsMethod = (WrappedComponent as any).getInitialProps;
      const wrappedInitialProps = wrappedInitialPropsMethod ? await wrappedInitialPropsMethod(context) : {};

      const pageUrl = context.req ? url.getUrlFromNodeRequest(context.req) : null;

      return {pageUrl, ...wrappedInitialProps};
    }

    componentWillMount() {
      this.pageUrl = this.props.pageUrl || url.getUrlFromWindow(window);
    }

    static childContextTypes = {
      pageUrl : PropTypes.string,
      ...((WrappedComponent as any).childContextTypes || {})
    }

    getChildContext() {
      return { pageUrl: this.pageUrl };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}