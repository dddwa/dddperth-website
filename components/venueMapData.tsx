import Conference from 'config/conference'

export const roomLocations: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
}

interface Room {
  roomName: string
  trackNames: any
  coordinates: number[]
}

const rooms: Room[] = [
  {
    roomName: 'Riverside Theatre',
    trackNames: { en: 'Quokka', nys: 'Kwoka' },
    coordinates: [115.85356279312842, -31.95714213071304],
  },
  {
    roomName: 'M1',
    trackNames: { en: 'Quandong', nys: 'Kwonding' },
    coordinates: [115.85415395478805, -31.957095478752787],
  },
  {
    roomName: 'M2',
    trackNames: { en: 'Bobtail', nys: 'Yoorn' },
    coordinates: [115.8542477899721, -31.957120511514905],
  },
  {
    roomName: 'M3',
    trackNames: { en: 'Banksia', nys: 'Mangatj' },
    coordinates: [115.85434698716668, -31.957146682122527],
  },
  {
    roomName: 'M6',
    trackNames: { en: 'Black Cockatoo', nys: 'Yiibi' },
    coordinates: [115.85423170394057, -31.95741293918508],
  },
  {
    roomName: 'M7',
    trackNames: { en: 'Red Gum', nys: 'Mari' },
    coordinates: [115.85413920925912, -31.957381079406286],
  },
  {
    roomName: 'M8',
    trackNames: { en: 'Galah', nys: 'Djakal-Ngakal' },
    coordinates: [115.85404537407506, -31.957357184564934],
  },
  {
    roomName: 'Riverview 4',
    trackNames: { en: 'River', nys: 'Bilya' },
    coordinates: [115.85445020586916, -31.957213815386293],
  },
  {
    roomName: 'Riverview 5',
    trackNames: { en: 'Black Swan', nys: 'Maali' },
    coordinates: [115.85436039219297, -31.95740838778879],
  },
]

function plotRoom(room, roomLocations) {
  if (!roomLocations.features) return
  roomLocations.features.push({
    type: 'Feature',
    properties: {
      type: 'room',
      name: room.roomName,
      names: {
        en: room.trackNames.en,
        nys: room.trackNames.nys,
      },
    },
    geometry: {
      type: 'Point',
      coordinates: room.coordinates,
    },
  })
}

rooms.map((room) => {
  plotRoom(room, roomLocations)
})

const sponsorImgMap = {}
Conference.Sponsors.map(function (sponsor) {
  sponsorImgMap[sponsor.name] = sponsor.imageUrl
})

export const sponsorFeatures: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
}

function plotSponsorLoc(sponsor, locType, locPopup) {
  sponsorFeatures.features.push({
    type: 'Feature',
    properties: {
      type: locType,
      name: sponsor.name,
      popupContent: sponsor.name + ' ' + locPopup,
      logo: sponsorImgMap[sponsor.name],
    },
    geometry: {
      type: 'Point',
      coordinates: sponsor.coordinates,
    },
  })
}

const sponsorBooths = [
  { name: 'Microsoft', coordinates: [115.85379067857545, -31.956998761198715] },
  { name: 'Telstra Purple', coordinates: [115.8537477824913, -31.95712278722021] },
  { name: 'Mantel Group', coordinates: [115.85371829143345, -31.95739245789998] },
  { name: 'GitHub', coordinates: [115.85378321883962, -31.95704559544246] },
  { name: 'Twilio', coordinates: [115.85377886070137, -31.95707290392472] },
  { name: 'Valrose', coordinates: [115.85370211286317, -31.957247564233736] },
  { name: 'Bankwest', coordinates: [115.85386561370767, -31.9573932090583] },
  { name: 'Insight', coordinates: [115.85396319937398, -31.957473996322346] },
  { name: 'Virtual Gaming Worlds', coordinates: [115.85412674069475, -31.95746972939116] },
  { name: 'Versent', coordinates: [115.8541639396427, -31.95753287995242] },
  { name: 'MakerX', coordinates: [115.85419354189753, -31.956985289182057] },
  { name: 'Amazon Web Services', coordinates: [115.85435379079529, -31.95698301347335] },
  { name: 'Auth0', coordinates: [115.85435881768018, -31.957060387538018] },
]

sponsorBooths.map((sponsor) => {
  plotSponsorLoc(sponsor, 'sponsorBooth', 'sponsor booth')
})

const coffeeCarts = [
  { name: 'Planit', coordinates: [115.85389116436066, -31.95713178781193] },
  { name: 'Bunnings', coordinates: [115.85427991448684, -31.957544102862222] },
  { name: 'MOQdigital', coordinates: [115.85447914253717, -31.957070757115613] },
]

coffeeCarts.map((sponsor) => {
  plotSponsorLoc(sponsor, 'coffeeCart', 'coffee cart')
})

export const helpDeskLoc = [
  { lng: 115.85392352114012, lat: -31.957009010775213 }, // BL
  { lng: 115.85394463405655, lat: -31.956960936429034 }, // TL
  { lng: 115.85397010360651, lat: -31.956968616947577 }, // TR
  { lng: 115.8539496609414, lat: -31.957016691289724 }, // BR
]

export const mediaWallLoc = [
  { lng: 115.85377533947448, lat: -31.95730314557603 },
  { lng: 115.85379243088299, lat: -31.957302861113416 },
  { lng: 115.85379377138563, lat: -31.957356055604645 },
  { lng: 115.85377802047974, lat: -31.95735719345438 },
]
