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
    // ad.offer.features - массив, от 0 до длины массива, получены с сервера, может ОТСУТСТВОВАТЬ
    // features - поля из формы, имеют значения .checked(true/false) и .name('wifi'/'or something')
    if (ad.offer.features) {
      return Array.from(features).every((feature) =>
        !(feature.checked && !ad.offer.features.includes(feature.value)));
    } else {
      return Array.from(features).every((feature) =>
        feature.checked === false
      );
    }
  };
  return ads
    .filter(typeFilter)
    .filter(priceFilter)//?
    .filter(guestsFilter)
    .filter(roomsFilter)
    .filter(featuresFilter);
};

export {getFilteredAds};
