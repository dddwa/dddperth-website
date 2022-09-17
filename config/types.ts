import { SessionGroupWithIds } from 'components/utils/useSessionGroups'

export type Types = 'conference' | 'voting' | 'tickets' | 'agenda' | 'content'

export interface Conference {
  Name: string
  Instance: string
  PreviousInstance: string
  PreviousInstances: string[]
  Organiser: Organiser
  TagLine: string
  SiteDescription: string
  Goal: string
  GoogleAnalyticsId: string
  TicketPrice: string
  ChildcarePrice: string
  TicketsProviderId: TicketsProvider
  TicketsProviderAccountId: string
  TicketsProviderEventId: string
  TicketsProviderFinancialAssistanceCode: string
  TicketPurchasingOptions: TicketPurchasingOptions
  HashTag: string
  SellingPoints: string[]
  Handbook: string | null
  SessionizeUrl: string | null
  SessionizeEditUrl: string | null
  PreviouslySubmittedTopics: string

  Venue: Venue

  ContactEmail: string
  SponsorshipEmail: string
  MentoringEmail: string
  EmergencyContactName: string
  EmergencyContactPhoneNumber: string
  MediaOfficerName: string

  AnonymousReportFormUrl: string

  AnonymousVoting: boolean
  PreferentialVoting: boolean
  TicketNumberWhileVoting: TicketNumberWhileVoting
  MinVotes: number
  MaxVotes: number
  WaitingListCanVoteWithEmail: boolean

  TimeZone: string
  StaticDate: Date
  Date: Date
  EndDate: Date
  DoorsOpenTime: string
  FinishTime: string
  RegistrationOpenFrom: Date
  RegistrationOpenUntil: Date | null
  PresentationSubmissionsOpenFrom: Date
  PresentationSubmissionsOpenUntil: Date
  VotingOpenFrom: Date
  VotingOpenUntil: Date
  AgendaPublishedFrom: Date
  FeedbackOpenFrom: Date
  FeedbackOpenUntil: Date

  ConferenceFeedbackLink: string
  SessionFeedbackLink: string

  HideDate: boolean
  HideSponsors: boolean
  HideSponsorshipUpsell: boolean
  HideVenue: boolean
  HasAfterParty: boolean
  HideAfterpartyVenue: boolean
  ShowNextSessions: boolean

  Socials: Socials

  ImportantContacts: ImportantContacts

  ImportantDates: ImportantDate[]

  Sponsors: Sponsor[]

  Keynotes: Session[]

  RoomNames: string[]
  Livestreams: string[]

  SessionGroups: SessionGroupWithIds[]

  VolunteerSubmissionFormId?: string
}

export enum TicketPurchasingOptions {
  OnSale,
  WaitListOpen,
  SoldOut,
}

export enum TicketsProvider {
  Eventbrite,
  Tito,
}

export enum TicketNumberWhileVoting {
  None,
  Required,
  Optional,
}

export interface Venue {
  Name: string
  Address: string
  Latitude: number
  Longitude: number
  Wifi: string | null
  Afterparty: string | null
  AfterpartyAddress: string | null
  Accommodation?: JSX.Element | string
  Car?: JSX.Element | string
  Train?: JSX.Element | string
  Bus?: JSX.Element | string
  Tram?: JSX.Element | string
}

export interface ImportantDate {
  Description: string
  Date: Date
  Type: Types
}

export interface Dates {
  Display: string
  DateDisplayFormat: string
  TimeDisplayFormat: string
  IsComplete: boolean
  IsInProgress: boolean
  HasNotStarted: boolean
  RegistrationOpen: boolean
  RegistrationClosed: boolean
  AcceptingPresentations: boolean
  VotingOpen: boolean
  VotingFinished: boolean
  AgendaPublished: boolean
  AcceptingFeedback: boolean
  DisplayFormatted: (format: string) => string
  WeekBefore: boolean
}

export interface Socials {
  Twitter?: Twitter
  Facebook?: string
  GitHub?: string
  Instagram?: string
  Flickr?: string
  Youtube?: string
  Blog?: string
  Email?: string
  MailingList?: string
  Linkedin?: string
}

export interface ImportantContacts {
  Police?: Contact
  CentreAgainstSexualAssault?: Contact
  EmergencyMedical?: Contact
  NonEmergencyMedical?: Contact
}

export interface Contact {
  Details: string
  Phone?: string
  MapUrl?: string
}

export enum SponsorType {
  Standard,
  Silver,
  Gold,
  Platinum,
  CoffeeCart,
  Service,
  Community,
}

export interface Sponsor {
  id: string
  name: string
  shortName?: string
  imageUrl: string
  type: SponsorType
  url: string
  serviceProvided?: string
}

export interface MenuItem {
  href: string
  name: string
  external?: boolean
}

export interface FAQ {
  Question: string
  Answer?: string | JSX.Element
  AnswerWithoutParagraph?: JSX.Element
  Category?: string
}

export interface Action {
  Title: string
  Url: string
  Category: string
}

export interface Image {
  Url: string
  Alternate: string
}

export interface Organiser {
  Name: string
  Url: string
  ShirtColour: string
}

export interface Twitter {
  Id?: string
  Name: string
}

export interface Session {
  Id: string
  ExternalId?: string
  Title: string
  Abstract: string
  Presenters: Presenter[]
  Format: string
  Level: string
  Tags: string[]
}

export type EloSession = Pick<Session, 'Id' | 'Title' | 'Abstract' | 'Tags'>

export interface Presenter {
  Id: string
  Name: string
  Tagline: string
  Bio: string
  ProfilePhotoUrl: string
  TwitterHandle?: string
  WebsiteUrl?: string
}

export interface VolunteerOpportunity {
  RoleTitle: string
  Description: string | JSX.Element
}
