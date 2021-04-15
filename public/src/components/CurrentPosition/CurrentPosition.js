import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCurrentPositionAC } from '../../redux/actions';

const CurrentPosition = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        dispatch(addCurrentPositionAC({
          latitude: (position.coords.latitude).toString(),//.slice(0,7),
          longitude: (position.coords.longitude).toString(),//.slice(0,7),
        }));
      });
    }
  }, []);
  return (
    <>
    </>
  );
};

export default CurrentPosition;
