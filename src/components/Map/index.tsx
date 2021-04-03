import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { iconMarker, Wrapper } from './styles';

interface Props {
  location: LatLngExpression;
}

const FlyToLocation: React.FC<Props> = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(location, map.getZoom());
  }, [location, map]);

  return location === null ? null : (
    <Marker position={location} icon={iconMarker}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC<Props> = ({ location }) => {
  return (
    <Wrapper>
      <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToLocation location={location} />
      </MapContainer>
    </Wrapper>
  );
};

export default Map;
