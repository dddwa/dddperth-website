import { Moment } from "moment";

export interface Conference {
  Name : string;
  Organiser : string;
  TagLine : string;
  SiteDescription : string;
  Date : Moment;
  Goal : string;
  GoogleAnalyticsId : string;
  Venue : string|null;
  TicketPrice : string;
  DetailsLandingPage : string;

  HideDate : boolean;
  HideSponsors : boolean;
  HideVenue : boolean;

  Socials : Socials;

  ImageStrip : string[]
}

export interface Dates {
  Display : string;
  IsComplete : boolean;
  IsInProgress : boolean;
  HasNotStarted : boolean;
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
