import {getAdvertisement} from './ad-generator.js';
import {TYPE_OPTIONS} from './data.js';

const cardTemplate = document.querySelector('#card').content;
const similarCards = getAdvertisement(2);

const ads = document.createDocumentFragment();
similarCards.forEach(({offer, author}) => {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.popup__title').textContent = offer.title; // TITLE
  newCard.querySelector('.popup__text--address').textContent = offer.address; // ADDRESS
  newCard.querySelector('.popup__text--price').innerHTML = `${offer.price} <span>₽/ночь</span>`; // PRICE
  newCard.querySelector('.popup__type').textContent = TYPE_OPTIONS[offer.type]; // TYPE
  newCard.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`; //ROOM GUESTS
  newCard.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`; // CHECKIN CHECKOUT
  const featuresList = offer.features.map((feature) => (`popup__feature--${feature}`));
  newCard.querySelectorAll('.popup__feature').forEach((feature) => {
    if (!featuresList.includes(feature.classList[1])) {
      feature.remove();
    }
  }); // FEATURES
  if (offer.description) {
    newCard.querySelector('.popup__description').textContent = offer.description;} else {
    newCard.querySelector('.popup__description').classList.add('hidden');} // DESCRIPTION
  offer.photos.forEach((photoSrc) => {
    const photo = newCard.querySelector('.popup__photo').cloneNode(true);
    photo.src = photoSrc;

    newCard.querySelector('.popup__photos').appendChild(photo);
  }); // PHOTOS
  newCard.querySelectorAll('.popup__photo')[0].classList.add('hidden'); // hiding template
  newCard.querySelector('.popup__avatar').src = author.avatar; // avatar
  ads.appendChild(newCard);
});

export {ads};
