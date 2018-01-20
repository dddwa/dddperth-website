import * as moment from 'moment';
import {Moment} from 'moment';

export default class Conference {
  static readonly Name : string = "DDD Perth";
  static readonly TagLine : string = `${Conference.Name} is an inclusive non-profit event for the Perth software community`;
  static readonly Date : Moment = moment('2017-09-16T08:00+08:00');
  static readonly HideDate : boolean = false;
}