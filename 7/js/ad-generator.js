import {getRandomNumber, getRandomInt, getArrayElement} from './utils.js';
import {TYPE_KEYS, FEATURES, PHOTOS, TIME_OPTIONS} from './data.js';

let advtImageNumber = 0;

const generateAdvertisement = () => {
  advtImageNumber += 1;
  const author = {
    avatar: `img/avatars/user${(`0${advtImageNumber}`).slice(-2)}.png`
  };
  const location = {
    lat: getRandomNumber(35.65000, 35.70000, 5),
    lng: getRandomNumber(139.70000, 139.80000, 5)
  };
  const offer = {
    title: 'THE TITLE',
    address: `${location.lat}, ${location.lng}`,
    price: getRandomInt(10, 1000),
    type: TYPE_KEYS[getArrayElement(TYPE_KEYS)],
    rooms: getRandomInt(1, 10),
    guests: getRandomInt(1, 40),
    checkin: TIME_OPTIONS[getArrayElement(TIME_OPTIONS)],
    checkout: TIME_OPTIONS[getArrayElement(TIME_OPTIONS)],
    features: FEATURES.slice(getArrayElement(FEATURES)),
    description: 'THE DESCRIPTION',
    photos: PHOTOS.slice(getArrayElement(PHOTOS)),
  };
  return {
    author,
    offer,
    location
  };
};

const getAdvertisement = (adsCount) => (
  Array.from({length: adsCount}, generateAdvertisement)
);

export {getAdvertisement};
