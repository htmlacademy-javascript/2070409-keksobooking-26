import {DEFAULT_LAT_LNG} from '../data.js';

const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const priceSlider = adForm.querySelector('.ad-form__slider');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const address = adForm.querySelector('#address');

noUiSlider.create(priceSlider, {
  range: {
    min: 1000, //because flat selected by default and min price of the flat is 1000
    max: 100000
  },
  start: 0,
  step: 1,
});

priceSlider.noUiSlider.on('update', () => {
  price.value = parseFloat(String(priceSlider.noUiSlider.get()));
});
price.addEventListener('change', () => {
  //
});
const updateSlider = () => {
  priceSlider.noUiSlider.updateOptions({
    range: {
      min: +price.placeholder,
      max: 100000
    },
    start: +price.placeholder
  });
}; // PRICE slider

timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});
timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
}); // TIME

address.value = `${DEFAULT_LAT_LNG.lat.toFixed(5)}, ${DEFAULT_LAT_LNG.lng.toFixed(5)}`;


export {updateSlider};
