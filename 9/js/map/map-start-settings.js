import {changePageMode} from '../form/form-mode.js'; // DELETE

changePageMode(false);

//const mapElement = document.querySelector('#map-canvas');

const mainMap = L.map('map-canvas')
  .on('load', () => {
    //console.log('Карта инициализирована'); //DELETE
    changePageMode(true);
  })
  .setView({
    lat: 35.6895,
    lng: 139.69171
  }, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mainMap);

const mainIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainIcon
  }
);
let markerPosition;
mainMarker.addTo(mainMap);
mainMarker.on('moveend', (evt) => {
  markerPosition = evt.target.getLatLng();
});

export {markerPosition, mainMarker};

export {mainMap};
