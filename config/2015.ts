import { Sponsor, SponsorType } from './types'

interface From2015 {
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2015: From2015 = {
  FlickrAlbumUrl: 'https://www.flickr.com/photos/135003652@N08/albums/72157669669516373',
  HandbookUrl: '/static/docs/handbook2015.pdf',
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
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      imageUrl: '/static/images/sponsors/gooroo.png',
      name: 'Gooroo',
      type: SponsorType.Gold,
      url: 'https://gooroo.io/',
    },
  ],
}

export default From2015
