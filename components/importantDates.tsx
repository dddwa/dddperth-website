import * as React from "react";
import { Conference, Dates } from "../config/types";
import ImportantDatesList from "./importantDatesList";
import Link from "next/link";

export interface ImportantDatesProps {
  conference : Conference,
  dates : Dates
};

export default ({conference, dates} : ImportantDatesProps) =>
  <section className="important-dates">
    <div className="container">
      <h2>Important Dates:</h2>

      <ImportantDatesList conference={conference} />

      <div className="clear"></div>

      <div className="what-now">
        <h2>What now?</h2>

        {dates.AcceptingPresentations && <Link href="/cfp"><a className="btn content">Submit presentation</a></Link>}
        {dates.VotingOpen && <Link href="/vote"><a className="btn voting">Vote for agenda</a></Link>}
        {dates.RegistrationOpen && <Link href="/tickets"><a className="btn tickets">Purchase a ticket</a></Link>}
        {!dates.AgendaPublished && <Link href="/agenda"><a className="btn agenda">Previous agenda</a></Link>}
        {dates.AgendaPublished && <Link href="/agenda"><a className="btn agenda">{dates.IsComplete ? `${conference.Instance} agenda` : "View the agenda"}</a></Link>}
        {conference.Handbook && <a href={"/static/docs/" + conference.Handbook} className="btn conference" target="_blank">Download handbook</a>}
        {dates.AcceptingFeedback && <Link href="/feedback"><a className="btn conference">Give feedback</a></Link>}
      </div>
    </div>
  </section>;
