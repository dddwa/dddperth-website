import { SponsorType, Sponsor } from "./types";

interface From2017 {
  YouTubePlaylistUrl: string;
  YouTubeKeynoteEmbedUrl: string;
  YouTubeLocknoteEmbedUrl: string;
  FlickrAlbumUrl: string;
  HandbookUrl: string;
  Sponsors: Sponsor[];
}

const From2017 : From2017 = {
  YouTubePlaylistUrl: "https://www.youtube.com/watch?v=tlA_4-dnDyk&list=PLkLJSte3oodQ_7JG0iRdZS7P4TdlFSzYy",
  YouTubeKeynoteEmbedUrl: "https://www.youtube.com/embed/tlA_4-dnDyk",
  YouTubeLocknoteEmbedUrl: "https://www.youtube.com/embed/zMReShyytQA",
  FlickrAlbumUrl: "https://www.flickr.com/photos/135003652@N08/albums/72157686384858370",
  HandbookUrl: "/static/docs/handbook2017.pdf",
  Sponsors: [
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

export default From2017;
