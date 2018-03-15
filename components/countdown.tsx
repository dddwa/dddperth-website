import * as React from 'react'
import { countdownTimer, TimeRemaining } from './utils/countdownTimer'

interface CountdownProps {
  timeRemaining: TimeRemaining
}

class Countdown extends React.Component<CountdownProps> {
  constructor(props: CountdownProps) {
    super(props)
  }

  render() {
    return (
      <div className="timer">
        <span>
          <strong>{this.props.timeRemaining.strftime('%m')}</strong> month{this.props.timeRemaining.strftime(
            '%!m',
          )}{' '}
        </span>
        <span>
          <strong>{this.props.timeRemaining.strftime('%n')}</strong> day{this.props.timeRemaining.strftime(
            '%!n',
          )}{' '}
        </span>
        <span>
          <strong>{this.props.timeRemaining.strftime('%H')}</strong> hour{this.props.timeRemaining.strftime(
            '%!H',
          )}{' '}
        </span>
        <span>
          <strong>{this.props.timeRemaining.strftime('%M')}</strong> min{this.props.timeRemaining.strftime(
            '%!M',
          )}{' '}
        </span>
        <span>
          <strong>{this.props.timeRemaining.strftime('%S')}</strong> sec{this.props.timeRemaining.strftime(
            '%!S',
          )}{' '}
        </span>
      </div>
    )
  }
}

export default countdownTimer(Countdown)
