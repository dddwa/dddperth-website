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
        {dates.RegistrationOpen && <Link href="/tickets"><a className="btn book">Purchase a ticket</a></Link>}
        {!dates.AgendaPublished && <Link href="/agenda"><a className="btn book">Previous agenda</a></Link>}
        {dates.AgendaPublished && <Link href="/agenda"><a className="btn book">{dates.IsComplete ? `${conference.Instance} agenda` : "View the agenda"}</a></Link>}
        {/*
            @if (Conference.AcceptingFeedback)
            {
                @Html.ActionLink("Feedback", "Index", "Feedback", null, new { @class = "button" })
            }
            @Html.ActionLink("Code of conduct", "CodeOfConduct", "Main", null, new { @class = "button secondary" })
            @if (!string.IsNullOrEmpty(Conference.Handbook))
            {
                @:<a href="/@Conference.Handbook" class="button">Conference Handbook</a>
            }
        */}
      </div>
    </div>
  </section>;
