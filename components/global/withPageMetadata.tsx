import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Fragment } from 'react'
import * as url from '../utils/full-url'

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface InjectedProps {}
interface ExternalProps {
  instrumentationKey: string
  pagePath: string
  pageUrl: string
  testingMode: boolean
}

declare global {
  interface Window {
    instrumentationKey: string
    testingMode: boolean
  }
}

export const withPageMetadata = <TOriginalProps extends {}>(
  WrappedComponent: React.ComponentType<TOriginalProps & InjectedProps>,
) => {
  type ResultProps = TOriginalProps & ExternalProps
  return class PageWithMetadata extends React.Component<ResultProps> {
    static displayName = `PageWithMetadata(${WrappedComponent.displayName ||
      WrappedComponent.name})`

    private instrumentationKey: string | null = null
    private pagePath: string | null = null
    private pageUrl: string | null = null
    private testingMode: boolean | null = null

    static async getInitialProps(context: any) {
      const wrappedInitialPropsMethod = (WrappedComponent as any)
        .getInitialProps
      const wrappedInitialProps = wrappedInitialPropsMethod
        ? await wrappedInitialPropsMethod(context)
        : {}

      const instrumentationKey =
        process && process.env.APPINSIGHTS_INSTRUMENTATIONKEY
          ? process.env.APPINSIGHTS_INSTRUMENTATIONKEY
          : null
      const pagePath = context.req ? context.pathname : null
      const pageUrl = context.req
        ? url.getUrlFromNodeRequest(context.req)
        : null
      const testingMode = context.req
        ? process.env.TESTING_MODE === 'true'
        : window.testingMode

      return {
        pageUrl,
        pagePath,
        instrumentationKey,
        testingMode,
        ...wrappedInitialProps,
      }
    }

    constructor(props: ResultProps) {
      super(props)
    }

    componentWillMount() {
      if (this.props.instrumentationKey) {
        this.instrumentationKey = this.props.instrumentationKey
      }
      this.pagePath = this.props.pagePath || window.location.pathname
      this.pageUrl = this.props.pageUrl || url.getUrlFromWindow(window)
      this.testingMode = this.props.testingMode
    }

    static childContextTypes = {
      instrumentationKey: PropTypes.string,
      pagePath: PropTypes.string,
      pageUrl: PropTypes.string,
      testingMode: PropTypes.bool,
      ...((WrappedComponent as any).childContextTypes || {}),
    }

    getChildContext() {
      return {
        pageUrl: this.pageUrl,
        pagePath: this.pagePath,
        instrumentationKey: this.instrumentationKey,
        testingMode: this.testingMode,
      }
    }

    render() {
      return (
        <Fragment>
          <script
            dangerouslySetInnerHTML={{
              __html: 'window.testingMode = ' + this.testingMode,
            }}
          />
          <WrappedComponent {...this.props} />
        </Fragment>
      )
    }
  }
}
