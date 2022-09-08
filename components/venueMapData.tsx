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
    coordinates: [115.85360166770471, -31.95706955703597],
  },
  {
    roomName: 'M1',
    trackNames: { en: 'Quandong', nys: 'Kwonding' },
    coordinates: [115.85413136991883, -31.957132987890773],
  },
  {
    roomName: 'M2',
    trackNames: { en: 'Bobtail', nys: 'Yoorn' },
    coordinates: [115.85422654560553, -31.95716171866224],
  },
  {
    roomName: 'M3',
    trackNames: { en: 'Banksia', nys: 'Mangatj' },
    coordinates: [115.8543217212922, -31.95718902710997],
  },
  {
    roomName: 'M6',
    trackNames: { en: 'Black Cockatoo', nys: 'Yiibi' },
    coordinates: [115.85424235730112, -31.957369660908654],
  },
  {
    roomName: 'M7',
    trackNames: { en: 'Red Gum', nys: 'Mari' },
    coordinates: [115.85415019774533, -31.957336947727356],
  },
  {
    roomName: 'M8',
    trackNames: { en: 'Galah', nys: 'Djakal-Ngakal' },
    coordinates: [115.85405703281259, -31.9573082170107],
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
  const blurb = sponsor.blurb ? sponsor.blurb : sponsor.name + ' ' + locPopup
  const marker = sponsor.marker ? sponsor.marker : null

  sponsorFeatures.features.push({
    type: 'Feature',
    properties: {
      type: locType,
      name: sponsor.name,
      popupContent: blurb,
      logo: sponsorImgMap[sponsor.name],
      marker: marker,
    },
    geometry: {
      type: 'Point',
      coordinates: sponsor.coordinates,
    },
  })
}

const sponsorBooths = [
  {
    name: 'Microsoft',
    coordinates: [115.85379067857545, -31.956998761198715],
    blurb: `Ready to put your driving skills to the test?  Join us at the Microsoft stand for a game of Forza Horizon 5 and show everyone you’re the fastest driver. After your race, sign up to our community and collect some swag!`,
    marker: {
      icon: '/static/images/map/map-sponsor-Microsoft.png',
      size: [81.43, 31.07],
      anchor: [45, 18],
    },
  },
  {
    name: 'Telstra Purple',
    coordinates: [115.8537477824913, -31.95712278722021],
    blurb: `Come meet the team and try your hand at our augmented reality AirSpeeder demo showing what it's like to compete in the worlds first flying racing car series supported by Telstra Purple. While you're there grab some free swag and pop your name in the draw for a chance to win an Xbox Series X.`,
    marker: {
      icon: '/static/images/map/map-sponsor-TelstraPurple.png',
      size: [67, 48],
      anchor: [40, 28],
    },
  },
  {
    name: 'Mantel Group',
    coordinates: [115.85371829143345, -31.95739245789998],
    blurb: `Come and visit the Mantel Group booth to meet our team and learn why we've been named #1 Best Place to Work in Australia back to back, in 2021 and 2022. You can also add your name to our digital spinning wheel for a chance to win a DJI Mini 2 4K Drone, Meta Quest 2 with Beat Saber or an Xbox Series S 512GB Console.`,
    marker: {
      icon: '/static/images/map/map-sponsor-MantelGroup.png',
      size: [73.57, 29.64],
      anchor: [28, 18],
    },
  },
  {
    name: 'GitHub',
    coordinates: [115.85374784818629, -31.95704559544246],
    marker: {
      icon: '/static/images/map/map-sponsor-GitHub.png',
      size: [47.86, 17.14],
      anchor: [24, 9],
    },
  },
  {
    name: 'Twilio',
    coordinates: [115.85381121070972, -31.95707290392472],
    blurb: `Come visit the Twilio booth to learn what you can build with Twilio APIs. Lead an intrepid crew on a mission to save The Cloud in TwilioQuest. And discover all the best Twilio swag, from t-shirts and socks to stickers and scrunchies.`,
    marker: {
      icon: '/static/images/map/map-sponsor-Twilio.png',
      size: [52.5, 20.36],
      anchor: [30, 12],
    },
  },
  {
    name: 'Valrose',
    coordinates: [115.85370996394003, -31.957241710523032],
    blurb: `Pop to the Valrose stand to grab some donuts to go with your coffee. Feel free to say hi to the team and let them know if you have any career or recruitment questions.`,
    marker: {
      icon: '/static/images/map/map-sponsor-Valrose.png',
      size: [29, 37],
      anchor: [13, 15],
    },
  },
  {
    name: 'Bankwest',
    coordinates: [115.85389703161766, -31.957403285246578],
    blurb: `Come and enjoy a complimentary fresh orange juice, and find out more about what working at Bankwest Technology is like. As one of WA’s largest technology employers, Bankwest is great place to build your career in technology. You can talk to one of our colleagues about the exciting opportunities to work on the latest technologies and innovations in banking. You never know, it may trigger some fresh ideas for your next career opportunity. `,
    marker: {
      icon: '/static/images/map/map-sponsor-Bankwest.png',
      size: [67.86, 20],
      anchor: [40, 10],
    },
  },
  {
    name: 'Insight',
    coordinates: [115.85396319937398, -31.957473996322346],
    blurb: `If you’re not sure what the colour fuchsia looks like, you’ll soon find out when you meet the Insight team at booth G5.  Aside from the quality socks and sweets, we have a live IoT set-up and a number of Perth teammates who are keen to chat and learn more about you.`,
    marker: {
      icon: '/static/images/map/map-sponsor-Insight.png',
      size: [61.43, 17.14],
      anchor: [35, 16],
    },
  },
  {
    name: 'Virtual Gaming Worlds',
    coordinates: [115.85412674069475, -31.95746972939116],
    blurb: `VGW has taken the world by storm with their highly innovative entertainment platform that is underpinned by its sophisticated in-house technology, platforms and games. Check out their booth to see how they are disrupting the online social games industry, as well as enter their raffle for the chance to win a pair of Apple AirPods Pro, valued at $399.`,
    marker: {
      icon: '/static/images/map/map-sponsor-VGW.png',
      size: [55.71, 22.86],
      anchor: [33, 6],
    },
  },
  {
    name: 'Versent',
    coordinates: [115.8541639396427, -31.95753287995242],
    blurb: `"Located next to the coffee cart, say hello whilst in line.
  Versent are an Australian born-in-the-cloud tech firm with the best engineering culture in Australia. Stop by to say hi, grab some awesome swag, and sign up to win cash with DevJam - our Perth-only hackathon, or our quiz."`,
    marker: {
      icon: '/static/images/map/map-sponsor-Versent.png',
      size: [65.36, 16.76],
      anchor: [41, 16],
    },
  },
  {
    name: 'MakerX',
    coordinates: [115.85419354189753, -31.956985289182057],
    blurb: `Come and make with our Makers via our LEGO station and learn about MakerX, the digital product and venture building company co-founded by the co-founders of DDD Perth #makersmake #cofounderception`,
    marker: {
      icon: '/static/images/map/map-sponsor-MakerX.png',
      size: [61.43, 13.93],
      anchor: [22, 0],
    },
  },
  {
    name: 'Amazon Web Services',
    coordinates: [115.85428289275963, -31.95696094531853],
    blurb: `At the AWS booth, you’ll have the opportunity to chat 1:1 with a whole bunch of local AWS peeps – come with your questions you want answered about running software on the AWS platform.  We will also have the chance for you to take part in hands on Labs if you’re curious about getting started on AWS, and there may also be some SWAG too – so come early before it all runs out `,
    marker: {
      icon: '/static/images/map/map-sponsor-AWS.png',
      size: [37.86, 24.29],
      anchor: [20, 11],
    },
  },
  {
    name: 'Auth0',
    coordinates: [115.85430502218775, -31.95703035442564],
    blurb: `The Auth0 Identity Platform, a product unit within Okta, takes a modern approach to identity and enables organizations to provide secure access to any application, for any user. Stop by the Auth0 booth to chat with one of our Developer Advocates and try out the Auth0 Login Challenge!`,
    marker: {
      icon: '/static/images/map/map-sponsor-Auth0.png',
      size: [35, 31.79],
      anchor: [18, 14],
    },
  },
  {
    name: 'Keystart',
    coordinates: [115.85378033867292, -31.957273854812865],
    blurb: `Keystart are proud to sponsor your quiet room today.  If you need some time out, we are ready to welcome you into our lounge room with some shhhhhweet offerings. It's a space away from the hustle and bustle, to take a break, log out, and recharge. Come make yourself at home!`,
    marker: {
      icon: '/static/images/map/map-sponsor-Keystart.png',
      size: [51.43, 13.93],
      anchor: [25, 6],
    },
  },
]

sponsorBooths.map((sponsor) => {
  plotSponsorLoc(sponsor, 'sponsorBooth', 'sponsor booth')
})

const coffeeCarts = [
  {
    name: 'Planit',
    coordinates: [115.85389116436066, -31.95713178781193],
    blurb: `Do you feel the need? The need for caffeine? Stop by our coffee cart and find out why elite engineers, the best of the best, join Planit.`,
    marker: {
      icon: '/static/images/map/map-sponsor-Planit.png',
      size: [54.29, 46.07],
      anchor: [35, 22],
    },
  },
  {
    name: 'Bunnings',
    coordinates: [115.85425559596831, -31.95754491180062],
    marker: {
      icon: '/static/images/map/map-sponsor-Bunnings.png',
      size: [48.93, 33.93],
      anchor: [28, 16],
    },
  },
  {
    name: 'MOQdigital',
    coordinates: [115.8544586821167, -31.95706473893827],
    marker: {
      icon: '/static/images/map/map-sponsor-MOQDigital.png',
      size: [62.5, 42.86],
      anchor: [38, 22],
    },
  },
]

coffeeCarts.map((sponsor) => {
  plotSponsorLoc(sponsor, 'coffeeCart', 'coffee cart')
})

export const foodLocations: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
}

const foodOptions = [
  {
    name: 'Sushi',
    description: 'Assorted Sushi and Nigiri, gluten free soy, wasabi and pickled ginger',
    dietaryNotes: 'GF',
    index: 1,
    icon: '🍣',
    locations: [[115.85435637068507, -31.957056133921846]],
  },
  {
    name: 'Caesar Salad',
    description: 'Caesar salad, bacon, parmesan, cos, dressing',
    dietaryNotes: 'keto friendly, no croutons',
    index: 2,
    icon: '🥗',
    locations: [[115.853806764607, -31.957169919197934]],
  },
  {
    name: 'Curry',
    description: 'Chana masala curry with aromatic rice',
    dietaryNotes: 'vegan',
    index: 3,
    icon: '🍛',
    locations: [[115.85415717474496, -31.95754437843464]],
  },
  {
    name: 'Mie Goreng',
    description: 'Mie goreng with egg noodles, mushrooms, Chinese cabbage and crispy shallots',
    dietaryNotes: 'pork free, vegetarian',
    index: 4,
    icon: '🍜',
    locations: [[115.85388183275427, -31.957363353843757]],
  },
  {
    name: 'Lamb',
    description: 'Slow braised lamb shoulder, rosemary, zucchini & mushrooms',
    dietaryNotes: 'GF, beef free, halal, keto friendly',
    index: 5,
    icon: '🐑',
    locations: [
      [115.85416333830645, -31.95692528068007],
      [115.8540078400014, -31.95700720620978],
    ],
  },
  {
    name: 'Salmon',
    description: 'Smoked salmon baguette, cream cheese, dill, capers, red onion & rocket',
    dietaryNotes: 'beef free, pork free',
    index: 6,
    icon: '🐟',
    locations: [[115.85384966069113, -31.957443003285398]],
  },
  {
    name: 'Dietary Station',
    description:
      'If you have particular dietary requirements, the dietary station can advise on options available to you.',
    icon: '🥕',
    locations: [[115.85367644174427, -31.957389915517922]],
  },
]

foodOptions.map((foodOption) => {
  foodOption.locations.map((location) => {
    foodLocations.features.push({
      type: 'Feature',
      properties: {
        type: 'food',
        name: foodOption.name,
        popupContent: foodOption.description,
        dietaryNotes: foodOption.dietaryNotes,
        index: foodOption.index,
        icon: foodOption.icon,
      },
      geometry: {
        type: 'Point',
        coordinates: location,
      },
    })
  })
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

export const m1Loc = [
  { lng: 115.85413571632049, lat: -31.95701066866411 },
  { lng: 115.8542282760047, lat: -31.957038830547 },
  { lng: 115.8541660193117, lat: -31.957181955538413 },
  { lng: 115.85407352463027, lat: -31.957153509236345 },
]

export const m2Loc = [
  { lng: 115.8542282760047, lat: -31.957038830547 },
  { lng: 115.8543247696236, lat: -31.95706727688459 },
  { lng: 115.85425851399313, lat: -31.957209263980126 },
  { lng: 115.8541660193117, lat: -31.957181955538413 },
]

export const m3Loc = [
  { lng: 115.8543247696236, lat: -31.95706727688459 },
  { lng: 115.8544176684962, lat: -31.95709629213988 },
  { lng: 115.85435432974695, lat: -31.95723738579955 },
  { lng: 115.85425851399313, lat: -31.957209263980126 },
]

export const rv4Loc = [
  { lng: 115.8544176684962, lat: -31.95709629213988 },
  { lng: 115.85455410255705, lat: -31.95713725483759 },
  { lng: 115.85446931576574, lat: -31.95733268078981 },
  { lng: 115.85433291962319, lat: -31.957292002641886 },
]

export const rv5Loc = [
  { lng: 115.85433291962319, lat: -31.957292002641886 },
  { lng: 115.85446931576574, lat: -31.95733268078981 },
  { lng: 115.85438279421166, lat: -31.957528390788106 },
  { lng: 115.85424639806907, lat: -31.957488281650917 },
]

export const m6Loc = [
  { lng: 115.85421586416734, lat: -31.957313906262247 },
  { lng: 115.85431038314498, lat: -31.957341499127185 },
  { lng: 115.85424639806907, lat: -31.957488281650917 },
  { lng: 115.85415354433731, lat: -31.957459835443714 },
]

export const m7Loc = [
  { lng: 115.85412300682438, lat: -31.957285460001014 },
  { lng: 115.85421586416734, lat: -31.957313906262247 },
  { lng: 115.85415354433731, lat: -31.957459835443714 },
  { lng: 115.85405765732116, lat: -31.957429397992243 },
]

export const m8Loc = [
  { lng: 115.85403149540089, lat: -31.957258151581975 },
  { lng: 115.85412300682438, lat: -31.957285460001014 },
  { lng: 115.85405765732116, lat: -31.957429397992243 },
  { lng: 115.85396547564639, lat: -31.95740095176681 },
]
