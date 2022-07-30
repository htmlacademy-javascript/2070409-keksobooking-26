import {GUESTS_OPTION, PRICE_OPTIONS, TITLE_SIZE, TYPE_OPTIONS_PRICE} from '../data.js';
import {updateSlider} from './form-utils.js';
import {sendData} from '../fetch-settings.js';
import {resetForm, addErrorMessage, addSuccessMessage} from '../utils.js';
import './form-images.js';

const adFormElement = document.querySelector('.ad-form');
const selectedRoomOptionElement = adFormElement.querySelector('#room_number');
const typeElement = adFormElement.querySelector('#type');
const priceElement = adFormElement.querySelector('#price');
const submitElement = adFormElement.querySelector('.ad-form__submit');
const resetElement = adFormElement.querySelector('.ad-form__reset');


const adFormPristine = new Pristine(adFormElement, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error',
});

adFormPristine.addValidator(adFormElement.querySelector('#title'),
  (value) => (
    value.length > TITLE_SIZE.min && value.length < TITLE_SIZE.max
  ),
  `От ${TITLE_SIZE.min} до ${TITLE_SIZE.max} символов`
); // #TITLE

adFormPristine.addValidator(adFormElement.querySelector('#price'),
  (value) => (
    +value < PRICE_OPTIONS.max
  ),
  `Цена не должна превышать ${PRICE_OPTIONS.max}`
); //PRICE max

const guestsOptionValidator = (value) => (
  GUESTS_OPTION[selectedRoomOptionElement.value].includes(+value)
);
adFormPristine.addValidator(adFormElement.querySelector('#capacity'),
  guestsOptionValidator,
  'Количество гостей не соответствует количеству комнат'
); //GUESTS

adFormPristine.addValidator(adFormElement.querySelector('#price'),
  (value) => (
    +value >= TYPE_OPTIONS_PRICE[typeElement.value][1]
  ),
  'Цена меньше минимальной'
); //PRICE min

const setMinPrice = () => {
  priceElement.placeholder = TYPE_OPTIONS_PRICE[typeElement.value][1];
};
setMinPrice();
typeElement.addEventListener('change', () => {
  setMinPrice();
  updateSlider();
  adFormPristine.validate(priceElement);
});

adFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  if (adFormPristine.validate()) {
    const adFormData = new FormData(adFormElement);
    submitElement.setAttribute('disabled', 'disabled');
    sendData(adFormData,
      () => {
        resetForm();
        addSuccessMessage();
        submitElement.removeAttribute('disabled');
      },
      () => {
        addErrorMessage();
        submitElement.removeAttribute('disabled');
      });
  }
});

resetElement.addEventListener('click', (e) => {
  e.preventDefault();
  resetForm();
});
