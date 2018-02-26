import * as React from "react";
import { Conference, Dates } from "../config/types";
import ImportantDatesList from "./importantDatesList";

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

        {dates.AcceptingPresentations && <a href="/cfp" className="btn content">Submit presentation</a>}
        {dates.VotingOpen && <a href="/vote" className="btn voting">Vote for agenda</a>}
        {dates.RegistrationOpen && <a href="/tickets" className="btn book">Purchase a ticket</a>}
        {!dates.AgendaPublished && <a href="/agenda" className="btn book">Previous agenda</a>}
        {dates.AgendaPublished && <a href="/agenda" className="btn book">{dates.IsComplete ? `${conference.Instance} agenda` : "View the agenda"}</a>}
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
