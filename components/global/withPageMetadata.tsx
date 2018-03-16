import * as React from 'react'
import Conference from '../../config/conference'
import getConferenceDates from '../../config/dates'
import { Conference as IConference, Dates } from '../../config/types'
import { CurrentDate } from '../utils/dateTimeProvider'
import * as url from '../utils/full-url'
import { withCurrentDate, WithCurrentDateProps } from '../withCurrentDate'

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface AppConfig {
  instrumentationKey: string
  testingMode: boolean
}
declare global {
  interface Window {
    appConfig: AppConfig
  }
}

export interface PageMetadata {
  appConfig: AppConfig
  conference: IConference
  currentDate: CurrentDate
  dates: Dates
  pagePath: string
  pageUrl: string
}

export interface WithPageMetadataProps {
  pageMetadata: PageMetadata
}
interface ExternalProps {
  appConfig: AppConfig
  pagePath: string
  pageUrl: string
}

const withPageMetadata = <TOriginalProps extends {}>(
  WrappedComponent: React.ComponentType<TOriginalProps & WithPageMetadataProps>,
) => {
  type ResultProps = TOriginalProps & ExternalProps
  class PageWithMetadata extends React.Component<ResultProps & WithCurrentDateProps> {
    static displayName = `PageWithMetadata(${WrappedComponent.displayName || WrappedComponent.name})`

    private pagePath: string | null = null
    private pageUrl: string | null = null

    static async getInitialProps(context: any) {
      const wrappedInitialPropsMethod = (WrappedComponent as any).getInitialProps
      const wrappedInitialProps = wrappedInitialPropsMethod ? await wrappedInitialPropsMethod(context) : {}

      const pagePath = context.req ? context.pathname : null
      const pageUrl = context.req ? url.getUrlFromNodeRequest(context.req) : null

      const appConfig = context.req
        ? {
            instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
            testingMode: process.env.TESTING_MODE === 'true',
          }
        : window.appConfig

      return {
        appConfig,
        pagePath,
        pageUrl,
        ...wrappedInitialProps,
      }
    }

    constructor(props: ResultProps & WithCurrentDateProps) {
      super(props)
    }

    componentWillMount() {
      this.pagePath = this.props.pagePath || window.location.pathname
      this.pageUrl = this.props.pageUrl || url.getUrlFromWindow(window)
    }

    componentDidMount() {
      window.appConfig = this.props.appConfig
    }

    render() {
      return (
        <WrappedComponent
          pageMetadata={{
            appConfig: this.props.appConfig,
            conference: Conference,
            currentDate: this.props.currentDate,
            dates: getConferenceDates(Conference, this.props.currentDate),
            pagePath: this.pagePath,
            pageUrl: this.pageUrl,
          }}
          {...this.props}
        />
      )
    }
  }
  return withCurrentDate(PageWithMetadata)
}

export default withPageMetadata
