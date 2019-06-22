import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
  // Gold
  {
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'Amazon Web Services',
    type: SponsorType.Gold,
    url: 'https://aws.amazon.com/',
  },
  {
    imageUrl: '/static/images/sponsors/bankwest.png',
    name: 'Bankwest',
    type: SponsorType.Gold,
    url: 'https://www.bankwest.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/hudson.jpg',
    name: 'Hudson',
    type: SponsorType.Gold,
    url: 'https://au.hudson.com/',
  },
  {
    imageUrl: '/static/images/sponsors/microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Gold,
    url: 'https://www.microsoft.com/',
  },
  {
    imageUrl: '/static/images/sponsors/modis.png',
    name: 'Modis',
    type: SponsorType.Gold,
    url: 'https://www.modis.com/en-au/',
  },
  {
    imageUrl: '/static/images/sponsors/readify-kloud.png',
    name: 'Readify / Kloud',
    type: SponsorType.Gold,
    url: 'https://readify.net/',
  },
  {
    imageUrl: '/static/images/sponsors/velrada.png',
    name: 'Velrada',
    type: SponsorType.Gold,
    url: 'https://velrada.com/',
  },
  // Silver
  {
    imageUrl: '/static/images/sponsors/amristar.png',
    name: 'Amristar',
    type: SponsorType.Silver,
    url: 'https://amristar.com/',
  },
  {
    imageUrl: '/static/images/sponsors/elastic.png',
    name: 'Elastic',
    type: SponsorType.Silver,
    url: 'https://www.elastic.co/',
  },
  {
    imageUrl: '/static/images/sponsors/ibm.png',
    name: 'IBM',
    type: SponsorType.Silver,
    url: 'https://www.ibm.com/au-en',
  },
  {
    imageUrl: '/static/images/sponsors/insight.png',
    name: 'Insight Australia',
    type: SponsorType.Silver,
    url: 'https://au.insight.com/en_AU/home.html',
  },
  {
    imageUrl: '/static/images/sponsors/journeyone.png',
    name: 'JourneyOne',
    type: SponsorType.Silver,
    url: 'https://journeyone.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/ndc-sydney.png',
    name: 'NDC Sydney',
    type: SponsorType.Silver,
    url: 'http://ndcsydney.com/',
  },
  {
    imageUrl: '/static/images/sponsors/octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Silver,
    url: 'https://octopus.com/',
  },
  {
    imageUrl: '/static/images/sponsors/verse-group.png',
    name: 'Verse Group',
    type: SponsorType.Silver,
    url: 'https://www.versegroup.com.au/',
  },
  // Services
  {
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.vgw.co/',
  },
  {
    imageUrl: '/static/images/sponsors/planit.png',
    name: 'Planit',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.planittesting.com/',
  },
  {
    imageUrl: '/static/images/sponsors/bhp.png',
    name: 'BHP',
    serviceProvided: 'Keynote and Quiet Zone',
    type: SponsorType.Service,
    url: 'https://www.bhp.com/',
  },
  {
    imageUrl: '/static/images/sponsors/yow-perth.png',
    name: 'YOW! Perth',
    serviceProvided: 'Locknote',
    type: SponsorType.Service,
    url: 'http://west.yowconference.com.au/',
  },
  {
    imageUrl: '/static/images/sponsors/livehire.png',
    name: 'LiveHire',
    serviceProvided: 'Childcare',
    type: SponsorType.Service,
    url: 'https://www.livehire.com/',
  },
  // Standard
  {
    imageUrl: '/static/images/sponsors/jetbrains.png',
    name: 'JetBrains',
    type: SponsorType.Standard,
    url: 'https://www.jetbrains.com/',
  },
  {
    imageUrl: '/static/images/sponsors/ozcode.png',
    name: 'OzCode',
    type: SponsorType.Standard,
    url: 'https://oz-code.com/',
  },
]

export default Sponsors
