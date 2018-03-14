import * as React from 'react';
import {Moment} from "moment";
import dateTimeProvider from './utils/dateTimeProvider';

// https://dev.to/danhomola/react-higher-order-components-in-typescript-made-simple

export interface InjectedProps {
  currentDate: Moment
}
interface ExternalProps {}

interface WithCurrentDateState {
  currentDate : Moment;
}

export const updateWithTime = <TOriginalProps extends {}>(WrappedComponent: React.ComponentType<TOriginalProps & InjectedProps>) => {
  type ResultProps = TOriginalProps & ExternalProps;
  return class WithCurrentDate extends React.Component<ResultProps, WithCurrentDateState> {
    static displayName = `WithCurrentDate(${WrappedComponent.displayName || WrappedComponent.name})`;

    private timerId : number;

    constructor(props: ResultProps) {
        super(props);
        this.state = {currentDate: dateTimeProvider.now()};
    }

    static async getInitialProps(context : any) {

      const wrappedInitialPropsMethod = (WrappedComponent as any).getInitialProps;
      const wrappedInitialProps = wrappedInitialPropsMethod ? await wrappedInitialPropsMethod(context) : {};

      return {...wrappedInitialProps};
    }

    tick() {
      this.setState({currentDate: dateTimeProvider.now()});
    }

    componentDidMount() {
      this.timerId = setInterval(
        () => this.tick(),
        window.testingMode ? 1000 : 60000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerId);
    }

    render() {
      // Setting currentDate as a prop that updates regularly will ensure that the component updates when time changes
      return <WrappedComponent {...this.props} currentDate={this.state.currentDate} />;
    }
  };
}