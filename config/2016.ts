import { Sponsor, SponsorType } from './types'

interface From2016 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2016: From2016 = {
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=E55ts7kffHc&list=PLkLJSte3oodROGrLanQPm2KrVZEA0NlTl',
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/embed/E55ts7kffHc',
  YouTubeLocknoteEmbedUrl: 'https://www.youtube.com/embed/GFF9PlL5KPk',
  FlickrAlbumUrl: 'https://www.flickr.com/photos/135003652@N08/albums/72157669907469743',
  HandbookUrl: '/static/docs/handbook2016.pdf',
  Sponsors: [
    // Platinum
    {
      imageUrl: '/static/images/sponsors/bankwest.png',
      name: 'Bankwest',
      type: SponsorType.Platinum,
      url: 'https://www.bankwest.com.au/',
    },
    // Gold
    {
      imageUrl: '/static/images/sponsors/gooroo.png',
      name: 'Gooroo',
      type: SponsorType.Gold,
      url: 'https://gooroo.io/',
    },
    {
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/en-au',
    },
  ],
}

export default From2016
