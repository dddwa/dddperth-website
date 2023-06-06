import { orderBy } from 'components/utils/arraySort'
import SponsorData from 'config/sponsors'
import {
  Conference as IConference,
  TicketNumberWhileVoting,
  TicketPurchasingOptions,
  TicketsProvider,
  ImportantDate,
  Venue,
} from './types'
import { zonedTimeToUtc } from 'date-fns-tz'
import { add, sub, set, toDate } from 'date-fns'
import { optusStadium } from './venues/optus-stadium'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.OnSale
const staticDate = '2023-10-07T08:00'
const date = zonedTimeToUtc(staticDate, '+08:00')
const endDate = add(date, { hours: 12 })
const currentInstance = date.getFullYear()
const firstInstance = 2015
const registrationOpenFrom = zonedTimeToUtc('2023-06-08T08:00:00', '+08:00')
const registrationOpenUntil = hideDate ? null : sub(date, { hours: 14, minutes: 45 })
const presentationSubmissionsOpenFrom = zonedTimeToUtc('2023-05-22T08:00:00', '+08:00')
const presentationSubmissionsOpenUntil = zonedTimeToUtc('2023-06-18T23:59:59', '+08:00')
const votingOpenFrom = zonedTimeToUtc('2023-07-03T17:00:00', '+08:00')
const votingOpenUntil = zonedTimeToUtc('2023-07-14T23:59:59', '+08:00')
const agendaPublishedFrom = zonedTimeToUtc('2023-08-04T17:00:00', '+08:00')
const feedbackOpenFrom = toDate(date)
const feedbackOpenUntil = endDate
const importantDates: ImportantDate[] = [
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

if (registrationOpenUntil !== null && Number(ticketPurchasingOptions) === Number(TicketPurchasingOptions.OnSale)) {
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

const venue: Venue | null = optusStadium

const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'DDD WA Inc.',
    Url: 'https://blog.dddperth.com/meet-the-team-35865433cb39',
    ShirtColour: 'yellow',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal: "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-60040308-1',
  TicketPrice: '$60',
  ChildcarePrice: 'free',
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'dddperth',
  TicketsProviderEventId: '2023',
  TicketsProviderFinancialAssistanceTicketLink: 'https://ti.to/dddperth/2023/with/general-attendee-free',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDPerth',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: 'handbook2022.pdf',
  SessionizeUrl: 'https://sessionize.com/ddd-perth-2023',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, UX, software testing, virtual reality, women in tech, web accessibility, open source software, workplace culture, mental health, unconscious bias, building engaged teams, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, security, reverse engineering, blockchain, Assembly language, automated deployments, mobile development, mobile test automation, Domain Driven Design, cloud native, architecture, microservices, serverless, service meshes, stream programming and Rx, APIs, GraphQL, actors, JavaScript, SPAs, TypeScript, authentication, React, UWP, Elm, HTML, HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddperth.com',
  SponsorshipEmail: 'sponsorship@dddperth.com',
  MentoringEmail: 'mentors@dddperth.com',
  EmergencyContactName: 'Rob Moore',
  EmergencyContactPhoneNumber: '0400 777 763',
  MediaOfficerName: 'Rebecca Waters',

  AnonymousReportFormUrl:
    'https://forms.office.com/Pages/ResponsePage.aspx?id=8IU585acE0S9pvuDhIEiS26sQVnJFzFLm-6XlxI4bCFURDVGTks2N1VOQVBWWUU1VFJESDZMNlkxNS4u',

  AnonymousVoting: true,
  PreferentialVoting: true,
  TicketNumberWhileVoting: TicketNumberWhileVoting.Required,
  MinVotes: 6,
  MaxVotes: 6,
  WaitingListCanVoteWithEmail: true,

  TimeZone: 'Australia/Perth',
  StaticDate: new Date(staticDate),
  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:00am',
  FinishTime: '5:30pm',
  RegistrationOpenFrom: registrationOpenFrom,
  RegistrationOpenUntil: registrationOpenUntil,
  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,
  AgendaPublishedFrom: agendaPublishedFrom,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,

  ConferenceFeedbackLink: '/conference-feedback',
  SessionFeedbackLink: '/feedback',

  HideDate: hideDate,
  HideSponsors: true,
  HideSponsorshipUpsell: true,
  HideVenue: venue === null,
  HasAfterParty: false,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  ShowNextSessions: false,

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
    Instagram: 'dddperth',
    Linkedin: 'ddd-wa-inc',
  },

  ImportantContacts: {
    Police: {
      Details: '2 Fitzgerald St, Northbridge WA 6003',
      Phone: '(08) 9422 7111',
      MapUrl:
        'https://www.google.com.au/maps/place/WA+Police/@-31.9539457,115.8571227,15z/data=!4m8!1m2!2m1!1swa+police!3m4!1s0x2a32bad2aad309a9:0x132b875b4c12ce8a!8m2!3d-31.9465398!4d115.852523',
    },
    CentreAgainstSexualAssault: {
      Details: '24 hour line',
      Phone: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Perth Hospital, 197 Wellington St, Perth WA 6000',
      MapUrl:
        'https://www.google.com.au/maps/place/Royal+Perth+Hospital/@-31.953946,115.8637156,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bb26d7818b2d:0x31db7aa443eb9c11!8m2!3d-31.953946!4d115.8659043',
    },
    NonEmergencyMedical: {
      Details: 'Perth Medical Centre, 713 Hay St, Perth WA 6000',
      Phone: '(08) 9481 4342',
      MapUrl:
        'https://www.google.com.au/maps/place/Perth+Medical+Centre/@-31.9539771,115.8552714,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32bad5d00fb27f:0xa93cc014867a5f8b!8m2!3d-31.9539771!4d115.8574654',
    },
  },

  ImportantDates: orderBy(importantDates, (i) => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  RoomNames: [
    'Kwoka (Quokka)',
    'Kwonding (Quandong)',
    'Yoorn (Bobtail)',
    'Mangatj (Banksia)',
    'Yiibi (Black Cockatoo)',
    'Mari (Red Gum)',
    'Djakal-Ngakal (Galah)',
    'Bilya (River)',
    'Maali (Black Swan)',
  ],

  Livestreams: [
    'https://youtu.be/ovEA5PaOdWo?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/8mq3bCMrmbE?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/DsFlSkTPH-Y?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/pqRQ4rN6adg?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/ox6ixHfs4xM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/2KjEBFAVgoU?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/Plo8dSxAjHw?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/EU-VeLYi8LM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/LQ5vtriC_bI?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  ],

  SessionGroups: [
    {
      sessions: ['337380'],
      timeStart: set(date, { hours: 9, minutes: 10 }),
      timeEnd: set(date, { hours: 10, minutes: 0 }),
      type: 'SessionIds',
    },
    {
      sessions: ['344274', '343408', '344367', '344044', '344101', '343942', '342543', '334148', '344023'],
      timeStart: set(date, { hours: 10, minutes: 10 }),
      timeEnd: set(date, { hours: 10, minutes: 55 }),
      type: 'SessionIds',
    },
    {
      sessions: ['333791', '344494', '338797', '344002', '344418', '343628', '338125', '343620', '339320'],
      timeStart: set(date, { hours: 11, minutes: 25 }),
      timeEnd: set(date, { hours: 12, minutes: 10 }),
      type: 'SessionIds',
    },
    {
      sessions: ['333736', '343984', '340959', '344464', '343953', '341816', '344501', '344419', '342452'],
      timeStart: set(date, { hours: 12, minutes: 20 }),
      timeEnd: set(date, { hours: 12, minutes: 40 }),
      type: 'SessionIds',
    },
    {
      sessions: ['337322', '344493', '343385', '343105', '336320', '343968', '339597', '344431', '341472'],
      timeStart: set(date, { hours: 12, minutes: 50 }),
      timeEnd: set(date, { hours: 13, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: ['379497', '379496'],
      timeStart: set(date, { hours: 14, minutes: 35 }),
      timeEnd: set(date, { hours: 15, minutes: 5 }),
      type: 'SessionIds',
    },
    {
      sessions: ['343399', '343561', '341315', '340848', '343948', '339017', '343697', ['343793', '344491'], '344427'],
      timeStart: set(date, { hours: 15, minutes: 15 }),
      timeEnd: set(date, { hours: 15, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: ['383016'],
      timeStart: set(date, { hours: 16, minutes: 5 }),
      timeEnd: set(date, { hours: 16, minutes: 55 }),
      type: 'SessionIds',
    },
  ],

  VolunteerSubmissionFormId: '9c302d13-e580-4edf-ba13-5bc27eb7b97f',
}

export default Conference
