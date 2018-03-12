import { SponsorType, Sponsor } from "./types";

interface From2015 {
  FlickrAlbumUrl: string;
  Sponsors: Sponsor[];
}

const From2015 : From2015 = {
  FlickrAlbumUrl: "https://www.flickr.com/photos/135003652@N08/albums/72157669669516373",
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
      name: "Gooroo",
      type: SponsorType.Gold,
      imageUrl: "/static/images/sponsors/gooroo.png",
      url: "https://gooroo.io/"
    }
  ]
}

export default From2015;
