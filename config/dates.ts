import * as moment from 'moment';
import {Moment} from 'moment';
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
    RegistrationOpen : moment(new Date()) > conference.RegistrationOpenFrom && !conference.IsSoldOut
  };
}
