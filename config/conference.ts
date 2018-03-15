import * as moment from 'moment'
import { orderBy } from '../components/utils/arraySort'
import SponsorData from '../config/sponsors'
import { Conference as IConference } from './types'
import venue from './venue'

const name = 'DDD Perth'
const tagLine = `${name} is an inclusive non-profit conference for the Perth software community`

const hideDate = false
const isSoldOut = false
const date = moment('2018-08-04T08:00+08:00')
const currentInstance = parseInt(date.format('YYYY'), 10)
const firstInstance = 2015
const registrationOpenFrom = moment('2018-04-30T08:00:00+08:00')
const registrationOpenUntil = hideDate
    ? null
    : date
          .clone()
          .add(-1, 'd')
          .startOf('day')
          .add(17, 'h')
const presentationSubmissionsOpenFrom = moment('2018-04-30T08:00:00+08:00')
const presentationSubmissionsOpenUntil = moment('2018-06-03T23:59:59+08:00')
const votingOpenFrom = moment('2018-06-06T08:00:00+08:00')
const votingOpenUntil = moment('2018-06-14T23:59:59+08:00')
const agendaPublishedFrom = moment('2018-06-25T08:00:00+08:00')
const feedbackOpenFrom = date.clone()
const feedbackOpenUntil = date.clone().add(12, 'h')
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
    {
        Date: votingOpenFrom,
        Description: 'Voting open',
        Type: 'voting',
    },
    {
        Date: votingOpenUntil,
        Description: 'Voting close',
        Type: 'voting',
    },
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
    Organiser: 'DDD WA Inc.',
    TagLine: tagLine,
    SiteDescription: `${tagLine}.`,
    Goal:
        "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.",
    GoogleAnalyticsId: 'UA-60040308-1',
    TicketPrice: '$50',
    EventbriteId: '34127818223',
    IsSoldOut: isSoldOut,
    HashTag: 'dddperth',
    SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
    Handbook: null,
    SessionizeUrl: 'https://sessionize.com/demo-91ce3752/',
    PreviouslySubmittedTopics:
        'Agile, building great teams, UI design, software testing, virtual reality, open source software, bots, IoT, machine learning, automated deployments, mobile development, architecture, microservices, APIs, actors, JavaScript, authentication, React, UWP, HTTP protocol, Git, Docker and pointers',

    ContactEmail: 'info@dddperth.com',
    SponsorshipEmail: 'sponsorship@dddperth.com',
    MentoringEmail: 'mentors@dddperth.com',
    EmergencyPhoneNumber: '0400 777 763',

    Date: date,
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
        Twitter: 'DDDPerth',
        Facebook: 'DDDPerth',
        Flickr: 'https://www.flickr.com/photos/135003652@N08/albums',
        Youtube: 'https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ',
        Blog: 'https://blog.dddperth.com/',
        Email: 'info@dddperth.com',
        MailingList: 'http://eepurl.com/cRvaSf',
        GitHub: 'dddwa',
    },

    ImageStrip: [
        '/static/images/strip/1.jpg',
        '/static/images/strip/2.jpg',
        '/static/images/strip/3.jpg',
        '/static/images/strip/4.jpg',
        '/static/images/strip/5.jpg',
    ],

    ImportantDates: orderBy(importantDates, i => i.Date),

    Sponsors: SponsorData,
}

export default Conference
