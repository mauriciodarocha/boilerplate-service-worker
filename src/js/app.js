if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./service-worker.js', {
      scope: './'
    })
    .then(function (registration) {
      console.log("Service Worker Registered");
    })
    .catch(function (err) {
      console.log("Service Worker Failed to Register", err);
    });

}

// Function to perform HTTP request
var get = function (url) {
  return new Promise(function (resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var result = xhr.responseText;
          resolve(result);
        } else {
          reject(xhr);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();

  });
};


get('/lab/_tests/boilerplate-service-worker/src/images/antonio-banderas-blue-seduction-masculino-eau-de-toilette_1_801367.jpg')
  .then(function (response) {
    // There is an issue with the image being pulled from the API, so using a different one instead
    document.getElementsByClassName('targetImage')[0].src = "/lab/_tests/boilerplate-service-worker/src/images/antonio-banderas-blue-seduction-masculino-eau-de-toilette_1_801367.jpg";

  })
  .catch(function (err) {
    console.log("Error", err);
  });