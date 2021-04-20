export const location = () => {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      })
  );
}
