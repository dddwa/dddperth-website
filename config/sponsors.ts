import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = [
  {
    id: 'bankwest',
    imageUrl: '/static/images/sponsors/2023-bankwest.png',
    name: 'Bankwest',
    type: SponsorType.Platinum,
    url: 'https://www.bankwest.com.au/',
  },
  {
    id: 'microsoft',
    imageUrl: '/static/images/sponsors/2023-microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Platinum,
    url: 'https://docs.microsoft.com/en-au/learn/',
  },
  {
    id: 'woodside',
    imageUrl: '/static/images/sponsors/2023-woodside.png',
    name: 'Woodside',
    type: SponsorType.Platinum,
    url: 'https://www.woodside.com/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: 'insight',
    imageUrl: '/static/images/sponsors/2023-insight.png',
    name: 'Insight',
    type: SponsorType.Gold,
    url: 'https://au.insight.com/',
  },
  {
    id: 'vgw',
    imageUrl: '/static/images/sponsors/2023-vgw2.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Gold,
    url: 'https://www.vgw.co/',
  },
  {
    id: 'versent',
    imageUrl: '/static/images/sponsors/2023-versent.png',
    name: 'Versent',
    type: SponsorType.Gold,
    url: 'https://versent.com.au',
  },
  {
    id: 'qoria',
    imageUrl: '/static/images/sponsors/2023-qoria.png',
    name: 'Qoria',
    type: SponsorType.Gold,
    url: 'https://qoria.com/',
  },
  {
    id: 'github',
    imageUrl: '/static/images/sponsors/2023-github.png',
    name: 'GitHub',
    type: SponsorType.Gold,
    url: 'https://github.com',
  },
  {
    id: 'mantel-group',
    imageUrl: '/static/images/sponsors/2023-mantel-group.png',
    name: 'Mantel Group',
    type: SponsorType.Gold,
    url: 'https://mantelgroup.com.au/',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: 'makerx',
    imageUrl: '/static/images/sponsors/2023-makerX.png',
    name: 'MakerX',
    type: SponsorType.Silver,
    url: 'https://makerx.com.au',
  },
  {
    id: 'first-mode',
    imageUrl: '/static/images/sponsors/2023-first-mode.png',
    name: 'FirstMode',
    type: SponsorType.Silver,
    url: 'https://firstmode.com/',
  },
  {
    id: 'servian',
    imageUrl: '/static/images/sponsors/2023-cognizant.png',
    name: 'Servian',
    type: SponsorType.Silver,
    url: 'https://www.servian.com/',
  },
  {
    id: 'atlassian',
    imageUrl: '/static/images/sponsors/2023-atlassian.png',
    name: 'Atlassian',
    type: SponsorType.Silver,
    url: 'https://www.atlassian.com/',
  },
  {
    id: 'equ',
    imageUrl: '/static/images/sponsors/2023-equ.png',
    name: 'equ',
    type: SponsorType.Silver,
    url: 'https://equ.com.au/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  {
    id: 'aws',
    imageUrl: '/static/images/sponsors/2023-aws.png',
    name: 'AWS',
    type: SponsorType.CoffeeCart,
    url: 'https://aws.amazon.com/',
  },
  {
    id: 'planit',
    imageUrl: '/static/images/sponsors/2023-planit.png',
    name: 'Planit',
    type: SponsorType.CoffeeCart,
    url: 'https://www.planittesting.com/',
  },
  {
    id: 'telstra-purple',
    imageUrl: '/static/images/sponsors/2023-telstra-purple.png',
    name: 'Telstra Purple',
    type: SponsorType.CoffeeCart,
    url: 'https://purple.telstra.com/',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: 'keystart',
    imageUrl: '/static/images/sponsors/2023-keystart.png',
    name: 'Keystart',
    type: SponsorType.Service,
    serviceProvided: 'Viewing Room',
    url: 'https://www.keystart.com.au/',
  },
]

const communityPartners: Sponsor[] = [
  {
    id: 'she-codes',
    imageUrl: '/static/images/sponsors/2023-she-codes.png',
    name: 'She Codes',
    type: SponsorType.Community,
    url: 'https://shecodes.com.au/',
  },
  {
    id: 'level-her-up',
    imageUrl: '/static/images/sponsors/2023-level-her-up.png',
    name: 'Level her up',
    type: SponsorType.Community,
    url: 'https://levelherup.com.au/',
  },
  {
    id: 'bcp',
    imageUrl: '/static/images/sponsors/2023-bcp.png',
    name: 'Breast Cancer Partners',
    type: SponsorType.Community,
    url: 'https://breastcancerpartners.org/',
  },
]

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
