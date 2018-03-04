import * as React from "react";
import { Conference, Action } from "../config/types";
import ImportantDatesList from "./importantDatesList";
import ActionButton from "./actionButton";

export interface ImportantDatesProps {
  conference : Conference,
  actions : Action[]
};

export default ({conference, actions} : ImportantDatesProps) =>
  <section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      <ImportantDatesList conference={conference} />

      <div className="clear"></div>

      <div className="what-now">
        <h2>What now?</h2>
        {actions.map(a => <ActionButton action={a} />)}
      </div>
    </div>
  </section>;
