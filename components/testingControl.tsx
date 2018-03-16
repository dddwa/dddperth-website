import { Moment } from 'moment'
import * as moment from 'moment'
import * as React from 'react'
import { Panel } from 'react-bootstrap'
import From2017 from '../config/2017'
import SponsorData from '../config/sponsors'
import { Conference } from '../config/types'
import dateTimeProvider, { CurrentDate } from './utils/dateTimeProvider'

interface TestingControlProps {
  currentDate: CurrentDate
  conference: Conference
}
interface TestingControlState {
  on: boolean
}

class TestingControl extends React.Component<TestingControlProps, TestingControlState> {
  componentWillMount() {
    this.setState({ on: false })
  }

  setDateTo(date: Moment) {
    dateTimeProvider.now = () => {
      return {
        Value: date.clone().add(1, 'minute'),
      }
    }
  }

  reset() {
    dateTimeProvider.now = () => {
      return {
        Value: moment(new Date()),
      }
    }
    this.props.conference.Sponsors = SponsorData
  }

  render() {
    const btnStyle = { cursor: 'pointer', width: '100%' }
    return (
      <div id="testing-control">
        <Panel>
          <Panel.Heading>
            Testing [<a
              style={btnStyle}
              onClick={() => {
                this.setState({ on: !this.state.on })
                this.reset()
              }}
            >
              {this.state.on ? 'On' : 'Off'}]
            </a>
          </Panel.Heading>
          {this.state.on && (
            <Panel.Body>
              <a
                className="content btn"
                style={btnStyle}
                onClick={() => this.setDateTo(this.props.conference.PresentationSubmissionsOpenFrom)}
              >
                CFP open
              </a>
              <br />
              <a
                className="voting btn"
                style={btnStyle}
                onClick={() => this.setDateTo(this.props.conference.VotingOpenFrom)}
              >
                Voting open
              </a>
              <br />
              <a
                className="agenda btn"
                style={btnStyle}
                onClick={() => this.setDateTo(this.props.conference.AgendaPublishedFrom)}
              >
                Agenda published
              </a>
              <br />
              <a className="conference btn" style={btnStyle} onClick={() => this.setDateTo(this.props.conference.Date)}>
                On the day
              </a>
              <br />
              <a
                className="sponsors btn"
                style={btnStyle}
                onClick={() => (this.props.conference.Sponsors = From2017.Sponsors)}
              >
                Add sponsors
              </a>
              <br />
              <a className="btn btn-secondary" style={btnStyle} onClick={() => this.reset()}>
                Reset
              </a>
              <br />
              <p className="text-center">
                Now: <code>{this.props.currentDate.Value.format('DD/MM/YYYY h:mma')}</code>
              </p>
            </Panel.Body>
          )}
        </Panel>
      </div>
    )
  }
}

export default TestingControl
