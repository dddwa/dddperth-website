import * as moment from 'moment';
import {Moment} from 'moment';
import {Dates as IDates, Conference} from './types';

export default function getConferenceDates(conference : Conference) : IDates {
  const isComplete = moment(new Date()) > conference.Date.clone().add(1, 'd');
  const isInProgress = moment(new Date()) > conference.Date;
  return {
    Display : conference.HideDate ? "TBA" : `${conference.Date.format("ddd Do MMM YYYY")}`,
    IsComplete : isComplete,
    IsInProgress : isInProgress && !isComplete,
    HasNotStarted : !isInProgress && !isComplete
  };
}
