import L from 'leaflet';
import styled from 'styled-components';
import Marker from '../../assets/icon-location.svg';

export const Wrapper = styled.div`
  .leaflet-container {
    width: 100%;
    height: 60vh;
    z-index: 1;

    .leaflet-control-zoom {
      top: 20rem;
    }
  }

  .leaflet-div-icon {
    background: none;
    border: none;
  }
`;

const iconMarker = new L.Icon({
  iconUrl: Marker,
  iconRetinaUrl: Marker,
  iconSize: new L.Point(40, 55),
  className: 'leaflet-div-icon',
});

export { iconMarker };
