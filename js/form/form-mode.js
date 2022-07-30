const changePageMode = (activate) => {
  const formElement = document.querySelector('.ad-form');
  const formContentElement = formElement.querySelectorAll('fieldset');
  const priceSliderElement = document.querySelector('.ad-form__slider');

  if (activate) { // ACTIVATE
    formElement.classList.remove('ad-form--disabled');
    formContentElement.forEach((element) => {
      element.removeAttribute('disabled');
    });
    priceSliderElement.removeAttribute('disabled');
  } else { // DEACTIVATE
    formElement.classList.add('ad-form--disabled');
    formContentElement.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
    priceSliderElement.setAttribute('disabled', 'disabled');
  }
};

const changeMapFilterMode = (activate) => {
  const mapFilter = document.querySelector('.map__filters');
  const mapFilterContent = mapFilter.querySelectorAll('select, fieldset');
  if (activate) { // ACTIVATE
    mapFilter.classList.remove('map__filters--disabled');
    mapFilterContent.forEach((element) => {
      element.removeAttribute('disabled');
    });
  } else { // DEACTIVATE
    mapFilter.classList.add('map__filters--disabled');
    mapFilterContent.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
  }
};

export {changePageMode, changeMapFilterMode};

