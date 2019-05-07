import { Sponsor, SponsorType } from './types'

const Sponsors: Sponsor[] = [
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
