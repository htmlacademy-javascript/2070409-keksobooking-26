import {FILE_TYPES} from '../data.js';

const inputAvatarElement = document.querySelector('#avatar');
const imageAvatarElement = document.querySelector('.ad-form-header__preview>img');
const inputPrevElement = document.querySelector('#images');
const imagePrevElement = document.querySelector('.ad-form__photo');

const isImageValid = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((ending) => (
    fileName.endsWith(ending)
  ));
};

inputAvatarElement.addEventListener('change', () => {
  const avatarFile = inputAvatarElement.files[0];
  if (isImageValid(avatarFile)) {
    imageAvatarElement.src = URL.createObjectURL(avatarFile);
  }
});

const prevImage = document.createElement('img');
prevImage.alt = 'Фото жилья';
prevImage.width = 70;
prevImage.height = 70;

inputPrevElement.addEventListener('change', () => {
  const prevFile = inputPrevElement.files[0];
  if (!imagePrevElement.firstChild) {
    imagePrevElement.appendChild(prevImage);
  }
  if (isImageValid(prevFile)) {
    prevImage.src = URL.createObjectURL(prevFile);
  }
});
