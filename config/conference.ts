import * as moment from 'moment';
import {Moment} from 'moment';
import {Socials, SponsorType, Sponsor, Conference as IConference} from './types';

const name = "DDD Perth";
const date = moment('2018-05-04T23:40+08:00');
const tagLine = `${name} is an inclusive non-profit event for the Perth software community`;
const venue = "Perth Convention and Exhibition Centre";
const wifiDetails = "PCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour.";
const afterpartyVenue = "@Liberty Cafe & Bar";

const Conference : IConference = {
  Name : name,
  Instance : date.format("YYYY"),
  Organiser : "DDD WA Inc.",
  TagLine : tagLine,
  SiteDescription : `${tagLine}.`,
  Goal : "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.",
  GoogleAnalyticsId : "UA-60040308-1",
  Venue : venue,
  WifiDetails : wifiDetails,
  AfterpartyVenue : afterpartyVenue,
  TicketPrice : "$50",
  DetailsLandingPage: "/about",
  IsSoldOut: false,
  HashTag : "dddperth",
  SellingPoints: [
    "One day",
    "Fully catered",
    "Inclusive atmosphere",
    "Interesting presentations",
    "Awesome people"
  ],

  ContactEmail : "info@dddperth.com",
  SponsorshipEmail : "sponsorship@dddperth.com",

  Date : date,
  DoorsOpenTime : "8:10am",
  FinishTime : "5:10pm",
  RegistrationOpenFrom : moment('2018-06-08T08:00:00+08:00'),

  HideDate : false,
  HideSponsors : false,
  HideVenue : venue === null,
  HideAfterpartyVenue : afterpartyVenue === null,

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
