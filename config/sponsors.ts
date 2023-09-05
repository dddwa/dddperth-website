import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = [
  {
    id: 'bankwest',
    imageUrl: '/static/images/sponsors/bankwest.png',
    name: 'Bankwest',
    type: SponsorType.Platinum,
    url: 'https://www.bankwest.com.au/',
  },
  {
    id: 'microsoft',
    imageUrl: '/static/images/sponsors/microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Platinum,
    url: 'https://docs.microsoft.com/en-au/learn/',
  },
  {
    id: 'woodside',
    imageUrl: '/static/images/sponsors/woodside.png',
    name: 'Woodside',
    type: SponsorType.Platinum,
    url: 'https://www.woodside.com/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: 'insight',
    imageUrl: '/static/images/sponsors/insight.png',
    name: 'Insight',
    type: SponsorType.Gold,
    url: 'https://au.insight.com/',
  },
  {
    id: 'vgw',
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Gold,
    url: 'https://www.vgw.co/',
  },
  {
    id: 'versent',
    imageUrl: '/static/images/sponsors/versent.png',
    name: 'Versent',
    type: SponsorType.Gold,
    url: 'https://versent.com.au',
  },
  {
    id: 'qoria',
    imageUrl: '/static/images/sponsors/qoria.svg',
    name: 'Qoria',
    type: SponsorType.Gold,
    url: 'https://qoria.com/',
  },
  {
    id: 'github',
    imageUrl: '/static/images/sponsors/github.png',
    name: 'GitHub',
    type: SponsorType.Gold,
    url: 'https://github.com',
  },
  {
    id: 'mantel-group',
    imageUrl: '/static/images/sponsors/mantel-group.png',
    name: 'Mantel Group',
    type: SponsorType.Gold,
    url: 'https://mantelgroup.com.au/',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: 'makerx',
    imageUrl: '/static/images/sponsors/makerX.png',
    name: 'MakerX',
    type: SponsorType.Silver,
    url: 'https://makerx.com.au',
  },
  {
    id: 'first-mode',
    imageUrl: '/static/images/sponsors/first-mode.svg',
    name: 'FirstMode',
    type: SponsorType.Silver,
    url: 'https://firstmode.com/',
  },
  {
    id: 'servian',
    imageUrl: '/static/images/sponsors/cognizant.png',
    name: 'Servian',
    type: SponsorType.Silver,
    url: 'https://www.servian.com/',
  },
  {
    id: 'atlassian',
    imageUrl: '/static/images/sponsors/atlassian.png',
    name: 'Atlassian',
    type: SponsorType.Silver,
    url: 'https://www.atlassian.com/',
  },
  {
    id: 'equ',
    imageUrl: '/static/images/sponsors/equ.png',
    name: 'equ',
    type: SponsorType.Silver,
    url: 'https://equ.com.au/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  {
    id: 'aws',
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'AWS',
    type: SponsorType.CoffeeCart,
    url: 'https://aws.amazon.com/',
  },
  {
    id: 'planit',
    imageUrl: '/static/images/sponsors/planit_n.png',
    name: 'Planit',
    type: SponsorType.CoffeeCart,
    url: 'https://www.planittesting.com/',
  },
  {
    id: 'telstra-purple',
    imageUrl: '/static/images/sponsors/telstra-purple.png',
    name: 'Telstra Purple',
    type: SponsorType.CoffeeCart,
    url: 'https://purple.telstra.com/',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: 'keystart',
    imageUrl: '/static/images/sponsors/keystart.png',
    name: 'Keystart',
    type: SponsorType.Service,
    serviceProvided: 'Viewing Room',
    url: 'https://www.keystart.com.au/',
  },
]

const communityPartners: Sponsor[] = []

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
