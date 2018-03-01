import * as moment from 'moment';
import {Dates as IDates, Conference} from './types';

export default function getConferenceDates(conference : Conference) : IDates {
  const isComplete = moment(new Date()) > conference.Date.clone().add(1, 'd');
  const isInProgress = moment(new Date()) > conference.Date;
  const dateDisplayFormat = "ddd Do MMM YYYY";
  return {
    Display : conference.HideDate ? "TBA" : `${conference.Date.format(dateDisplayFormat)}`,
    DateDisplayFormat : dateDisplayFormat,
    TimeDisplayFormat : "h:mma",
    IsComplete : isComplete,
    IsInProgress : isInProgress && !isComplete,
    HasNotStarted : !isInProgress && !isComplete,
    RegistrationOpen : moment(new Date()) > conference.RegistrationOpenFrom && !conference.IsSoldOut,
    RegistrationClosed : conference.RegistrationOpenUntil !== null && moment(new Date()) > conference.RegistrationOpenUntil,
    AcceptingPresentations : moment(new Date()) > conference.PresentationSubmissionsOpenFrom && moment(new Date()) < conference.PresentationSubmissionsOpenUntil,
    VotingOpen : moment(new Date()) > conference.VotingOpenFrom && moment(new Date()) < conference.VotingOpenUntil,
    AgendaPublished : moment(new Date()) > conference.AgendaPublishedFrom
  };
}