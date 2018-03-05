import * as moment from 'moment';
import {Dates as IDates, Conference} from './types';

export default function getConferenceDates(conference : Conference) : IDates {
  const now = moment(new Date());
  const isComplete = now > conference.Date.clone().add(1, 'd');
  const isInProgress = now > conference.Date;
  const dateDisplayFormat = "ddd Do MMM YYYY";

  return {
    Display : conference.HideDate ? "TBA" : `${conference.Date.format(dateDisplayFormat)}`,
    DateDisplayFormat : dateDisplayFormat,
    TimeDisplayFormat : "h:mma",
    IsComplete : isComplete,
    IsInProgress : isInProgress && !isComplete,
    HasNotStarted : !isInProgress && !isComplete,
    RegistrationOpen : now > conference.RegistrationOpenFrom && !conference.IsSoldOut,
    RegistrationClosed : conference.RegistrationOpenUntil !== null && now > conference.RegistrationOpenUntil,
    AcceptingPresentations : now > conference.PresentationSubmissionsOpenFrom && now < conference.PresentationSubmissionsOpenUntil,
    VotingOpen : now > conference.VotingOpenFrom && now < conference.VotingOpenUntil,
    AgendaPublished : now > conference.AgendaPublishedFrom,
    AcceptingFeedback : now > conference.FeedbackOpenFrom && now < conference.FeedbackOpenUntil
  };
}