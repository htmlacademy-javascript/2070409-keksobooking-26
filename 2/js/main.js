const getRandomInt = function (min, max) {
  if (max < min) {
    throw 'getRandomInt Error: max value less then min value';
  }
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomNumber = function (min, max, fractionDigits) {
  if (max < min) {
    throw 'getRandomNumber Error: max value less then min value';
  }
  const randomNumber = Math.random() * (max - min) + min;
  return randomNumber.toFixed(fractionDigits);
};


getRandomInt(0.1, 15); //DELETE
getRandomNumber(1, 12, 3); //DELETE

