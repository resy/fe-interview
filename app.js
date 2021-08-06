const dropdown = document.getElementById('breed-selector');

dropdown.addEventListener('change', (event) => {
  const breed = event.target.value;
  const url = `https://dog.ceo/api/breed/${breed}/images/random`;
  const image = document.getElementById('dog-img');

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      image.src = data.message;
      image.alt = `Image of a ${breed}`;
    })
    .catch(function (error) {
      console.log(error);
    });
});

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
  let url = 'https://dog.ceo/api/breeds/list/all';

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      return populateDropdownList(data.message);
    })
    .catch(function (error) {
      console.log(error);
    });
})();
