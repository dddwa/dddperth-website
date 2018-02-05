import * as React from "react";
import Countdown from "./countdown";
import { Conference } from "../config/types";
import { Link } from "react-bootstrap/lib/Navbar";
import getConferenceDates from "../config/dates";

export interface EventDetailsProps {
  conference : Conference
};

export default ({conference} : EventDetailsProps) =>
  <section className="countdown grey">
    <div className="container">
      {/*todo: Hide countdown if event started / past*/}
      <h2>Countdown to Next Event:</h2>
      <Countdown countdownTo={conference.Date} interval={1000} />
      <hr />
      <div className="next-event">
        <div className="row">
          <div className="col-xs-12">
            <p><span>Venue</span>{conference.Venue}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-4">
            <p><span>Date</span>{(getConferenceDates(conference)).Display}</p>
          </div>
          <div className="col-xs-12 col-sm-3 col-md-4">
            <p><span>Cost</span>{conference.TicketPrice}</p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <Link href="/about">
              {/*todo: Change read more button to primary action?*/}
              <a className="btn">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>;
