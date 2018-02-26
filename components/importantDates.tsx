import * as React from "react";
import { Conference } from "../config/types";
import isPast from "./utils/isPast";

export interface ImportantDatesProps {
  conference : Conference
};

export default ({conference} : ImportantDatesProps) =>
  <section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      {conference.ImportantDates.map(importantDate => {
        return <div key={importantDate.Description} className={"imp-date content" + (isPast(importantDate.Date) ? " done" : "") + " " + importantDate.Type}>
          {isPast(importantDate.Date) && <span className="ico-done"></span>}
          <h3>{importantDate.Date.format("dddd")} <strong>{importantDate.Date.format("MMM")} {importantDate.Date.format("D")}</strong></h3>
          <p>
            <strong>{importantDate.Date.format("hh:mma")}</strong>
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
