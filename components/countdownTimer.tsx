import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StatelessComponent, ReactPropTypes } from 'react';

// Generic Countdown Timer UI component
//
// https://github.com/uken/react-countdown-timer
// https://github.com/uken/react-countdown-timer/blob/master/LICENSE
// Modifications: Updated the output to match the needs of the
//  conference and converted to TypeScript. Removed isMounted call.
//
// props:
//   - initialTimeRemaining: Number
//       The time remaining for the countdown (in ms).
//
//   - interval: Number (optional -- default: 1000ms)
//       The time between timer ticks (in ms).
//
//   - formatFunc(timeRemaining): Function (optional)
//       A function that formats the timeRemaining.
//
//   - tickCallback(timeRemaining): Function (optional)
//       A function to call each tick.
//
//   - completeCallback(): Function (optional)
//       A function to call when the countdown completes.
//

interface CountdownTimerArgs {
  initialTimeRemaining: number,
  interval: number,
  formatFunc?: Function,
  tickCallback?: Function,
  completeCallback?: Function
}

interface CountdownTimerState {
  timeRemaining: number,
  timeoutId: NodeJS.Timer|null,
  prevTime: number|null
}

class CountdownTimer extends React.Component<CountdownTimerArgs, CountdownTimerState> {

  static displayName : string = 'CountdownTimer';

  static propTypes = {
    initialTimeRemaining: PropTypes.number.isRequired,
    interval: PropTypes.number,
    formatFunc: PropTypes.func,
    tickCallback: PropTypes.func,
    completeCallback: PropTypes.func
  };

  initialState() {
    console.dir(this.props);
    // Normally an anti-pattern to use this.props in getInitialState,
    // but these are all initializations (not an anti-pattern).
    return {
      timeRemaining: this.props.initialTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
  };

  componentWillMount() {
    this.setState(this.initialState());
  }

  componentDidMount() {
    this.setState(this.initialState());
    this.tick();
  }

  componentWillReceiveProps(newProps : CountdownTimerArgs) {
    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
    this.setState({prevTime: null, timeRemaining: newProps.initialTimeRemaining});
  }

  componentDidUpdate() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0) {
      this.tick();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId as NodeJS.Timer);
  }

  tick() {
    var currentTime = Date.now();
    var dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    var interval = this.props.interval;

    // correct for small variations in actual timeout time
    var timeRemainingInInterval = (interval - (dt % interval));
    var timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    var timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    var countdownComplete = (this.state.prevTime && timeRemaining <= 0);

    if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
    this.setState({
      timeoutId: countdownComplete ? null : setTimeout(() => this.tick(), timeout),
      prevTime: currentTime,
      timeRemaining: timeRemaining
    });

    if (countdownComplete) {
      if (this.props.completeCallback) { this.props.completeCallback(); }
      return;
    }

    if (this.props.tickCallback) {
      this.props.tickCallback(timeRemaining);
    }
  }

  getFormattedTime(milliseconds : number) {
    if (this.props.formatFunc) {
      return this.props.formatFunc(milliseconds);
    }

    var totalSeconds = Math.round(milliseconds / 1000);

    var seconds = parseInt(totalSeconds % 60 + "", 10);
    var minutes = parseInt(totalSeconds / 60 + "", 10) % 60;
    var hours = parseInt(totalSeconds / 3600 + "", 10);

    var seconds2 = seconds < 10 ? '0' + seconds : seconds;
    var minutes2 = minutes < 10 ? '0' + minutes : minutes;
    var hours2 = hours < 10 ? '0' + hours : hours;

    return hours2 + ':' + minutes2 + ':' + seconds2;
  }

  render() {
    var timeRemaining = this.state.timeRemaining;

    return (
      <div className="timer">
        {this.getFormattedTime(timeRemaining)}
      </div>
    );
  }
};

export default CountdownTimer;