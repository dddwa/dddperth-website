import * as React from "react";
import { Conference } from "../config/types";
import getConferenceDates from '../config/dates';

export interface ImportantDatesProps {
  conference : Conference
};

export default ({conference} : ImportantDatesProps) =>
  <section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      {/*todo: Add dates and get the same in withSidebar*/}
      {getConferenceDates(conference).ImportantDates.map(importantDate => {
        return <div className="imp-date content done"><span className="ico-done"></span>
        <h3>Friday <strong>May 19</strong></h3>
        <p>
          <strong>09:00</strong>
          {importantDate.Description}
        </p>
        </div>
      })}

      
      <div className="clear"></div>

      <div className="what-now">
        <h2>What now?</h2>

        {/*todo: Pull in logic from existing site*/}
        <a href="/agenda/" className="btn agenda">View Agenda</a>
        <a href="/tickets/" className="btn book">Purchase a Ticket</a>
      </div>
    </div>
  </section>;
