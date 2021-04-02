import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { iconMarker, Wrapper } from './styles';

interface Props {
  location: LatLngExpression;
}

const Map: React.FC<Props> = ({ location }) => {
  return (
    <Wrapper>
      <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location} icon={iconMarker}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
