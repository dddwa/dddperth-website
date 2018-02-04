import * as moment from 'moment';
import {Moment} from 'moment';
import {Socials, SponsorType, Sponsor, Conference as IConference} from './types';

const name = "DDD Perth";
const tagLine = `${name} is an inclusive non-profit event for the Perth software community`;
const venue = "Perth Convention and Exhibition Centre";

const Conference : IConference = {
  Name : name,
  Organiser : "DDD WA Inc.",
  TagLine : tagLine,
  SiteDescription : `${tagLine}.`,
  Date : moment('2018-09-16T08:00+08:00'),
  Goal : "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.",
  GoogleAnalyticsId : "UA-60040308-1",
  Venue : venue,
  TicketPrice : "$50",

  HideDate : false,
  HideSponsors : false,
  HideVenue : venue !== null,

  Socials: {
    Twitter: "DDDPerth",
    Facebook: "DDDPerth",
    Flickr: "https://www.flickr.com/photos/135003652@N08/albums",
    Youtube: "https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ",
    Blog: "https://blog.dddperth.com/",
    Email: "info@dddperth.com",
    MailingList: "http://eepurl.com/cRvaSf",
  },

  ImageStrip : [
    "/static/images/strip/1.jpg",
    "/static/images/strip/2.jpg",
    "/static/images/strip/3.jpg",
    "/static/images/strip/4.jpg",
    "/static/images/strip/5.jpg",
  ],
}

export default Conference;
