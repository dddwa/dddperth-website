import * as moment from 'moment';
import {Moment} from 'moment';

class Socials {
  readonly Twitter : string|undefined = "DDDPerth";
  readonly Facebook : string|undefined = "DDDPerth";
  readonly GitHub : string|undefined = undefined;
  readonly Instagram : string|undefined = undefined;
  readonly Flickr : string|undefined = "https://www.flickr.com/photos/135003652@N08/albums";
  readonly Youtube : string|undefined = "https://www.youtube.com/channel/UCj4UnNYakbLAh2xTWTjeoAQ";
  readonly Blog : string|undefined = "https://blog.dddperth.com/";
  readonly Email : string|undefined = "info@dddperth.com";
  readonly MailingList : string|undefined = "http://eepurl.com/cRvaSf";
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

export default class Conference {
  static readonly Name : string = "DDD Perth";
  static readonly Organiser : string = "DDD WA Inc.";
  static readonly TagLine : string = `${Conference.Name} is an inclusive non-profit event for the Perth software community`;
  static readonly SiteDescription : string = `${Conference.TagLine}.`;
  static readonly Date : Moment = moment('2017-09-16T08:00+08:00');
  static readonly HideDate : boolean = false;
  static readonly ShowSponsors : boolean = true;
  static readonly Goal : string = "Our goal is to create an approachable conference that anyone can attend or speak at, especially people that don't normally get to attend / speak at conferences.";
  static readonly GoogleAnalyticsId : string = "UA-60040308-1";
  static readonly Socials = new Socials();
  static readonly ImageStrip = [
    "/static/images/strip/1.jpg",
    "/static/images/strip/2.jpg",
    "/static/images/strip/3.jpg",
    "/static/images/strip/4.jpg",
    "/static/images/strip/5.jpg",
  ];
  static readonly Sponsors : Sponsor[] = [
    // Platinum
    {
      name: "Bankwest",
      type: SponsorType.Platinum,
      imageUrl: "/static/images/sponsors/bankwest.png",
      url: "https://www.bankwest.com.au/"
    },
    // Gold
    {
      name: "Readify",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/readify.png",
      url: "https://readify.net/"
    },
    {
      name: "Microsoft",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/microsoft.png",
      url: "https://www.microsoft.com/en-au"
    },
    {
      name: "LiveHire",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/livehire.png",
      url: "https://www.livehire.com/"
    },
    {
      name: "Lateral Solutions",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/lateral.png",
      url: "http://www.lateral.com.au/"
    },
    {
      name: "Virtual Gaming Worlds",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/vgw.png",
      url: "https://www.vgw.co/"
    },
    // Silver
    {
      name: "NDC Sydney",
      type: SponsorType.Silver,
      imageUrl: "/static/images/sponsors/ndc-sydney.png",
      url: "http://ndcsydney.com/"
    },
    {
      name: "Octopus Deploy",
      type: SponsorType.Silver,
      imageUrl: "/static/images/sponsors/octopus-deploy.png",
      url: "https://octopus.com/"
    },
    // Services
    {
      name: "Virtual Gaming Worlds",
      type: SponsorType.Service,
      imageUrl: "/static/images/sponsors/vgw.png",
      url: "https://www.vgw.co/",
      serviceProvided: "Afterparty"
    },
    {
      name: "Mechanical Rock",
      type: SponsorType.Service,
      imageUrl: "/static/images/sponsors/mechanical-rock.png",
      url: "https://mechanicalrock.io/",
      serviceProvided: "Coffee Cart"
    },
    // Standard
    {
      name: "Jetbrains",
      type: SponsorType.Standard,
      imageUrl: "/static/images/sponsors/jetbrains.png",
      url: "https://www.jetbrains.com/"
    },
    {
      name: "Thales",
      type: SponsorType.Standard,
      imageUrl: "/static/images/sponsors/thales.png",
      url: "https://www.thalesgroup.com/en/career"
    },
    {
      name: "Aspose",
      type: SponsorType.Standard,
      imageUrl: "/static/images/sponsors/aspose.png",
      url: "http://www.aspose.com/"
    },
    {
      name: "Seq",
      type: SponsorType.Standard,
      imageUrl: "/static/images/sponsors/seq.png",
      url: "https://www.getseq.net/"
    }
  ]
}