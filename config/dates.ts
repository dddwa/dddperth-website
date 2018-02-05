import * as moment from 'moment';
import {Moment} from 'moment';
import {Dates as IDates, Conference} from './types';

export default function getConferenceDates(conference : Conference) : IDates {
  return {
    Display : conference.HideDate ? "TBA" : `${conference.Date.format("ddd do MMM YYYY")}`,
    IsComplete : moment(new Date()) > conference.Date.add(1, 'd')
  };
}
