import {setAddressToDefault} from '../utils.js';
import {MAX_PRICE, TYPE_OPTIONS_PRICE} from '../data.js';

const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const priceSlider = adForm.querySelector('.ad-form__slider');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

noUiSlider.create(priceSlider, {
  range: {
    min: TYPE_OPTIONS_PRICE.flat[1], //because flat selected by default
    max: MAX_PRICE
  },
  start: 0,
  step: 1,
});

priceSlider.noUiSlider.on('update', () => {
  price.value = parseFloat(String(priceSlider.noUiSlider.get()));
});
price.addEventListener('change', () => {
  priceSlider.noUiSlider.set(price.value);
});
const updateSlider = () => {
  priceSlider.noUiSlider.updateOptions({
    range: {
      min: +price.placeholder,
      max: MAX_PRICE
    },
    start: price.value
  });
}; // PRICE slider

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
}); // TIME

setAddressToDefault();

export {updateSlider};
