import {getFilteredAds} from './map-ads-filter.js';
import {getCards} from '../cards-generator.js';

const adMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (data, markersLayer) => {
  markersLayer.clearLayers();
  const filteredAds = getFilteredAds(data);
  getCards(filteredAds).forEach((ad, i) => {
    const marker = L.marker(
      {
        lat: filteredAds[i].location.lat,
        lng: filteredAds[i].location.lng,
      },
      {
        icon: adMarkerIcon
      }
    );
    marker
      .addTo(markersLayer)
      .bindPopup(ad);
  });
};

export {renderMarkers};
