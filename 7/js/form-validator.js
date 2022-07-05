import {GUESTS_OPTION} from './data.js';

const adForm = document.querySelector('.ad-form');
const selectedRoomOption = adForm.querySelector('#room_number');

const adFormPristine = new Pristine(adForm, {
  classTo: 'ad-form__element', // Элемент, на который будут добавляться классы
  //errorClass: 'form__item--invalid', // Класс, обозначающий невалидное поле
  //successClass: 'form__item--valid', // Класс, обозначающий валидное поле
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

// adFormPristine.addValidator(adForm.querySelector('#price'),
//   (value) => (
//     NUMBER_FIELD_RE.test(value)
//   ),
//   'Поле должно содержать только цифры'
// ); //PRICE number

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

adForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (adFormPristine.validate()) {
    adForm.submit();
  }
});

