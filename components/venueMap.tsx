import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { ImageOverlay } from 'react-leaflet'
import { GeoJSON } from 'react-leaflet'
import L from 'leaflet'
import Conference from 'config/conference'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconAnchor: [13, 41],
})

const floorLocations: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'River View Room 5',
        popupContent: 'Maali (Black Swan)',
        type: 'room',
        names: {
          en: 'Black Swan',
          nys: 'Maali',
        },
        currentEvent: {
          eventName: 'How fast is your website really? Shining a light on web performance with real user monitoring',
          eventPresenters: 'Macklin Hartley',
        },
      },
      geometry: {
        type: 'Point',
        coordinates: [115.85436039219297, -31.95740838778879],
      },
    },
  ],
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
  /*{
    "roomName": "Riverview 5",
    "trackNames": { "en": "Black Swan", "nys": "Maali" },
    "coordinates": [115.85417674333273, -31.957240234872284]
  },*/
]

function plotRoom(room) {
  floorLocations.features.push({
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

rooms.map(plotRoom)

const sponsorImgMap = {}
Conference.Sponsors.map(function (sponsor) {
  sponsorImgMap[sponsor.name] = sponsor.imageUrl
})

const sponsorFeatures: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [],
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

const coffeeCarts = [
  { name: 'Planit', coordinates: [115.85389116436066, -31.95713178781193] },
  { name: 'Bunnings', coordinates: [115.85427991448684, -31.957544102862222] },
  { name: 'MOQdigital', coordinates: [115.85447914253717, -31.957070757115613] },
]

function plotSponsorbooth(sponsor) {
  sponsorFeatures.features.push({
    type: 'Feature',
    properties: {
      type: 'sponsorBooth',
      name: sponsor.name,
      popupContent: sponsor.name + ' sponsor booth',
      logo: sponsorImgMap[sponsor.name],
    },
    geometry: {
      type: 'Point',
      coordinates: sponsor.coordinates,
    },
  })
}
sponsorBooths.map(plotSponsorbooth)
coffeeCarts.map(plotSponsorbooth)

/*
Room mappings:
*/

function onEachFeature(feature: any, layer: L.Layer) {
  if (feature.properties) {
    const { popupContent } = feature.properties
    if (feature.properties.type && 'sponsorBooth' == feature.properties.type) {
      const popup = L.popup()
      let content = '<img src="' + feature.properties.logo + '" /><br />'
      content += feature.properties.popupContent
      popup.setContent(content)
      layer.bindPopup(popup)
    } else if (feature.properties.type && 'room' == feature.properties.type) {
      const popup = L.popup()
      let content = '<strong>' + feature.properties.name + '</strong><br />'
      content += 'Track: <strong>' + feature.properties.names.nys + '</strong> (' + feature.properties.names.en + ')'
      if (feature.properties.currentEvent) {
        content +=
          '<br /><br /><em>' +
          feature.properties.currentEvent.eventName +
          '</em><br />by: ' +
          feature.properties.currentEvent.eventPresenters
      }
      popup.setContent(content)
      layer.bindPopup(popup)
    } else {
      layer.bindPopup(popupContent)
    }
  }
}

// const geojsonMarkerOptions = {
//   radius: 8,
//   fillColor: "#ff7800",
//   color: "#000",
//   weight: 1,
//   opacity: 1,
//   fillOpacity: 0.8
// };
function pointToLayer(_feature, latlng) {
  //return L.circleMarker(latlng, geojsonMarkerOptions);
  return L.marker(latlng)
}

const Map = () => {
  return (
    <MapContainer
      center={{ lat: -31.95721836368422, lng: 115.8540410774633 }}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: 700, width: '100%' }}
      maxZoom={22}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=cce3e041f6c24eea9ccd3057375869df"
        maxZoom={22}
      />
      <ImageOverlay
        url="/static/images/map/2022-floorplan-rot20.png"
        bounds={[
          [-31.956632805984096, 115.85340510195257],
          [-31.957724191559862, 115.85470793359586],
        ]}
        opacity={0.6}
      />

      <LayersControl position="topright">
        <LayersControl.Overlay name="Rooms" checked>
          <GeoJSON data={floorLocations} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Sponsors">
          <GeoJSON data={sponsorFeatures} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  )
}

export default Map
