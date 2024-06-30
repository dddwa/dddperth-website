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
import { add, set, sub, toDate } from 'date-fns'
import { universityOfAdelaide } from './venues/uni-of-adelaide'

const name = 'DDD Adelaide'
const tagLine = `${name} is an inclusive non-profit conference for the Adelaide software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.OnSale
const staticDate = '2024-11-23T08:00'
const date = zonedTimeToUtc(staticDate, '+10:30')
const endDate = add(date, { days: 2, hours: 12 })
const currentInstance = date.getFullYear()
const firstInstance = 2023
const registrationOpenFrom = zonedTimeToUtc('2024-08-01T08:00:00', '+09:30')
const registrationOpenUntil = hideDate ? null : sub(date, { hours: 14, minutes: 45 })
const presentationSubmissionsOpenFrom = zonedTimeToUtc('2024-08-01T08:00:00', '+09:30')
const presentationSubmissionsOpenUntil = zonedTimeToUtc('2024-09-06T23:59:59', '+09:30')
const votingOpenFrom = zonedTimeToUtc('2024-09-10T17:00:00', '+09:30')
const votingOpenUntil = zonedTimeToUtc('2024-09-29T23:59:59', '+09:30')
const agendaPublishedFrom = zonedTimeToUtc('2024-10-05T17:00:00', '+09:30')
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

const venue: Venue | null = universityOfAdelaide

const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'DDD Adelaide Inc.',
    Url: 'https://dddadelaide.com',
    ShirtColour: 'yellow',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal: "Our goal is to create a fun, informative event that brings the Adelaide software community together.",
  GoogleAnalyticsId: 'UA-122340004-2',
  TicketPrice: '$60',
  ChildcarePrice: null,
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'ddd-adelaide',
  TicketsProviderEventId: '2024-conference',
  TicketsProviderFinancialAssistanceTicketLink: '',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDAdelaide',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: undefined,
  SessionizeUrl: 'https://sessionize.com/dddadelaide2024',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, UX, software testing, virtual reality, women in tech, web accessibility, open source software, workplace culture, mental health, unconscious bias, building engaged teams, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, security, reverse engineering, blockchain, Assembly language, automated deployments, mobile development, mobile test automation, Domain Driven Design, cloud native, architecture, microservices, serverless, service meshes, stream programming and Rx, APIs, GraphQL, actors, JavaScript, SPAs, TypeScript, authentication, React, UWP, Elm, HTML, HTTP protocol, Git, Docker and pointers',
  ContactEmail: 'info@dddadelaide.com',
  SponsorshipEmail: 'sponsorship@dddadelaide.com',
  MentoringEmail: 'mentors@dddadelaide.com',
  EmergencyContactName: 'Andrew Best',
  EmergencyContactPhoneNumber: '0438 080 385',
  MediaOfficerName: null,

  AnonymousReportFormUrl:
    'https://forms.gle/G1CuaumckcExMbcy5',

  AnonymousVoting: true,
  PreferentialVoting: true,
  TicketNumberWhileVoting: TicketNumberWhileVoting.Required,
  MinVotes: 6,
  MaxVotes: 6,
  WaitingListCanVoteWithEmail: true,

  TimeZone: 'Australia/Adelaide',
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
  HideSponsors: true,
  HideSponsorshipUpsell: true,
  HideVenue: venue === null,
  HasAfterParty: false,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  ShowNextSessions: false,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '1146206887353786368',
      Name: 'DDDAdelaide',
    },
    Facebook: null,
    Flickr: null,
    Youtube: null,
    Blog: null,
    Email: 'info@dddadelaide.com',
    MailingList: null,
    GitHub: 'dddadelaide',
    Instagram: null,
    Linkedin: 'dddadelaide',
  },

  ImportantContacts: {
    Police: {
      Details: '26 Hindley St, Adelaide SA 5000',
      Phone: '(08) 8303 0525',
      MapUrl: 'https://goo.gl/maps/JEBuvPXvNL2docGv9',
    },
    CentreAgainstSexualAssault: {
      Details: '24 hour line',
      Phone: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Adelaide Hospital, Port Road, Adelaide SA 5000',
      MapUrl: 'https://goo.gl/maps/7muHc6pacGMsC16i7',
    },
    NonEmergencyMedical: {
      Details: '',
      Phone: '',
      MapUrl:
        '',
    },
  },

  ImportantDates: orderBy(importantDates, (i) => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  RoomNames: [],

  Livestreams: [],

  // TODO: Figure out what this is from.
  SessionGroups: [
    {
      sessions: ['530801'],
      timeStart: set(date, { hours: 9, minutes: 30 }),
      timeEnd: set(date, { hours: 10, minutes: 0 }),
      type: 'SessionIds',
    },
  ],

  VolunteerSubmissionFormId: undefined,
}

export default Conference
