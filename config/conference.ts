import moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference, TicketNumberWhileVoting, TicketPurchasingOptions, TicketsProvider } from './types'
import venue from './venue'

const name = 'DDD Adelaide'
const tagLine = `${name} is an inclusive non-profit conference for the Adelaide software community`

const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.WaitListOpen
const date = moment.parseZone('2019-11-30T08:00+10:30')
const endDate = date.clone().add(12, 'h')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2019
const registrationOpenFrom = moment.parseZone('2019-08-01T08:00:00+09:30')
const registrationOpenUntil = hideDate
  ? null
  : date
    .clone()
    .add(-1, 'd')
    .startOf('day')
    .add(17, 'h')
const presentationSubmissionsOpenFrom = moment.parseZone('2019-08-01T08:00:00+09:30')
const presentationSubmissionsOpenUntil = moment.parseZone('2019-09-04T23:59:59+09:30')
const votingOpenFrom = moment.parseZone('2019-09-12T17:00:00+09:30')
const votingOpenUntil = moment.parseZone('2019-09-27T23:59:59+09:30')
const agendaPublishedFrom = moment.parseZone('2019-10-03T17:00:00+09:30')
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

if (registrationOpenUntil !== null && ticketPurchasingOptions === TicketPurchasingOptions.OnSale) {
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
    Name: 'DDD Adelaide',
    Url: '',
    ShirtColour: 'yellow',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal:
    "TODO: Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'UA-122340004-2',
  TicketPrice: '$50',
  HasSwag: false,
  ChildcarePrice: null,
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'dddperth',
  TicketsProviderEventId: '2019 Conference',
  TicketsProviderFinancialAssistanceCode: 'financialassistance',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDAdelaide',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: null,
  SessionizeUrl: 'https://sessionize.com/dddperth2019',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, UX, software testing, virtual reality, women in tech, web accessibility, open source software, workplace culture, mental health, unconscious bias, building engaged teams, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, security, reverse engineering, blockchain, Assembly language, automated deployments, mobile development, mobile test automation, Domain Driven Design, cloud native, architecture, microservices, serverless, service meshes, stream programming and Rx, APIs, GraphQL, actors, JavaScript, SPAs, TypeScript, authentication, React, UWP, Elm, HTML, HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddperth.com',
  SponsorshipEmail: 'sponsorship@dddperth.com',
  MentoringEmail: 'mentors@dddperth.com',
  EmergencyContactName: 'Andrew Best',
  EmergencyContactPhoneNumber: '0438 080 385',
  MediaOfficerName: 'TODO: Rebecca Waters',

  AnonymousReportFormUrl:
    'TODO: https://forms.office.com/Pages/ResponsePage.aspx?id=8IU585acE0S9pvuDhIEiS26sQVnJFzFLm-6XlxI4bCFURDVGTks2N1VOQVBWWUU1VFJESDZMNlkxNS4u',

  AnonymousVoting: false,
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
  HideSponsors: false,
  HideSponsorshipUpsell: true,
  HideVenue: venue === null,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,

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
    Email: 'info@dddperth.com',
    MailingList: null,
    GitHub: 'dddadelaide',
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
      Details: '26 Hindley St, Adelaide SA 5000 ph: (08) 8303 0525',
      MapUrl:
        'https://goo.gl/maps/JEBuvPXvNL2docGv9',
    },
    CentreAgainstSexualAssault: {
      Details: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Adelaide Hospital, Port Road, Adelaide SA 5000',
      MapUrl:
        'https://goo.gl/maps/7muHc6pacGMsC16i7',
    },
    NonEmergencyMedical: {
      Details: '',
      MapUrl:
        '',
    },
  },

  ImportantDates: orderBy(importantDates, i => i.Date),

  Sponsors: SponsorData,

  Keynotes: [
    {
      Id: 'Keynote',
      Title: 'AI for Earth: Using machine learning to monitor, model, and manage natural resources',
      Abstract:
        'The AI for Earth program applies machine learning and data science to hard challenges in agriculture, water, climate, and biodiversity.  In this talk, we will discuss how the AI for Earth team, Microsoft Research, and AI for Earth grant recipients are using machine learning to enable precision agriculture, to predict outbreaks of disease, to detect poachers in real time, and to classify animals for conservation. Finally, we will briefly provide details on the AI for Earth grant program to obtain resources for everyone to work on these challenges.',
      Format: '45 mins',
      Level: 'No experience necessary',
      Tags: ['Data & Analytics', 'Machine Learning'],
      Presenters: [
        {
          Id: '',
          Name: 'Jennifer Marsman',
          Bio:
            'Jennifer Marsman is the Principal Software Engineer of Microsoft’s “AI for Earth” group, where she uses data science, machine learning, and artificial intelligence to aid with clean water, agriculture, biodiversity, and climate change. Jennifer is a frequent speaker at software development conferences around the world. Since 2016, Jennifer was recognized as one of the “top 100 most influential individuals in artificial intelligence and machine learning” by Onalytica, reaching the #2 slot in 2018. She has been featured in Bloomberg for her work using EEG and machine learning to perform lie detection. In 2009, Jennifer was chosen as "Techie whose innovation will have the biggest impact" by X-OLOGY for her work with GiveCamps, a weekend-long event where developers code for charity. She has also received many honors from Microsoft, including the “Best in Role” award for Technical Evangelism, Central Region Top Contributor Award, Heartland District Top Contributor Award, DPE Community Evangelist Award, CPE Champion Award, MSUS Diversity & Inclusion Award, Gold Club, and Platinum Club. Prior to becoming a Developer Evangelist, Jennifer was a software developer in Microsoft’s Natural Interactive Services division. In this role, she earned two patents for her work in search and data mining algorithms. Jennifer has also held positions with Ford Motor Company, National Instruments, and Soar Technology. Jennifer holds a Bachelor’s Degree in Computer Engineering and Master’s Degree in Computer Science and Engineering from the University of Michigan in Ann Arbor. Her graduate work specialized in artificial intelligence and computational theory.',
          Tagline: 'Principal Engineer & speaker on the AI for Earth team at Microsoft',
          ProfilePhotoUrl: '/static/images/keynotes/jennifer.jpg',
          TwitterHandle: 'jennifermarsman',
          WebsiteUrl: 'https://blogs.msdn.microsoft.com/jennifer/',
        },
      ],
    },
    {
      Id: 'Locknote',
      Title: 'You. Are. Awesome.',
      Abstract:
        'You may not realize it, but you are awesome. You have the power to change the world. Regardless of your job title or amount of experience, I firmly believe you have amazing potential to impact the people around you in powerful and meaningful ways. My goal is to help you realize the awesomeness you already possess and be encouraged to unleash it!',
      Format: '45 mins',
      Level: 'No experience necessary',
      Tags: ['Soft Skills', 'Leadership', 'Teams'],
      Presenters: [
        {
          Id: 'locknote',
          Name: 'David Neal',
          Bio:
            'David is a family man, software developer, musician, illustrator, and Microsoft MVP living in North Georgia, USA. He is currently a Senior Developer Advocate for Okta. David runs on a high-octane mixture of caffeine and JavaScript, and is made entirely of bacon.',
          Tagline: 'Senior Developer Advocate at Okta, Keynote at NDC Oslo 2019',
          ProfilePhotoUrl: '/static/images/keynotes/david.jpg',
          TwitterHandle: 'reverentgeek',
          WebsiteUrl: 'https://reverentgeek.com/',
        },
      ],
    },
  ],
}

export default Conference
