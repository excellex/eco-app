import React from 'react';
import { useSelector } from 'react-redux';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import classes from './ReceptionPointsMap.module.css'
const ReceptionPointsMap = () => {
  const receptionPointsPlaces = useSelector(store => store.receptionPoints.places);
  const receptionPointsDescription = useSelector(store => store.receptionPoints.description);
  const center = useSelector(store => [store.currentPosition.latitude, store.currentPosition.longitude]);
  const mapstate = {
    center,
    zoom: 12,
    width: '100%',
    height: '100%',
  };
  return (
    <>
      <br />
      <div className={classes.mapWrapper}>
        <br />
        <div>
          <YMaps>
            <Map state={mapstate}>
              {receptionPointsPlaces &&
                receptionPointsPlaces.map(placemark => (
                  <Placemark key={placemark._id} {...placemark} />
                ))}
              <ZoomControl />
            </Map>
          </YMaps>
        </div>
      </div>

      <p className={classes.paragraph}>{receptionPointsDescription}</p>
      </>

  );
};

export default ReceptionPointsMap;
