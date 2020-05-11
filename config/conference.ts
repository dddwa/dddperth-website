import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import {
  Conference as IConference,
  TicketNumberWhileVoting,
  TicketPurchasingOptions,
  TicketsProvider,
  ImportantDate,
} from './types'
import venue from './venue'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.WaitListOpen
const date = moment.parseZone('2021-08-14T08:00+08:00')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2015
const registrationOpenFrom = moment.parseZone('2021-04-30T08:00:00+08:00')
const registrationOpenUntil = hideDate ? null : date.clone().add(-1, 'd').startOf('day').add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2021-04-24T08:00:00+08:00')
const presentationSubmissionsOpenUntil = moment.parseZone('2021-05-31T23:59:59+08:00')
const votingOpenFrom = moment.parseZone('2021-06-05T17:00:00+08:00')
const votingOpenUntil = moment.parseZone('2021-06-14T23:59:59+08:00')
const agendaPublishedFrom = moment.parseZone('2021-07-17T17:00:00+08:00')
const feedbackOpenFrom = date.clone()
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
  Goal:
    "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-60040308-1',
  TicketPrice: '$60',
  ChildcarePrice: '$30',
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'dddperth',
  TicketsProviderEventId: '2019',
  TicketsProviderFinancialAssistanceCode: 'financialassistance',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDPerth',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: null,
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

  ConferenceFeedbackLink: null,
  SessionFeedbackLink: null,

  HideDate: hideDate,
  HideSponsors: true,
  HideSponsorshipUpsell: false,
  HideVenue: venue === null,
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

  ImportantDates: orderBy(importantDates, (i) => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  RoomNames: ['Theatre', 'RR5', 'M6', 'M7', 'M8', 'M9'],

  SessionGroups: [
    {
      sessions: ['112b54cc-df00-40fd-ad5e-4b0714329821'],
      timeEnd: date.clone().set({ hour: 9, minutes: 55 }),
      timeStart: date.clone().set({ hour: 9, minutes: 10 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'ae58057e-2cea-4300-bdb7-f51d57476179',
        '8cd14aaa-89cb-4886-9649-ceb0cd4b27d1',
        '385e78cf-b12a-466c-9fb8-e29c7fd627fb',
        'c044309e-e859-4b5c-adad-7534a36284e0',
        'b73abc43-7634-40d3-a38b-696bdb844cc0',
        'cc740103-612c-4673-b293-97487787f093',
      ],
      timeEnd: date.clone().set({ hour: 10, minute: 25 }),
      timeStart: date.clone().set({ hour: 10, minutes: 5 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'f8967843-c437-4a90-9242-fac45c4ea1a6',
        'cea40511-0eeb-4ac8-8c1e-098a966f7314',
        '643434fc-64d5-49ba-a1d8-848a7570b6fa',
        'df03352d-b177-420d-b66a-b1c174e3e0a3',
        'b446c945-6210-4b56-bc78-772347060a5b',
        '2fff2f0e-7f55-4a26-bf15-7537a6c3f700',
      ],
      timeEnd: date.clone().set({ hour: 11, minute: 40 }),
      timeStart: date.clone().set({ hour: 10, minute: 55 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '7bb9859c-ed23-4569-b863-7b4c440b2b88',
        '9c81bbdb-8898-4259-afac-0dc73ff363b5',
        '24ad37da-2c0b-4f5c-afde-3266217e6d80',
        '3c2badde-1534-494b-a084-8ca5857d648d',
        'f3a57e6c-0325-4898-bffd-2d3040f5dee9',
        'adbcf783-1ab2-456b-ba41-1041f139e3f2',
      ],
      timeEnd: date.clone().set({ hour: 12, minute: 10 }),
      timeStart: date.clone().set({ hour: 11, minute: 50 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        '9b7efb7a-64e0-41ac-9439-f65a662147da',
        '6d6553c0-b678-434d-b94e-c46fe77c86eb',
        '0bcae524-eb87-4080-b189-ab5c7d5ad5fa',
        '5aba6e83-cfd9-4114-af80-f28de931d8c2',
        'fd0518e0-a52c-44dd-84fb-61ce59c3cdb5',
        '70537fd7-4e49-4100-97ee-ce79c71545d6',
      ],
      timeEnd: date.clone().set({ hour: 13, minute: 5 }),
      timeStart: date.clone().set({ hour: 12, minute: 20 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'a6eb8bb3-6086-4cb3-b024-d0a6c4dd3de3',
        'a577e148-b1d7-42e1-a424-5d0db3107ae2',
        '2fcea05c-96dc-4802-b8a9-14bcfee01a64',
        '97792db7-0c73-4fee-91c3-00d7fe002540',
        'fa861d2a-9597-4a98-8510-fc0dc0b400e6',
        '83b6a640-935b-4e5e-b251-81c3d69c0129',
      ],
      timeEnd: date.clone().set({ hour: 14, minute: 25 }),
      timeStart: date.clone().set({ hour: 14, minute: 5 }),
      type: 'SessionIds',
    },
    {
      sessions: [
        'b2795175-d14d-4090-a62e-153d4534b916',
        '80721e7b-b082-4b50-9a9d-136d3054b7b0',
        '94a2f4b3-bd6e-4eb6-9917-baa3bcb3d41f',
        'f548e402-d04d-4318-a8c6-d879b3f11d37',
        '00311b92-6c21-47a8-b8d2-af325581d6f9',
        '35e1174f-8d50-48db-a410-d53c3c8ddf73',
      ],
      timeEnd: date.clone().set({ hour: 15, minute: 20 }),
      timeStart: date.clone().set({ hour: 14, minute: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: ['4c019f6f-c312-4bb9-8024-3352f6034d6e'],
      timeEnd: date.clone().set({ hour: 17, minute: 5 }),
      timeStart: date.clone().set({ hour: 16, minute: 20 }),
      type: 'SessionIds',
    },
  ],
}

export default Conference
