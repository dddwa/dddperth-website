import * as moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const isSoldOut = true
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
const votingOpenFrom = moment.parseZone('2018-06-09T23:00:00+08:00')
const votingOpenUntil = moment.parseZone('2018-06-17T23:59:59+08:00')
const agendaPublishedFrom = moment.parseZone('2018-06-30T18:00:00+08:00')
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
    ShirtColour: 'pink',
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
  MinVotes: 8,
  MaxVotes: 12,

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

  ConferenceFeedbackLink: 'https://bit.ly/dddperth2018-conf-feedback',
  SessionFeedbackLink: 'https://bit.ly/dddperth2018-session-feedback',

  HideDate: hideDate,
  HideSponsors: false,
  HideSponsorshipUpsell: true,
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

  Keynotes: [
    {
      Id: 'Keynote',
      Title: 'Towards a welcoming Web',
      Abstract:
        "The Internet is supposed to be an open, accessible platform. Unfortunately, frequently we see pitfalls in reliability, accessibility or performance stemming from a privileged understanding of connectivity, cultural and economic context. It turns out, the Web can be unwelcoming to many.\r\n\r\nThis talk will set the necessary context for an inclusive design practice, focusing on accessibility, performance and equality. We'll learn how to foster a user-experience focused culture, no matter whether you're a developer, designer, project or business owner. You will leave inspired to build a better Web for everyone.",
      Format: '45 mins',
      Level: 'No experience necessary',
      Tags: ['Web', 'Frontend dev', 'Design and UX'],
      Presenters: [
        {
          Id: '',
          Name: 'Karolina Szczur',
          Bio:
            "Karolina has worn many hats over the last decade—a designer, front-end developer, community leader as well as diversity and inclusion activist. Currently, she's a front-end engineer at HelpScout. She's also advising Calibre, a web performance monitoring platform aiding in building a faster, more accessible Web for everyone.\r\n\r\nShe writes and speaks about tech industry culture and ethics, relentlessly pushing towards more diversity and welcoming spaces.  Her pieces have been published in Huffington Post, Smashing Magazine, Adobe, The Pastry Box, Creative Bloq and Hack Design amongst others.\r\n\r\nWith over twenty conferences under her belt, Karolina is also a seasoned organiser, previously curating such well-known events as JSConf and CSSConf Australia or JSConf Europe.",
          Tagline: 'Community leader, product designer and front-end engineer',
          ProfilePhotoUrl: '/static/images/keynotes/karolina.jpg',
          TwitterHandle: 'fox',
          WebsiteUrl: 'https://thefox.is/',
        },
      ],
    },
    {
      Id: 'Lunchnote',
      Title: 'The Structure of Software Revolutions',
      Abstract:
        'This talk will provide a new view of the Agile and DevOps movements, through the lens of scientific and cognitive revolutions.\r\n\r\nIt will show how to make strategic choices in recruitment, organization, culture, and technology to best situate an organization for success in this brave new world.',
      Format: '30 mins',
      Level: 'No experience necessary',
      Tags: ['DevOps', 'Agile', 'Continuous Delivery', 'Leadership'],
      Presenters: [
        {
          Id: '',
          Name: 'Mike Long',
          Bio:
            'Mike is a Partner at Praqma, a Continuous Delivery and Devops consulting company based in Scandinavia. He has extensive experience delivering software in various cultures and industries. He helps organize several community events and conferences, including CoDe Academy which teaches Continuous Delivery to university students. Mike is a trustee on the cyber-dojo foundation.',
          Tagline: 'Partner at Praqma',
          ProfilePhotoUrl: '/static/images/keynotes/mike.jpeg',
          TwitterHandle: 'meekrosoft',
          WebsiteUrl: 'https://meekrosoft.wordpress.com/',
        },
      ],
    },
    {
      Id: 'Locknote',
      Title: 'Better mental health in the workplace',
      Abstract:
        'Mark Leopold, beyondblue’s Head of Workplace Engagement, will discuss the importance of improving workplace mental health. Attendees will learn about best practice approaches in workplace mental health and strategies for adopting an integrated approach to workplace mental health including: minimising risk, supporting those with mental health conditions and promoting the positives within the workplace. This session will include introduction to resources to help people and organisations take effective action to improve workplace mental health. Mark is a passionate advocate for workplace mental health. Informed by his personal experience with depression and experience across numerous industries, Mark discusses the topic in a relatable manner; helping people and organisations to take action.',
      Format: '45 mins',
      Level: 'No experience necessary',
      Tags: ['Soft skills', 'Leadership', 'Teams'],
      Presenters: [
        {
          Id: '',
          Name: 'Mark Leopold',
          Bio:
            "Mark Leopold is Head of Workplace Engagement for beyondblue, a national organisation that provides information and support to help everyone in Australia achieve their best possible mental health.\r\n\r\nPrior to beyondblue, Mark gained 25 years of operational and management experience across a diverse array of industries. He joined beyondblue because he understands the benefit that professional men and women can gain by working in mentally heathy workplaces; as a member of the beyondblue team he helps to stimulate more conversations within Australian organisations.\r\n\r\nHe's a passionate advocate of Heads Up – an initiative of beyondblue and the Mentally Healthy Workplace Alliance (headsup.org.au). Heads Up is all about giving individuals and businesses the tools to drive change and create more mentally healthy workplaces. Mark keeps mentally and physically healthy by working, running, lifting, strumming, golfing and laughing. His wife Sara and two daughters, Annalise and Sienna, are a great support to each other.",
          Tagline: 'Head of Workplace Engagement for beyondblue',
          ProfilePhotoUrl: '/static/images/keynotes/mark.jpg',
          TwitterHandle: null,
          WebsiteUrl: 'https://www.beyondblue.org.au/',
        },
      ],
    },
  ],
}

export default Conference
