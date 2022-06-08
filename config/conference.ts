import { orderBy } from 'components/utils/arraySort'
import SponsorData from 'config/sponsors'
import {
  Conference as IConference,
  TicketNumberWhileVoting,
  TicketPurchasingOptions,
  TicketsProvider,
  ImportantDate,
} from './types'
import venue from './venue'
import { zonedTimeToUtc } from 'date-fns-tz'
import { add, sub, set, toDate } from 'date-fns'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.OnSale
const staticDate = '2022-09-10T08:00'
const date = zonedTimeToUtc(staticDate, '+08:00')
const endDate = add(date, { hours: 12 })
const currentInstance = date.getFullYear()
const firstInstance = 2015
const registrationOpenFrom = zonedTimeToUtc('2022-05-16T08:00:00', '+08:00')
const registrationOpenUntil = hideDate ? null : set(sub(date, { days: 1 }), { hours: 17 }) // date.clone().add(-1, 'd').startOf('day').add(17, 'h')
const presentationSubmissionsOpenFrom = zonedTimeToUtc('2022-04-11T08:00:00', '+08:00')
const presentationSubmissionsOpenUntil = zonedTimeToUtc('2022-05-13T23:59:59', '+08:00')
const votingOpenFrom = zonedTimeToUtc('2022-05-27T17:00:00', '+08:00')
const votingOpenUntil = zonedTimeToUtc('2022-06-10T17:00:00', '+08:00')
const agendaPublishedFrom = zonedTimeToUtc('2022-07-07T17:00:00', '+08:00')
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
  TicketsProviderEventId: '2022',
  TicketsProviderFinancialAssistanceCode: 'financialassistance',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDPerth',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: 'https://sessionize.com/ddd-perth-2022',
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

  StaticDate: new Date(staticDate),
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

  ConferenceFeedbackLink: '/conference-feedback',
  SessionFeedbackLink: '/feedback',

  HideDate: hideDate,
  HideSponsors: false,
  HideSponsorshipUpsell: true,
  HideVenue: venue === null,
  HasAfterParty: false,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  ShowNextSessions: true,

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

  RoomNames: ['Riverside Theatre', 'M6', 'M7', 'M8'],

  SessionGroups: [
    {
      sessions: ['46cde2ca-8b44-4ff5-9b82-ad3c41a2b329'],
      timeStart: set(date, { hours: 9, minutes: 10 }),
      timeEnd: set(date, { hours: 9, minutes: 40 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '616cf974-4922-4fe4-8b2a-23bff247f4ce',
        'dec643ab-4886-4ac5-8f2c-452f945174ae',
        '18c9f6a2-2655-4242-8535-cf61c1605cb9',
        'c06c0dd2-224e-4137-abbd-6fe25177a7b0',
      ],
      timeStart: set(date, { hours: 9, minutes: 50 }),
      timeEnd: set(date, { hours: 10, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'ea671390-b7db-4b36-80c9-07b28973142f',
        'cf16b808-ac70-463a-90cc-512b68042962',
        '97b4e034-985f-4cc7-bbe2-a1cb22d611a9',
        '3560629c-36cd-4dd7-91cf-7d3f00dba047',
      ],
      timeStart: set(date, { hours: 11, minutes: 5 }),
      timeEnd: set(date, { hours: 11, minutes: 50 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'c04dc773-feaa-4c07-8aab-7e7598e58c48',
        '443bd0ee-bef3-4fe7-aa95-8b08782e248e',
        '1a67c372-f559-4713-8937-9d67646e23f7',
        '798f295f-a38e-49cf-98ad-a3bf4b513b7a',
      ],
      timeStart: set(date, { hours: 12, minutes: 0 }),
      timeEnd: set(date, { hours: 12, minutes: 20 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '774715b2-dd53-48fc-a144-80df9325eea9',
        'a1765cb1-a194-470d-8654-213e44afe5ba',
        'b555388f-5f27-42cb-9a01-266bfcc69464',
        'c1ded90b-4f4a-4cf3-a7e2-3aa0f103d842',
      ],
      timeStart: set(date, { hours: 12, minutes: 30 }),
      timeEnd: set(date, { hours: 13, minutes: 15 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '0a75760c-a5f0-4ce2-b942-e3cff923182e',
        'ca8d113d-38c6-4042-a006-03f2add9ead4',
        '3cc93f61-ef21-4a8a-ac91-645c1bca3f16',
        '270889cf-405a-4422-ac97-c4e9bc1f7d8c',
      ],
      timeStart: set(date, { hours: 14, minutes: 15 }),
      timeEnd: set(date, { hours: 14, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'ed54a247-f530-4057-8000-04fd82d08be1',
        '83cc08fb-f422-42b3-bb7b-300e75cd1728',
        '93b8cf68-0f80-4077-89de-dd539446718f',
        '620775e4-6179-4637-80c4-f59027d3c54b',
      ],
      timeStart: set(date, { hours: 14, minutes: 45 }),
      timeEnd: set(date, { hours: 15, minutes: 30 }),
      type: 'SessionIds',
    },
    {
      sessions: ['0b404590-9503-42ac-9e66-bf49adc4496f'],
      timeStart: set(date, { hours: 16, minutes: 30 }),
      timeEnd: set(date, { hours: 17, minutes: 0 }),
      type: 'SessionIds',
    },
  ],
}

export default Conference
