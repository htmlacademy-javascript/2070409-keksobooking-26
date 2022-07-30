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

const PRICE_OPTIONS = {
  'high': 50000,
  'low': 10000,
  'max': 100000
};

const TITLE_SIZE = {
  'min': 30,
  'max': 100
};

const DEBOUNCE_DELAY = {
  'current': 600,
  'default': 500
};

const DEFAULT_FILTER_VALUE = 'any';
const ALERT_SHOW_TIME = 10000;
const ADS_COUNT = 10;
const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];


export {DEFAULT_FILTER_VALUE, TITLE_SIZE, PRICE_OPTIONS, TYPE_OPTIONS_PRICE, GUESTS_OPTION, DEFAULT_LAT_LNG, ALERT_SHOW_TIME, DEBOUNCE_DELAY, ADS_COUNT, FILE_TYPES};
