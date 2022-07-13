const TYPE_OPTIONS_PRICE = {
  'palace': ['Дворец', 10000],
  'flat': ['Квартира', 1000],
  'house': ['Дом', 5000],
  'bungalow': ['Бунгало', 0],
  'hotel': ['Отель', 3000]
};

const TYPE_KEYS = Object.keys(TYPE_OPTIONS_PRICE);

const TIME_OPTIONS = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const GUESTS_OPTION = {
  1: [1],
  2: [1,2],
  3: [1,2,3],
  100: [0]
};

export {TYPE_OPTIONS_PRICE, TYPE_KEYS, FEATURES, PHOTOS, TIME_OPTIONS, GUESTS_OPTION};
