import {changePageMode, changeMapFilterMode} from '../form/form-mode.js';
import {DEBOUNCE_DELAY, DEFAULT_LAT_LNG} from '../data.js';
import {getData} from '../fetch-settings.js';
import {debounce, showAlert} from '../utils.js';
import {renderMarkers} from './map-ads-points.js';

const addressElement = document.querySelector('#address');
const mapFiltersElement = document.querySelector('.map__filters');
changePageMode(false);
changeMapFilterMode(false);

const mainMap = L.map('map-canvas'); //MAP GENERATE
const mapAdsMarkers = L.layerGroup().addTo(mainMap); //LAYER GROUP GENERATE

mainMap.on('load', () => {
  changePageMode(true);
  getData((data) => {
    renderMarkers(data, mapAdsMarkers);
    changeMapFilterMode(true);
    mapFiltersElement.addEventListener('change', () => {
      (debounce(() => renderMarkers(data, mapAdsMarkers), DEBOUNCE_DELAY.current))();
    });
    mapFiltersElement.addEventListener('reset', () => {
      setTimeout(() => renderMarkers(data, mapAdsMarkers));
    });
  }, () => {
    showAlert('Данные о похожих объявлениях недоступны', document.querySelector('.map__canvas'));
  });
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
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

export {mainMap, mainMarker};
