import * as React from 'react';
import * as PropTypes from 'prop-types';
import { StatelessComponent, ReactPropTypes, Fragment } from 'react';
import * as moment from 'moment';
import {Moment, Duration} from 'moment';

// Generic Countdown Timer UI component
// https://github.com/uken/react-countdown-timer
// https://github.com/uken/react-countdown-timer/blob/master/LICENSE
// Modifications: Updated the output to convert to TS, made a HOC and added strftime.
// The strftime code is from https://github.com/hilios/jQuery.countdown.

interface CountdownTimerArgs {
  countdownTo: Moment,
  interval: number,
  tickCallback?: Function,
  completeCallback?: Function,
}

interface InjectedArgs {
  timeRemaining: TimeRemaining
}

export interface TimeRemaining {
  duration: Duration;
  strftime: (format: string) => string;
}

interface CountdownTimerState {
  timeRemaining: TimeRemaining;
  timeoutId: NodeJS.Timer|null;
}

export const countdownTimer = <TOriginalProps extends {}>(WrappedComponent: React.ComponentType<InjectedArgs>) => {
  return class CountdownTimer extends React.Component<CountdownTimerArgs, CountdownTimerState> {
    static displayName = `CountdownTimer(${WrappedComponent.displayName || WrappedComponent.name})`;

    constructor(props: CountdownTimerArgs) {
        super(props);
    }

    getTimeRemaining() {
      const duration = moment.duration(this.props.countdownTo.diff(moment(new Date())));
      return {
        duration: duration,
        strftime: this.strftime(duration)
      };
    }

    initialState() {
      return {
        timeRemaining: this.getTimeRemaining(),
        timeoutId: null
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
      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }
      this.setState(this.initialState());
    }

    componentDidUpdate() {
      if ((!this.state.timeoutId) && this.state.timeRemaining.duration.asMilliseconds() > 0) {
        this.tick();
      }
    }

    componentWillUnmount() {
      clearTimeout(this.state.timeoutId as NodeJS.Timer);
    }

    tick() {

      const timeRemaining = this.getTimeRemaining();
      const countdownComplete = timeRemaining.duration.asMilliseconds() <= 0;

      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }

      this.setState({timeRemaining});

      if (!countdownComplete) {
        this.setState({timeoutId: setTimeout(() => this.tick(), Math.min(this.props.interval, timeRemaining.duration.asMilliseconds()))})
      } else {
        if (this.props.completeCallback) { this.props.completeCallback(); }
        return;
      }

      if (this.props.tickCallback) {
        this.props.tickCallback(timeRemaining);
      }
    }

    private getOffsetsFor(duration : Duration) {
      const totalSecsLeft = duration.asSeconds();
      const now = moment(new Date());
      const destination = now.add(duration);
      return {
        seconds     : Math.floor(totalSecsLeft % 60),
        minutes     : Math.floor(totalSecsLeft / 60) % 60,
        hours       : Math.floor(totalSecsLeft / 60 / 60) % 24,
        days        : Math.floor(totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek  : Math.floor(totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth : Math.floor(totalSecsLeft / 60 / 60 / 24 % 30.4368),
        weeks       : Math.floor(totalSecsLeft / 60 / 60 / 24 / 7),
        weeksToMonth: Math.floor(totalSecsLeft / 60 / 60 / 24 / 7) % 4,
        months      : Math.floor(totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years       : Math.abs(destination.year()-now.year()),
        totalDays   : Math.floor(totalSecsLeft / 60 / 60 / 24),
        totalHours  : Math.floor(totalSecsLeft / 60 / 60),
        totalMinutes: Math.floor(totalSecsLeft / 60),
        totalSeconds: Math.floor(totalSecsLeft)
      };
    }
  // Map to convert from a directive to offset object property
  private DIRECTIVE_KEY_MAP = {
    'Y': 'years',
    'm': 'months',
    'n': 'daysToMonth',
    'd': 'daysToWeek',
    'w': 'weeks',
    'W': 'weeksToMonth',
    'H': 'hours',
    'M': 'minutes',
    'S': 'seconds',
    'D': 'totalDays',
    'I': 'totalHours',
    'N': 'totalMinutes',
    'T': 'totalSeconds'
  };
  // Returns an escaped regexp from the string
  private escapedRegExp(str : string) : RegExp {
    var sanitize = str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    return new RegExp(sanitize);
  }
  private pluralize(format : string, count : number) {
    var plural = 's', singular = '';
    if (format) {
      const formats = format.replace(/(:|;|\s)/gi, '').split(/\,/);
      if (formats.length === 1) {
        plural = format[0];
      } else {
        singular = format[0];
        plural = format[1];
      }
    }
    // Fix #187
    if(Math.abs(count) > 1) {
      return plural;
    } else {
      return singular;
    }
  }
  // Time string formatter
  private strftime(duration: Duration) {
    const that = this;
    const offsets = this.getOffsetsFor(duration);

    return function(format : string) {
      var directives = format.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (directives) {
        for (let i = 0, len = directives.length; i < len; ++i) {
          let directive = directives[i]
              .match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/);
          if (directive === null) {
            continue;
          }
          let regexp    = that.escapedRegExp(directive[0]),
            modifier  = directive[1] || '',
            plural    = directive[3] || '',
            value     = null,
            key = directive[2];
          // Swap shot-versions directives
          if (that.DIRECTIVE_KEY_MAP.hasOwnProperty(key)) {
            value = (that.DIRECTIVE_KEY_MAP as any)[key];
            value = Number((offsets as any)[value]);
          }
          if (value !== null) {
            // Pluralize
            if (modifier === '!') {
              value = that.pluralize(plural, value);
            }
            // Add zero-padding
            if (modifier === '') {
              if(value < 10) {
                value = '0' + value.toString();
              }
            }
            // Replace the directive
            format = format.replace(regexp, value.toString());
          }
        }
      }
      format = format.replace(/%%/, '%');
      return format;
    };
  }

    render() {
      var timeRemaining = this.state.timeRemaining;

      if (timeRemaining.duration.asMilliseconds() <= 0) {
        return null;
      }

      return <WrappedComponent timeRemaining={timeRemaining} {...this.props} />;
    }
  }
};

export default countdownTimer;