import * as moment from 'moment';
import {Moment} from 'moment';

class Socials {
  readonly Twitter : string|undefined = "DDDPerth";
  readonly Facebook : string|undefined = "DDDPerth";
  readonly GitHub : string|undefined = undefined;
  readonly Instagram : string|undefined = undefined;
  readonly Flickr : string|undefined = "https://www.flickr.com/photos/135003652@N08/albums";
  readonly Youtube : string|undefined = "https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ";
  readonly Blog : string|undefined = "https://blog.dddperth.com/";
  readonly Email : string|undefined = "info@dddperth.com";
  readonly MailingList : string|undefined = "http://eepurl.com/cRvaSf";
}

export default class Conference {
  static readonly Name : string = "DDD Perth";
  static readonly Organiser : string = "DDD WA Inc.";
  static readonly TagLine : string = `${Conference.Name} is an inclusive non-profit event for the Perth software community`;
  static readonly SiteDescription : string = `${Conference.TagLine}.`;
  static readonly Date : Moment = moment('2017-09-16T08:00+08:00');
  static readonly HideDate : boolean = false;
  static readonly Goal : string = "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.";
  static readonly GoogleAnalyticsId : string = "UA-60040308-1";
  static readonly Socials = new Socials()
}