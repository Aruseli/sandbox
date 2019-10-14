import React from "react";

import { YMaps, Map, Placemark, GeolocationControl, Panorama } from 'react-yandex-maps';

const map = require("../../../images/map.png");

export const MyMap = ({state, geometry}) => {
  return(
    <YMaps>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        }}>
        <Map
          state={state}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={geometry}
            properties={{
              balloonContentBody: "Your address"
            }}
          />
          <GeolocationControl options={{ float: "left" }} />
        </Map>
      </div>
    </YMaps> 
  )
}