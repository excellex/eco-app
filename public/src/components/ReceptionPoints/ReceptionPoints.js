import React from 'react';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

const ReceptionPoints = () => {
  return (
    <>
      <div className={style.flexfind}>
        <YMaps>
          <Map state={mapstate}>
            {address &&
            address.map((placemark, i) => (
              <Placemark key={placemark._id} {...placemark} />
            ))}
            <ZoomControl />
          </Map>
        </YMaps>
      </div>
    </>
  );
};

export default ReceptionPoints;
