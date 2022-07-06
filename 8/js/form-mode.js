const changePageMode = (activate) => {
  const form = document.querySelector('.ad-form');
  const formContent = form.querySelectorAll('fieldset');
  const mapFilter = document.querySelector('.map__filters');
  const mapFilterContent = mapFilter.querySelectorAll('select, fieldset');
  if (activate){ // ACTIVATE
    form.classList.remove('ad-form--disabled');
    formContent.forEach((element) => {
      element.removeAttribute('disabled');
    });
    mapFilter.classList.remove('map__filters--disabled');
    mapFilterContent.forEach((element) => {
      element.removeAttribute('disabled');
    });
  } else { // DEACTIVATE
    form.classList.add('ad-form--disabled');
    formContent.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
    mapFilter.classList.add('map__filters--disabled');
    mapFilterContent.forEach((element) => {
      element.setAttribute('disabled', 'disabled');
    });
  }
};

export {changePageMode};

