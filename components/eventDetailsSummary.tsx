import * as React from "react";
import {StatelessComponent} from "react";
import { Conference, Action } from "../config/types";
import getConferenceDates from "../config/dates";
import ActionButton from "./actionButton";

export interface EventDetailsSummaryProps {
  conference : Conference;
  primaryAction : Action
}

const EventDetailsSummary : StatelessComponent<EventDetailsSummaryProps> = ({conference, primaryAction}) =>
  <div className="event-details">
      <h3><span>{!getConferenceDates(conference).IsComplete ? "Next event" : "Previous event"}</span> {getConferenceDates(conference).Display}</h3>
      <ul>
        {conference.SellingPoints.map((point,i) => <li key={i}>{point}</li>)}
        <li>Only {conference.TicketPrice}</li>
      </ul>
      <ActionButton action={primaryAction} />
  </div>;

export default EventDetailsSummary;
