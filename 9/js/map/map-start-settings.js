import {changePageMode} from '../form/form-mode.js';
import {DEFAULT_LAT_LNG} from '../data.js';

changePageMode(false);

const address = document.querySelector('#address');

const mainMap = L.map('map-canvas')
  .on('load', () => {
    changePageMode(true);
  })
  .setView(DEFAULT_LAT_LNG, 10);
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mainMap);

const mainIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(
  DEFAULT_LAT_LNG,
  {
    draggable: true,
    icon: mainIcon
  }
);

mainMarker.addTo(mainMap);
mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});


export {mainMap};
