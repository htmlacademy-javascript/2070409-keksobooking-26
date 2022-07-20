import {ALERT_SHOW_TIME, DEFAULT_LAT_LNG} from './data.js';
import {mainMarker, mainMap} from './map/map-start-settings.js';
import {updateSlider} from './form/form-utils.js';

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const address = document.querySelector('#address');
const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);

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

const addressToDefault = () => {
  address.value = `${DEFAULT_LAT_LNG.lat}, ${DEFAULT_LAT_LNG.lng}`;
};

const resetForm = () => {
  adForm.reset();
  mapFilter.reset();
  mainMarker.setLatLng(DEFAULT_LAT_LNG);
  updateSlider();
  addressToDefault();
  mainMap.closePopup().setView(DEFAULT_LAT_LNG, 10);
};

const removeSuccessMessage = (e) => {
  if (e.key === 'Escape' || e.key === undefined) {
    document.body.removeChild(successMessage);
    successMessage.removeEventListener('click', removeSuccessMessage);
    document.removeEventListener('keydown', removeSuccessMessage);
  }
};
const addSuccessMessage = () => {
  document.body.appendChild(successMessage);
  successMessage.addEventListener('click', removeSuccessMessage);
  document.addEventListener('keydown', removeSuccessMessage);
};


const removeErrorMessage = (e) => {
  if (e.key === 'Escape' || e.key === undefined) {
    document.body.removeChild(errorMessage);
    errorMessage.removeEventListener('click', removeErrorMessage);
    document.removeEventListener('keydown', removeErrorMessage);
  }
};
const addErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorMessage.addEventListener('click', removeErrorMessage);
  document.addEventListener('keydown', removeErrorMessage);
};
export {showAlert, resetForm, addressToDefault, addSuccessMessage, addErrorMessage};
