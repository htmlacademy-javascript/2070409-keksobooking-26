const getRandomInt = (min, max) => {
  if (max < min) {
    throw 'getRandomInt Error: max value less then min value';
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomNumber = (min, max, fractionDigits) => {
  if (max < min) {
    throw 'getRandomNumber Error: max value less then min value';
  }
  const randomNumber = Math.random() * (max - min) + min;
  return +randomNumber.toFixed(fractionDigits);
};

const getArrayElement = (array) => (
  getRandomInt(0, array.length - 1)
);

export {getArrayElement, getRandomNumber, getRandomInt};
