import { Moment } from 'moment'
import * as moment from 'moment'
import * as React from 'react'
import { Panel } from 'react-bootstrap'
import From2017 from '../config/2017'
import Conference from '../config/conference'
import SponsorData from '../config/sponsors'
import dateTimeProvider from './utils/dateTimeProvider'

interface TestingControlProps {
  currentDate: Moment
}
interface TestingControlState {
  on: boolean
}

class TestingControl extends React.Component<TestingControlProps, TestingControlState> {
  componentWillMount() {
    this.setState({ on: false })
  }

  setDateTo(date: Moment) {
    dateTimeProvider.now = () => date.clone().add(1, 'minute')
  }

  reset() {
    dateTimeProvider.now = () => moment(new Date())
    Conference.Sponsors = SponsorData
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
                onClick={() => this.setDateTo(Conference.PresentationSubmissionsOpenFrom)}
              >
                CFP open
              </a>
              <br />
              <a className="voting btn" style={btnStyle} onClick={() => this.setDateTo(Conference.VotingOpenFrom)}>
                Voting open
              </a>
              <br />
              <a className="agenda btn" style={btnStyle} onClick={() => this.setDateTo(Conference.AgendaPublishedFrom)}>
                Agenda published
              </a>
              <br />
              <a className="conference btn" style={btnStyle} onClick={() => this.setDateTo(Conference.Date)}>
                On the day
              </a>
              <br />
              <a className="sponsors btn" style={btnStyle} onClick={() => (Conference.Sponsors = From2017.Sponsors)}>
                Add sponsors
              </a>
              <br />
              <a className="btn btn-secondary" style={btnStyle} onClick={() => this.reset()}>
                Reset
              </a>
              <br />
              <p className="text-center">
                Now: <code>{dateTimeProvider.now().format('DD/MM/YYYY h:mma')}</code>
              </p>
            </Panel.Body>
          )}
        </Panel>
      </div>
    )
  }
}

export default TestingControl
