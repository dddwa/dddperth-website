import { Sponsor, SponsorType } from './types'

interface From2018 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLunchnoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2018: From2018 = {
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=A02tSBP7CCw&list=PLkLJSte3oodSP0RvXqylgI16BO5eojS19',
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/embed/MDrrZucJtJo',
  YouTubeLunchnoteEmbedUrl: 'https://www.youtube.com/embed/NCj0xNu8f8s',
  YouTubeLocknoteEmbedUrl: 'https://www.youtube.com/embed/Vb8ebpzoioQ',
  FlickrAlbumUrl: 'https://www.flickr.com/photos/135003652@N08/albums/72157700075126705',
  HandbookUrl: '/static/docs/handbook2018.pdf',
  Sponsors: [
    // Platinum
    {
      id: 'vgw',
      imageUrl: '/static/images/sponsors/vgw.png',
      name: 'Virtual Gaming Worlds',
      type: SponsorType.Platinum,
      url: 'https://www.vgw.co/',
    },
    // Gold
    {
      id: 'aws',
      imageUrl: '/static/images/sponsors/aws.png',
      name: 'Amazon Web Services',
      type: SponsorType.Gold,
      url: 'https://aws.amazon.com/',
    },
    {
      id: 'livehire',
      imageUrl: '/static/images/sponsors/livehire.png',
      name: 'LiveHire',
      type: SponsorType.Gold,
      url: 'https://www.livehire.com/',
    },
    {
      id: 'microsoft',
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/',
    },
    // Silver
    {
      id: 'ndc-sydney',
      imageUrl: '/static/images/sponsors/ndc-sydney.png',
      name: 'NDC Sydney',
      type: SponsorType.Silver,
      url: 'http://ndcsydney.com/',
    },
    {
      id: 'progress-telerik',
      imageUrl: '/static/images/sponsors/progress-telerik.png',
      name: 'Progress Telerik',
      type: SponsorType.Silver,
      url: 'https://www.progress.com/',
    },
    {
      id: 'octopus-deploy',
      imageUrl: '/static/images/sponsors/octopus-deploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Silver,
      url: 'https://octopus.com/',
    },
    // Community
    {
      id: 'yow-perth',
      imageUrl: '/static/images/sponsors/yow-perth.png',
      name: 'YOW! Perth',
      type: SponsorType.Community,
      url: 'http://west.yowconference.com.au/',
    },
    // Services
    {
      id: 'readify',
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify',
      serviceProvided: 'Coffee Cart',
      type: SponsorType.Service,
      url: 'https://readify.net/',
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
      id: 'mechanical-rock',
      imageUrl: '/static/images/sponsors/mechanical-rock-2018.png',
      name: 'Mechanical Rock',
      serviceProvided: 'Afterparty',
      type: SponsorType.Service,
      url: 'https://mechanicalrock.io/',
    },
    {
      id: 'yow-perth',
      imageUrl: '/static/images/sponsors/yow-perth.png',
      name: 'YOW! Perth',
      serviceProvided: 'Keynote',
      type: SponsorType.Service,
      url: 'http://west.yowconference.com.au/',
    },
    // Standard
    {
      id: 'wallaby.js',
      imageUrl: '/static/images/sponsors/wallabyjs.png',
      name: 'Wallaby.js',
      type: SponsorType.Standard,
      url: 'https://wallabyjs.com/',
    },
    {
      id: 'psg-information-technology',
      imageUrl: '/static/images/sponsors/psg.png',
      name: 'PSG Information Technology',
      type: SponsorType.Standard,
      url: 'https://www.professionalsearchgroup.com.au/',
    },
    {
      id: 'aspose',
      imageUrl: '/static/images/sponsors/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://www.aspose.com/',
    },
  ],
}

export default From2018
