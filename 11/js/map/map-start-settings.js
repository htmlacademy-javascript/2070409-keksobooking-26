import {changePageMode, changeMapFilterMode} from '../form/form-mode.js';
import {DEBOUNCE_DELAY, DEFAULT_LAT_LNG} from '../data.js';
import {getData} from '../fetch-settings.js';
import {debounce, showAlert} from '../utils.js';
import {renderMarkers} from './map-ads-points.js';

const address = document.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
changePageMode(false);
changeMapFilterMode(false);

const mainMap = L.map('map-canvas'); //MAP GENERATE
const mapAdsMarkers = L.layerGroup().addTo(mainMap); //LAYER GROUP GENERATE

const onDataFail = () => {
  showAlert('Данные о похожих объявлениях недоступны', document.querySelector('.map__canvas'));
};
mainMap.on('load', () => {
  changePageMode(true);
  getData((data) => {
    renderMarkers(data, mapAdsMarkers);
    changeMapFilterMode(true);
    mapFilters.addEventListener('change', () => {
      (debounce(() => renderMarkers(data, mapAdsMarkers), DEBOUNCE_DELAY))();
    });
    mapFilters.addEventListener('reset', () => {
      (debounce(() => setTimeout(() => renderMarkers(data, mapAdsMarkers)), DEBOUNCE_DELAY))();
    });
  }, onDataFail);
}).setView(DEFAULT_LAT_LNG, 10);

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
