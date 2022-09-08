import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, LayersControl, useMapEvents, ImageOverlay, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import { foodLocations, sponsorFeatures } from './venueMapData'

import 'leaflet-easybutton'
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

function onEachFeature(feature: any, layer: L.Layer) {
  if (feature.properties) {
    const popup = L.popup({ maxWidth: 250 })
    const item = feature.properties
    let { popupContent } = feature.properties
    let content = ''
    if (item.type) {
      switch (item.type) {
        case 'sponsorBooth':
        case 'coffeeCart':
          content = '<img src="' + item.logo + '" style="max-height: 75px;" /><br />'
          content += item.popupContent
          popupContent = content
          break
        case 'room':
          content = 'Room: <strong>' + item.name + '</strong><br />'
          content += 'Track: <strong>' + item.names.nys + '</strong> (' + item.names.en + ')'
          if (item.currentEvent) {
            const event = item.currentEvent
            content +=
              '<br /><br /><strong><a target="_blank" href="/agenda/?sessionId=' +
              event.eventId +
              '">' +
              event.eventName +
              '</a></strong><br />by: ' +
              event.eventPresenters
          }
          popupContent = content
          break
        case 'food':
          content = '<strong>' + (item.index ? item.index + ': ' : '') + item.name + '</strong><br />'
          content += item.popupContent
          if (item.dietaryNotes && item.dietaryNotes.length > 0) {
            content += ' <em>(' + item.dietaryNotes + ')</em>'
          }
          popupContent = content
      }
    }
    popup.setContent(popupContent)
    layer.bindPopup(popup)
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
      break
    case 'food':
      return L.marker(latlng, {
        icon: L.divIcon({
          html: '<div style="font-size: 24px;">' + _feature.properties.icon + '</div>',
          iconSize: [38, 36],
          className: 'myDivIcon',
        }),
      })
  }
  return L.marker(latlng)
}

const MapEvents = () => {
  useMapEvents({
    click(e) {
      console.log(e.latlng.lng + ', ' + e.latlng.lat)
    },
    zoom(e) {
      const map = e.target
      if (map.getZoom() >= 20) {
        if (map.zoomHiddenLayers) {
          while (map.zoomHiddenLayers.length > 0) {
            const layer = map.zoomHiddenLayers.pop()
            map.addLayer(layer)
          }
        }
      } else {
        map.eachLayer((layer) => {
          if (layer.feature && layer.feature.properties.type) {
            if (!map.zoomHiddenLayers) {
              map.zoomHiddenLayers = []
            }
            map.zoomHiddenLayers.push(layer)
            map.removeLayer(layer)
          }
        })
      }
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
      minZoom={19}
      maxZoom={22}
      whenCreated={setMap}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
        <LayersControl.Overlay name="Rooms" checked>
          <GeoJSON data={roomLocationData} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Sponsors" checked>
          <GeoJSON data={sponsorFeatures} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Lunch">
          <GeoJSON data={foodLocations} onEachFeature={onEachFeature} pointToLayer={pointToLayer} />
        </LayersControl.Overlay>
      </LayersControl>
      <MapEvents />
    </MapContainer>
  )
}

export default Map
