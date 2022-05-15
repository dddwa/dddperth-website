import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = [
  {
    id: '2021-telstra-purple',
    imageUrl: '/static/images/sponsors/2021-telstra-purple.png',
    name: 'Telstra Purple',
    type: SponsorType.Platinum,
    url: 'https://purple.telstra.com',
  },
  {
    id: '2021-microsoft',
    imageUrl: '/static/images/sponsors/microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Platinum,
    url: 'https://www.microsoft.com/en-au/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: '2021-vgw',
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Gold,
    url: 'https://www.vgw.co/',
  },
  {
    id: '2021-valrose',
    imageUrl: '/static/images/sponsors/2021-valrose.png',
    name: 'Valrose',
    type: SponsorType.Gold,
    url: 'https://valrose.com.au/',
  },
  {
    id: '2021-insight',
    imageUrl: '/static/images/sponsors/2021-insight.png',
    name: 'Insight',
    type: SponsorType.Gold,
    url: 'https://au.insight.com/',
  },
  {
    id: '2021-versent',
    imageUrl: '/static/images/sponsors/2021-versent.png',
    name: 'Versent',
    type: SponsorType.Gold,
    url: 'https://versent.com.au',
  },
  {
    id: '2021-twilio',
    imageUrl: '/static/images/sponsors/2021-twilio.png',
    name: 'Twilio',
    type: SponsorType.Gold,
    url: 'https://www.twilio.com',
  },
  {
    id: '2021-aws',
    imageUrl: '/static/images/sponsors/aws.png',
    name: 'Amazon Web Services',
    type: SponsorType.Gold,
    url: 'https://aws.amazon.com/',
  },
  {
    id: '2021-auth0',
    imageUrl: '/static/images/sponsors/2021-auth0.png',
    name: 'Auth0',
    type: SponsorType.Gold,
    url: 'https://auth0.com',
  }
]

const silverSponsors: Sponsor[] = [
  {
    id: '2021-family-zone',
    imageUrl: '/static/images/sponsors/2021-family-zone.png',
    name: 'Family Zone',
    type: SponsorType.Silver,
    url: 'https://www.familyzone.com/',
  },
  {
    id: '2021-cybercx',
    imageUrl: '/static/images/sponsors/2021-cybercx.png',
    name: 'CyberCX',
    type: SponsorType.Silver,
    url: 'https://cybercx.com.au',
  },
  {
    id: '2021-elastic',
    imageUrl: '/static/images/sponsors/2021-elastic.png',
    name: 'elastic',
    type: SponsorType.Silver,
    url: 'https://www.elastic.co',
  }
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2021-moqdigital',
    imageUrl: '/static/images/sponsors/2021-moqdigital.png',
    name: 'MOQdigital',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.moqdigital.com/',
  },
  {
    id: '2021-planit',
    imageUrl: '/static/images/sponsors/2021-planit.png',
    name: 'Planit',
    serviceProvided: 'Coffee Cart',
    type: SponsorType.Service,
    url: 'https://www.planittesting.com/',
  }
]

const communityPartners: Sponsor[] = []

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
