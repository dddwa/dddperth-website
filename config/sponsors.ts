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
    url: 'https://docs.microsoft.com/en-au/learn/',
  },
  {
    id: '2022-mantel-group',
    imageUrl: '/static/images/sponsors/2022-mantel-group.png',
    name: 'Mantel Group',
    type: SponsorType.Platinum,
    url: 'https://mantelgroup.com.au/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: 'makerx',
    imageUrl: '/static/images/sponsors/makerX.png',
    name: 'MakerX',
    type: SponsorType.Gold,
    url: 'https://makerx.com.au',
  },
  {
    id: '2021-insight',
    imageUrl: '/static/images/sponsors/2021-insight.png',
    name: 'Insight',
    type: SponsorType.Gold,
    url: 'https://au.insight.com/',
  },
  {
    id: '2021-vgw',
    imageUrl: '/static/images/sponsors/vgw.png',
    name: 'Virtual Gaming Worlds',
    type: SponsorType.Gold,
    url: 'https://www.vgw.co/',
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
    id: '2021-valrose',
    imageUrl: '/static/images/sponsors/2021-valrose.png',
    name: 'Valrose',
    type: SponsorType.Gold,
    url: 'https://valrose.com.au/',
  },
  {
    id: 'bankwest',
    imageUrl: '/static/images/sponsors/2021-bankwest.png',
    name: 'Bankwest',
    type: SponsorType.Gold,
    url: 'https://bankwest.com.au',
  },
  {
    id: 'github',
    imageUrl: '/static/images/sponsors/github.png',
    name: 'GitHub',
    type: SponsorType.Gold,
    url: 'https://github.com',
  },
  {
    id: '2021-auth0',
    imageUrl: '/static/images/sponsors/2021-auth0.png',
    name: 'Auth0',
    type: SponsorType.Gold,
    url: 'https://auth0.com',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: '2021-first-mode',
    imageUrl: '/static/images/sponsors/2021-first-mode.png',
    name: 'FirstMode',
    type: SponsorType.Silver,
    url: 'https://firstmode.com/',
  },
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
  },
  {
    id: 'sentient',
    imageUrl: '/static/images/sponsors/2022-sentient.png',
    name: 'Sentient Computing',
    type: SponsorType.Silver,
    url: 'https://sencom.com.au/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  {
    id: '2021-moqdigital',
    imageUrl: '/static/images/sponsors/2021-moqdigital.png',
    name: 'MOQdigital',
    type: SponsorType.CoffeeCart,
    url: 'https://www.moqdigital.com/',
  },
  {
    id: '2021-planit',
    imageUrl: '/static/images/sponsors/2021-planit.png',
    name: 'Planit',
    type: SponsorType.CoffeeCart,
    url: 'https://www.planittesting.com/',
  },
  {
    id: '2022-bunnings',
    imageUrl: '/static/images/sponsors/2022-bunnings.png',
    name: 'Bunnings',
    type: SponsorType.CoffeeCart,
    url: 'https://bunnings.com.au//',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2022-keystart',
    imageUrl: '/static/images/sponsors/2022-keystart.png',
    name: 'Keystart',
    type: SponsorType.Service,
    serviceProvided: 'Quiet Room',
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
