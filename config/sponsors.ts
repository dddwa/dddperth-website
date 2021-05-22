import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = [
  {
    id: '2021-valrose',
    imageUrl: '/static/images/sponsors/2021-valrose.png',
    name: 'Valrose',
    type: SponsorType.Platinum,
    url: 'https://valrose.com.au/',
  },
  {
    id: '2021-telstra-purple',
    imageUrl: '/static/images/sponsors/2021-telstra-purple.png',
    name: 'Telstra Purple',
    type: SponsorType.Platinum,
    url: 'https://purple.telstra.com',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: '2021-octopus',
    imageUrl: '/static/images/sponsors/2021-octopus.png',
    name: 'Octopus Deploy',
    type: SponsorType.Gold,
    url: 'https://octopus.com',
  },
  {
    id: '2021-vix',
    imageUrl: '/static/images/sponsors/2021-vix.png',
    name: 'Vix',
    type: SponsorType.Gold,
    url: 'https://vixtechnology.com',
  },
  {
    id: '2021-vgw',
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Gold,
    url: 'https://www.vgw.co/',
  },
  {
    id: '2021-imdex',
    imageUrl: '/static/images/sponsors/2021-imdex.png',
    name: 'Imdex',
    type: SponsorType.Gold,
    url: 'https://www.imdexlimited.com',
  },
  {
    id: '2021-insight',
    imageUrl: '/static/images/sponsors/2021-insight.png',
    name: 'Insight',
    type: SponsorType.Gold,
    url: 'https://au.insight.com/',
  },
  {
    id: '2021-aws',
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'Amazon Web Services',
    type: SponsorType.Gold,
    url: 'https://aws.amazon.com/',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: '2021-journeyone',
    imageUrl: '/static/images/sponsors/journeyone.png',
    name: 'JourneyOne',
    type: SponsorType.Silver,
    url: 'https://journeyone.com.au',
  },
  {
    id: '2021-first-mode',
    imageUrl: '/static/images/sponsors/2021-first-mode.png',
    name: 'First Mode',
    type: SponsorType.Silver,
    url: 'https://firstmode.com',
  },
  {
    id: '2021-telerik',
    imageUrl: '/static/images/sponsors/2021-progress-telerik.png',
    name: 'Telerik',
    type: SponsorType.Silver,
    url: 'https://www.telerik.com',
  },
  {
    id: '2021-cybercx',
    imageUrl: '/static/images/sponsors/2021-cybercx.png',
    name: 'CyberCX',
    type: SponsorType.Silver,
    url: 'https://cybercx.com.au',
  },
  {
    id: '2021-moqdigital',
    imageUrl: '/static/images/sponsors/2021-moqdigital.png',
    name: 'MOQdigital',
    type: SponsorType.Silver,
    url: 'https://www.moqdigital.com/',
  },
  {
    id: '2021-family-zone',
    imageUrl: '/static/images/sponsors/2021-family-zone.png',
    name: 'Family Zone',
    type: SponsorType.Silver,
    url: 'https://www.familyzone.com/',
  },
  {
    id: '2021-ndc',
    imageUrl: '/static/images/sponsors/ndc-sydney.png',
    name: 'NDC',
    type: SponsorType.Silver,
    url: 'http://ndcsydney.com/',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2021-planit',
    imageUrl: '/static/images/sponsors/2021-planit.png',
    name: 'Planit',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.planittesting.com/',
  },
  {
    id: '2021-elastic',
    imageUrl: '/static/images/sponsors/2021-elastic.png',
    name: 'elastic',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.elastic.co',
  },
]

const communityPartners: Sponsor[] = [
  {
    id: '2021-shecodes',
    imageUrl: '/static/images/sponsors/2021-shecodes.png',
    name: 'She Codes',
    type: SponsorType.Community,
    url: 'https://shecodes.com.au/',
  },
]

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
