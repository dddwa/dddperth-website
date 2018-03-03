import * as moment from "moment";
import {Conference as IConference} from "./types";
import {orderBy} from "../components/utils/arraySort";

const name = "DDD Perth";
const tagLine = `${name} is an inclusive non-profit event for the Perth software community`;
const venue = "Perth Convention and Exhibition Centre";
const wifiDetails = "PCEC has free wifi for all attendees limited to 512Kb download speed that needs to be renewed every hour.";
const afterpartyVenue = "@Liberty Cafe & Bar";

const hideDate = false;
const date = moment('2018-08-04T08:00+08:00');
const registrationOpenFrom = moment('2018-02-08T08:00:00+08:00');
const registrationOpenUntil = hideDate ? null : date.clone().add(-1, "d").startOf("day").add(17, "h");
const presentationSubmissionsOpenFrom = moment("2018-02-08T08:00:00+08:00");
const presentationSubmissionsOpenUntil = moment("2018-05-08T23:59:59+08:00");
const votingOpenFrom = moment("2018-02-15T08:00:00+08:00");
const votingOpenUntil = moment("2018-05-25T23:59:59+08:00");
const agendaPublishedFrom = moment("2018-06-01T08:00:00+08:00");
const importantDates = [
  {Description: "Call for presentations open", Date: presentationSubmissionsOpenFrom, Type: "content"},
  {Description: "Call for presentations close", Date: presentationSubmissionsOpenUntil, Type: "content"},
  {Description: "Ticket sales open", Date: registrationOpenFrom, Type: "tickets"},
  {Description: "Voting open", Date: votingOpenFrom, Type: "voting"},
  {Description: "Voting close", Date: votingOpenUntil, Type: "voting"},
  {Description: "Agenda published", Date: agendaPublishedFrom, Type: "agenda"}
];

if (registrationOpenUntil !== null) {
  importantDates.push({Description: "Ticket sales close", Date: registrationOpenUntil, Type: "tickets"});
}

if (!hideDate) {
  importantDates.push({Description: "Conference day", Date: date, Type: "conference"});
}

const Conference : IConference = {
  Name : name,
  Instance : date.format("YYYY"),
  Organiser : "DDD WA Inc.",
  TagLine : tagLine,
  SiteDescription : `${tagLine}.`,
  Goal : "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.",
  GoogleAnalyticsId : "UA-60040308-1",
  Venue : venue,
  VenueAddress : "21 Mounts Bay Rd, Perth",
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
  EmergencyPhoneNumber : "0400 777 763",

  Date : date,
  DoorsOpenTime : "8:10am",
  FinishTime : "5:10pm",
  RegistrationOpenFrom : registrationOpenFrom,
  RegistrationOpenUntil : registrationOpenUntil,
  PresentationSubmissionsOpenFrom : presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil : presentationSubmissionsOpenUntil,
  VotingOpenFrom : votingOpenFrom,
  VotingOpenUntil : votingOpenUntil,
  AgendaPublishedFrom : agendaPublishedFrom,

  HideDate : hideDate,
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

  ImportantDates : orderBy(importantDates, i => i.Date)
}

export default Conference;
