import Location from './Location';

const init = () => {
  const myMap = new ymaps.Map('location', {
    center: [37.7975, -122.414483],
    zoom: 14,
  }, {
    searchControlProvider: 'yandex#search',
  });

  const map = new Location(myMap);
};

window.initMap = init;
