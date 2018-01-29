import * as moment from 'moment';
import {Moment} from 'moment';
import Conference from './conference';
import {Dates as IDates} from './types';

const Dates : IDates = {
  Display : Conference.HideDate ? "TBA" : `${Conference.Date.format("ddd do MMM YYYY")}`,
  IsComplete : moment(new Date()) > Conference.Date.add(1, 'd'),
  IntervalToEvent : moment.duration(Conference.Date.diff(moment(new Date()))).asMilliseconds()
}

export default Dates;