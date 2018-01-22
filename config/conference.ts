import * as moment from 'moment';
import {Moment} from 'moment';

 export default class Conference {
  static readonly Name : string = "DDD Perth";
  static readonly Organiser : string = "DDD WA Inc.";
  static readonly TagLine : string = `${Conference.Name} is an inclusive non-profit event for the Perth software community`;
  static readonly SiteDescription : string = `${Conference.TagLine}.`;
  static readonly Date : Moment = moment('2017-09-16T08:00+08:00');
  static readonly HideDate : boolean = false;
  static readonly Goal : string = "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.";
  static readonly GoogleAnalyticsId : string = "UA-60040308-1";
}