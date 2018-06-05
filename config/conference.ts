import * as moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const isSoldOut = false
const date = moment.parseZone('2018-08-04T08:00+08:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2015
const registrationOpenFrom = moment.parseZone('2018-04-30T22:00:00+08:00')
const registrationOpenUntil = hideDate
  ? null
  : date
      .clone()
      .add(-1, 'd')
      .startOf('day')
      .add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2018-04-30T22:00:00+08:00')
const presentationSubmissionsOpenUntil = moment.parseZone('2018-06-03T23:59:59+08:00')
const votingOpenFrom = moment.parseZone('2018-06-10T08:00:00+08:00')
const votingOpenUntil = moment.parseZone('2018-06-17T23:59:59+08:00')
const agendaPublishedFrom = moment.parseZone('2018-07-01T08:00:00+08:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = endDate
const importantDates = [
  {
    Date: presentationSubmissionsOpenFrom,
    Description: 'Call for presentations open',
    Type: 'content',
  },
  {
    Date: presentationSubmissionsOpenUntil,
    Description: 'Call for presentations close',
    Type: 'content',
  },
  {
    Date: registrationOpenFrom,
    Description: 'Ticket sales open',
    Type: 'tickets',
  },
  { Description: 'Voting open', Date: votingOpenFrom, Type: 'voting' },
  { Description: 'Voting close', Date: votingOpenUntil, Type: 'voting' },
  {
    Date: agendaPublishedFrom,
    Description: 'Agenda published',
    Type: 'agenda',
  },
]

if (registrationOpenUntil !== null && !isSoldOut) {
  importantDates.push({
    Date: registrationOpenUntil,
    Description: 'Ticket sales close',
    Type: 'tickets',
  })
}

if (!hideDate) {
  importantDates.push({
    Date: date,
    Description: 'Conference day',
    Type: 'conference',
  })
}

// tslint:disable:object-literal-sort-keys
const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'DDD WA Inc.',
    Url: 'https://blog.dddperth.com/meet-the-team-35865433cb39',
    ShirtColour: 'green',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal:
    "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-60040308-1',
  TicketPrice: '$50',
  EventbriteId: '44602457150',
  FinancialAssistanceEventbriteCode: 'financialassistance',
  IsSoldOut: isSoldOut,
  HashTag: 'dddperth',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: 'https://sessionize.com/dddperth2018/',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, software testing, virtual reality, women in tech, web accessibility, open source software, feedback culture, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, Assembly language, automated deployments, mobile development, mobile test automation, architecture, microservices, serverless, APIs, GraphQL, actors, JavaScript, authentication, React, UWP,  HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddperth.com',
  SponsorshipEmail: 'sponsorship@dddperth.com',
  MentoringEmail: 'mentors@dddperth.com',
  EmergencyContactName: 'Rob Moore',
  EmergencyContactPhoneNumber: '0400 777 763',
  MediaOfficerName: 'Rebecca Waters',

  AnonymousReportFormUrl:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=8IU585acE0S9pvuDhIEiS26sQVnJFzFLm-6XlxI4bCFURDVGTks2N1VOQVBWWUU1VFJESDZMNlkxNS4u',

  AnonymousVoting: true,
  MinVotes: 2,
  MaxVotes: 3,

  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:10am',
  FinishTime: '5:10pm',
  RegistrationOpenFrom: registrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,
  AgendaPublishedFrom: agendaPublishedFrom,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,

  HideDate: hideDate,
  HideSponsors: false,
  HideVenue: venue === null,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '977876011',
      Name: 'DDDPerth',
    },
    Facebook: 'DDDPerth',
    Flickr: 'https://www.flickr.com/photos/135003652@N08/albums',
    Youtube: 'https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ',
    Blog: 'https://blog.dddperth.com/',
    Email: 'info@dddperth.com',
    MailingList: 'http://eepurl.com/cRvaSf',
    GitHub: 'dddwa',
  },

  ImageStrip: [
    { Url: '/static/images/strip/1.jpg', Alternate: 'Kris Howard delivering her 2017 locknote' },
    { Url: '/static/images/strip/2.jpg', Alternate: 'Our 2017 speakers' },
    { Url: '/static/images/strip/3.jpg', Alternate: 'Visting the readify booth' },
    { Url: '/static/images/strip/4.jpg', Alternate: 'Early morning registration' },
    { Url: '/static/images/strip/5.jpg', Alternate: 'Donna Edwards speaking at DDD 2017' },
  ],

  ImportantContacts: {
    Police: {
      Details: '2 Fitzgerald St, Northbridge WA 6003 ph: (08) 9422 7111',
      MapUrl:
        'https://www.google.com.au/maps/place/WA+Police/@-31.9539457,115.8571227,15z/data=!4m8!1m2!2m1!1swa+police!3m4!1s0x2a32bad2aad309a9:0x132b875b4c12ce8a!8m2!3d-31.9465398!4d115.852523',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Perth Hospital, 197 Wellington St, Perth WA 6000',
      MapUrl:
        'https://www.google.com.au/maps/place/Royal+Perth+Hospital/@-31.953946,115.8637156,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bb26d7818b2d:0x31db7aa443eb9c11!8m2!3d-31.953946!4d115.8659043',
    },
    NonEmergencyMedical: {
      Details: 'Perth Medical Centre, 713 Hay St, Perth WA 6000 ph: (08) 9481 4342',
      MapUrl:
        'https://www.google.com.au/maps/place/Perth+Medical+Centre/@-31.9539771,115.8552714,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bad5d00fb27f:0xa93cc014867a5f8b!8m2!3d-31.9539771!4d115.8574654',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,
}

export default Conference
