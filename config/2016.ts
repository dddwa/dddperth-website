import { SponsorType, Sponsor } from "./types";

interface From2016 {
  YouTubePlaylistUrl: string;
  YouTubeKeynoteEmbedUrl: string;
  YouTubeLocknoteEmbedUrl: string;
  FlickrAlbumUrl: string;
  Sponsors: Sponsor[];
}

const From2016 : From2016 = {
  YouTubePlaylistUrl: "https://www.youtube.com/watch?v=E55ts7kffHc&list=PLkLJSte3oodROGrLanQPm2KrVZEA0NlTl",
  YouTubeKeynoteEmbedUrl: "https://www.youtube.com/embed/E55ts7kffHc",
  YouTubeLocknoteEmbedUrl: "https://www.youtube.com/embed/GFF9PlL5KPk",
  FlickrAlbumUrl: "https://www.flickr.com/photos/135003652@N08/albums/72157669907469743",
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
      name: "Gooroo",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/gooroo.png",
      url: "https://gooroo.io/"
    },
    {
      name: "Microsoft",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/microsoft.png",
      url: "https://www.microsoft.com/en-au"
    }
  ]
}

export default From2016;
