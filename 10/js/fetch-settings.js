const getData = (onSuccess, onFail) => {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((err) => onFail(err));
};

const sendData = (bodyData, onSuccess, onFail) => {
  fetch('https://26.javascript.pages.acdemy/keksobooking',{
    method: 'POST',
    body: bodyData
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch((err) => {
      onFail(err);
    });
};

export {getData, sendData};
