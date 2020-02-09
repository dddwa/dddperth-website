import { Sponsor, SponsorType } from './types'

interface From2019 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

export const From2019: From2019 = {
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=rDzlITb-Ro8&list=PLkLJSte3oodR5ibzOgr7LsGsVXPdP70kE',
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/watch?v=rDzlITb-Ro8',
  YouTubeLocknoteEmbedUrl: 'https://www.youtube.com/watch?v=Im-PgWfRyF8',
  FlickrAlbumUrl: 'https://www.flickr.com/photos/135003652@N08/albums/72157711972856726',
  HandbookUrl: '/static/docs/handbook2019.pdf',
  Sponsors: [
    // Gold
    {
      id: 'aws',
      imageUrl: '/static/images/sponsors/aws.png',
      name: 'Amazon Web Services',
      type: SponsorType.Gold,
      url: 'https://aws.amazon.com/',
    },
    {
      id: 'bankwest',
      imageUrl: '/static/images/sponsors/bankwest.png',
      name: 'Bankwest',
      type: SponsorType.Gold,
      url: 'https://www.bankwest.com.au/',
    },
    {
      id: 'hudson',
      imageUrl: '/static/images/sponsors/hudson.jpg',
      name: 'Hudson',
      type: SponsorType.Gold,
      url: 'https://au.hudson.com/',
    },
    {
      id: 'microsoft',
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://aka.ms/AzureDevDDD19',
    },
    {
      id: 'modis',
      imageUrl: '/static/images/sponsors/modis.png',
      name: 'Modis',
      type: SponsorType.Gold,
      url: 'https://www.modis.com/en-au/',
    },
    {
      id: 'readify-kloud',
      imageUrl: '/static/images/sponsors/readify-kloud.png',
      name: 'Readify + Kloud',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      id: 'velrada',
      imageUrl: '/static/images/sponsors/velrada.png',
      name: 'Velrada',
      type: SponsorType.Gold,
      url: 'https://velrada.com/',
    },
    // Silver
    {
      id: 'acs',
      imageUrl: '/static/images/sponsors/acs.jpg',
      name: 'ACS',
      type: SponsorType.Silver,
      url: 'https://www.acs.org.au/',
    },
    {
      id: 'amristar',
      imageUrl: '/static/images/sponsors/amristar.png',
      name: 'Amristar',
      type: SponsorType.Silver,
      url: 'https://amristar.com/',
    },
    {
      id: 'elastic',
      imageUrl: '/static/images/sponsors/elastic.jpg',
      name: 'Elastic',
      type: SponsorType.Silver,
      url: 'https://www.elastic.co/',
    },
    {
      id: 'insight-aus',
      imageUrl: '/static/images/sponsors/insight.jpg',
      name: 'Insight Australia',
      type: SponsorType.Silver,
      url: 'https://au.insight.com/en_AU/home.html',
    },
    {
      id: 'journeyone',
      imageUrl: '/static/images/sponsors/journeyone.png',
      name: 'JourneyOne',
      type: SponsorType.Silver,
      url: 'https://journeyone.com.au/',
    },
    {
      id: 'ndc-sydney',
      imageUrl: '/static/images/sponsors/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'http://ndcsydney.com/',
    },
    {
      id: 'octopus-deploy',
      imageUrl: '/static/images/sponsors/octopus-deploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Silver,
      url: 'https://octopus.com/',
    },
    {
      id: 'verse-group',
      imageUrl: '/static/images/sponsors/verse-group.jpg',
      name: 'Verse Group',
      type: SponsorType.Silver,
      url: 'https://www.versegroup.com.au/',
    },
    // Services
    {
      id: 'vgw',
      imageUrl: '/static/images/sponsors/vgw.png',
      name: 'Virtual Gaming Worlds',
      serviceProvided: 'Coffee Cart',
      type: SponsorType.Service,
      url: 'https://www.vgw.co/',
    },
    {
      id: 'planit',
      imageUrl: '/static/images/sponsors/planit.png',
      name: 'Planit',
      serviceProvided: 'Coffee Cart',
      type: SponsorType.Service,
      url: 'https://www.planittesting.com/',
    },
    {
      id: 'bhp',
      imageUrl: '/static/images/sponsors/bhp.png',
      name: 'BHP',
      serviceProvided: 'Keynote and Quiet Zone',
      type: SponsorType.Service,
      url: 'https://www.bhp.com/',
    },
    {
      id: 'yow',
      imageUrl: '/static/images/sponsors/yow.png',
      name: 'YOW! Conferences and Workshops',
      serviceProvided: 'Locknote',
      shortName: 'YOW! Perth',
      type: SponsorType.Service,
      url: 'http://west.yowconference.com.au/',
    },
    {
      id: 'livehire',
      imageUrl: '/static/images/sponsors/livehire.png',
      name: 'LiveHire',
      serviceProvided: 'Childcare',
      type: SponsorType.Service,
      url: 'https://www.livehire.com/',
    },
    // Standard
    {
      id: 'jetbrains',
      imageUrl: '/static/images/sponsors/jetbrains.png',
      name: 'JetBrains',
      type: SponsorType.Standard,
      url: 'https://www.jetbrains.com/',
    },
    {
      id: 'ozcode',
      imageUrl: '/static/images/sponsors/ozcode.png',
      name: 'OzCode',
      type: SponsorType.Standard,
      url: 'https://oz-code.com/',
    },
    {
      id: 'codemaster-institute',
      imageUrl: '/static/images/sponsors/codemaster-institute.png',
      name: 'Codemaster Institute',
      type: SponsorType.Standard,
      url: 'https://www.codemasterinstitute.com/',
    },
  ],
}
