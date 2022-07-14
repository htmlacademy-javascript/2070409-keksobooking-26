import {mainMap} from './map-start-settings.js';
import {getAdvertisement} from '../ad-generator.js';
import {getCard} from '../cards-generator.js';

const ads = getAdvertisement(10);

const adMarkerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

ads.forEach((ad) => {
  const marker = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      icon: adMarkerIcon
    }
  );
  marker
    .addTo(mainMap)
    .bindPopup(getCard(ad));
});

