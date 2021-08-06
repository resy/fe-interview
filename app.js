(function () {
  const dropdown = document.getElementById('breed-selector');

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
