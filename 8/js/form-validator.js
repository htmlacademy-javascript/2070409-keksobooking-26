import {GUESTS_OPTION, TYPE_OPTIONS_PRICE} from './data.js';

const adForm = document.querySelector('.ad-form');
const selectedRoomOption = adForm.querySelector('#room_number');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const adFormPristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error',
});

adFormPristine.addValidator(adForm.querySelector('#title'),
  (value) => (
    value.length > 30 && value.length < 100
  ),
  'От 30 до 100 символов'
); // #TITLE


adFormPristine.addValidator(adForm.querySelector('#price'),
  (value) => (
    +value < 100000
  ),
  'Цена не должна превышать 100000'
); //PRICE max

const guestsOptionValidator = (value) => (
  GUESTS_OPTION[selectedRoomOption.value].includes(+value)
);

adFormPristine.addValidator(adForm.querySelector('#capacity'),
  guestsOptionValidator,
  'Количество гостей не соответствует количеству комнат'
); //GUESTS

const setMinPrice = () => {
  price.placeholder = TYPE_OPTIONS_PRICE[type.value][1];
};

adFormPristine.addValidator(adForm.querySelector('#price'),
  (value) => (
    +value >= TYPE_OPTIONS_PRICE[type.value][1]
  ),
  'Цена меньше минимальной'
); //PRICE min

setMinPrice();
type.addEventListener('change', () => {
  setMinPrice();
  adFormPristine.validate(price);
});

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
}); //TIME


adForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (adFormPristine.validate()) {
    adForm.submit();
  }
});

