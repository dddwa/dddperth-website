import { useEffect, useRef, useState } from 'react'
import {
  MapContainer,
  TileLayer,
  LayersControl,
  useMapEvents,
  ImageOverlay,
  GeoJSON,
  Polygon,
  Popup,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import { helpDeskLoc, mediaWallLoc, sponsorFeatures } from './venueMapData'

import {} from 'leaflet-easybutton'
import 'leaflet-easybutton/src/easy-button.js'
import 'leaflet-easybutton/src/easy-button.css'
import 'font-awesome/css/font-awesome.min.css'

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconAnchor: [13, 41],
})

const userLocIcon = L.divIcon({
  html: '<i class="fa fa-street-view fa-3x"></i>',
  iconSize: [30, 36],
  className: 'myDivIcon',
})

const talkLocIcon = L.divIcon({
  html: '<i class="fa fa-users fa-3x" style="color: #D2438E;"></i>',
  iconSize: [38, 36],
  className: 'myDivIcon',
})

const coffeeLocIcon = L.divIcon({
  html: '<div style="font-size: 24px;">☕</div>',
  iconSize: [38, 36],
  className: 'myDivIcon',
})

function onEachFeature(feature: any, layer: L.Layer) {
  if (feature.properties) {
    const { popupContent } = feature.properties
    if (
      feature.properties.type &&
      ('sponsorBooth' == feature.properties.type || 'coffeeCart' == feature.properties.type)
    ) {
      const popup = L.popup({ maxWidth: 250 })
      let content = '<img src="' + feature.properties.logo + '" style="max-height: 75px;" /><br />'
      content += feature.properties.popupContent
      popup.setContent(content)
      layer.bindPopup(popup)
    } else if (feature.properties.type && 'room' == feature.properties.type) {
      const popup = L.popup({ maxWidth: 250 })
      let content = 'Room: <strong>' + feature.properties.name + '</strong><br />'
      content += 'Track: <strong>' + feature.properties.names.nys + '</strong> (' + feature.properties.names.en + ')'
      if (feature.properties.currentEvent) {
        const event = feature.properties.currentEvent
        content +=
          '<br /><br /><strong><a target="_blank" href="/agenda/?sessionId=' +
          event.eventId +
          '">' +
          event.eventName +
          '</a></strong><br />by: ' +
          event.eventPresenters
      }
      popup.setContent(content)
      layer.bindPopup(popup)
    } else {
      layer.bindPopup(popupContent)
    }
  }
}

function pointToLayer(_feature, latlng) {
  switch (_feature.properties.type) {
    case 'room':
      return L.marker(latlng, { icon: talkLocIcon })
    case 'coffeeCart':
    case 'sponsorBooth':
      if (_feature.properties.marker) {
        const sponsorMarker = L.icon({
          iconUrl: _feature.properties.marker.icon,
          iconSize: _feature.properties.marker.size,
          iconAnchor: _feature.properties.marker.anchor,
        })
        return L.marker(latlng, { icon: sponsorMarker })
      }
  }
  return L.marker(latlng)
}

const MapEvents = () => {
  useMapEvents({
    click(e) {
      console.log(e.latlng.lng + ', ' + e.latlng.lat)
    },
  })
  return null
}

const Map = ({ roomLocationData }) => {
  const [map, setMap] = useState(null)
  const userLocButton = useRef(null)

  useEffect(() => {
    if (!map) return

    let userLocMarker: L.Marker = null

    if (!userLocButton.current) {
      userLocButton.current = L.easyButton('fa-map-marker', () => {
        map
          .locate()
          .on('locationfound', function (e) {
            //setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            if (!userLocMarker) {
              userLocMarker = L.marker(e.latlng, { icon: userLocIcon }).bindPopup('You are here.')
              userLocMarker.addTo(map).openPopup()
            } else {
              userLocMarker.setLatLng(e.latlng).openPopup()
            }
          })
          .on('locationerror', function (_e) {
            alert("Sorry, we can't plot your current location at this time.")
          })
      })
      userLocButton.current.addTo(map)
    }
  }, [map])

  return (
    <MapContainer
      center={{ lat: -31.95721836368422, lng: 115.8540410774633 }}
      zoom={20}
      scrollWheelZoom={true}
      style={{ height: 700, width: '100%' }}
      maxZoom={22}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //url="https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=cce3e041f6c24eea9ccd3057375869df"
        maxZoom={22}
      />

      <ImageOverlay
        url="/static/images/map/white.png"
        bounds={[
          [-31.956665707121594, 115.8530553358428],
          [-31.95776032028587, 115.85483292779615],
        ]}
      />

      <ImageOverlay
        url="/static/images/map/2022-floorplan-edited-tilt-logoclean.png"
        bounds={[
          [-31.95684780598409, 115.85353510195257],
          [-31.957596191559862, 115.85455793359586],
        ]}
        opacity={1}
      />

      <LayersControl position="topright">
        <LayersControl.Overlay name="Overlay1">
          <ImageOverlay
            url="/static/images/map/2022-floorplan-rot20.png"
            bounds={[
              [-31.956632805984096, 115.85340510195257],
              [-31.957724191559862, 115.85470793359586],
            ]}
            opacity={1}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Rooms" checked>
          <GeoJSON data={roomLocationData} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Sponsors" checked>
          <GeoJSON data={sponsorFeatures} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Help Desk">
          <Polygon positions={helpDeskLoc}>
            <Popup>DDD Help Desk</Popup>
          </Polygon>
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Media Wall">
          <Polygon positions={mediaWallLoc}>
            <Popup>DDD Media Wall</Popup>
          </Polygon>
        </LayersControl.Overlay>
      </LayersControl>
      <MapEvents />
    </MapContainer>
  )
}

export default Map
