import * as React from "react";
import {Fragment} from "react";
import {StatelessComponent} from "react";
import { Conference } from "../config/types";
import getConferenceDates from "../config/dates";
import Link from 'next/link';

export interface EventDetailsSummaryProps {
  conference : Conference;
}

const EventDetailsSummary : StatelessComponent<EventDetailsSummaryProps> = ({conference}) =>
  <div className="event-details">
      <h3><span>{!getConferenceDates(conference).IsComplete ? "Next event" : "Previous event"}</span> {getConferenceDates(conference).Display}</h3>
      <ul>
        {conference.SellingPoints.map((point,i) => <li key={i}>{point}</li>)}
        <li>Only {conference.TicketPrice}</li>
      </ul>
      <Link href={conference.DetailsLandingPage}>
        <a className="btn">Read More</a>
      </Link>
  </div>;

export default EventDetailsSummary;
