(function () {
  const dropdown = document.getElementById('breed-selector');

  let url = 'https://dog.ceo/api/breeds/list/all';

  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let breeds = data.message;
      debugger;
    })
    .catch(function (error) {
      console.log(error);
    });
})();
