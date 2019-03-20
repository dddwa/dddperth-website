import React, { Fragment } from 'react'
import { Action, Conference, Dates } from '../config/types'
import ActionButton from './actionButton'
import Countdown from './countdown'

export interface EventDetailsProps {
  conference: Conference
  dates: Dates
  primaryAction: Action
}

export default ({ conference, dates, primaryAction }: EventDetailsProps) => (
  <section className="countdown grey">
    <div className="container">
      {dates.IsInProgress && (
        <Fragment>
          <h2>Event in progress</h2>
        </Fragment>
      )}
      {dates.IsComplete && (
        <Fragment>
          <h2>Previous event</h2>
        </Fragment>
      )}
      {dates.HasNotStarted && !conference.HideDate && (
        <Fragment>
          <h2>Countdown to Next Event</h2>
          <Countdown countdownTo={conference.Date} interval={1000} />
          <hr />
        </Fragment>
      )}

      <div className="event-details">
        {!conference.HideVenue && (
          <div className="row">
            <div className="col-xs-12">
              <p>
                <span>Venue</span>
                {conference.Venue.Name}
              </p>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <p>
              <span>Date</span>
              {dates.IsComplete ? <s>{dates.Display}</s> : <Fragment>{dates.Display}</Fragment>}
            </p>
          </div>
          <div className="col-xs-12 col-sm-2 col-md-2">
            <p>
              <span>Cost</span>
              {conference.IsSoldOut && !dates.IsComplete && <>SOLD&nbsp;OUT</>}
              {(!conference.IsSoldOut || dates.IsComplete) && conference.TicketPrice}
            </p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <ActionButton action={primaryAction} />
          </div>
        </div>
      </div>
    </div>
  </section>
)
