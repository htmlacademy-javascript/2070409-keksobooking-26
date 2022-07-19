const TYPE_OPTIONS_PRICE = {
  'palace': ['Дворец', 10000],
  'flat': ['Квартира', 1000],
  'house': ['Дом', 5000],
  'bungalow': ['Бунгало', 0],
  'hotel': ['Отель', 3000]
};

const GUESTS_OPTION = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

const DEFAULT_LAT_LNG = {
  lat: 35.6895,
  lng: 139.69171,
};

const ALERT_SHOW_TIME = 10000;

export {TYPE_OPTIONS_PRICE, GUESTS_OPTION, DEFAULT_LAT_LNG, ALERT_SHOW_TIME};
