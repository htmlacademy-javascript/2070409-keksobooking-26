import {setAddressToDefault} from '../utils.js';
import {PRICE_OPTIONS, TYPE_OPTIONS_PRICE} from '../data.js';

const adFormElement = document.querySelector('.ad-form');
const priceElement = adFormElement.querySelector('#price');
const priceSliderElement = adFormElement.querySelector('.ad-form__slider');
const timeInElement = adFormElement.querySelector('#timein');
const timeOutElement = adFormElement.querySelector('#timeout');

noUiSlider.create(priceSliderElement, {
  range: {
    min: TYPE_OPTIONS_PRICE.flat[1], //because flat selected by default
    max: PRICE_OPTIONS.max
  },
  start: 0,
  step: 1,
});

priceSliderElement.noUiSlider.on('update', () => {
  priceElement.value = parseFloat(String(priceSliderElement.noUiSlider.get()));
});
priceElement.addEventListener('change', () => {
  priceSliderElement.noUiSlider.set(priceElement.value);
});
const updateSlider = () => {
  priceSliderElement.noUiSlider.updateOptions({
    range: {
      min: +priceElement.placeholder,
      max: PRICE_OPTIONS.max
    },
    start: priceElement.value
  });
}; // PRICE slider

timeInElement.addEventListener('change', () => {
  timeOutElement.value = timeInElement.value;
});
timeOutElement.addEventListener('change', () => {
  timeInElement.value = timeOutElement.value;
}); // TIME

setAddressToDefault();

export {updateSlider};
