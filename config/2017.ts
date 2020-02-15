import { Sponsor, SponsorType } from './types'

interface From2017 {
  YouTubePlaylistUrl: string
  YouTubeKeynoteEmbedUrl: string
  YouTubeLocknoteEmbedUrl: string
  FlickrAlbumUrl: string
  HandbookUrl: string
  Sponsors: Sponsor[]
}

const From2017: From2017 = {
  YouTubePlaylistUrl: 'https://www.youtube.com/watch?v=tlA_4-dnDyk&list=PLkLJSte3oodQ_7JG0iRdZS7P4TdlFSzYy',
  YouTubeKeynoteEmbedUrl: 'https://www.youtube.com/embed/tlA_4-dnDyk',
  YouTubeLocknoteEmbedUrl: 'https://www.youtube.com/embed/zMReShyytQA',
  FlickrAlbumUrl: 'https://www.flickr.com/photos/135003652@N08/albums/72157686384858370',
  HandbookUrl: '/static/docs/handbook2017.pdf',
  Sponsors: [
    // Platinum
    {
      id: 'bankwest',
      imageUrl: '/static/images/sponsors/bankwest.png',
      name: 'Bankwest',
      type: SponsorType.Platinum,
      url: 'https://www.bankwest.com.au/',
    },
    // Gold
    {
      id: 'readify',
      imageUrl: '/static/images/sponsors/readify.png',
      name: 'Readify',
      type: SponsorType.Gold,
      url: 'https://readify.net/',
    },
    {
      id: 'microsoft',
      imageUrl: '/static/images/sponsors/microsoft.png',
      name: 'Microsoft',
      type: SponsorType.Gold,
      url: 'https://www.microsoft.com/en-au',
    },
    {
      id: 'livehire',
      imageUrl: '/static/images/sponsors/livehire.png',
      name: 'LiveHire',
      type: SponsorType.Gold,
      url: 'https://www.livehire.com/',
    },
    {
      id: 'lateral-solutions',
      imageUrl: '/static/images/sponsors/lateral.png',
      name: 'Lateral Solutions',
      type: SponsorType.Gold,
      url: 'http://www.lateral.com.au/',
    },
    {
      id: 'vgw',
      imageUrl: '/static/images/sponsors/vgw.png',
      name: 'Virtual Gaming Worlds',
      type: SponsorType.Gold,
      url: 'https://www.vgw.co/',
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
      id: 'octopus-deploy',
      imageUrl: '/static/images/sponsors/octopus-deploy.png',
      name: 'Octopus Deploy',
      type: SponsorType.Silver,
      url: 'https://octopus.com/',
    },
    // Services
    {
      id: 'vgw',
      imageUrl: '/static/images/sponsors/vgw.png',
      name: 'Virtual Gaming Worlds',
      serviceProvided: 'Afterparty',
      type: SponsorType.Service,
      url: 'https://www.vgw.co/',
    },
    {
      id: 'mechanical-rock',
      imageUrl: '/static/images/sponsors/mechanical-rock.png',
      name: 'Mechanical Rock',
      serviceProvided: 'Coffee Cart',
      type: SponsorType.Service,
      url: 'https://mechanicalrock.io/',
    },
    // Standard
    {
      id: 'jetbrains',
      imageUrl: '/static/images/sponsors/jetbrains.png',
      name: 'Jetbrains',
      type: SponsorType.Standard,
      url: 'https://www.jetbrains.com/',
    },
    {
      id: 'thales',
      imageUrl: '/static/images/sponsors/thales.png',
      name: 'Thales',
      type: SponsorType.Standard,
      url: 'https://www.thalesgroup.com/en/career',
    },
    {
      id: 'aspose',
      imageUrl: '/static/images/sponsors/aspose.png',
      name: 'Aspose',
      type: SponsorType.Standard,
      url: 'http://www.aspose.com/',
    },
    {
      id: 'seq',
      imageUrl: '/static/images/sponsors/seq.png',
      name: 'Seq',
      type: SponsorType.Standard,
      url: 'https://www.getseq.net/',
    },
  ],
}

export default From2017
