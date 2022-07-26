const changePageMode = (activate) => {
  const form = document.querySelector('.ad-form');
  const formContent = form.querySelectorAll('fieldset');
  const priceSlider = document.querySelector('.ad-form__slider');

  if (activate) { // ACTIVATE
    form.classList.remove('ad-form--disabled');
    formContent.forEach((element) => {
      element.removeAttribute('disabled');
    });
    priceSlider.removeAttribute('disabled');
  } else { // DEACTIVATE
    form.classList.add('ad-form--disabled');
    formContent.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
    priceSlider.setAttribute('disabled', 'disabled');
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

