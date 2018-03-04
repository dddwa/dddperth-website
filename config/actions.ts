import {Dates, Conference, Action} from './types';

export default function getConferenceActions(conference : Conference, dates : Dates) : Action[] {

  const actions : Action[] = [];

  if (dates.AcceptingPresentations) {
    actions.push({
      Title: "Submit presentation",
      Url: "/cfp",
      Category: "content"
    });
  }

  if (dates.VotingOpen) {
    actions.push({
      Title: "Vote for agenda",
      Url: "/vote",
      Category: "voting"
    });
  }

  if (dates.RegistrationOpen) {
    actions.push({
      Title: "Purchase a ticket",
      Url: "/tickets",
      Category: "tickets"
    });
  }

  if (dates.AcceptingFeedback) {
    actions.push({
      Title: "Give feedback",
      Url: "/feedback",
      Category: "conference"
    });
  }

  let agendaTitle = "View the agenda";
  if (!dates.AgendaPublished) {
    agendaTitle = "Previous agenda";
  }
  if (dates.IsComplete) {
    agendaTitle = `${conference.Instance} agenda`;
  }
  actions.push({
    Title: agendaTitle,
    Url: "/agenda",
    Category: "agenda"
  });

  if (conference.Handbook) {
    actions.push({
      Title: "Download handbook",
      Url: "/static/docs/" + conference.Handbook,
      Category: "conference"
    });
  }

  return actions;
}