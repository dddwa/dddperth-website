import { Moment } from "moment";

export interface Conference {
  Name : string;
  Instance : string;
  Organiser : string;
  TagLine : string;
  SiteDescription : string;
  Goal : string;
  GoogleAnalyticsId : string;
  TicketPrice : string;
  DetailsLandingPage : string;
  IsSoldOut : boolean;
  HashTag : string;
  SellingPoints : string[];

  Venue : Venue;

  ContactEmail : string;
  SponsorshipEmail : string;
  EmergencyPhoneNumber : string;

  Date : Moment;
  DoorsOpenTime : string;
  FinishTime : string;
  RegistrationOpenFrom : Moment;
  RegistrationOpenUntil : Moment | null;
  PresentationSubmissionsOpenFrom : Moment;
  PresentationSubmissionsOpenUntil : Moment;
  VotingOpenFrom : Moment;
  VotingOpenUntil : Moment;
  AgendaPublishedFrom : Moment;

  HideDate : boolean;
  HideSponsors : boolean;
  HideVenue : boolean;
  HideAfterpartyVenue : boolean;

  Socials : Socials;

  ImageStrip : string[];

  ImportantDates : ImportantDate[];
}

export interface Venue {
  Name : string;
  Address : string;
  Wifi : string|null;
  Afterparty : string|null;
  AfterpartyAddress : string|null;
  Accommodation? : JSX.Element|string;
  Car? : JSX.Element|string;
  Train? : JSX.Element|string;
  Bus? : JSX.Element|string;
  Tram? : JSX.Element|string;
}

export interface ImportantDate {
  Description : string;
  Date : Moment;
  Type : string;
}

export interface Dates {
  Display : string;
  DateDisplayFormat : string;
  TimeDisplayFormat : string;
  IsComplete : boolean;
  IsInProgress : boolean;
  HasNotStarted : boolean;
  RegistrationOpen : boolean;
  RegistrationClosed : boolean;
  AcceptingPresentations : boolean;
  VotingOpen : boolean;
  AgendaPublished : boolean;
}

export interface Socials {
  Twitter? : string;
  Facebook? : string;
  GitHub? : string;
  Instagram? : string;
  Flickr? : string;
  Youtube? : string;
  Blog? : string;
  Email? : string;
  MailingList? : string;
}

export enum SponsorType {
  Standard,
  Silver,
  Gold,
  Platinum,
  Service,
  Community
}

export interface Sponsor {
  name: string;
  imageUrl: string;
  type: SponsorType;
  url : string;
  serviceProvided? : string
}

export interface MenuItem {
  href : string,
  name : string
}

export interface FAQ {
  Question: string;
  Answer?: string|JSX.Element;
  AnswerWithoutParagraph?: JSX.Element;
}
