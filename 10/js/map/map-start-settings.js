import {changePageMode} from '../form/form-mode.js';
import {DEFAULT_LAT_LNG} from '../data.js';
import {getData} from '../fetch-settings.js';
import {getCards} from '../cards-generator.js';
import {showAlert} from '../utils.js';

const address = document.querySelector('#address');
changePageMode(false);
const adMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const dataFail = () => {
  showAlert('Данные о похожих объявлениях недоступны', document.querySelector('.map__canvas'));
};

const mainMap = L.map('map-canvas')
  .on('load', () => {
    changePageMode(true);
    getData(
      (data) => {
        getCards(data.slice(0, 10)).forEach((ad,i) => {
          const marker = L.marker(
            {
              lat: data[i].location.lat,
              lng: data[i].location.lng,
            },
            {
              icon: adMarkerIcon
            }
          );
          marker
            .addTo(mainMap)
            .bindPopup(ad);
        });
      },
      dataFail);
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

export {mainMap, mainMarker};
