import {ALERT_SHOW_TIME, DEBOUNCE_DELAY, DEFAULT_FILTER_VALUE, DEFAULT_LAT_LNG} from './data.js';
import {mainMarker, mainMap} from './map/map-start-settings.js';
import {updateSlider} from './form/form-utils.js';

const adFormElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');
const addressElement = document.querySelector('#address');
const successMessageElement = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessageElement = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const imageAvatarElement = document.querySelector('.ad-form-header__preview>img');
const imagePrevElement = document.querySelector('.ad-form__photo');

const showAlert = (message, container) => {
  const alertMessage = document.createElement('div');
  alertMessage.style.zIndex = '799';
  alertMessage.style.position = 'absolute';
  alertMessage.style.left = '0';
  alertMessage.style.top = '0';
  alertMessage.style.right = '0';
  alertMessage.style.padding = '10px 3px';
  alertMessage.style.fontSize = '20px';
  alertMessage.style.textAlign = 'center';
  alertMessage.style.color = 'white';
  alertMessage.style.backgroundColor = 'rgba(255, 0, 0, .5)';
  alertMessage.textContent = message;
  container.append(alertMessage);
  setTimeout(() => {
    alertMessage.remove();
  }, ALERT_SHOW_TIME);
};

const setAddressToDefault = () => {
  addressElement.value = `${DEFAULT_LAT_LNG.lat}, ${DEFAULT_LAT_LNG.lng}`;
};

const resetForm = () => {
  adFormElement.reset();
  mapFilterElement.reset();
  mainMarker.setLatLng(DEFAULT_LAT_LNG);
  updateSlider();
  setAddressToDefault();
  mainMap.closePopup().setView(DEFAULT_LAT_LNG, 10);
  imageAvatarElement.src = 'img/muffin-grey.svg';
  if (imagePrevElement.firstChild) {
    imagePrevElement.firstChild.remove();
  }
};

const removeSuccessMessage = (e) => {
  if (e.key === 'Escape' || e.key === undefined) {
    document.body.removeChild(successMessageElement);
    successMessageElement.removeEventListener('click', removeSuccessMessage);
    document.removeEventListener('keydown', removeSuccessMessage);
  }
};
const addSuccessMessage = () => {
  document.body.appendChild(successMessageElement);
  successMessageElement.addEventListener('click', removeSuccessMessage);
  document.addEventListener('keydown', removeSuccessMessage);
};


const removeErrorMessage = (e) => {
  if (e.key === 'Escape' || e.key === undefined) {
    document.body.removeChild(errorMessageElement);
    errorMessageElement.removeEventListener('click', removeErrorMessage);
    document.removeEventListener('keydown', removeErrorMessage);
  }
};
const addErrorMessage = () => {
  document.body.appendChild(errorMessageElement);
  errorMessageElement.addEventListener('click', removeErrorMessage);
  document.addEventListener('keydown', removeErrorMessage);
};

const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY.default) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isValueDefault = (value) => (
  value === DEFAULT_FILTER_VALUE
);
export {isValueDefault, showAlert, resetForm, setAddressToDefault, addSuccessMessage, addErrorMessage, debounce};
