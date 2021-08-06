const dropdown = document.getElementById('breed-selector');
const button = document.getElementById('moar-dogs');
let breed = '';
let element;
let imgUrl = '';

let getImage = (arg) => {
  const image = document.getElementById('dog-img');

  if (arg.target) {
    imgUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  } else {
    try {
      let url = new URL(arg);
      image.src = arg;
      image.alt = `Image of a dog`;
      return;
    } catch (_) {
      imgUrl = `https://dog.ceo/api/breed/${arg}/images/random`;
      button.removeAttribute('disabled');
      breed = arg;
      return;
    }
  }
  debugger;
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then(function (data) {
      image.src = data.message;
      image.alt = `Image of a ${breed}`;
      return;
    })
    .catch(function (error) {
      console.log(error);
    });
};

let populateDropdownList = (breeds) => {
  const selectEl = document.getElementById('breed-selector');

  for (const key in breeds) {
    const optionEl = document.createElement('option');
    optionEl.value = key;
    optionEl.text = key;
    selectEl.add(optionEl);
  }
  return;
};

(function () {
  let listUrl = 'https://dog.ceo/api/breeds/list/all';
  let randomImgUrl = 'https://dog.ceo/api/breeds/image/random';

  fetch(randomImgUrl)
    .then((resp) => resp.json())
    .then(function (data) {
      return getImage(data.message);
    })
    .catch(function (error) {
      console.log(error);
    });

  fetch(listUrl)
    .then((resp) => resp.json())
    .then(function (data) {
      return populateDropdownList(data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
})();
