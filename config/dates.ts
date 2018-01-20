import * as moment from 'moment';
import {Moment} from 'moment';
import Conference from './conference';

export default class Dates {
  static readonly Display : string = Dates.Hide ? "TBA" : `${Conference.Date.format("ddd do MMMM YYYY")}`;
  static readonly IsComplete : boolean = moment(new Date()) > Conference.Date.add(1, 'd');
}