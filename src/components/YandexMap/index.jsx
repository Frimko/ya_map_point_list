import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Placemarks from 'containers/Placemarks';
import config from 'src/config';

const mapState = {
  center: config.mapCentrCoordinates,
  zoom: 10,
  // controls: []
};

class YandexMap extends React.PureComponent {
  render() {
    return (
      <YMaps>
        <Map
          state={mapState}
          width="100%"
          height="100%"
        >
          <Placemarks/>
        </Map>
      </YMaps>
    );
  }
}

export default YandexMap;
