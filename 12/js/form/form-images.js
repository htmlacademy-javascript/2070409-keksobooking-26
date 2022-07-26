import {FILE_TYPES} from '../data.js';

const inputAvatar = document.querySelector('#avatar');
const imageAvatar = document.querySelector('.ad-form-header__preview>img');
const inputPrev = document.querySelector('#images');
const imagePrev = document.querySelector('.ad-form__photo');

const isImageValid = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((ending) => (
    fileName.endsWith(ending)
  ));
};

// const makePrevImage = (file) => {
//   const prevImage = document.createElement('img');
//   prevImage.src = URL.createObjectURL(file);
//   prevImage.alt = 'Фото жилья';
//   prevImage.width = 40;
//   prevImage.height = 44;
//   prevImage.style.margin = '15px';
//   imagePrev.appendChild(prevImage);
// };

inputAvatar.addEventListener('change', () => {
  const avatarFile = inputAvatar.files[0];
  if (isImageValid(avatarFile)) {
    imageAvatar.src = URL.createObjectURL(avatarFile);
  }
});

const prevImage = document.createElement('img');
prevImage.alt = 'Фото жилья';
prevImage.width = 40;
prevImage.height = 44;
prevImage.style.margin = '15px';

inputPrev.addEventListener('change', () => {
  const prevFile = inputPrev.files[0];
  // for (const file of prevFiles) {
  //   if (isImageValid(file)) {
  //     makePrevImage(file);
  //   }
  // }
  if (!imagePrev.firstChild) {
    imagePrev.appendChild(prevImage);
  }
  if (isImageValid(prevFile)) {
    prevImage.src = URL.createObjectURL(prevFile);
  }
});
