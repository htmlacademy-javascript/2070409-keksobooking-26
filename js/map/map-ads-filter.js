import {ADS_COUNT, PRICE_OPTIONS} from '../data.js';
import {isValueDefault} from '../utils.js';

const getFilteredAds = (ads) => {
  const mapFiltersElement = document.querySelector('.map__filters');
  const typeElement = mapFiltersElement.querySelector('#housing-type').value;
  const priceElement = mapFiltersElement.querySelector('#housing-price').value;
  const roomsElement = mapFiltersElement.querySelector('#housing-rooms').value;
  const guestsElement = mapFiltersElement.querySelector('#housing-guests').value;
  const featuresElement = mapFiltersElement.querySelector('#housing-features').querySelectorAll('.map__checkbox');
  const typeFilter = (ad) => (
    typeElement === ad.offer.type || isValueDefault(typeElement)
  );
  const priceFilter = (ad) => {
    switch (priceElement) {
      case 'high':
        return ad.offer.price >= PRICE_OPTIONS.high;
      case 'middle':
        return ad.offer.price >= PRICE_OPTIONS.low && ad.offer.price <= PRICE_OPTIONS.high;
      case 'low':
        return ad.offer.price <= PRICE_OPTIONS.low;
      default:
        return true;
    }
  };
  const roomsFilter = (ad) => (
    +roomsElement === ad.offer.rooms || isValueDefault(roomsElement)
  );
  const guestsFilter = (ad) => (
    +guestsElement === ad.offer.guests || isValueDefault(guestsElement)
  );
  const featuresFilter = (ad) => {
    if (ad.offer.features) {
      return Array.from(featuresElement).every((feature) =>
        !(feature.checked && !ad.offer.features.includes(feature.value)));
    } else {
      return Array.from(featuresElement).every((feature) =>
        feature.checked === false
      );
    }
  };
  const filteredAds = [];
  for (const ad of ads) {
    if (filteredAds.length > ADS_COUNT) {
      break;
    }
    if (typeFilter(ad) && priceFilter(ad) && guestsFilter(ad) && roomsFilter(ad) && featuresFilter(ad)) {
      filteredAds.push(ad);
    }
  }

  return filteredAds;
};

export {getFilteredAds};
