import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Platinum
  {
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Platinum,
    url: 'https://www.vgw.co/',
  },
  // Gold
  {
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'Amazon Web Services',
    type: SponsorType.Gold,
    url: 'https://aws.amazon.com/',
  },
  {
    imageUrl: '/static/images/sponsors/livehire.png',
    name: 'LiveHire',
    type: SponsorType.Gold,
    url: 'https://www.livehire.com/',
  },
  {
    imageUrl: '/static/images/sponsors/microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Gold,
    url: 'https://www.microsoft.com/',
  },
  // Silver
  {
    imageUrl: '/static/images/sponsors/ndc-sydney.png',
    name: 'NDC Sydney',
    type: SponsorType.Silver,
    url: 'http://ndcsydney.com/',
  },
  {
    imageUrl: '/static/images/sponsors/progress-telerik.png',
    name: 'Progress Telerik',
    type: SponsorType.Silver,
    url: 'https://www.progress.com/',
  },
  {
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Silver,
    url: 'https://octopus.com/',
  },
  // Community
  {
    imageUrl: '/static/images/sponsors/yow-perth.png',
    name: 'YOW! Perth',
    type: SponsorType.Community,
    url: 'http://west.yowconference.com.au/',
  },
  // Services
  {
    imageUrl: '/static/images/sponsors/readify.png',
    name: 'Readify',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://readify.net/',
  },
  {
    imageUrl: '/static/images/sponsors/planit.png',
    name: 'Planit',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.planittesting.com/',
  },
  {
    imageUrl: '/static/images/sponsors/mechanical-rock-2018.png',
    name: 'Mechanical Rock',
    serviceProvided: 'Afterparty',
    type: SponsorType.Service,
    url: 'https://mechanicalrock.io/',
  },
  // Standard
  {
    imageUrl: '/static/images/sponsors/wallabyjs.png',
    name: 'Wallaby.js',
    type: SponsorType.Standard,
    url: 'https://wallabyjs.com/',
  },
  {
    imageUrl: '/static/images/sponsors/psg.png',
    name: 'PSG Information Technology',
    type: SponsorType.Standard,
    url: 'https://www.professionalsearchgroup.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/aspose.png',
    name: 'Aspose',
    type: SponsorType.Standard,
    url: 'http://www.aspose.com/',
  },
]

export default Sponsors
