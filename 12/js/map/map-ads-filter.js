import {ADS_COUNT} from '../data.js';

const getFilteredAds = (ads) => {
  const mapFilters = document.querySelector('.map__filters');
  const type = mapFilters.querySelector('#housing-type').value;
  const price = mapFilters.querySelector('#housing-price').value;
  const rooms = mapFilters.querySelector('#housing-rooms').value;
  const guests = mapFilters.querySelector('#housing-guests').value;
  const features = mapFilters.querySelector('#housing-features').querySelectorAll('.map__checkbox');
  const typeFilter = (ad) => (
    type === ad.offer.type || type === 'any'
  );
  const priceFilter = (ad) => {
    switch (price) {
      case 'high':
        return ad.offer.price >= 50000;
      case 'middle':
        return ad.offer.price >= 10000 && ad.offer.price <= 50000;
      case 'low':
        return ad.offer.price <= 10000;
      default:
        return true;
    }
  };
  const roomsFilter = (ad) => (
    +rooms === ad.offer.rooms || rooms === 'any'
  );
  const guestsFilter = (ad) => (
    +guests === ad.offer.guests || guests === 'any'
  );
  const featuresFilter = (ad) => {
    if (ad.offer.features) {
      return Array.from(features).every((feature) =>
        !(feature.checked && !ad.offer.features.includes(feature.value)));
    } else {
      return Array.from(features).every((feature) =>
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
