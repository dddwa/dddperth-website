import React from 'react'
import dateTimeProvider, { CurrentDate } from './utils/dateTimeProvider'

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface WithCurrentDateProps {
  currentDate: CurrentDate
}
interface ExternalProps {}

interface WithCurrentDateState {
  currentDate: CurrentDate
}

export const withCurrentDate = <TOriginalProps extends {}>(
  WrappedComponent: React.ComponentType<TOriginalProps & WithCurrentDateProps>,
) => {
  type ResultProps = TOriginalProps & ExternalProps
  return class WithCurrentDate extends React.Component<ResultProps, WithCurrentDateState> {
    static displayName = `WithCurrentDate(${WrappedComponent.displayName || WrappedComponent.name})`

    private timerId: number

    constructor(props: ResultProps) {
      super(props)
      this.state = { currentDate: dateTimeProvider.now() }
    }

    static async getInitialProps(context: any) {
      const wrappedInitialPropsMethod = (WrappedComponent as any).getInitialProps
      const wrappedInitialProps = wrappedInitialPropsMethod ? await wrappedInitialPropsMethod(context) : {}

      return { ...wrappedInitialProps }
    }

    tick() {
      this.setState({ currentDate: dateTimeProvider.now() })
    }

    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), (window.appConfig.testingMode ? 1000 : 60000) as any) as unknown as number
    }

    componentWillUnmount() {
      clearInterval(this.timerId)
    }

    render() {
      // Setting currentDate as a prop that updates regularly will ensure that the component updates when time changes
      return <WrappedComponent {...this.props} currentDate={this.state.currentDate} />
    }
  }
}
